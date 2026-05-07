# 6. Zero Values in Go

# What are Zero Values?

When variables are declared without initialization,
Go automatically assigns default values.

These are called:

```text
Zero Values
```

---

# Why Zero Values Matter

Prevents:

* Garbage values
* Undefined behavior
* Random memory data

---

# Zero Values Table

| Type      | Zero Value |
| --------- | ---------- |
| `int`     | `0`        |
| `float64` | `0.0`      |
| `string`  | `""`       |
| `bool`    | `false`    |
| `pointer` | `nil`      |

---

# Example

```go
package main

import "fmt"

func main() {
    var age int
    var name string
    var active bool

    fmt.Println(age)
    fmt.Println(name)
    fmt.Println(active)
}
```

---

# Output

```text
0

false
```

---

# Memory Safety Advantage

Languages like C may contain garbage values.

Go initializes variables safely.

---

# Real-World Importance

Used heavily in:

* APIs
* Backend services
* Blockchain systems
* Network programming

---

# Interactive Exercise

## What is zero value of `bool`?

Answer:

```text
false
```

---