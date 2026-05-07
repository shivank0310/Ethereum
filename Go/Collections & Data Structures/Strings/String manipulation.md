# Go Language — String Manipulation (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What is a String?
3. String Immutability (Very Important)
4. Basic String Operations
5. Concatenation
6. String Length
7. Iterating Over Strings
8. Working with Runes (Unicode)
9. Common String Functions (strings package)
10. String Conversion
11. String Comparison
12. String Formatting (fmt package)
13. Performance Considerations
14. Common Mistakes
15. Best Practices
16. Interactive Exercises
17. Final Summary

---

# 1. Introduction

String manipulation means working with text data such as:

* Names
* Messages
* API responses
* File content

---

# 2. What is a String?

## Definition (Simple)

A string is a sequence of characters.

---

## Example

```go
name := "Shiv"
```

---

## Important

In Go, strings are **read-only (immutable)**.

---

# 3. String Immutability (Very Important)

## Meaning

You cannot change a string directly.

---

## Example (Invalid)

```go
s := "hello"
s[0] = 'H' // ERROR
```

---

## Solution

Convert to slice

```go
s := "hello"
b := []byte(s)
b[0] = 'H'
s = string(b)
```

---

# 4. Basic String Operations

* Create
* Read
* Compare
* Combine

---

# 5. Concatenation

## Example

```go
first := "Hello"
second := "World"

result := first + " " + second
```

---

## Output

```text
Hello World
```

---

# 6. String Length

## Syntax

```go
len(str)
```

---

## Example

```go
fmt.Println(len("Hello"))
```

---

## Important

Length = bytes, not characters

---

# 7. Iterating Over Strings

## Using range

```go
for i, ch := range "Hello" {
    fmt.Println(i, ch)
}
```

---

## Explanation

* `i` → index
* `ch` → rune (character)

---

# 8. Working with Runes (Unicode)

## Definition

Rune = Unicode character

---

## Example

```go
s := "你好"
fmt.Println(len(s)) // bytes
fmt.Println(len([]rune(s))) // characters
```

---

# 9. Common String Functions (strings package)

## Import

```go
import "strings"
```

---

## Functions

### ToUpper

```go
strings.ToUpper("go")
```

---

### ToLower

```go
strings.ToLower("GO")
```

---

### Contains

```go
strings.Contains("hello", "he")
```

---

### Split

```go
strings.Split("a,b,c", ",")
```

---

### Join

```go
strings.Join([]string{"a","b"}, ",")
```

---

### Trim

```go
strings.TrimSpace("  hi  ")
```

---

# 10. String Conversion

## String ↔ Integer

```go
strconv.Atoi("123")
strconv.Itoa(123)
```

---

# 11. String Comparison

## Example

```go
if "a" == "b" {
}
```

---

## Functions

```go
strings.Compare("a", "b")
```

---

# 12. String Formatting (fmt package)

## Example

```go
fmt.Printf("Name: %s, Age: %d", "Shiv", 25)
```

---

# 13. Performance Considerations

## Problem

Repeated concatenation is slow

---

## Solution

Use strings.Builder

```go
var b strings.Builder
b.WriteString("Hello")
b.WriteString(" World")
```

---

# 14. Common Mistakes

* Modifying string directly
* Ignoring Unicode
* Using + in loops

---

# 15. Best Practices

* Use Builder for large strings
* Use rune for Unicode
* Use strings package functions

---

# 16. Interactive Exercises

1. Reverse a string
2. Count vowels
3. Convert string to uppercase
4. Split sentence into words

---

# 17. Final Summary

| Concept   | Meaning                 |
| --------- | ----------------------- |
| String    | Sequence of characters  |
| Immutable | Cannot change directly  |
| Rune      | Unicode character       |
| Builder   | Efficient concatenation |

---

# Conclusion

String manipulation is essential for:

* APIs
* Data processing
* User input handling

Mastering this helps you build real-world Go applications.

---

End of Documentation
