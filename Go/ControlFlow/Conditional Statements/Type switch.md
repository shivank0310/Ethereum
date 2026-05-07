# 7. Type Switch

# What is Type Switch?

Type switch checks:

```text
Dynamic type of interface value
```

---

# Why Type Switch Matters

Used heavily in:

* Interfaces
* APIs
* Generic systems
* Blockchain frameworks
* Middleware

---

# Syntax

```go
switch v := x.(type) {
case int:
    // code
case string:
    // code
}
```

---

# Example

```go
package main

import "fmt"

func checkType(x interface{}) {
    switch v := x.(type) {
    case int:
        fmt.Println("Integer", v)
    case string:
        fmt.Println("String", v)
    default:
        fmt.Println("Unknown")
    }
}

func main() {
    checkType(10)
    checkType("Go")
}
```

---

# Output

```text
Integer 10
String Go
```

---

# Understanding `interface{}`

```go
interface{}
```

Can hold any type.

---

# How Type Switch Works

```text
Interface Value Received
        ↓
Runtime Type Checked
        ↓
Matching Case Executed
```

---

# Real-World Uses

## JSON Processing

## API Response Handling

## Middleware Systems

## Blockchain Smart Contract Engines

---

# Interactive Exercise

## Which case executes?

```go
checkType(true)
```

Answer:

```text
default
```

---

# 8. Switch vs If-Else

# Comparison Table

| Feature             | if-else       | switch               |
| ------------------- | ------------- | -------------------- |
| Best For            | Complex logic | Multiple fixed cases |
| Readability         | Medium        | High                 |
| Multiple Conditions | Possible      | Cleaner              |
| Fallthrough         | Manual        | Explicit             |

---

# When to Use `if`

Use for:

* Complex boolean logic
* Range checking
* Validation

---

# When to Use `switch`

Use for:

* Multiple discrete values
* State machines
* Command processing

---