# 6. Deferred Function Calls (defer)

## Definition

`defer` delays execution of a function until the surrounding function finishes.

---

## Syntax

```go
defer functionCall()
```

---

## Example

```go
func main() {
    fmt.Println("Start")

    defer fmt.Println("End")

    fmt.Println("Middle")
}
```

---

## Output

```text
Start
Middle
End
```

---

## Execution Rule

* Deferred calls run in **LIFO order** (Last In First Out)

---

## Real-Life Analogy

Like stacking plates:

* Last plate placed → first removed

---

## Use Cases

* Closing files
* Releasing resources
* Unlocking mutex

---