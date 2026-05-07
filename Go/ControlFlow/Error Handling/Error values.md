# Go Language — Error Handling Basics Detailed Documentation

---

# Table of Contents

1. Introduction to Error Handling
2. Why Error Handling Matters
3. Philosophy of Error Handling in Go
4. Understanding Error Values
5. The `error` Interface
6. Returning Errors from Functions
7. Checking Errors
8. `errors.New`
9. `fmt.Errorf`
10. Error Wrapping
11. Execution Flow Analysis
12. Practical Examples
13. Best Practices
14. Common Beginner Mistakes
15. Mini Exercises
16. Final Summary

---

# 1. Introduction to Error Handling

# What is Error Handling?

Error handling is the process of:

```text
Detecting and managing failures in programs
```

---

# Real-World Analogy

| Situation                    | Error                |
| ---------------------------- | -------------------- |
| Wrong password               | Authentication error |
| Insufficient balance         | Transaction error    |
| Missing file                 | File error           |
| Invalid blockchain signature | Validation error     |

---

# Why Errors Matter

Programs can fail because of:

* Invalid input
* Network issues
* File problems
* Database failures
* Blockchain validation failures
* API errors

---

# Without Error Handling

Programs may:

* Crash unexpectedly
* Lose data
* Become insecure
* Produce incorrect results

---

# Error Handling Flow

```text
Operation Executed
        ↓
Success? → Continue
Failure? → Return Error
        ↓
Handle Error
```

---

# Interactive Understanding

## Question

Why should programs handle errors?

### Answer

To prevent crashes and handle failures safely.

---

# 2. Why Error Handling Matters

# Error Handling is Critical In

## Banking systems

## Blockchain systems

## APIs

## Databases

## Distributed systems

## Authentication systems

## File systems

---

# Example

```go
file, err := os.Open("data.txt")
```

Possible failures:

* File missing
* Permission denied
* Corrupted file

---

# Go’s Philosophy

Go prefers:

```text
Explicit error handling
```

Instead of hidden exceptions.

---

# Why Go Avoids Exceptions by Default

Exceptions can:

* Hide failures
* Reduce readability
* Make debugging harder

Go chooses simplicity and predictability.

---

# 3. Philosophy of Error Handling in Go

# Key Principle

In Go:

```text
Errors are values
```

---

# Meaning

Errors are treated like normal data.

You can:

* Store them
* Pass them
* Compare them
* Return them

---

# Common Pattern

```go
result, err := someFunction()

if err != nil {
    // handle error
}
```

---

# Understanding `nil`

`nil` means:

```text
No error
```

---

# Execution Flow

```text
Function Called
       ↓
Error Occurred?
       ↓
Yes → err contains value
No → err = nil
```

---

# Why This Design is Powerful

Provides:

* Simplicity
* Explicit control
* Predictability
* Better readability

---

# Interactive Exercise

## What does `err != nil` mean?

Answer:

```text
An error occurred
```

---

# 4. Understanding Error Values

# What is an Error Value?

An error value represents:

```text
Information about failure
```

---

# Example

```go
err := errors.New("file not found")
```

---

# Error Value Contains

* Error message
* Failure description

---

# Error Values are Objects

Errors implement Go’s:

```go
error interface
```

---

# Example Function Returning Error

```go
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }

    return a / b, nil
}
```

---

# Output Cases

## Success

```text
result = value
err = nil
```

---

## Failure

```text
result = default value
err = error object
```

---

# Why Return Both Result and Error?

Allows caller to:

* Get successful result
* Handle failure safely

---

# Interactive Exercise

## What happens when divisor is 0?

Answer:

```text
Error returned
```

---

# 5. The `error` Interface

# What is `error` Interface?

Built-in interface in Go.

---

# Definition

```go
type error interface {
    Error() string
}
```

---

# Meaning

Any type implementing:

```go
Error() string
```

Becomes an error.

---

# Example

```go
type MyError struct {}

func (m MyError) Error() string {
    return "custom error"
}
```

---

# Why Interfaces Matter

Allows flexible error systems.

Used heavily in:

* APIs
* Databases
* Blockchain frameworks
* Networking

---

# Error Message Extraction

```go
fmt.Println(err.Error())
```

---

# Shortcut

```go
fmt.Println(err)
```

Automatically calls:

```go
Error()
```

---

# Interactive Exercise

## Which method makes type an error?

Answer:

```text
Error() string
```

---

# 6. Returning Errors from Functions

# Standard Pattern

```go
func function() (valueType, error)
```

---

# Example

```go
func login(password string) (bool, error) {
    if password != "admin" {
        return false, errors.New("invalid password")
    }

    return true, nil
}
```

