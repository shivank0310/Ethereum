# Go Language — Data Types Detailed Documentation

---

# Table of Contents

1. Introduction to Data Types
2. Why Data Types Matter
3. Integer Types
4. Floating-Point Types
5. Complex Numbers
6. Boolean Type
7. String Type
8. Rune Type
9. Byte Type
10. Type Conversion
11. Memory Representation
12. Practical Examples
13. Best Practices
14. Common Beginner Mistakes
15. Mini Exercises
16. Final Summary

---

# 1. Introduction to Data Types

# What are Data Types?

A data type defines:

* What kind of value a variable can store
* How much memory is required
* What operations can be performed

---

# Real-World Analogy

Think of data types like containers.

| Container    | Stores |
| ------------ | ------ |
| Water bottle | Liquid |
| Wallet       | Money  |
| Pen drive    | Files  |

Similarly:

| Data Type | Stores          |
| --------- | --------------- |
| `int`     | Whole numbers   |
| `float64` | Decimal numbers |
| `string`  | Text            |
| `bool`    | True/False      |

---

# Why Go Uses Strong Typing

Go is:

```text
Statically Typed
```

Meaning:

* Type checking happens during compilation.
* Errors are caught early.
* Programs become safer and faster.

---

# Example

```go
var age int = 25
```

Here:

* `age` → variable
* `int` → type
* `25` → value

---

# Interactive Understanding

## Question

Can a string variable store integers directly?

### Answer

No.

Because Go is strongly typed.

---

# 2. Why Data Types Matter

# Data Types Help With

## Memory Optimization

Different types use different memory sizes.

---

## Performance

Smaller data types may improve efficiency.

---

## Data Validation

Prevents invalid operations.

---

## Code Safety

Compiler catches type mismatches.

---

# Example of Invalid Operation

```go
var age int = "twenty"
```

Error:

```text
cannot use "twenty" as int
```

---

# Basic Categories of Data Types

| Category  | Examples                 |
| --------- | ------------------------ |
| Numeric   | int, float64, complex128 |
| Boolean   | bool                     |
| String    | string                   |
| Character | rune, byte               |

---

# 3. Integer Types

# What are Integers?

Integers are whole numbers.

Examples:

```text
-10
0
25
1000
```

---

# Integer Types in Go

| Type    | Size             | Range            |
| ------- | ---------------- | ---------------- |
| `int8`  | 8-bit            | -128 to 127      |
| `int16` | 16-bit           | -32K to 32K      |
| `int32` | 32-bit           | Large range      |
| `int64` | 64-bit           | Very large range |
| `int`   | System dependent | 32/64-bit        |

---

# Unsigned Integers

Only positive values.

| Type     | Range                     |
| -------- | ------------------------- |
| `uint8`  | 0 to 255                  |
| `uint16` | 0 to 65535                |
| `uint32` | Larger positive range     |
| `uint64` | Very large positive range |

---

# Example

```go
package main

import "fmt"

func main() {
    var age int = 25
    fmt.Println(age)
}
```

---

# Output

```text
25
```

---

# Signed vs Unsigned

## Signed

Can store:

```text
Negative + Positive
```

---

## Unsigned

Can store:

```text
Only Positive
```

---

# Binary Storage Concept

Integers are stored in binary.

Example:

```text
5 → 00000101
```

---

# Overflow Example

```go
var x int8 = 127
x++
```

Result:

```text
Overflow
```

---

# Why Integer Types Matter

Used in:

* Blockchain transaction counts
* Database IDs
* API status codes
* Loop counters
* Smart contracts

---

# Interactive Exercise

## Which type stores only positive values?

Answer:

```text
uint
```

---

# 10. Type Conversion

# What is Type Conversion?

Converting one data type into another.

---

# Example

```go
var x int = 10
var y float64 = float64(x)
```

---

# Why Explicit Conversion?

Go avoids automatic unsafe conversions.

---

# Invalid Example

```go
var x int = 10
var y float64 = x
```

Error.

---

# Interactive Understanding

## Why Go avoids implicit conversions?

Answer:

```text
Safety and clarity
```

---

# 11. Memory Representation

# Memory Usage Examples

| Type      | Typical Size |
| --------- | ------------ |
| `int8`    | 1 byte       |
| `int32`   | 4 bytes      |
| `float64` | 8 bytes      |
| `bool`    | 1 byte       |
| `byte`    | 1 byte       |
| `rune`    | 4 bytes      |

---

# Why Memory Matters

Important for:

* High-performance systems
* Blockchain nodes
* APIs
* Distributed systems

---

# 12. Practical Examples

# Example 1 — Integers

```go
age := 25
```

---

# Example 2 — Float

```go
price := 99.99
```

---

# Example 3 — Boolean

```go
isAdmin := true
```

---

# Example 4 — String

```go
name := "Shiv"
```

---

# Example 5 — Rune

```go
letter := 'A'
```

---

# Example 6 — Byte

```go
data := byte(255)
```

---

# 13. Best Practices

# Use Appropriate Data Types

---

# Prefer `float64`

---

# Use `rune` for Unicode

---

# Use `byte` for Binary Data

---

# Avoid Unnecessary Conversions

---

# 14. Common Beginner Mistakes

# Mistake 1 — Mixing Types

---

# Mistake 2 — Ignoring Float Precision

---

# Mistake 3 — Confusing Rune and String

---

# Mistake 4 — Forgetting Explicit Conversion

---

# Mistake 5 — Using Wrong Integer Size

---

# 15. Mini Exercises

# Exercise 1

Declare variables using:

* int
* float64
* bool
* string

---

# Exercise 2

Print Unicode value of a rune.

---

# Exercise 3

Convert integer to float64.

---

# Exercise 4

Create byte slice from string.

---

# Exercise 5

Print real and imaginary parts of complex number.

---

# 16. Final Summary

| Data Type | Purpose                     |
| --------- | --------------------------- |
| Integer   | Whole numbers               |
| Float     | Decimal numbers             |
| Complex   | Mathematical complex values |
| Boolean   | True/False values           |
| String    | Text data                   |
| Rune      | Unicode character           |
| Byte      | Binary data                 |

---

# Conclusion

Understanding data types is critical in Go because they directly affect:

* Memory usage
* Performance
* Type safety
* Scalability
* API design
* Blockchain system efficiency

Mastering Go data types creates a strong foundation for:

* Backend development
* Hyperledger Fabric chaincode
* Distributed systems
* Cloud-native applications
* Microservices

---

# Recommended Next Topics

1. Operators in Go
2. Control Flow Statements
3. Functions
4. Arrays
5. Slices
6. Maps
7. Structs
8. Pointers
9. Interfaces
10. Concurrency

---

End of Documentation
