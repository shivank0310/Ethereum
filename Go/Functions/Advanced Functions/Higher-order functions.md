# 5. Higher-Order Functions

## Definition

A higher-order function is a function that:

* Takes another function as input OR
* Returns a function

---

## Why It Matters

Allows dynamic behavior

---

## Example

```go
func operate(a, b int, op func(int, int) int) int {
    return op(a, b)
}
```

---

## Usage

```go
add := func(x, y int) int {
    return x + y
}

result := operate(2, 3, add)
```

---

## Real-Life Analogy

Like:

> Giving instructions to a machine

---

## Use Cases

* Middleware
* Callbacks
* Functional programming

---