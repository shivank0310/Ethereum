# Go Language — Basic Syntax & Program Structure

---

# Table of Contents

1. Introduction to Go Syntax
2. Structure of a Go Program
3. Package Declaration
4. The `main` Package
5. The `main()` Function
6. Comments in Go
7. Code Formatting with `gofmt`
8. Semicolons in Go
9. Practical Examples
10. Best Practices
11. Common Beginner Mistakes
12. Mini Exercises

---

# 1. Introduction to Go Syntax

## What is Syntax?

Syntax refers to the set of rules that define how code must be written in a programming language.

In Go:

* Syntax is simple and clean.
* Readability is highly prioritized.
* The language avoids unnecessary complexity.
* Go follows strict formatting conventions.

Go was designed to:

* Reduce developer confusion
* Improve code readability
* Make collaboration easier
* Increase compilation speed
* Eliminate unnecessary language features

---

# 2. Structure of a Go Program

A Go program follows a specific structure.

## Basic Structure

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

---

# Understanding Each Part

## 1. `package main`

Defines the package name.

Every Go file belongs to a package.

---

## 2. `import "fmt"`

Imports a package.

The `fmt` package provides formatting and printing functions.

---

## 3. `func main()`

Defines the entry point of the program.

Execution starts from here.

---

## 4. Curly Braces `{}`

Used to define code blocks.

Go requires braces.

Correct:

```go
func main() {
    fmt.Println("Hello")
}
```

Incorrect:

```go
func main()
{
    fmt.Println("Hello")
}
```

Go automatically inserts semicolons, and improper brace placement causes errors.

---

# Program Execution Flow

```text
Program Starts
      ↓
Package Loaded
      ↓
Imports Loaded
      ↓
main() Executes
      ↓
Program Ends
```

---

# Interactive Understanding

## Question

What happens first when a Go program runs?

### Answer

1. Package loading
2. Import processing
3. `main()` execution

---





# 9. Practical Examples

# Example 1 — Basic Go Program

```go
package main

import "fmt"

// Entry point of program
func main() {
    fmt.Println("Hello, Go")
}
```

---

# Example 2 — Multiple Functions

```go
package main

import "fmt"

func greet() {
    fmt.Println("Good Morning")
}

func main() {
    greet()
}
```

---

# Example 3 — Custom Package

```go
package calculator

func Add(a int, b int) int {
    return a + b
}
```

---

# 10. Best Practices

# Follow Standard Formatting

Always use:

```bash
gofmt
```

---

# Use Meaningful Comments

Write comments that explain WHY.

---

# Keep Package Names Simple

Good:

```go
package auth
```

Bad:

```go
package AuthenticationManagementSystem
```

---

# Keep `main()` Small

Move logic into separate functions.

---

# Organize Imports Properly

Example:

```go
import (
    "fmt"
    "os"
)
```

---

# 11. Common Beginner Mistakes

# Mistake 1 — Missing `package main`

---

# Mistake 2 — Wrong Brace Placement

---

# Mistake 3 — Forgetting Imports

---

# Mistake 4 — Multiple `main()` Functions

---

# Mistake 5 — Poor Formatting

---

# 12. Mini Exercises

# Exercise 1

Create a Go program that prints your name.

---

# Exercise 2

Create a custom package called `mathutils`.

---

# Exercise 3

Add comments explaining your code.

---

# Exercise 4

Format your code using:

```bash
gofmt -w .
```

---

# Exercise 5

Experiment with semicolons.

Try:

```go
x := 10; y := 20
```

---

# Final Summary

## Key Concepts Covered

| Topic                   | Purpose                            |
| ----------------------- | ---------------------------------- |
| Structure of Go Program | Defines application layout         |
| Package Declaration     | Organizes code                     |
| `main` Package          | Creates executable program         |
| `main()` Function       | Entry point of execution           |
| Comments                | Improve readability                |
| `gofmt`                 | Standard formatting tool           |
| Semicolons              | Automatically inserted by compiler |

---

# Conclusion

Understanding Go syntax and program structure is the foundation of:

* Building scalable applications
* Writing clean code
* Developing backend systems
* Working with blockchain frameworks like Hyperledger Fabric
* Creating APIs and microservices

Mastering these basics will make advanced Go concepts significantly easier.

---

# Recommended Next Topics

1. Variables and Data Types
2. Constants
3. Operators
4. Input and Output
5. Functions in Depth
6. Control Flow
7. Arrays and Slices
8. Maps
9. Structs
10. Interfaces

---

End of Documentation
