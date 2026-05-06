const express = require("express");
const dotenv = require("dotenv");
const db = require("./db");

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3000);
const configuredTableName = process.env.TABLE_NAME || "student_exam_records";

app.use(express.json());
app.disable("x-powered-by");

const SAFE_TABLE_NAME_PATTERN = /^[A-Za-z0-9_]+$/;
const MAX_LIMIT = 500;
const DEFAULT_LIMIT = 100;

if (!SAFE_TABLE_NAME_PATTERN.test(configuredTableName)) {
  throw new Error("TABLE_NAME contains invalid characters");
}

const FIELD_MAP = {
  rollNo: "roll_no",
  examYear: "exam_year",
  examMarks: "exam_marks",
  examType: "exam_type",
  paperName: "paper_name",
  paperCode: "paper_code",
  marks: "marks",
  outOf: "outof",
  examinerId: "examiner_id",
  dateOfSubmit: "date_of_submit",
  examinerIp: "examiner_ip",
  examinerName: "examiner_name",
  cycle: "cycle",
  studentDegree: "student_degree",
  studentSubject: "student_subject"
};

const SELECT_FIELDS = `
  roll_no AS rollNo,
  exam_year AS examYear,
  exam_marks AS examMarks,
  exam_type AS examType,
  paper_name AS paperName,
  paper_code AS paperCode,
  marks AS marks,
  outof AS outOf,
  examiner_id AS examinerId,
  date_of_submit AS dateOfSubmit,
  examiner_ip AS examinerIp,
  examiner_name AS examinerName,
  cycle AS cycle,
  student_degree AS studentDegree,
  student_subject AS studentSubject
`;

function isValidDate(value) {
  if (typeof value !== "string") {
    return false;
  }

  return !Number.isNaN(Date.parse(value));
}

function normalizeString(value, maxLength = 255) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLength) {
    return null;
  }

  return trimmed;
}

function parsePositiveInteger(value, fallback, maximum) {
  const parsed = Number.parseInt(value, 10);

  if (!Number.isInteger(parsed) || parsed < 0) {
    return fallback;
  }

  return Math.min(parsed, maximum);
}

function validateQuery(query) {
  const errors = [];

  if (query.examYear) {
    const year = Number.parseInt(query.examYear, 10);
    if (!Number.isInteger(year) || year < 1900 || year > 3000) {
      errors.push("examYear must be a valid year");
    }
  }

  if (query.dateFrom && !isValidDate(query.dateFrom)) {
    errors.push("dateFrom must be a valid date");
  }

  if (query.dateTo && !isValidDate(query.dateTo)) {
    errors.push("dateTo must be a valid date");
  }

  if (query.dateFrom && query.dateTo) {
    const from = new Date(query.dateFrom);
    const to = new Date(query.dateTo);
    if (from > to) {
      errors.push("dateFrom cannot be greater than dateTo");
    }
  }

  if (query.limit && (!Number.isInteger(Number(query.limit)) || Number(query.limit) < 1)) {
    errors.push("limit must be a positive integer");
  }

  if (query.offset && (!Number.isInteger(Number(query.offset)) || Number(query.offset) < 0)) {
    errors.push("offset must be zero or a positive integer");
  }

  return errors;
}

function buildFilters(query) {
  const where = [];
  const values = [];
  const queryFilters = [
    "rollNo",
    "examYear",
    "examType",
    "paperCode",
    "paperName",
    "examinerId",
    "examinerIp",
    "examinerName",
    "cycle",
    "studentDegree",
    "studentSubject"
  ];

  for (const queryKey of queryFilters) {
    const value = normalizeString(query[queryKey]);
    if (value) {
      const column = FIELD_MAP[queryKey];
      where.push(`${column} = ?`);
      values.push(value);
    }
  }

  if (query.dateFrom) {
    where.push("date_of_submit >= ?");
    values.push(query.dateFrom);
  }

  if (query.dateTo) {
    where.push("date_of_submit <= ?");
    values.push(query.dateTo);
  }

  return { where, values };
}

function transformRecord(row) {
  return {
    rollNo: row.rollNo,
    examYear: row.examYear,
    examMarks: row.examMarks,
    examType: row.examType,
    paper: {
      name: row.paperName,
      code: row.paperCode
    },
    marks: {
      obtained: row.marks,
      outOf: row.outOf
    },
    examiner: {
      id: row.examinerId,
      ip: row.examinerIp,
      name: row.examinerName
    },
    dateOfSubmit: row.dateOfSubmit,
    cycle: row.cycle,
    student: {
      degree: row.studentDegree,
      subject: row.studentSubject
    }
  };
}

app.get("/health", async (req, res) => {
  try {
    await db.query("SELECT 1");
    res.json({ ok: true, message: "API and database connection are healthy" });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Database connection failed",
      error: error.message
    });
  }
});

app.get("/api/exam-records", async (req, res) => {
  try {
    const validationErrors = validateQuery(req.query);
    if (validationErrors.length) {
      return res.status(400).json({
        ok: false,
        message: "Invalid query parameters",
        errors: validationErrors
      });
    }

    const { where, values } = buildFilters(req.query);
    const limit = parsePositiveInteger(req.query.limit, DEFAULT_LIMIT, MAX_LIMIT);
    const offset = parsePositiveInteger(req.query.offset, 0, Number.MAX_SAFE_INTEGER);

    const baseQuery = `SELECT ${SELECT_FIELDS} FROM ${configuredTableName}`;

    const whereClause = where.length ? ` WHERE ${where.join(" AND ")}` : "";
    const finalQuery = `${baseQuery}${whereClause} ORDER BY date_of_submit DESC LIMIT ? OFFSET ?`;
    const finalValues = [...values, limit, offset];

    const [rows] = await db.query(finalQuery, finalValues);
    const data = rows.map(transformRecord);

    return res.json({
      ok: true,
      count: data.length,
      limit,
      offset,
      data
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Failed to fetch exam records",
      error: error.message
    });
  }
});

app.get("/api/exam-records/:rollNo", async (req, res) => {
  try {
    const rollNo = normalizeString(req.params.rollNo, 50);
    if (!rollNo) {
      return res.status(400).json({
        ok: false,
        message: "rollNo is required and must be a valid string"
      });
    }

    const query = `
      SELECT ${SELECT_FIELDS}
      FROM ${configuredTableName}
      WHERE roll_no = ?
      ORDER BY date_of_submit DESC
    `;

    const [rows] = await db.query(query, [rollNo]);

    if (!rows.length) {
      return res.status(404).json({
        ok: false,
        message: `No records found for roll number ${rollNo}`
      });
    }

    return res.json({
      ok: true,
      count: rows.length,
      data: rows.map(transformRecord)
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Failed to fetch records by roll number",
      error: error.message
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    ok: false,
    message: "Route not found"
  });
});

app.listen(port, () => {
  console.log(`University exam API running on port ${port}`);
});
