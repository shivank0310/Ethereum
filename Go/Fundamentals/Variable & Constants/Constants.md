# 7. Constants in Go

# What are Constants?

Constants are immutable values.

Once declared:

```text
Cannot be changed
```

---

# Syntax

```go
const name type = value
```

---

# Example

```go
const pi float64 = 3.14
```

---

# Constant Characteristics

* Fixed value
* Read-only
* Compile-time evaluated
* Improves code safety

---

# Why Constants are Important

Used for:

* Configuration values
* Mathematical constants
* Blockchain gas limits
* API status codes
* Application settings

---

# Example Program

```go
package main

import "fmt"

func main() {
    const appName = "HyperledgerApp"
    fmt.Println(appName)
}
```

---

# Attempting Modification

```go
const x = 10
x = 20
```

Error:

```text
cannot assign to x
```

---

# Multiple Constants

```go
const (
    port = 8080
    host = "localhost"
)
```

---

# Interactive Understanding

## Can constants change?

Answer:

No.

---

# 8. Typed vs Untyped Constants

# Typed Constants

A typed constant has explicit data type.

Example:

```go
const age int = 25
```

---

# Untyped Constants

No explicit type.

Example:

```go
const pi = 3.14
```

---

# Why Untyped Constants are Powerful

Untyped constants are flexible.

Example:

```go
const x = 10

var a int = x
var b float64 = x
```

Works correctly.

---

# Typed Constant Restriction

```go
const x int = 10

var y float64 = x
```

May require conversion.

---

# Compiler Behavior

Untyped constants exist with:

```text
Arbitrary precision
```

Until used.

---

# Example

```go
const big = 1000000000000000000
```

Go handles large constants efficiently.

---

# Comparison Table

| Feature           | Typed     | Untyped  |
| ----------------- | --------- | -------- |
| Explicit Type     | Yes       | No       |
| Flexible          | Less      | More     |
| Conversion Needed | Sometimes | Often No |

---

# Interactive Exercise

## Identify Type

```go
const x = 100
```

Answer:

Untyped constant.

---