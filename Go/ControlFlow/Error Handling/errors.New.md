# 8. `errors.New`

# What is `errors.New`?

Creates simple error value.

---

# Import

```go
import "errors"
```

---

# Syntax

```go
errors.New("message")
```

---

# Example

```go
err := errors.New("transaction failed")
```

---

# Output

```text
transaction failed
```

---

# Internal Behavior

Creates error object implementing:

```go
error interface
```

---

# Example Function

```go
func validate(age int) error {
    if age < 18 {
        return errors.New("underage")
    }

    return nil
}
```

---

# Why Use `errors.New`?

Useful for:

* Simple validation errors
* Fixed error messages
* Custom application logic

---

# Real-World Uses

## Authentication failure

## Invalid blockchain transaction

## Permission denied

---

# Interactive Exercise

## What does `errors.New` return?

Answer:

```text
An error value
```

---