# Go Language — Nested Structs (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What are Nested Structs?
3. Why Nested Structs are Important
4. Real-World Analogy
5. Basic Struct Recap
6. Creating Nested Structs
7. Accessing Nested Fields
8. Modifying Nested Fields
9. Initializing Nested Structs
10. Anonymous Nested Structs
11. Nested Structs with Pointers
12. Passing Nested Structs to Functions
13. Memory Behavior of Nested Structs
14. Nested Structs in APIs and JSON
15. Advantages and Disadvantages
16. Common Mistakes
17. Best Practices
18. Interactive Exercises
19. Final Summary

---

# 1. Introduction

Real-world data is often hierarchical.

For example:

* A User has an Address
* A Company has Employees
* A Blockchain Transaction has Metadata

To model such relationships in Go, we use nested structs.

---

# 2. What are Nested Structs?

## Definition (Simple)

A nested struct is a struct that contains another struct as one of its fields.

---

## Formal Definition

> A nested struct is a composite structure where one struct type is embedded as a field inside another struct.

---

# 3. Why Nested Structs are Important

* Organize complex data
* Represent real-world relationships
* Improve readability
* Support APIs and JSON structures

---

# 4. Real-World Analogy

Think of a:

👉 Student record

A student has:

* Name
* Roll number
* Address

Address itself contains:

* City
* State
* Pin code

So Address becomes a separate struct.

---

# 5. Basic Struct Recap

## Address Struct

```go
type Address struct {
    City  string
    State string
}
```

---

## User Struct

```go
type User struct {
    Name    string
    Address Address
}
```

---

# 6. Creating Nested Structs

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

## Create Value

```go
u := User{
    Name: "Shiv",
    Address: Address{
        City: "Delhi",
    },
}
```

---

# 7. Accessing Nested Fields

## Syntax

```go
variable.field.subfield
```

---

## Example

```go
fmt.Println(u.Address.City)
```

---

# 8. Modifying Nested Fields

## Example

```go
u.Address.City = "Mumbai"
```

---

# 9. Initializing Nested Structs

## Full Initialization

```go
u := User{
    Name: "Shiv",
    Address: Address{
        City:  "Delhi",
        State: "Delhi",
    },
}
```

---

## Partial Initialization

```go
u := User{
    Name: "Shiv",
}
```

---

# 10. Anonymous Nested Structs

## Example

```go
type User struct {
    Name string
    Address struct {
        City string
    }
}
```

---

## Initialization

```go
u := User{Name: "Shiv"}
u.Address.City = "Delhi"
```

---

# 11. Nested Structs with Pointers

## Example

```go
type User struct {
    Name    string
    Address *Address
}
```

---

## Initialization

```go
u := User{
    Name: "Shiv",
    Address: &Address{
        City: "Delhi",
    },
}
```

---

## Benefits

* Avoid copying
* Optional nested data

---

# 12. Passing Nested Structs to Functions

## Example

```go
func printCity(u User) {
    fmt.Println(u.Address.City)
}
```

---

## Pointer Version

```go
func updateCity(u *User) {
    u.Address.City = "Mumbai"
}
```

---

# 13. Memory Behavior of Nested Structs

## Value Nested Struct

* Entire nested data copied

---

## Pointer Nested Struct

* Address shared
* More memory efficient

---

# 14. Nested Structs in APIs and JSON

Very common in:

* REST APIs
* Blockchain payloads
* Database models

---

## Example JSON Structure

```json
{
  "name": "Shiv",
  "address": {
    "city": "Delhi"
  }
}
```

---

# 15. Advantages and Disadvantages

## Advantages

* Better organization
* Cleaner code
* Represents real-world relationships

---

## Disadvantages

* Deep nesting can become complex
* Large copies if not using pointers

---

# 16. Common Mistakes

* Forgetting nested initialization
* Dereferencing nil nested pointers
* Deep unnecessary nesting

---

# 17. Best Practices

* Use separate structs for reusable data
* Use pointers for large nested objects
* Avoid excessive nesting depth

---

# 18. Interactive Exercises

1. Create Employee with Address struct
2. Add nested Company struct
3. Modify nested fields
4. Use pointer nested structs
5. Create JSON-like nested structure

---

# 19. Final Summary

| Concept         | Meaning               |
| --------------- | --------------------- |
| Nested struct   | Struct inside struct  |
| Access          | field.subfield        |
| Pointer nesting | Shared memory         |
| Usage           | Complex data modeling |

---

# Conclusion

Nested structs are essential for:

* Modeling real-world data
* APIs and backend systems
* Complex applications
* Clean architecture design

Mastering nested structs helps you build scalable Go applications.

---

End of Documentation
