# 3. Parameters

## Definition

Parameters are variables used to receive input values when a function is called.

---

## Syntax

```go
func add(a int, b int)
```

---

## Explanation

* `a` and `b` are parameters
* `int` is their type

---

## Short Syntax

```go
func add(a, b int)
```

---

## Example

```go
func add(a, b int) int {
    return a + b
}
```

### Calling

```go
result := add(5, 3)
```

---

## Key Concepts

* Parameters are **local variables**
* Values are passed during function call

---

## Types of Parameter Passing

Go uses **pass by value** by default:

* Copy of value is passed
* Original variable is not modified

---