# 8. Rune Type

# What is Rune?

`rune` represents:

```text
A Unicode code point
```

---

# Rune is Alias For

```go
int32
```

---

# Why Rune Exists

Handles Unicode characters correctly.

---

# Example

```go
package main

import "fmt"

func main() {
    var ch rune = 'A'
    fmt.Println(ch)
}
```

---

# Output

```text
65
```

Because:

```text
'A' → Unicode value 65
```

---

# Printing Character

```go
fmt.Printf("%c", ch)
```

Output:

```text
A
```

---

# Unicode Example

```go
var heart rune = '❤'
```

---

# Why Rune is Important

Useful for:

* Internationalization
* Unicode support
* Multi-language applications
* Emoji handling

---

# String vs Rune

| String                   | Rune                     |
| ------------------------ | ------------------------ |
| Collection of characters | Single Unicode character |

---

# Interactive Exercise

## What does rune store?

Answer:

```text
Unicode code point
```

---