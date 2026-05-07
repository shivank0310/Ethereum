# 4. Recursive Functions

## Definition

A recursive function is a function that **calls itself**.

---

## Important Concept

Every recursive function must have:

* Base case (stop condition)
* Recursive case

---

## Example — Factorial

```go
func factorial(n int) int {
    if n == 0 {
        return 1
    }
    return n * factorial(n-1)
}
```

---

## Execution Flow

```text
factorial(3)
→ 3 * factorial(2)
→ 2 * factorial(1)
→ 1 * factorial(0)
→ 1
```

---

## Real-Life Analogy

Think of:

> Russian dolls (one inside another)

---

## Warning

Without base case → infinite recursion → crash

---