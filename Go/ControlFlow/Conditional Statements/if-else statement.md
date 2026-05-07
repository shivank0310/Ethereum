# 4. The `if-else` Statement

# What is `if-else`?

Provides alternative execution.

---

# Syntax

```go
if condition {
    // true block
} else {
    // false block
}
```

---

# Example

```go
package main

import "fmt"

func main() {
    age := 15

    if age >= 18 {
        fmt.Println("Adult")
    } else {
        fmt.Println("Minor")
    }
}
```

---

# Output

```text
Minor
```

---

# Execution Flow

```text
Condition Checked
      ↓
True? → if block
False? → else block
```

---

# `else if`

Used for multiple conditions.

---

# Example

```go
marks := 75

if marks >= 90 {
    fmt.Println("A")
} else if marks >= 70 {
    fmt.Println("B")
} else {
    fmt.Println("C")
}
```

---

# Output

```text
B
```

---

# Why `else if` Matters

Useful for:

* Grading systems
* API status handling
* Blockchain validation levels
* Role-based access

---

# Interactive Exercise

## Result?

```go
x := 10

if x < 5 {
    fmt.Println("Small")
} else {
    fmt.Println("Large")
}
```

Answer:

```text
Large
```

---
