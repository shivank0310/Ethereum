# University Exam API

This API reads university exam data from a SQL table and returns a cleaner and safer response structure for the following fields:

- Roll no
- Exam year
- Exam marks
- Exam type
- Paper name
- Paper code
- Marks
- Outof
- Examiner Id
- Date of submit
- Examiner Ip
- Examiner name
- Cycle
- Student Degree
- Student subject

## 1. Install

```bash
npm install
```

## 2. Configure

Create a `.env` file from `.env.example` and update the database values.

## 3. Run

```bash
npm start
```

## 4. API endpoints

### Health check

```http
GET /health
```

### Get all exam records

```http
GET /api/exam-records
```

Optional query params:

- `rollNo`
- `examYear`
- `examType`
- `paperCode`
- `paperName`
- `examinerId`
- `examinerIp`
- `examinerName`
- `cycle`
- `studentDegree`
- `studentSubject`
- `dateFrom`
- `dateTo`
- `limit`
- `offset`

Example:

```http
GET /api/exam-records?rollNo=101&examYear=2025&examType=semester
```

Response shape:

```json
{
  "ok": true,
  "count": 1,
  "limit": 100,
  "offset": 0,
  "data": [
    {
      "rollNo": "101",
      "examYear": 2025,
      "examMarks": 450,
      "examType": "semester",
      "paper": {
        "name": "Database Systems",
        "code": "CS401"
      },
      "marks": {
        "obtained": 72,
        "outOf": 100
      },
      "examiner": {
        "id": "EX123",
        "ip": "10.10.10.2",
        "name": "Dr. Sharma"
      },
      "dateOfSubmit": "2025-05-15T10:00:00.000Z",
      "cycle": "Regular",
      "student": {
        "degree": "BSc",
        "subject": "Computer Science"
      }
    }
  ]
}
```

### Get records by roll number

```http
GET /api/exam-records/:rollNo
```

## 5. Suggested SQL table

Use a table like this:

```sql
CREATE TABLE student_exam_records (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  roll_no VARCHAR(50) NOT NULL,
  exam_year INT NOT NULL,
  exam_marks DECIMAL(10,2),
  exam_type VARCHAR(100),
  paper_name VARCHAR(255),
  paper_code VARCHAR(100),
  marks DECIMAL(10,2),
  outof DECIMAL(10,2),
  examiner_id VARCHAR(100),
  date_of_submit DATETIME,
  examiner_ip VARCHAR(100),
  examiner_name VARCHAR(255),
  cycle VARCHAR(50),
  student_degree VARCHAR(255),
  student_subject VARCHAR(255)
);
```

## 6. Security improvements included

- Parameterized SQL values for all filters
- Validated and sanitized query parameters
- Table name restricted to safe characters only
- Request limits capped to prevent oversized reads
- Cleaner nested response fields for paper, marks, examiner, and student data
