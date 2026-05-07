# Go Language — Operators Detailed Documentation

---

# Table of Contents

1. Introduction to Operators
2. Why Operators Matter
3. Arithmetic Operators
4. Relational Operators
5. Logical Operators
6. Bitwise Operators
7. Assignment Operators
8. Increment and Decrement Operators
9. Operator Precedence
10. Type Rules in Operators
11. Practical Examples
12. Best Practices
13. Common Beginner Mistakes
14. Mini Exercises
15. Final Summary

---

# 1. Introduction to Operators

# What are Operators?

Operators are symbols used to perform operations on values and variables.

---

# Real-World Analogy

Think of operators like mathematical tools.

| Operator | Purpose          |
| -------- | ---------------- |
| `+`      | Add              |
| `-`      | Subtract         |
| `==`     | Compare          |
| `&&`     | Check conditions |

---

# Example

```go
x := 10 + 5
```

Here:

* `10` and `5` → operands
* `+` → operator

---

# Why Operators Matter

Operators are essential for:

* Calculations
* Decision making
* Authentication systems
* Blockchain validations
* Data processing
* API logic

---

# Categories of Operators in Go

| Category            | Purpose                  |
| ------------------- | ------------------------ |
| Arithmetic          | Mathematical operations  |
| Relational          | Comparisons              |
| Logical             | Boolean logic            |
| Bitwise             | Binary operations        |
| Assignment          | Value assignment         |
| Increment/Decrement | Increase/decrease values |

---

# Interactive Understanding

## Question

What does `+` operator do?

### Answer

Performs addition.

---

# 2. Why Operators Matter

# Operators Help In

## Data Manipulation

## Conditional Logic

## Security Systems

## Blockchain Calculations

## Bit-Level Operations

## Smart Contract Logic

---

# Example

```go
balance := 1000 - 200
```

---

# 3. Arithmetic Operators

# What are Arithmetic Operators?

Used for mathematical calculations.

---

# Arithmetic Operators Table

| Operator | Meaning        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Modulus        |

---

# Addition Operator (`+`)

```go
x := 10 + 5
```

Output:

```text
15
```

---

# Subtraction Operator (`-`)

```go
y := 20 - 8
```

Output:

```text
12
```

---

# Multiplication Operator (`*`)

```go
z := 5 * 4
```

Output:

```text
20
```

---

# Division Operator (`/`)

```go
result := 10 / 2
```

Output:

```text
5
```

---

# Integer Division

```go
fmt.Println(5 / 2)
```

Output:

```text
2
```

Why?

Because both operands are integers.

---

# Float Division

```go
fmt.Println(5.0 / 2.0)
```

Output:

```text
2.5
```

---

# Modulus Operator (`%`)

Returns remainder.

```go
fmt.Println(10 % 3)
```

Output:

```text
1
```

---

# Real-World Uses

## Division

* Average calculation
* Percentage calculation

---

## Modulus

* Even/odd checking
* Hashing
* Blockchain nonce operations

---

# Interactive Exercise

## Predict Output

```go
fmt.Println(17 % 5)
```

Answer:

```text
2
```

---

# String Concatenation with `+`

```go
first := "Go"
second := "Lang"

fmt.Println(first + second)
```

Output:

```text
GoLang
```

---

# Arithmetic Assignment

```go
x := 10
x = x + 5
```

Result:

```text
15
```

---

# 9. Operator Precedence

# What is Operator Precedence?

Determines execution order.

---

# Example

```go
result := 10 + 5 * 2
```

Multiplication happens first.

Output:

```text
20
```

---

# Using Parentheses

```go
result := (10 + 5) * 2
```

Output:

```text
30
```

---

# Common Precedence Order

| Priority | Operators   |   |   |
| -------- | ----------- | - | - |
| High     | `* / %`     |   |   |
| Medium   | `+ -`       |   |   |
| Low      | `== != < >` |   |   |
| Lower    | `&&`        |   |   |
| Lowest   | `           |   | ` |

---

# Interactive Exercise

## Result?

```go
10 + 2 * 3
```

Answer:

```text
16
```

---

# 10. Type Rules in Operators

# Go Avoids Unsafe Mixing

Invalid:

```go
var x int = 10
var y float64 = 5.5

fmt.Println(x + y)
```

Error.

---

# Correct Approach

```go
fmt.Println(float64(x) + y)
```

---

# Why?

Go prioritizes:

* Type safety
* Explicit behavior

---

# 11. Practical Examples

# Example 1 — Arithmetic

```go
x := 10
fmt.Println(x + 5)
```

---

# Example 2 — Relational

```go
fmt.Println(10 > 5)
```

---

# Example 3 — Logical

```go
fmt.Println(true && false)
```

---

# Example 4 — Bitwise

```go
fmt.Println(5 & 3)
```

---

# Example 5 — Increment

```go
x := 1
x++
```

---

# 12. Best Practices

# Use Parentheses for Clarity

---

# Avoid Complex Expressions

---

# Use Bitwise Operators Carefully

---

# Prefer Readability Over Cleverness

---

# Use Logical Operators Clearly

---

# 13. Common Beginner Mistakes

# Mistake 1 — Integer Division Confusion

---

# Mistake 2 — Mixing Data Types

---

# Mistake 3 — Using `++` in Expressions

---

# Mistake 4 — Confusing `=` and `==`

---

# Mistake 5 — Misunderstanding Bitwise Operations

---

# 14. Mini Exercises

# Exercise 1

Perform all arithmetic operations.

---

# Exercise 2

Compare two numbers using relational operators.

---

# Exercise 3

Use logical operators with booleans.

---

# Exercise 4

Perform bitwise AND and OR.

---

# Exercise 5

Use increment operator inside loop.

---

# 15. Final Summary

| Operator Type       | Purpose                   |
| ------------------- | ------------------------- |
| Arithmetic          | Mathematical calculations |
| Relational          | Comparisons               |
| Logical             | Boolean logic             |
| Bitwise             | Binary operations         |
| Assignment          | Value updates             |
| Increment/Decrement | Add/subtract by 1         |

---

# Conclusion

Operators are the core building blocks of logic in Go.

They are essential for:

* Backend development
* Blockchain systems
* Smart contract logic
* APIs
* Data processing
* Cryptography
* Distributed systems

Understanding operators deeply improves:

* Problem-solving ability
* Performance optimization
* Code readability
* System-level programming skills

---

# Recommended Next Topics

1. Control Flow Statements
2. Functions
3. Arrays
4. Slices
5. Maps
6. Structs
7. Pointers
8. Interfaces
9. Goroutines
10. Channels

---

End of Documentation
