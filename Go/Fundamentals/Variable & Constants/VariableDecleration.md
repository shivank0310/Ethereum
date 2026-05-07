# Go Language — Variables & Constants Detailed Documentation

---

# Table of Contents

1. Introduction to Variables and Constants
2. Variables in Go
3. Variable Declaration
4. Short Variable Declaration (`:=`)
5. Multiple Variable Declaration
6. Zero Values in Go
7. Constants in Go
8. Typed vs Untyped Constants
9. The `iota` Identifier
10. Practical Examples
11. Best Practices
12. Common Beginner Mistakes
13. Mini Exercises
14. Final Summary

---

# 1. Introduction to Variables and Constants

# What are Variables?

Variables are named memory locations used to store data.

A variable’s value can change during program execution.

---

# What are Constants?

Constants are fixed values.

Their value cannot change once declared.

---

# Real-World Analogy

## Variable

Think of a variable as:

```text
A reusable storage box
```

You can change what is inside.

---

## Constant

Think of a constant as:

```text
A sealed container
```

Its content never changes.

---

# Why Variables Matter

Variables are fundamental because programs:

* Store user input
* Process calculations
* Track application state
* Manage configurations
* Handle database data
* Process blockchain transactions

---

# Memory Perspective

When variables are created:

```text
RAM Memory Allocated
        ↓
Variable Name Assigned
        ↓
Data Stored
```

---

# Interactive Understanding

## Question

Can the value of a variable change?

### Answer

Yes.

---

## Question

Can the value of a constant change?

### Answer

No.

---

# 2. Variables in Go

# What is a Variable?

A variable is a named container for storing data.

Example:

```go
var age int = 25
```

Here:

* `age` → variable name
* `int` → data type
* `25` → value

---

# Syntax of Variable Declaration

```go
var variableName dataType = value
```

Example:

```go
var name string = "Shiv"
```

---

# Variable Components

| Component | Meaning                     |
| --------- | --------------------------- |
| `var`     | Keyword to declare variable |
| `name`    | Identifier                  |
| `string`  | Data type                   |
| `"Shiv"`  | Stored value                |

---

# Why Go Requires Types

Go is a statically typed language.

Meaning:

* Data types are checked during compilation.
* Prevents many runtime errors.
* Improves performance.

---

# Example

```go
package main

import "fmt"

func main() {
    var city string = "Delhi"
    fmt.Println(city)
}
```

---

# Output

```text
Delhi
```

---

# Variable Naming Rules

## Allowed

```go
var userName string
var age1 int
var _temp int
```

---

## Not Allowed

```go
var 1name string
var user-name string
```

---

# Naming Conventions

## Camel Case Preferred

```go
userName
blockchainNetwork
studentAge
```

---

# Interactive Exercise

## Identify Variable Name

```go
var marks int = 90
```

Answer:

`marks`

---

# 3. Variable Declaration

# Standard Variable Declaration

Syntax:

```go
var name type = value
```

---

# Example 1 — Integer Variable

```go
var age int = 21
```

---

# Example 2 — String Variable

```go
var name string = "GoLang"
```

---

# Example 3 — Boolean Variable

```go
var isActive bool = true
```

---

# Type Inference

Go can automatically detect type.

Example:

```go
var age = 30
```

Compiler infers:

```text
age → int
```

---

# Why Type Inference Matters

Benefits:

* Cleaner code
* Less repetition
* Easier readability

---

# Declaration Without Initialization

```go
var score int
```

Go assigns:

```text
0
```

Automatically.

---

# Block Variable Declaration

```go
var (
    name string = "Shiv"
    age  int    = 25
)
```

---

# Memory Allocation Flow

```text
Variable Declared
        ↓
Memory Allocated
        ↓
Type Assigned
        ↓
Value Stored
```

---

# Interactive Understanding

## Predict Type

```go
var price = 99.5
```

Answer:

```text
float64
```

---

# 4. Short Variable Declaration (`:=`)

# What is `:=`?

Go provides shorthand syntax for variable declaration.

Syntax:

```go
name := value
```

---

# Example

```go
age := 25
```

Equivalent to:

```go
var age int = 25
```

---

# How it Works

Compiler automatically:

* Creates variable
* Detects type
* Assigns value

---

# Example Program

```go
package main

import "fmt"

func main() {
    language := "Go"
    fmt.Println(language)
}
```

---

# Output

```text
Go
```

---

# Important Rules

# Rule 1 — Only Inside Functions

Valid:

```go
func main() {
    x := 10
}
```

Invalid:

```go
x := 10
```

Outside function.

---

# Rule 2 — At Least One New Variable

Correct:

```go
x, y := 10, 20
```

Incorrect:

```go
x := 30
x := 40
```

Error:

```text
no new variables on left side of :=
```

---

# Why Developers Prefer `:=`

* Cleaner syntax
* Faster coding
* Less verbosity
* Common in Go projects

---

# Comparison

| Standard           | Short Declaration |
| ------------------ | ----------------- |
| `var age int = 25` | `age := 25`       |

---

# Interactive Exercise

## Is this valid?

```go
name := "Go"
```

Inside `main()`?

Answer:

Yes.

---


# 10. Practical Examples

# Example 1 — Variables

```go
package main

import "fmt"

func main() {
    name := "Shiv"
    age := 25

    fmt.Println(name)
    fmt.Println(age)
}
```

---

# Example 2 — Constants

```go
package main

import "fmt"

const appName = "GoChain"

func main() {
    fmt.Println(appName)
}
```

---

# Example 3 — `iota`

```go
const (
    Pending = iota
    Approved
    Rejected
)
```

---

# 11. Best Practices

# Use `:=` for Local Variables

---

# Use Constants for Fixed Values

---

# Use Meaningful Variable Names

Good:

```go
studentName
```

Bad:

```go
sn
```

---

# Group Related Constants

```go
const (
    MaxUsers = 100
    Timeout  = 30
)
```

---

# Use `iota` for Enums

---

# 12. Common Beginner Mistakes

# Mistake 1 — Using `:=` Outside Function

---

# Mistake 2 — Reassigning Constants

---

# Mistake 3 — Poor Variable Names

---

# Mistake 4 — Confusing Typed vs Untyped Constants

---

# Mistake 5 — Forgetting Zero Values

---

# 13. Mini Exercises

# Exercise 1

Declare variables:

* Name
* Age
* CGPA

---

# Exercise 2

Create constants for:

* App Name
* Version
* Port

---

# Exercise 3

Create enum using `iota`:

```text
Admin
Manager
User
```

---

# Exercise 4

Print zero values of different types.

---

# Exercise 5

Swap two variables.

---

# 14. Final Summary

| Topic                | Purpose                    |
| -------------------- | -------------------------- |
| Variables            | Store changeable data      |
| Constants            | Store fixed values         |
| `:=`                 | Short variable declaration |
| Multiple Declaration | Cleaner code               |
| Zero Values          | Safe defaults              |
| Typed Constants      | Explicit types             |
| Untyped Constants    | Flexible constants         |
| `iota`               | Sequential constants       |

---

# Conclusion

Variables and constants form the foundation of all Go programs.

Mastering them helps in:

* Backend development
* API building
* Blockchain programming
* Hyperledger Fabric chaincode
* Smart contract integration
* Distributed systems

Understanding memory handling, typing, and constants will significantly improve your Go programming skills.

---

# Recommended Next Topics

1. Data Types in Go
2. Operators
3. Input & Output
4. Functions
5. Control Flow
6. Arrays & Slices
7. Maps
8. Structs
9. Pointers
10. Interfaces

---

End of Documentation
