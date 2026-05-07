# Go Language — Input & Output Detailed Documentation

---

# Table of Contents

1. Introduction to Input & Output
2. Understanding the `fmt` Package
3. `fmt.Print`
4. `fmt.Println`
5. `fmt.Printf`
6. Formatting Verbs in Go
7. Reading User Input
8. Formatting Strings
9. String Formatting Internals
10. Escape Sequences
11. Practical Examples
12. Best Practices
13. Common Beginner Mistakes
14. Mini Exercises
15. Final Summary

---

# 1. Introduction to Input & Output

# What is Input & Output?

Input and Output (I/O) are fundamental operations in programming.

---

# Input

Input means:

```text
Receiving data from user or external source
```

Examples:

* Keyboard input
* File input
* API data
* Blockchain transaction data

---

# Output

Output means:

```text
Displaying or sending data
```

Examples:

* Console output
* File writing
* API responses
* Blockchain logs

---

# Real-World Analogy

| Action     | Example               |
| ---------- | --------------------- |
| Input      | Typing password       |
| Processing | Validation            |
| Output     | Login success message |

---

# Why I/O Matters

Almost every application depends on I/O.

Examples:

* Web applications
* Blockchain systems
* APIs
* CLI tools
* Databases
* Microservices

---

# Go’s Standard Package for I/O

Go mainly uses:

```go
fmt
```

Package for basic console input and output.

---

# Interactive Understanding

## Question

What is output?

### Answer

Displaying data to user or system.

---

# 2. Understanding the `fmt` Package

# What is `fmt`?

`fmt` stands for:

```text
Format
```

---

# Purpose of `fmt`

Provides functions for:

* Printing output
* Formatting strings
* Reading input
* Debugging

---

# Importing `fmt`

```go
import "fmt"
```

---

# Why Import is Required

Go uses modular packages.

Without importing:

```go
fmt.Println("Hello")
```

Will produce error.

---

# Example Program

```go
package main

import "fmt"

func main() {
    fmt.Println("Welcome to Go")
}
```

---

# Output

```text
Welcome to Go
```

---

# Important `fmt` Functions

| Function  | Purpose                 |
| --------- | ----------------------- |
| `Print`   | Print without newline   |
| `Println` | Print with newline      |
| `Printf`  | Formatted printing      |
| `Scan`    | Read input              |
| `Scanf`   | Formatted input         |
| `Sprint`  | Return formatted string |

---

# 3. `fmt.Print`

# What is `fmt.Print`?

`fmt.Print` prints output exactly as provided.

It does NOT automatically add:

```text
New line
```

---

# Syntax

```go
fmt.Print(values)
```

---

# Example

```go
package main

import "fmt"

func main() {
    fmt.Print("Hello")
    fmt.Print("Go")
}
```

---

# Output

```text
HelloGo
```

---

# Multiple Arguments

```go
fmt.Print("Age:", 25)
```

Output:

```text
Age:25
```

---

# Spacing Behavior

Unlike `Println`, `Print` does not automatically insert spaces.

---

# Real-World Usage

Useful when:

* Building custom output
* Creating progress bars
* Formatting manually

---

# Interactive Exercise

## Predict Output

```go
fmt.Print("A")
fmt.Print("B")
```

Answer:

```text
AB
```

---

# 7. Reading User Input

# Why User Input Matters

Applications interact with users.

Examples:

* Login systems
* Blockchain wallets
* Banking systems
* CLI tools

---

# `fmt.Scan`

Reads input separated by spaces.

---

# Example

```go
package main

import "fmt"

func main() {
    var name string

    fmt.Print("Enter your name: ")
    fmt.Scan(&name)

    fmt.Println("Hello", name)
}
```

---

# Important Concept — Address Operator `&`

```go
&name
```

Passes memory address.

Go stores input directly into variable.

---

# Execution Flow

```text
User Types Input
        ↓
Scan Reads Input
        ↓
Value Stored in Variable
```

---

# Multiple Inputs

```go
var name string
var age int

fmt.Scan(&name, &age)
```

---

# Input Example

```text
Shiv 25
```

---

# `fmt.Scanln`

Reads until newline.

---

# `fmt.Scanf`

Formatted input.

Example:

```go
fmt.Scanf("%s %d", &name, &age)
```

---

# Common Input Problems

## Spaces in String

`Scan` stops at spaces.

Example:

```text
Shiv Singh
```

Only:

```text
Shiv
```

Read.

---

# Better Alternative

Using:

```go
bufio.NewReader
```

Advanced topic.

---

# Interactive Exercise

## Why use `&name`?

Answer:

```text
To pass variable memory address
```

---


# 11. Practical Examples

# Example 1 — Println

```go
fmt.Println("Welcome")
```

---

# Example 2 — Printf

```go
fmt.Printf("Age: %d", 25)
```

---

# Example 3 — User Input

```go
var age int
fmt.Scan(&age)
```

---

# Example 4 — Type Printing

```go
fmt.Printf("%T", 10)
```

---

# Example 5 — Float Precision

```go
fmt.Printf("%.2f", 5.678)
```

---

# 12. Best Practices

# Use `Println` for General Output

---

# Use `Printf` for Structured Formatting

---

# Use Meaningful Prompts for Input

---

# Handle Input Carefully

---

# Use Proper Formatting Verbs

---

# 13. Common Beginner Mistakes

# Mistake 1 — Forgetting `&` in Scan

---

# Mistake 2 — Using Wrong Formatting Verb

---

# Mistake 3 — Confusing Print and Println

---

# Mistake 4 — Incorrect Float Formatting

---

# Mistake 5 — Ignoring Escape Characters

---

# 14. Mini Exercises

# Exercise 1

Print your name using:

* Print
* Println
* Printf

---

# Exercise 2

Read age from user.

---

# Exercise 3

Print float with 3 decimal places.

---

# Exercise 4

Display variable type.

---

# Exercise 5

Create formatted string using `Sprintf`.

---

# 15. Final Summary

| Topic            | Purpose               |
| ---------------- | --------------------- |
| `fmt.Print`      | Print without newline |
| `fmt.Println`    | Print with newline    |
| `fmt.Printf`     | Formatted output      |
| `fmt.Scan`       | Read input            |
| Formatting Verbs | Customize output      |
| Escape Sequences | Special formatting    |

---

# Conclusion

Input and Output are critical building blocks in Go programming.

Understanding them deeply helps in:

* CLI application development
* Backend APIs
* Blockchain tools
* Logging systems
* User interaction systems
* Debugging and monitoring

Mastering Go’s formatting system improves code quality, readability, and professional software development practices.

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
9. Error Handling
10. File I/O

---

End of Documentation
