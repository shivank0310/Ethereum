# 5. Multiple Return Values

## Definition

Go allows functions to return more than one value.

---

## Why This Feature Exists

Used heavily in:

* Error handling
* Returning multiple results
* Efficient coding

---

## Syntax

```go
func divide(a, b int) (int, int)
```

---

## Example

```go
func divide(a, b int) (int, int) {
    return a / b, a % b
}
```

---

## Calling

```go
q, r := divide(10, 3)
```

---

## Ignoring Values

```go
q, _ := divide(10, 3)
```

---

## Important Concept

The `_` (blank identifier):

* Ignores unwanted values

---