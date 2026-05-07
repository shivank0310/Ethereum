# 9. Labels in Go

# What are Labels?

Labels help control nested loops.

---

# Why Labels Matter

Normally:

```go
break
```

Only exits nearest loop.

Labels allow exiting outer loop.

---

# Syntax

```go
Outer:
for {
    for {
        break Outer
    }
}
```

---

# Example

```go
package main

import "fmt"

func main() {

Outer:
    for i := 1; i <= 3; i++ {
        for j := 1; j <= 3; j++ {
            if i == 2 && j == 2 {
                break Outer
            }

            fmt.Println(i, j)
        }
    }
}
```

---

# Output

```text
1 1
1 2
1 3
2 1
```

---

# Label with Continue

```go
continue Outer
```

Moves directly to next outer iteration.

---

# Real-World Uses

## Complex transaction processing

## Multi-level validation systems

## Blockchain traversal systems

---

# Important Warning

Avoid excessive labels.

Can reduce readability.

---

# Interactive Exercise

## What does labeled break do?

Answer:

```text
Exits specified loop
```

---

# 10. Execution Flow Analysis

# Standard Loop Flow

```text
Initialization
      ↓
Condition Check
      ↓
Execute Block
      ↓
Update
      ↓
Repeat
```

---

# Break Flow

```text
break encountered
      ↓
Loop terminates immediately
```

---

# Continue Flow

```text
continue encountered
      ↓
Skip remaining iteration
      ↓
Next iteration begins
```

---
