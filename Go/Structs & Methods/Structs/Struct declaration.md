# Go Language — Struct Declaration (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What is a Struct?
3. Why Structs are Important
4. Real-World Analogy
5. Basic Struct Declaration
6. Understanding Struct Fields
7. Creating Struct Variables
8. Accessing Struct Fields
9. Modifying Struct Fields
10. Struct Initialization Methods
11. Anonymous Structs
12. Nested Structs
13. Struct Comparison
14. Zero Values in Structs
15. Passing Structs to Functions
16. Struct Memory Behavior
17. Common Mistakes
18. Best Practices
19. Interactive Exercises
20. Final Summary

---

# 1. Introduction

Structs are one of the most important features in Go.

They help organize related data into a single unit.

Structs are heavily used in:

* APIs
* Backend services
* Databases
* Blockchain applications
* Web development

---

# 2. What is a Struct?

## Definition (Simple)

A struct is a custom data type that groups multiple related values together.

---

## Formal Definition

> A struct is a composite data type in Go that allows multiple fields of different types to be grouped under a single name.

---

# 3. Why Structs are Important

Without structs:

```go
var name string
var age int
var city string
```

This becomes difficult to manage.

---

## With Struct

```go
type User struct {
    Name string
    Age  int
    City string
}
```

Now all related data stays together.

---

# 4. Real-World Analogy

Think of a struct like a:

👉 Student admission form

It contains:

* Name
* Age
* Address
* Roll number

All fields belong to one student.

---

# 5. Basic Struct Declaration

## Syntax

```go
type StructName struct {
    FieldName DataType
}
```

---

## Example

```go
type User struct {
    Name string
    Age  int
}
```

---

# 6. Understanding Struct Fields

## Field Components

| Part | Meaning          |
| ---- | ---------------- |
| Name | Field identifier |
| Type | Data type        |

---

## Example

```go
Name string
```

* `Name` → field name
* `string` → type

---

# 7. Creating Struct Variables

## Method 1: Zero Value Initialization

```go
var u User
```

---

## Output Values

```text
Name = ""
Age = 0
```

---

## Method 2: Using Struct Literal

```go
u := User{
    Name: "Shiv",
    Age:  25,
}
```

---

## Method 3: Positional Initialization

```go
u := User{"Shiv", 25}
```

---

## Important

Named fields are safer and recommended.

---

# 8. Accessing Struct Fields

## Syntax

```go
variable.field
```

---

## Example

```go
fmt.Println(u.Name)
fmt.Println(u.Age)
```

---

# 9. Modifying Struct Fields

## Example

```go
u.Name = "Ram"
```

---

# 10. Struct Initialization Methods

## Empty Struct

```go
u := User{}
```

---

## Partial Initialization

```go
u := User{Name: "Shiv"}
```

---

# 11. Anonymous Structs

## Definition

Struct without a named type.

---

## Example

```go
person := struct {
    Name string
    Age  int
}{
    Name: "Shiv",
    Age:  25,
}
```

---

# 12. Nested Structs

## Example

```go
type Address struct {
    City string
}

type User struct {
    Name    string
    Address Address
}
```

---

# 13. Struct Comparison

Structs can be compared if all fields are comparable.

---

## Example

```go
u1 := User{"Shiv", 25}
u2 := User{"Shiv", 25}

fmt.Println(u1 == u2)
```

---

# 14. Zero Values in Structs

Every field gets default zero value.

| Type   | Zero Value |
| ------ | ---------- |
| int    | 0          |
| string | ""         |
| bool   | false      |

---

# 15. Passing Structs to Functions

## By Value

```go
func update(u User)
```

---

## By Pointer

```go
func update(u *User)
```

---

# 16. Struct Memory Behavior

* Struct values are copied
* Large structs can be expensive
* Pointers improve efficiency

---

# 17. Common Mistakes

* Using positional initialization incorrectly
* Forgetting zero values
* Copying large structs unnecessarily

---

# 18. Best Practices

* Use named field initialization
* Use pointers for large structs
* Keep structs focused and meaningful

---

# 19. Interactive Exercises

1. Create Student struct
2. Add fields and initialize values
3. Modify struct fields
4. Create nested struct
5. Compare two structs

---

# 20. Final Summary

| Concept        | Meaning                 |
| -------------- | ----------------------- |
| Struct         | Group of related fields |
| Field          | Individual data item    |
| Initialization | Creating struct value   |
| Nested struct  | Struct inside struct    |

---

# Conclusion

Structs are the foundation of:

* Object-like design in Go
* Data modeling
* Real-world applications

Mastering structs is essential for professional Go development.

---

End of Documentation
