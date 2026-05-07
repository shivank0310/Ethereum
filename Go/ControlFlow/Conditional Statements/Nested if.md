# 5. Nested `if` Statements

# What is Nested `if`?

An `if` statement inside another `if`.

---

# Syntax

```go
if condition1 {
    if condition2 {
    }
}
```

---

# Example

```go
package main

import "fmt"

func main() {
    age := 25
    hasID := true

    if age >= 18 {
        if hasID {
            fmt.Println("Access Granted")
        }
    }
}
```

---

# Output

```text
Access Granted
```

---

# Real-World Uses

## Banking

```text
If account active
    If balance sufficient
        Process transaction
```

---

## Blockchain

```text
If transaction valid
    If signature verified
        Approve block
```

---

# Problem with Excessive Nesting

Too much nesting causes:

* Hard readability
* Complex debugging
* Difficult maintenance

---

# Better Alternative

Use:

* Early returns
* Switch statements
* Helper functions

---

# Interactive Exercise

## Will this execute?

```go
if true {
    if false {
        fmt.Println("Hello")
    }
}
```

Answer:

No.

---
