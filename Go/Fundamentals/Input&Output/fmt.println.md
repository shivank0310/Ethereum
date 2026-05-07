# 4. `fmt.Println`

# What is `fmt.Println`?

`fmt.Println` prints output and automatically:

* Adds spaces between arguments
* Adds newline at end

---

# Syntax

```go
fmt.Println(values)
```

---

# Example

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello")
    fmt.Println("Go")
}
```

---

# Output

```text
Hello
Go
```

---

# Automatic Spaces

```go
fmt.Println("Age:", 25)
```

Output:

```text
Age: 25
```

---

# Why `Println` is Popular

* Cleaner output
* Easier debugging
* Better readability

---

# Comparison

| Function  | Newline | Automatic Spaces |
| --------- | ------- | ---------------- |
| `Print`   | No      | No               |
| `Println` | Yes     | Yes              |

---

# Interactive Exercise

## Output?

```go
fmt.Println("Go", "Lang")
```

Answer:

```text
Go Lang
```

---