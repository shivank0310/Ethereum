# 9. The `iota` Identifier

# What is `iota`?

`iota` is a special Go identifier used for generating sequential constants.

---

# Why `iota` Exists

Useful for:

* Enums
* Status codes
* Bit masks
* Permission systems

---

# Basic Syntax

```go
const (
    A = iota
    B
    C
)
```

---

# Output Values

```text
A = 0
B = 1
C = 2
```

---

# How `iota` Works

* Starts at `0`
* Increments automatically
* Resets in new `const` block

---

# Example Program

```go
package main

import "fmt"

const (
    Red = iota
    Green
    Blue
)

func main() {
    fmt.Println(Red)
    fmt.Println(Green)
    fmt.Println(Blue)
}
```

---

# Output

```text
0
1
2
```

---

# Skipping Values

```go
const (
    A = iota
    _
    C
)
```

Result:

```text
A = 0
C = 2
```

---

# Using Expressions with `iota`

```go
const (
    KB = 1 << (10 * iota)
    MB
    GB
)
```

---

# Output

```text
KB = 1024
MB = 1048576
GB = 1073741824
```

---

# Real-World Use Cases

## File Size Units

## API Status Codes

## Blockchain Permission Levels

## Enum Systems

---

# Interactive Exercise

## Predict Value

```go
const (
    X = iota
    Y
)
```

What is value of `Y`?

Answer:

```text
1
```

---