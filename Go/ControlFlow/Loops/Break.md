# 7. `break` Statement

# What is `break`?

Immediately exits loop.

---

# Example

```go
for i := 1; i <= 10; i++ {
    if i == 5 {
        break
    }

    fmt.Println(i)
}
```

---

# Output

```text
1
2
3
4
```

---

# Execution Flow

```text
Condition Met
      ↓
Loop Terminates
```

---

# Real-World Uses

## Stop transaction processing on failure

## Exit authentication loop

## Stop server operations

---

# `break` in Switch

Go switch automatically breaks.

Usually no need for explicit `break`.

---

# Interactive Exercise

## Which value stops loop?

```go
if i == 3 {
    break
}
```

Answer:

```text
3
```

---