# 7. Panic and Recover

## Panic Definition

`panic` stops normal execution of program.

---

## Example

```go
panic("something went wrong")
```

---

## Behavior

* Program crashes
* Deferred functions still run

---

## Recover Definition

`recover` is used to handle panic and resume execution.

---

## Example

```go
func safe() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered:", r)
        }
    }()

    panic("error occurred")
}
```

---

## Output

```text
Recovered: error occurred
```

---

## Real-Life Analogy

* Panic = system crash
* Recover = backup system restoring control

---

## When to Use

* Critical failures
* System-level recovery

---

## Important Rule

Do NOT use panic for normal errors.

---