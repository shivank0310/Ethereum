# 6. The `switch` Statement

# What is `switch`?

`switch` simplifies multiple condition handling.

---

# Why Switch Exists

Instead of:

```go
if else if else if...
```

Switch provides cleaner structure.

---

# Syntax

```go
switch expression {
case value1:
    // code
case value2:
    // code
default:
    // code
}
```

---

# Example

```go
package main

import "fmt"

func main() {
    day := 2

    switch day {
    case 1:
        fmt.Println("Monday")
    case 2:
        fmt.Println("Tuesday")
    default:
        fmt.Println("Invalid")
    }
}
```

---

# Output

```text
Tuesday
```

---

# Important Difference from C/C++

Go automatically breaks.

No need for:

```text
break
```

---

# Multiple Cases

```go
switch day {
case 1, 2, 3:
    fmt.Println("Weekday")
}
```

---

# Switch Without Expression

Acts like cleaner `if-else`.

---

# Example

```go
score := 80

switch {
case score >= 90:
    fmt.Println("A")
case score >= 70:
    fmt.Println("B")
default:
    fmt.Println("C")
}
```

---

# Fallthrough

Go supports explicit fallthrough.

---

# Example

```go
switch 1 {
case 1:
    fmt.Println("One")
    fallthrough
case 2:
    fmt.Println("Two")
}
```

---

# Output

```text
One
Two
```

---

# Real-World Uses

## API Status Handling

## Command Parsers

## Blockchain State Management

## Authentication Roles

---

# Interactive Exercise

## Predict Output

```go
switch 2 {
case 1:
    fmt.Println("One")
case 2:
    fmt.Println("Two")
}
```

Answer:

```text
Two
```

---