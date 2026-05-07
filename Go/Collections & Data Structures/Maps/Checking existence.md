# Go Language — Checking Key Existence in Maps (In-Depth Documentation)

---

# Table of Contents

1. Introduction
2. The Problem Without Checking
3. What is Checking Existence?
4. Syntax (value, ok Pattern)
5. How It Works Internally
6. Step-by-Step Examples
7. Zero Value Confusion (Very Important)
8. Practical Use Cases
9. Common Mistakes
10. Best Practices
11. Interactive Exercises
12. Final Summary

---

# 1. Introduction

When working with maps in Go, one of the most important operations is:

👉 **Checking whether a key exists or not**

---

# 2. The Problem Without Checking

## Example

```go
student := map[string]int{
    "math": 90,
}

fmt.Println(student["science"])
```

---

## Output

```text
0
```

---

## Problem

* Did "science" exist?
* Or is value actually 0?

👉 You cannot tell!

---

# 3. What is Checking Existence?

## Definition (Simple)

Checking existence means verifying whether a key is present in a map.

---

## Formal Definition

> It is the process of determining whether a key exists in a map using a special two-value assignment.

---

# 4. Syntax (value, ok Pattern)

```go
value, ok := mapName[key]
```

---

## Meaning

* `value` → value stored (if exists)
* `ok` → boolean (true/false)

---

# 5. How It Works Internally

When you access a map:

* Go checks if key exists
* If exists → return value + true
* If not → return zero value + false

---

# 6. Step-by-Step Examples

## Example 1: Key Exists

```go
student := map[string]int{
    "math": 90,
}

v, ok := student["math"]

fmt.Println(v, ok)
```

---

## Output

```text
90 true
```

---

## Example 2: Key Does Not Exist

```go
v, ok := student["science"]

fmt.Println(v, ok)
```

---

## Output

```text
0 false
```

---

# 7. Zero Value Confusion (Very Important)

## Example

```go
student := map[string]int{
    "science": 0,
}
```

---

## Problem

```go
fmt.Println(student["science"]) // 0
fmt.Println(student["math"])    // 0
```

---

👉 Both give 0 — but only one exists!

---

## Solution

```go
v, ok := student["math"]
```

---

# 8. Practical Use Cases

* Checking user existence
* Avoiding runtime bugs
* Conditional logic

---

## Example

```go
users := map[string]string{
    "u1": "Shiv",
}

if name, ok := users["u1"]; ok {
    fmt.Println("User found:", name)
} else {
    fmt.Println("User not found")
}
```

---

# 9. Common Mistakes

❌ Ignoring `ok`

```go
if student["math"] == 0 {
    // WRONG
}
```

---

❌ Assuming value means existence

---

# 10. Best Practices

* Always use `value, ok` when unsure
* Use `ok` for conditional checks
* Avoid relying on zero values

---

# 11. Interactive Exercises

## Exercise 1

Create map and check existing key

---

## Exercise 2

Check non-existing key

---

## Exercise 3

Store zero value and test behavior

---

# 12. Final Summary

| Concept    | Meaning                    |
| ---------- | -------------------------- |
| value      | Actual value               |
| ok         | Key existence (true/false) |
| Zero value | Default if key missing     |

---

# Conclusion

Checking key existence is a **critical concept in Go maps**.

It helps you:

* Avoid bugs
* Write safe code
* Handle real-world data properly

---

End of Documentation
