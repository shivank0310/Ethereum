# Go Language — Type Switches (In-Depth, Layman-Friendly Documentation)

# Table of Contents

1. Introduction
2. What is a Type Switch?
3. Why Type Switches are Important
4. Real-World Analogy
5. Interface Recap
6. Why Type Switches are Needed
7. Syntax of Type Switch
8. Basic Type Switch Example
9. Understanding `.(type)`
10. Multiple Case Handling
11. Default Case
12. Type Switch with Empty Interface (`interface{}` / `any`)
13. Type Switch with Custom Interfaces
14. Type Switch vs Type Assertion
15. Type Switch vs Normal Switch
16. Internal Working of Type Switch
17. Real-World Use Cases
18. Performance Considerations
19. Common Mistakes
20. Best Practices
21. Interactive Exercises
22. Final Summary

---

# 1. Introduction

Type switches are an advanced feature in Go used when working with:

* Interfaces
* Empty interfaces (`interface{}` / `any`)
* Dynamic values
* JSON data
* Generic-like behavior

They allow Go programs to behave differently depending on the actual underlying type stored in an interface.

---

# 2. What is a Type Switch?

## Definition (Simple)

A type switch is a special switch statement used to determine the real type stored inside an interface.

Think of it like:

👉 “Check what type this interface contains and act accordingly.”

---

## Formal Definition

> A type switch is a switch construct that compares the dynamic type of an interface value against multiple possible types.

---

# 3. Why Type Switches are Important

Type switches help:

* Handle multiple types safely
* Avoid repeated type assertions
* Write flexible code
* Process dynamic data
* Build reusable systems

---

# 4. Real-World Analogy

Imagine:

👉 Security gate scanner

A person arrives.

Scanner checks:

* Student?
* Teacher?
* Visitor?

Then takes action.

Similarly:

Type switch checks:

* int?
* string?
* bool?

And behaves differently.

---

# 5. Interface Recap

Interfaces can hide real types.

Example:

```go
var x interface{}
```

Can store:

```go
x = 10
x = "Hello"
x = true
```

Compiler only sees:

```text
interface{}
```

Real type hidden.

---

# 6. Why Type Switches are Needed

Without type switch:

You may need many assertions.

Example:

```go
if str, ok := x.(string); ok {
}

if num, ok := x.(int); ok {
}
```

Messy.

Type switch makes this cleaner.

---

# 7. Syntax of Type Switch

## General Syntax

```go
switch variable := interfaceValue.(type) {
case Type1:
    // logic
case Type2:
    // logic
default:
    // fallback
}
```

---

## Important Rule

`.(type)` can ONLY be used inside:

👉 Type switch

---

# 8. Basic Type Switch Example

```go
package main

import "fmt"

func check(value interface{}) {
    switch v := value.(type) {
    case int:
        fmt.Println("Integer:", v)

    case string:
        fmt.Println("String:", v)

    case bool:
        fmt.Println("Boolean:", v)

    default:
        fmt.Println("Unknown Type")
    }
}

func main() {
    check(100)
    check("Go")
    check(true)
}
```

---

## Output

```text
Integer: 100
String: Go
Boolean: true
```

---

# 9. Understanding `.(type)`

This special syntax means:

👉 “Tell me actual type inside interface.”

---

Example:

```go
value.(type)
```

Not allowed outside type switch.

---

❌ Invalid

```go
x := value.(type)
```

Compiler error.

---

# 10. Multiple Case Handling

You can group types.

---

## Example

```go
switch v := x.(type) {
case int, float64:
    fmt.Println("Number", v)
}
```

---

# 11. Default Case

Used when no type matches.

---

## Example

```go
default:
    fmt.Println("Unsupported type")
```

---

# 12. Type Switch with Empty Interface (`interface{}` / `any`)

Most common use case.

---

## Example

```go
func printValue(value any) {
    switch v := value.(type) {
    case int:
        fmt.Println("Integer", v)

    case string:
        fmt.Println("String", v)

    case []int:
        fmt.Println("Slice", v)
    }
}
```

---

# 13. Type Switch with Custom Interfaces

## Example

```go
type Animal interface {
    Speak()
}
```

---

```go
switch v := animal.(type) {
case Dog:
    fmt.Println("Dog")
case Cat:
    fmt.Println("Cat")
}
```

---

# 14. Type Switch vs Type Assertion

## Type Assertion

Checks:

```text
One type only
```

---

## Type Switch

Checks:

```text
Multiple types
```

---

## Example Assertion

```go
str := x.(string)
```

---

## Example Switch

```go
switch x.(type)
```

---

# 15. Type Switch vs Normal Switch

## Normal Switch

Works on:

```text
Values
```

---

## Type Switch

Works on:

```text
Types
```

---

# 16. Internal Working of Type Switch

Go internally checks:

```text
Stored Interface Type
        ↓
Compare with Cases
        ↓
Match Found?
        ↓
Execute Matching Block
```

---

# 17. Real-World Use Cases

* JSON parsing
* API response handling
* Middleware frameworks
* Dynamic config systems
* Logging frameworks

---

# 18. Performance Considerations

Type switches are:

✅ Efficient

Usually preferred over repeated assertions.

---

# 19. Common Mistakes

* Using `.(type)` outside switch
* Forgetting default case
* Overusing dynamic behavior
* Confusing switch with assertion

---

# 20. Best Practices

* Prefer type switch for multiple checks
* Use assertions for one type
* Keep switch readable
* Add default case

---

# 21. Interactive Exercises

1. Create type switch
2. Handle string/int/bool
3. Add slice support
4. Use custom interface switch
5. Compare assertion vs switch

---

# 22. Final Summary

| Concept     | Meaning                |
| ----------- | ---------------------- |
| Type switch | Multiple type checking |
| `.(type)`   | Gets actual type       |
| Best use    | Interfaces             |
| Default     | Fallback case          |
| Alternative | Type assertions        |

---

# Conclusion

Type switches are essential for:

* Dynamic programming
* JSON handling
* Framework design
* Interface-based systems

Mastering type switches is critical for advanced Go development.

---

End of Documentation
