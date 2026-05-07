# 6. Named Return Values

## Definition

Named return values are return variables declared in the function signature.

---

## Syntax

```go
func add(a, b int) (sum int)
```

---

## Example

```go
func add(a, b int) (sum int) {
    sum = a + b
    return
}
```

---

## How It Works

* `sum` is automatically created
* Function assigns value to it
* `return` returns it implicitly

---

## Advantages

* Improves readability
* Useful in large functions

---

## Disadvantages

* Can reduce clarity if overused

---