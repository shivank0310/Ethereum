# 6. Boolean Type

# What is Boolean?

Boolean represents:

```text
true or false
```

---

# Syntax

```go
var isActive bool = true
```

---

# Example

```go
package main

import "fmt"

func main() {
    loggedIn := true
    fmt.Println(loggedIn)
}
```

---

# Output

```text
true
```

---

# Why Booleans Matter

Used heavily in:

* Conditions
* Authentication
* API validation
* Blockchain verification
* Feature toggles

---

# Boolean Operations

| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `&&`     | AND     |   |    |
| `        |         | ` | OR |
| `!`      | NOT     |   |    |

---

# Example

```go
fmt.Println(true && false)
```

Output:

```text
false
```

---

# Interactive Exercise

## Result?

```go
!true
```

Answer:

```text
false
```

---