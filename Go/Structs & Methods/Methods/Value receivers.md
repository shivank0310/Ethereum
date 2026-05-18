# Go Language — Value Receivers (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What is a Value Receiver?
3. Why Value Receivers are Important
4. Real-World Analogy
5. Method Receiver Recap
6. Syntax of Value Receivers
7. How Value Receivers Work Internally
8. Value Copy Behavior
9. Modifying Data with Value Receivers
10. Value Receiver vs Pointer Receiver
11. Memory Behavior
12. Methods on Non-Struct Types
13. When to Use Value Receivers
14. When NOT to Use Value Receivers
15. Method Sets and Interfaces
16. Common Mistakes
17. Best Practices
18. Interactive Exercises
19. Final Summary

---

# 1. Introduction

In Go, methods can use:

* Value receivers
* Pointer receivers

Understanding value receivers is extremely important because it affects:

* Memory behavior
* Data modification
* Performance
* Interface compatibility

---

# 2. What is a Value Receiver?

## Definition (Simple)

A value receiver is a method receiver that works on a copy of the original value.

---

## Formal Definition

> A value receiver is a method receiver where the method receives a copy of the value associated with the receiver type.

---

# 3. Why Value Receivers are Important

* Protect original data
* Useful for immutable behavior
* Simpler for small structs
* Safer in some situations

---

# 4. Real-World Analogy

Think of:

👉 Photocopy of a document

If you write on the photocopy:

* Original document remains unchanged

Value receivers behave similarly.

---

# 5. Method Receiver Recap

## Example Struct

```go
type User struct {
    Name string
}
```

---

## Value Receiver Method

```go
func (u User) Greet() {
    fmt.Println(u.Name)
}
```

---

# 6. Syntax of Value Receivers

## General Syntax

```go
func (receiver Type) MethodName() {
}
```

---

## Example

```go
func (u User) PrintName() {
    fmt.Println(u.Name)
}
```

---

# 7. How Value Receivers Work Internally

## Important Concept

When method is called:

```go
u.PrintName()
```

Go internally creates:

👉 A copy of `u`

---

## Visualization

```text
Original Struct ---> Copied Struct ---> Method Uses Copy
```

---

# 8. Value Copy Behavior

## Example

```go
package main

import "fmt"

type User struct {
    Name string
}

func (u User) ChangeName() {
    u.Name = "Ram"
    fmt.Println("Inside Method:", u.Name)
}

func main() {
    user := User{Name: "Shiv"}

    user.ChangeName()

    fmt.Println("Outside Method:", user.Name)
}
```

---

## Output

```text
Inside Method: Ram
Outside Method: Shiv
```

---

## Explanation

* Method changed only copied value
* Original struct unchanged

---

# 9. Modifying Data with Value Receivers

## Important Rule

Changes inside value receiver do NOT affect original data.

---

## Example

```go
func (u User) Update() {
    u.Name = "Updated"
}
```

Original remains same.

---

# 10. Value Receiver vs Pointer Receiver

## Value Receiver

```go
func (u User) Update()
```

* Uses copy
* Cannot modify original

---

## Pointer Receiver

```go
func (u *User) Update()
```

* Uses original memory address
* Can modify original

---

## Comparison Table

| Feature             | Value Receiver         | Pointer Receiver |
| ------------------- | ---------------------- | ---------------- |
| Copies data         | Yes                    | No               |
| Modify original     | No                     | Yes              |
| Memory efficient    | Less for large structs | Better           |
| Safer from mutation | Yes                    | No               |

---

# 11. Memory Behavior

## Small Structs

Value receivers are usually fine.

---

## Large Structs

Copying becomes expensive.

---

## Example Problem

```go
type LargeData struct {
    Data [100000]int
}
```

Using value receiver copies entire array.

---

# 12. Methods on Non-Struct Types

Value receivers work on custom types too.

---

## Example

```go
type Number int

func (n Number) Double() int {
    return int(n * 2)
}
```

---

# 13. When to Use Value Receivers

## Recommended When:

* Struct is small
* Method does not modify data
* Immutable behavior desired
* Simple utility methods

---

# 14. When NOT to Use Value Receivers

## Avoid When:

* Struct is large
* Need to modify original data
* Struct contains mutexes/synchronization

---

# 15. Method Sets and Interfaces

Value receiver methods belong to:

* Value type
* Pointer type

---

## Important Rule

If method uses value receiver:

Both can call it:

```go
u.Method()
(&u).Method()
```

---

# 16. Common Mistakes

* Expecting original modification
* Copying large structs unknowingly
* Mixing receiver types inconsistently

---

# 17. Best Practices

* Use value receivers for read-only methods
* Prefer pointer receivers for large structs
* Keep receiver usage consistent

---

# 18. Interactive Exercises

1. Create value receiver method
2. Try modifying original struct
3. Compare pointer vs value behavior
4. Create custom Number type method
5. Test method calls on pointer and value

---

# 19. Final Summary

| Concept        | Meaning                         |
| -------------- | ------------------------------- |
| Value receiver | Works on copy                   |
| Copy behavior  | Original unchanged              |
| Best use       | Small read-only structs         |
| Performance    | Can be costly for large structs |

---

# Conclusion

Value receivers are essential for understanding:

* Go memory behavior
* Method design
* Data safety
* Interface compatibility

Mastering them is critical for writing efficient and maintainable Go applications.

---

End of Documentation
