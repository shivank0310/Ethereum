# Go Language — Struct Tags (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What are Struct Tags?
3. Why Struct Tags are Important
4. Real-World Analogy
5. Basic Struct Recap
6. Syntax of Struct Tags
7. Understanding Tag Format
8. JSON Tags (Most Common)
9. Omitempty Tag
10. Ignoring Fields with Tags
11. Multiple Tags in One Field
12. XML Tags
13. Database/ORM Tags
14. Validation Tags
15. Reflection and Struct Tags
16. Custom Tags
17. Common Mistakes
18. Best Practices
19. Interactive Exercises
20. Final Summary

---

# 1. Introduction

Struct tags are one of the most powerful and widely used features in Go.

They allow you to attach metadata (extra information) to struct fields.

Struct tags are heavily used in:

* JSON APIs
* Databases
* Validation systems
* Configuration handling
* Serialization libraries

---

# 2. What are Struct Tags?

## Definition (Simple)

Struct tags are special strings written next to struct fields that provide additional instructions or metadata.

---

## Formal Definition

> Struct tags are optional string literals associated with struct fields that contain metadata interpreted by reflection-based packages.

---

# 3. Why Struct Tags are Important

* Control JSON field names
* Ignore fields during serialization
* Add validation rules
* Map database columns
* Customize encoding/decoding

---

# 4. Real-World Analogy

Think of a struct field like a parcel.

The struct tag is like a:

👉 Shipping label

It tells systems:

* What name to use
* Whether to ignore it
* How to process it

---

# 5. Basic Struct Recap

## Example Struct

```go
type User struct {
    Name string
    Age  int
}
```

---

# 6. Syntax of Struct Tags

## General Syntax

```go
FieldName DataType `tagName:"value"`
```

---

## Example

```go
Name string `json:"name"`
```

---

# 7. Understanding Tag Format

## Components

| Part | Meaning   |
| ---- | --------- |
| json | Tag key   |
| name | Tag value |

---

## Important Rules

* Tags use backticks (`)
* Tag values use quotes
* Tags are plain strings internally

---

# 8. JSON Tags (Most Common)

## Example

```go
type User struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
}
```

---

## JSON Output

```json
{
  "name": "Shiv",
  "age": 25
}
```

---

## Without Tags

```json
{
  "Name": "Shiv",
  "Age": 25
}
```

---

# 9. Omitempty Tag

## Purpose

Skip empty fields during serialization.

---

## Example

```go
Email string `json:"email,omitempty"`
```

---

## Behavior

If Email is empty:

```json
{
  "name": "Shiv"
}
```

---

# 10. Ignoring Fields with Tags

## Syntax

```go
Password string `json:"-"`
```

---

## Meaning

Field excluded from JSON.

---

## Important Use Case

* Hide passwords
* Hide internal data

---

# 11. Multiple Tags in One Field

## Example

```go
Name string `json:"name" xml:"name"`
```

---

## Explanation

Same field supports multiple systems.

---

# 12. XML Tags

## Example

```go
Name string `xml:"name"`
```

---

# 13. Database/ORM Tags

Used in libraries like GORM.

---

## Example

```go
ID int `db:"id"`
```

---

## GORM Example

```go
Name string `gorm:"column:name"`
```

---

# 14. Validation Tags

Used in validation libraries.

---

## Example

```go
Email string `validate:"required,email"`
```

---

## Meaning

* Required field
* Must be valid email

---

# 15. Reflection and Struct Tags

Struct tags are accessed using:

👉 Reflection

---

## Example

```go
field.Tag.Get("json")
```

---

# 16. Custom Tags

You can create your own tags.

---

## Example

```go
Name string `custom:"important"`
```

---

## Usage

Read using reflection.

---

# 17. Common Mistakes

* Using wrong quotes
* Forgetting backticks
* Misspelling tag keys
* Invalid JSON field names

---

# 18. Best Practices

* Use lowercase JSON names
* Use omitempty carefully
* Never expose sensitive data
* Keep tags clean and consistent

---

# 19. Interactive Exercises

1. Add JSON tags to User struct
2. Use omitempty
3. Hide password field
4. Add validation tags
5. Create custom tag

---

# 20. Final Summary

| Concept    | Meaning              |
| ---------- | -------------------- |
| Struct tag | Metadata for fields  |
| json tag   | Controls JSON output |
| omitempty  | Skip empty fields    |
| -          | Ignore field         |
| Reflection | Reads tags           |

---

# Conclusion

Struct tags are essential for:

* APIs
* JSON serialization
* Database mapping
* Validation systems
* Production Go applications

Mastering struct tags is critical for backend and web development in Go.

---

End of Documentation
