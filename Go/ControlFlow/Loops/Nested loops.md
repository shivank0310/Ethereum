# 6. Nested Loops

# What are Nested Loops?

Loop inside another loop.

---

# Syntax

```go
for i := 0; i < 3; i++ {
    for j := 0; j < 2; j++ {
    }
}
```

---

# Example

```go
for i := 1; i <= 3; i++ {
    for j := 1; j <= 2; j++ {
        fmt.Println(i, j)
    }
}
```

---

# Output

```text
1 1
1 2
2 1
2 2
3 1
3 2
```

---

# Execution Flow

```text
Outer Loop Starts
       ↓
Inner Loop Runs Completely
       ↓
Outer Loop Updates
       ↓
Repeat
```

---

# Real-World Uses

## Matrix processing

## Blockchain data traversal

## Grid systems

## Game development

## Table generation

---

# Performance Warning

Nested loops can become expensive.

Example:

```text
O(n²)
```

Complexity.

---

# Interactive Exercise

## How many times inner loop executes?

```go
for i := 0; i < 2; i++ {
    for j := 0; j < 3; j++ {
    }
}
```

Answer:

```text
6 times
```

---