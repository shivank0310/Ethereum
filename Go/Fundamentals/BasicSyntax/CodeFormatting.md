# 1. Code Formatting with `gofmt`

# What is `gofmt`?

`gofmt` is Go's automatic code formatter.

It formats Go code into a standard style.

---

# Why Go Uses Strict Formatting

Benefits:

* Consistent code style
* Better readability
* Easier collaboration
* Cleaner code reviews

---

# Example Before Formatting

```go
package main
import "fmt"
func main(){fmt.Println("Hello")}
```

---

# After `gofmt`

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello")
}
```

---

# How to Use `gofmt`

## Format a File

```bash
gofmt -w main.go
```

---

# Meaning of `-w`

`-w` means:

> Write changes back to the file.

---

# Format Entire Project

```bash
gofmt -w .
```

---

# Formatting Inside VS Code

Usually automatic on save.

Settings:

```json
"editor.formatOnSave": true
```

---

# What `gofmt` Fixes

## Indentation

## Spacing

## Alignment

## Import organization

## Blank lines

---

# Example of Import Formatting

Before:

```go
import(
"fmt"
"os"
)
```

After:

```go
import (
    "fmt"
    "os"
)
```

---

# Industry Importance

In Go:

* Almost all projects use `gofmt`
* Open-source repositories require formatted code
* CI/CD pipelines often verify formatting

---

# Interactive Understanding

## Question

Should developers manually align Go code?

### Answer

Usually no.

`gofmt` handles formatting automatically.

---