# Go Language — Conditional Statements Detailed Documentation

---

# Table of Contents

1. Introduction to Conditional Statements
2. Why Conditional Logic Matters
3. The `if` Statement
4. The `if-else` Statement
5. Nested `if` Statements
6. The `switch` Statement
7. Type Switch
8. Switch vs If-Else
9. Scope Inside Conditions
10. Execution Flow Analysis
11. Practical Examples
12. Best Practices
13. Common Beginner Mistakes
14. Mini Exercises
15. Final Summary

---

# 1. Introduction to Conditional Statements

# What are Conditional Statements?

Conditional statements allow programs to:

```text
Make decisions
```

Based on conditions.

---

# Real-World Analogy

| Condition           | Action             |
| ------------------- | ------------------ |
| If raining          | Carry umbrella     |
| If password correct | Login success      |
| If balance low      | Reject transaction |

---

# Why Conditions Matter

Without conditions:

* Programs cannot make decisions
* No dynamic behavior
* No validation
* No authentication
* No business logic

---

# Examples in Real Applications

## Banking Systems

```text
If balance >= withdrawal amount
→ Allow transaction
```

---

## Blockchain Systems

```text
If signature valid
→ Approve transaction
```

---

## APIs

```text
If token valid
→ Allow access
```

---

# Conditional Execution Flow

```text
Condition Checked
       ↓
True? ---- Yes → Execute Block
   |
   No
   ↓
Skip Block
```

---

# Interactive Understanding

## Question

Why are conditions important?

### Answer

They allow programs to make decisions dynamically.

---

# 2. Why Conditional Logic Matters

# Conditional Logic Enables

## Authentication Systems

## Smart Contract Validation

## Access Control

## Business Rules

## Error Handling

## Workflow Automation

---

# Example

```go
if age >= 18 {
    fmt.Println("Eligible")
}
```

---

# 3. The `if` Statement

# What is `if`?

`if` executes code only when condition is true.

---

# Syntax

```go
if condition {
    // code
}
```

---

# Example

```go
package main

import "fmt"

func main() {
    age := 20

    if age >= 18 {
        fmt.Println("Adult")
    }
}
```

---

# Output

```text
Adult
```

---

# Important Rule

Condition must return:

```text
boolean value
```

---

# Invalid Example

```go
if 10 {
}
```

Error.

Because:

```text
10 is not boolean
```

---

# Comparison with Other Languages

Unlike C:

```go
if x {
}
```

Only valid if:

```go
x is bool
```

---

# Curly Braces are Mandatory

Correct:

```go
if true {
    fmt.Println("Yes")
}
```

Incorrect:

```go
if true
    fmt.Println("Yes")
```

---

# `if` with Initialization

Go allows variable initialization inside condition.

---

# Example

```go
if score := 90; score >= 50 {
    fmt.Println("Pass")
}
```

---

# Scope of Initialized Variable

`score` exists only inside:

```go
if block
```

---

# Execution Flow

```text
Condition Evaluated
       ↓
True? → Execute Block
False? → Skip Block
```

---

# Interactive Exercise

## Predict Output

```go
x := 5

if x > 2 {
    fmt.Println("Valid")
}
```

Answer:

```text
Valid
```

---

# 9. Scope Inside Conditions

# Variables Declared Inside Block

Exist only inside block.

---

# Example

```go
if x := 10; x > 5 {
    fmt.Println(x)
}
```

Outside block:

```go
x
```

Not accessible.

---

# Why Scope Matters

Improves:

* Memory efficiency
* Code safety
* Encapsulation

---

# 10. Execution Flow Analysis

# If Flow

```text
Condition
   ↓
True? → Execute
False? → Skip
```

---

# If-Else Flow

```text
Condition
   ↓
True? → if block
False? → else block
```

---

# Switch Flow

```text
Expression Evaluated
        ↓
Cases Compared
        ↓
Matching Case Executes
```

---

# 11. Practical Examples

# Example 1 — Authentication

```go
password := "admin"

if password == "admin" {
    fmt.Println("Login Success")
}
```

---

# Example 2 — Grading

```go
marks := 85

if marks >= 80 {
    fmt.Println("Excellent")
}
```

---

# Example 3 — Switch

```go
role := "admin"

switch role {
case "admin":
    fmt.Println("Full Access")
}
```

---

# Example 4 — Type Switch

```go
var data interface{} = 100
```

---

# 12. Best Practices

# Keep Conditions Simple

---

# Avoid Deep Nesting

---

# Use Switch for Multiple Fixed Values

---

# Use Meaningful Conditions

---

# Prefer Readability

---

# 13. Common Beginner Mistakes

# Mistake 1 — Missing Braces

---

# Mistake 2 — Non-Boolean Conditions

---

# Mistake 3 — Excessive Nesting

---

# Mistake 4 — Forgetting Default Case

---

# Mistake 5 — Misunderstanding Scope

---

# 14. Mini Exercises

# Exercise 1

Check if number is positive.

---

# Exercise 2

Create grading system using if-else.

---

# Exercise 3

Create role system using switch.

---

# Exercise 4

Use nested if for authentication.

---

# Exercise 5

Create type switch for:

* int
* string
* bool

---

# 15. Final Summary

| Topic       | Purpose                     |
| ----------- | --------------------------- |
| `if`        | Execute code conditionally  |
| `if-else`   | Alternative execution       |
| Nested if   | Multi-level decisions       |
| `switch`    | Cleaner multiple conditions |
| Type switch | Runtime type checking       |

---

# Conclusion

Conditional statements are the foundation of decision-making in Go.

They are critical for:

* Backend systems
* APIs
* Blockchain validation
* Authentication systems
* Smart contracts
* Business logic
* Distributed systems

Mastering conditional logic improves:

* Problem-solving skills
* Application architecture
* Security validation
* Code readability

---

# Recommended Next Topics

1. Loops in Go
2. Functions
3. Arrays
4. Slices
5. Maps
6. Structs
7. Interfaces
8. Error Handling
9. Goroutines
10. Channels

---

End of Documentation
