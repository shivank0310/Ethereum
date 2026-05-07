# 8. `continue` Statement

# What is `continue`?

Skips current iteration.

Moves to next iteration.

---

# Example

```go
for i := 1; i <= 5; i++ {
    if i == 3 {
        continue
    }

    fmt.Println(i)
}
```

---

# Output

```text
1
2
4
5
```

---

# Execution Flow

```text
Condition Met
      ↓
Skip Remaining Code
      ↓
Next Iteration
```

---

# Real-World Uses

## Skip invalid blockchain transaction

## Ignore corrupted file line

## Skip unauthorized request

---

# Interactive Exercise

## Which number skipped?

```go
if i == 2 {
    continue
}
```

Answer:

```text
2
```

---