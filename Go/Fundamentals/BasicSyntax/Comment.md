# 7. Comments in Go

# What are Comments?

Comments are notes written inside code.

The compiler ignores comments.

Used for:

* Documentation
* Explanation
* Debugging
* Readability

---

# Types of Comments

# 1. Single-Line Comments

Syntax:

```go
// comment
```

Example:

```go
// Print welcome message
fmt.Println("Hello")
```

---

# 2. Multi-Line Comments

Syntax:

```go
/*
Multi-line
comment
*/
```

Example:

```go
/*
This program
prints a message
*/
```

---

# Documentation Comments

Go uses comments for automatic documentation.

Example:

```go
// Add returns sum of two integers.
func Add(a int, b int) int {
    return a + b
}
```

---

# Why Documentation Comments Matter

Used by:

* `go doc`
* IDEs
* Package documentation tools
* Developers

---

# Best Practices

## Good Comment

```go
// CalculateTax computes GST amount.
```

---

## Bad Comment

```go
// add adds
```

---

# Commented Code for Debugging

```go
func main() {
    // fmt.Println("Debug")
    fmt.Println("Production")
}
```

---

# Interactive Exercise

## Identify Comment Type

```go
// Hello
```

Answer:

Single-line comment.

---