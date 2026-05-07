# 4. Return Values

## Definition

Return value is the output produced by a function after execution.

---

## Syntax

```go
func square(x int) int
```

---

## Example

```go
func square(x int) int {
    return x * x
}
```

---

## Important Rules

* Return type must match returned value
* `return` keyword is mandatory when return type exists

---

## Execution Flow

```text
Function executes
    ↓
return statement reached
    ↓
value sent back to caller
```

---