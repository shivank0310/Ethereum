# 5. Multiple Variable Declaration

# Declaring Multiple Variables

Go allows multiple variables in one statement.

---

# Syntax

```go
var a, b, c type
```

---

# Example

```go
var x, y int = 10, 20
```

---

# Different Types Together

```go
var (
    name string = "Shiv"
    age  int    = 25
    cgpa float64 = 8.5
)
```

---

# Short Syntax Multiple Variables

```go
name, age := "Shiv", 25
```

---

# Variable Swapping

Go supports easy swapping.

Example:

```go
x, y := 10, 20
x, y = y, x
```

---

# Output

```text
x = 20
y = 10
```

---

# Why Multiple Declaration is Useful

* Cleaner code
* Reduces repetition
* Useful in function returns
* Common in database handling

---

# Interactive Exercise

## Predict Output

```go
x, y := 5, 10
fmt.Println(x, y)
```

Output:

```text
5 10
```

---
