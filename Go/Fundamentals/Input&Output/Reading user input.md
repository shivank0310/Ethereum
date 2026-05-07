# 7. Reading User Input

# Why User Input Matters

Applications interact with users.

Examples:

* Login systems
* Blockchain wallets
* Banking systems
* CLI tools

---

# `fmt.Scan`

Reads input separated by spaces.

---

# Example

```go
package main

import "fmt"

func main() {
    var name string

    fmt.Print("Enter your name: ")
    fmt.Scan(&name)

    fmt.Println("Hello", name)
}
```

---

# Important Concept — Address Operator `&`

```go
&name
```

Passes memory address.

Go stores input directly into variable.

---

# Execution Flow

```text
User Types Input
        ↓
Scan Reads Input
        ↓
Value Stored in Variable
```

---

# Multiple Inputs

```go
var name string
var age int

fmt.Scan(&name, &age)
```

---

# Input Example

```text
Shiv 25
```

---

# `fmt.Scanln`

Reads until newline.

---

# `fmt.Scanf`

Formatted input.

Example:

```go
fmt.Scanf("%s %d", &name, &age)
```

---

# Common Input Problems

## Spaces in String

`Scan` stops at spaces.

Example:

```text
Shiv Singh
```

Only:

```text
Shiv
```

Read.

---

# Better Alternative

Using:

```go
bufio.NewReader
```

Advanced topic.

---

# Interactive Exercise

## Why use `&name`?

Answer:

```text
To pass variable memory address
```

---