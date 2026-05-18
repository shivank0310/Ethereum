# Go Language — Method Declaration (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What is a Method?
3. Why Methods are Important
4. Function vs Method
5. Real-World Analogy
6. Method Declaration Syntax
7. Understanding Receivers
8. Value Receiver Methods
9. Pointer Receiver Methods
10. Method Calls
11. Methods with Parameters
12. Methods with Return Values
13. Methods on Different Types
14. Methods and Structs
15. Method Sets (Basic Idea)
16. Memory Behavior
17. Common Mistakes
18. Best Practices
19. Interactive Exercises
20. Final Summary

---

# 1. Introduction

Methods are one of the most important features in Go.

They allow you to attach behavior to data types.

Methods are heavily used in:

* APIs
* Backend systems
* Interfaces
* Blockchain applications
* Object-like programming in Go

---

# 2. What is a Method?

## Definition (Simple)

A method is a function attached to a specific type.

---

## Formal Definition

> A method in Go is a function with a receiver argument that associates the function with a particular type.

---

# 3. Why Methods are Important

* Organize related behavior
* Improve code readability
* Enable object-like design
* Support interfaces

---

# 4. Function vs Method

## Function

```go
func greet(name string) {}
```

---

## Method

```go
func (u User) greet() {}
```

---

## Difference

| Feature              | Function | Method |
| -------------------- | -------- | ------ |
| Attached to type     | No       | Yes    |
| Receiver             | No       | Yes    |
| Object-like behavior | No       | Yes    |

---

# 5. Real-World Analogy

Think of:

👉 Car data + actions

Struct stores:

* Brand
* Speed

Methods define actions:

* Start()
* Stop()
* Accelerate()

---

# 6. Method Declaration Syntax

## General Syntax

```go
func (receiver ReceiverType) MethodName() {
}
```

---

## Example

```go
type User struct {
    Name string
}

func (u User) Greet() {
    fmt.Println("Hello", u.Name)
}
```

---

# 7. Understanding Receivers

## Definition

Receiver is the parameter between `func` and method name.

---

## Example

```go
func (u User) Greet() {}
```

* `u` → receiver variable
* `User` → receiver type

---

# 8. Value Receiver Methods

## Example

```go
func (u User) ChangeName(name string) {
    u.Name = name
}
```

---

## Explanation

* Struct copy used
* Original data unchanged

---

# 9. Pointer Receiver Methods

## Example

```go
func (u *User) ChangeName(name string) {
    u.Name = name
}
```

---

## Explanation

* Original struct modified
* Efficient for large structs

---

# 10. Method Calls

## Example

```go
u := User{Name: "Shiv"}
u.Greet()
```

---

## Important

Go automatically handles pointer method calls.

---

# 11. Methods with Parameters

## Example

```go
func (u User) Add(a int, b int) int {
    return a + b
}
```

---

# 12. Methods with Return Values

## Example

```go
func (u User) GetName() string {
    return u.Name
}
```

---

# 13. Methods on Different Types

Methods are not limited to structs.

---

## Example

```go
type Number int

func (n Number) Double() int {
    return int(n * 2)
}
```

---

# 14. Methods and Structs

Methods help structs behave like objects.

---

## Example

```go
type BankAccount struct {
    Balance int
}

func (b *BankAccount) Deposit(amount int) {
    b.Balance += amount
}
```

---

# 15. Method Sets (Basic Idea)

Method set determines:

* Which methods belong to type
* Interface compatibility

---

## Basic Rule

| Type    | Access                  |
| ------- | ----------------------- |
| Value   | Value methods           |
| Pointer | Value + Pointer methods |

---

# 16. Memory Behavior

## Value Receiver

* Entire struct copied

---

## Pointer Receiver

* Shared memory
* Better performance

---

# 17. Common Mistakes

* Using value receiver when modification needed
* Mixing receiver types
* Confusing methods and functions

---

# 18. Best Practices

* Use pointer receivers for structs
* Keep methods related to type behavior
* Use consistent receiver naming

---

# 19. Interactive Exercises

1. Create User struct with Greet method
2. Add pointer receiver method
3. Create custom Number type method
4. Build BankAccount methods
5. Compare value vs pointer behavior

---

# 20. Final Summary

| Concept          | Meaning                   |
| ---------------- | ------------------------- |
| Method           | Function attached to type |
| Receiver         | Method owner              |
| Value receiver   | Works on copy             |
| Pointer receiver | Works on original         |
| Method call      | object.Method()           |

---

# Conclusion

Method declarations are essential for:

* Object-like programming
* APIs and services
* Interface design
* Scalable Go applications

Mastering methods is critical for professional Go development.

---

End of Documentation
