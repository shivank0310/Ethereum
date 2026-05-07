# 8. Increment and Decrement Operators

# What are Increment/Decrement Operators?

Used to increase or decrease value by 1.

---

# Increment (`++`)

```go
x := 5
x++
```

Result:

```text
6
```

---

# Decrement (`--`)

```go
x--
```

Result:

```text
5
```

---

# Important Rule in Go

`++` and `--` are statements.

NOT expressions.

---

# Valid

```go
x++
```

---

# Invalid

```go
y := x++
```

Error.

---

# Why Go Designed This Way

Improves:

* Simplicity
* Readability
* Predictability

---

# Common Usage

## Loops

```go
for i := 0; i < 5; i++ {
}
```

---

# Interactive Exercise

## Result?

```go
x := 10
x--
```

Answer:

```text
9
```

---