# 7. String Type

# What is a String?

Strings store text.

Examples:

```text
"Hello"
"GoLang"
"Blockchain"
```

---

# Syntax

```go
var name string = "Shiv"
```

---

# Strings are Immutable

Meaning:

```text
Cannot modify individual characters directly
```

---

# Example

```go
package main

import "fmt"

func main() {
    msg := "Hello"
    fmt.Println(msg)
}
```

---

# String Length

```go
len("Hello")
```

Output:

```text
5
```

---

# Multi-Line Strings

Using backticks:

```go
text := `Hello
World`
```

---

# String Concatenation

```go
first := "Go"
second := "Lang"

fmt.Println(first + second)
```

---

# Output

```text
GoLang
```

---

# UTF-8 Encoding

Go strings use:

```text
UTF-8
```

Supports Unicode characters.

---

# Use Cases

* User names
* Blockchain transaction hashes
* JSON APIs
* Messages
* Logs

---

# Interactive Exercise

## Length of:

```text
"Go"
```

Answer:

```text
2
```

---