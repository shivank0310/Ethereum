# 5. Complex Numbers

# What are Complex Numbers?

Complex numbers contain:

```text
Real Part + Imaginary Part
```

Format:

```text
a + bi
```

---

# Complex Types in Go

| Type         | Components    |
| ------------ | ------------- |
| `complex64`  | float32 parts |
| `complex128` | float64 parts |

---

# Example

```go
package main

import "fmt"

func main() {
    var c complex128 = 2 + 3i
    fmt.Println(c)
}
```

---

# Output

```text
(2+3i)
```

---

# Accessing Parts

```go
real(c)
imag(c)
```

---

# Example

```go
fmt.Println(real(c))
fmt.Println(imag(c))
```

---

# Output

```text
2
3
```

---

# Use Cases

Used in:

* Signal processing
* Quantum computing
* Electrical engineering
* Advanced mathematics

---

# Interactive Exercise

## What is imaginary part in:

```text
5 + 7i
```

Answer:

```text
7
```

---