# Go Language — Nested Maps (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What is a Nested Map?
3. Why Use Nested Maps?
4. Basic Syntax
5. Step-by-Step Creation
6. Accessing Nested Values
7. Updating Nested Values
8. Adding Data Safely (Important)
9. Deleting Nested Keys
10. Iterating Nested Maps
11. Real-World Examples
12. Common Mistakes
13. Best Practices
14. Interactive Exercises
15. Final Summary

---

# 1. Introduction

Nested maps are an advanced concept in Go used to represent **complex structured data**.

---

# 2. What is a Nested Map?

## Definition (Simple)

A nested map is a map where the value itself is another map.

---

## Layman Explanation

Think of it like:

```text
User → Details
       → age
       → city
```

---

## Formal Definition

> A nested map is a map whose values are themselves maps, enabling multi-level key-value relationships.

---

# 3. Why Use Nested Maps?

* Represent hierarchical data
* Handle JSON-like structures
* Store grouped information

---

## Example Use Cases

* User profiles
* Configuration systems
* API responses

---

# 4. Basic Syntax

```go
map[keyType]map[keyType]valueType
```

---

## Example

```go
var users map[string]map[string]string
```

---

# 5. Step-by-Step Creation

## Method 1: Using make()

```go
users := make(map[string]map[string]string)

users["user1"] = make(map[string]string)
users["user1"]["name"] = "Shiv"
users["user1"]["city"] = "Delhi"
```

---

## Method 2: Using Literal

```go
users := map[string]map[string]string{
    "user1": {
        "name": "Shiv",
        "city": "Delhi",
    },
}
```

---

# 6. Accessing Nested Values

## Example

```go
fmt.Println(users["user1"]["name"])
```

---

## Important

If inner map does not exist → panic

---

# 7. Updating Nested Values

## Example

```go
users["user1"]["city"] = "Mumbai"
```

---

# 8. Adding Data Safely (Important)

## Problem

```go
users["user2"]["name"] = "Ram" // panic
```

---

## Solution

```go
if users["user2"] == nil {
    users["user2"] = make(map[string]string)
}

users["user2"]["name"] = "Ram"
```

---

# 9. Deleting Nested Keys

## Example

```go
delete(users["user1"], "city")
```

---

# 10. Iterating Nested Maps

## Example

```go
for user, details := range users {
    fmt.Println("User:", user)

    for key, value := range details {
        fmt.Println(key, value)
    }
}
```

---

# 11. Real-World Examples

## Example: Student Database

```go
students := map[string]map[string]int{
    "s1": {"math": 90, "science": 80},
}
```

---

## Example: Config Data

```go
config := map[string]map[string]string{
    "db": {"host": "localhost", "port": "5432"},
}
```

---

# 12. Common Mistakes

* Forgetting to initialize inner map
* Accessing nil map
* Not checking existence

---

# 13. Best Practices

* Always initialize inner maps
* Use helper functions for safety
* Validate keys before access

---

# 14. Interactive Exercises

1. Create nested map for users
2. Add 2 users with details
3. Update one field
4. Iterate and print all data

---

# 15. Final Summary

| Concept    | Meaning         |
| ---------- | --------------- |
| Nested map | Map inside map  |
| Inner map  | Value map       |
| Access     | map[key1][key2] |

---

# Conclusion

Nested maps are powerful for handling structured data.

They are widely used in:

* APIs
* JSON handling
* Backend systems

Mastering them helps you work with complex real-world data.

---

End of Documentation
