# 4. Floating-Point Types

# What are Floating-Point Numbers?

Floating-point numbers store decimal values.

Examples:

```text
3.14
10.5
99.99
```

---

# Floating Types in Go

| Type      | Size   | Precision        |
| --------- | ------ | ---------------- |
| `float32` | 32-bit | Lower precision  |
| `float64` | 64-bit | Higher precision |

---

# Why `float64` is Common

Provides:

* Better precision
* More accurate calculations

---

# Example

```go
package main

import "fmt"

func main() {
    var pi float64 = 3.14159
    fmt.Println(pi)
}
```

---

# Floating-Point Precision Issue

```go
fmt.Println(0.1 + 0.2)
```

Output may be:

```text
0.30000000000000004
```

---

# Why This Happens

Because computers store decimals in binary.

Some decimal values cannot be represented exactly.

---

# Scientific Notation

Go supports scientific notation.

```go
x := 1.2e3
```

Means:

```text
1200
```

---

# Use Cases

* Scientific calculations
* Financial systems
* Blockchain gas calculations
* Physics engines

---

# Interactive Exercise

## Which has better precision?

* `float32`
* `float64`

Answer:

```text
float64
```

---
