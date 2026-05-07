# 3. Closures

## Definition

A closure is a function that **remembers variables from its outer scope**, even after that scope has finished execution.

---

## Simple Explanation

> Function + remembered environment = Closure

---

## Example

```go
func counter() func() int {
    count := 0

    return func() int {
        count++
        return count
    }
}
```

---

## Usage

```go
c := counter()

fmt.Println(c()) // 1
fmt.Println(c()) // 2
```

---

## Why It Works

* `count` is preserved
* Function remembers its state

---

## Real-Life Analogy

Like a **bank account**:

* Balance persists between operations

---

## Use Cases

* State management
* Counters
* Caching

---