---

# Calling Function

```go
success, err := login("123")

if err != nil {
    fmt.Println(err)
    return
}

fmt.Println(success)
```

---

# Why Immediate Error Checking Matters

Prevents:

* Invalid state
* Crashes
* Security issues

---

# Common Go Style

```go
if err != nil {
    return err
}
```

---

# Interactive Exercise

## Why check errors immediately?

Answer:

```text
To stop invalid execution flow
```

---

# 7. Checking Errors

# Basic Error Checking

```go
if err != nil {
    // handle error
}
```

---

# Example

```go
file, err := os.Open("data.txt")

if err != nil {
    fmt.Println("Error:", err)
    return
}
```

---

# Why `nil` Comparison?

Because:

```text
nil = no error
```

---

# Error Handling Strategies

## Log Error

## Retry Operation

## Return Error

## Exit Program

## Ignore Error (rarely recommended)

---

# Example — Retry Concept

```text
If network fails
→ Retry request
```

---

# Important Principle

Never ignore important errors.

---

# Bad Practice

```go
file, _ := os.Open("data.txt")
```

---

# Why Dangerous?

Error becomes invisible.

Can cause:

* Unexpected crashes
* Security issues
* Corrupted state

---

# Interactive Exercise

## What does `_` do?

Answer:

```text
Ignores value
```

---

# 10. Error Wrapping

# What is Error Wrapping?

Adding context to existing error.

---

# Why Wrapping Matters

Helps debugging complex systems.

---

# Example

```go
err := fmt.Errorf("database error: %w", originalErr)
```

---

# `%w` Verb

Special verb for wrapping errors.

---

# Benefits

* Preserves original error
* Adds context
* Improves debugging

---

# Real-World Example

```text
API Error
   ↓
Database Error
   ↓
Connection Error
```

Wrapping preserves full chain.

---

# Example Function

```go
func save() error {
    err := databaseCall()

    if err != nil {
        return fmt.Errorf("save failed: %w", err)
    }

    return nil
}
```

---

# Interactive Exercise

## Which verb wraps errors?

Answer:

```text
%w
```

---

# 11. Execution Flow Analysis

# Error Handling Flow

```text
Function Executes
       ↓
Failure?
   ↓        ↓
Yes         No
↓           ↓
Return      Continue
Error       Execution
```

---

# Error Propagation

```text
Low-Level Error
       ↓
Wrapped
       ↓
Returned Upward
       ↓
Handled at Higher Layer
```

---

# 12. Practical Examples

# Example 1 — Division Error

```go
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }

    return a / b, nil
}
```

---

# Example 2 — Formatted Error

```go
fmt.Errorf("user %s not found", name)
```

---

# Example 3 — Error Checking

```go
if err != nil {
    fmt.Println(err)
}
```

---

# Example 4 — Error Wrapping

```go
fmt.Errorf("request failed: %w", err)
```

---

# 13. Best Practices

# Check Errors Immediately

---

# Add Meaningful Context

---

# Use Wrapping for Large Systems

---

# Avoid Ignoring Errors

---

# Keep Error Messages Clear

---

# Return Errors Instead of Panic

---

# 14. Common Beginner Mistakes

# Mistake 1 — Ignoring Errors

---

# Mistake 2 — Generic Error Messages

---

# Mistake 3 — Not Wrapping Errors

---

# Mistake 4 — Using Panic Unnecessarily

---

# Mistake 5 — Delayed Error Checking

---

# 15. Mini Exercises

# Exercise 1

Create function returning error.

---

# Exercise 2

Use `errors.New`.

---

# Exercise 3

Use `fmt.Errorf`.

---

# Exercise 4

Handle division-by-zero error.

---

# Exercise 5

Wrap existing error using `%w`.

---

# 16. Final Summary

| Topic             | Purpose                 |
| ----------------- | ----------------------- |
| Error values      | Represent failures      |
| `error` interface | Standard error behavior |
| `errors.New`      | Create simple errors    |
| `fmt.Errorf`      | Create formatted errors |
| Error wrapping    | Add debugging context   |

---

# Conclusion

Error handling is one of the most important concepts in Go.

It is critical for:

* APIs
* Backend systems
* Blockchain platforms
* Distributed systems
* Networking
* Databases
* Authentication systems

Go’s explicit error handling approach improves:

* Reliability
* Readability
* Debugging
* System stability
* Production safety

Mastering error handling is essential for writing professional Go applications.

---

# Recommended Next Topics

1. Panic and Recover
2. Functions
3. Arrays
4. Slices
5. Maps
6. Structs
7. Interfaces
8. File Handling
9. Goroutines
10. Channels

---

End of Documentation
