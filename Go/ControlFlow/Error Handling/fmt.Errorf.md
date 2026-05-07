# 9. `fmt.Errorf`

# What is `fmt.Errorf`?

Creates formatted errors.

---

# Why Important?

Allows dynamic error messages.

---

# Syntax

```go
fmt.Errorf(format, values)
```

---

# Example

```go
name := "wallet123"

err := fmt.Errorf("wallet %s not found", name)
```

---

# Output

```text
wallet wallet123 not found
```

---

# Difference Between `errors.New` and `fmt.Errorf`

| Feature            | errors.New | fmt.Errorf |
| ------------------ | ---------- | ---------- |
| Static message     | Yes        | Yes        |
| Dynamic formatting | No         | Yes        |
| Formatting verbs   | No         | Yes        |

---

# Using Formatting Verbs

```go
fmt.Errorf("invalid amount: %d", amount)
```

---

# Real-World Uses

## Blockchain transaction errors

## API request failures

## Database query failures

## Validation systems

---

# Interactive Exercise

## Which function supports formatting?

Answer:

```text
fmt.Errorf
```

---