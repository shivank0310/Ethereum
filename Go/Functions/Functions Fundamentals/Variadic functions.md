# 7. Variadic Functions

## Definition

Variadic functions accept a variable number of arguments.

---

## Syntax

```go
func sum(nums ...int)
```

---

## How It Works Internally

* Arguments are converted into a slice

---

## Example

```go
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}
```

---

## Calling

```go
sum(1,2,3,4)
```

---

## Passing Slice

```go
arr := []int{1,2,3}
sum(arr...)
```

---

## Use Cases

* Logging systems
* Utility functions
* APIs

---