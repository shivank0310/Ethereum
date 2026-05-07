# 9. Byte Type

# What is Byte?

`byte` is alias for:

```go
uint8
```

---

# Byte Stores

```text
Raw binary data
```

---

# Example

```go
package main

import "fmt"

func main() {
    var b byte = 65
    fmt.Println(b)
}
```

---

# Output

```text
65
```

---

# Character Representation

```go
fmt.Printf("%c", b)
```

Output:

```text
A
```

---

# Byte vs Rune

| Byte          | Rune            |
| ------------- | --------------- |
| 8-bit         | 32-bit          |
| ASCII focused | Unicode focused |
| `uint8`       | `int32`         |

---

# Byte Slice

```go
[]byte("Hello")
```

Converts string to byte array.

---

# Use Cases

* File handling
* Network programming
* Blockchain serialization
* Cryptography
* Binary protocols

---

# Interactive Exercise

## `byte` is alias for?

Answer:

```text
uint8
```

---