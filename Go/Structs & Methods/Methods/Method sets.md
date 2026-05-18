# Go Language — Method Sets (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What are Method Sets?
3. Why Method Sets are Important
4. Real-World Analogy
5. Methods Recap
6. Understanding Receiver Types
7. Method Set Rules
8. Method Sets for Value Types
9. Method Sets for Pointer Types
10. Automatic Method Calls in Go
11. Method Sets and Interfaces
12. Method Promotion with Embedded Structs
13. Value vs Pointer Receiver Behavior
14. Common Interface Problems
15. Memory and Performance Implications
16. Common Mistakes
17. Best Practices
18. Interactive Exercises
19. Final Summary

---

# 1. Introduction

Method sets are one of the most important and confusing concepts in Go.

They directly affect:

* Interfaces
* Polymorphism
* Method accessibility
* Receiver behavior
* Object design

Understanding method sets is essential for advanced Go development.

---

# 2. What are Method Sets?

## Definition (Simple)

A method set is the collection of methods available for a specific type.

---

## Formal Definition

> A method set is the set of methods that can be called on a particular type according to Go's receiver rules.

---

# 3. Why Method Sets are Important

Method sets determine:

* Which methods can be called
* Whether a type satisfies an interface
* Value vs pointer behavior

---

# 4. Real-World Analogy

Think of:

👉 Membership access card

Different cards provide access to different rooms.

Similarly:

* Value types get some methods
* Pointer types get more methods

---

# 5. Methods Recap

## Example Struct

```go
type User struct {
    Name string
}
```

---

## Value Receiver Method

```go
func (u User) Print() {}
```

---

## Pointer Receiver Method

```go
func (u *User) Update() {}
```

---

# 6. Understanding Receiver Types

## Two Main Receiver Types

| Receiver Type    | Example   |
| ---------------- | --------- |
| Value receiver   | (u User)  |
| Pointer receiver | (u *User) |

---

# 7. Method Set Rules

## Most Important Rules in Go

---

## Rule 1

### Value Type Method Set

Contains:

✅ Only value receiver methods

---

## Rule 2

### Pointer Type Method Set

Contains:

✅ Value receiver methods
✅ Pointer receiver methods

---

# 8. Method Sets for Value Types

## Example

```go
type User struct{}

func (u User) A() {}
func (u *User) B() {}
```

---

## Value Type

```go
var u User
```

Method set contains:

```text
A()
```

---

## Important

`u.B()` works because Go automatically takes address.

But method set still only contains:

```text
A()
```

---

# 9. Method Sets for Pointer Types

## Example

```go
var p *User
```

Method set contains:

```text
A()
B()
```

---

# 10. Automatic Method Calls in Go

Go provides convenience.

---

## Example

```go
u.B()
```

Go internally converts:

```go
(&u).B()
```

---

## Important

This convenience does NOT change method set rules.

---

# 11. Method Sets and Interfaces

This is where method sets become extremely important.

---

## Interface Example

```go
type Speaker interface {
    Speak()
}
```

---

## Struct Example

```go
type User struct{}

func (u *User) Speak() {}
```

---

## Valid

```go
var s Speaker

u := &User{}
s = u
```

---

## Invalid

```go
u := User{}
s = u
```

---

## Why?

Value type method set does NOT contain pointer receiver methods.

---

# 12. Method Promotion with Embedded Structs

## Example

```go
type Person struct{}

func (p Person) Talk() {}

type Employee struct {
    Person
}
```

---

## Usage

```go
e.Talk()
```

---

Embedded methods are promoted into outer method set.

---

# 13. Value vs Pointer Receiver Behavior

## Value Receiver

* Safer
* Copy-based
* Small immutable structs

---

## Pointer Receiver

* Efficient
* Modifies original data
* Large structs

---

# 14. Common Interface Problems

## Most Common Error

```text
Type does not implement interface
```

---

## Cause

Wrong receiver type.

---

## Example

```go
func (u *User) Run() {}
```

Only:

```go
*User
```

Implements interface.

---

# 15. Memory and Performance Implications

## Value Receivers

* Copy data
* Can be expensive

---

## Pointer Receivers

* Shared memory
* Better for performance

---

# 16. Common Mistakes

* Mixing receiver types randomly
* Misunderstanding interface errors
* Assuming automatic calls change method sets

---

# 17. Best Practices

* Use pointer receivers consistently
* Prefer pointer receivers for structs
* Understand interface implications
* Avoid mixed receiver patterns

---

# 18. Interactive Exercises

1. Create value and pointer methods
2. Print method sets conceptually
3. Create interface implementation
4. Test interface assignment errors
5. Use embedded structs with methods

---

# 19. Final Summary

| Type         | Method Set                       |
| ------------ | -------------------------------- |
| Value type   | Value receiver methods           |
| Pointer type | Value + Pointer receiver methods |

---

## Key Learning

| Concept                 | Meaning                    |
| ----------------------- | -------------------------- |
| Method set              | Available methods for type |
| Value type              | Limited method set         |
| Pointer type            | Larger method set          |
| Interface compatibility | Depends on method set      |

---

# Conclusion

Method sets are critical for:

* Interfaces
* Polymorphism
* Receiver design
* Advanced Go architecture

Mastering method sets is essential for becoming an expert Go developer.

---

End of Documentation
