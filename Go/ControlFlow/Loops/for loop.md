# Go Language — Loops Detailed Documentation

---

# Table of Contents

1. Introduction to Loops
2. Why Loops Matter
3. The `for` Loop
4. Infinite Loops
5. Range Loop
6. Nested Loops
7. `break` Statement
8. `continue` Statement
9. Labels in Go
10. Execution Flow Analysis
11. Loop Performance Concepts
12. Practical Examples
13. Best Practices
14. Common Beginner Mistakes
15. Mini Exercises
16. Final Summary

---

# 1. Introduction to Loops

# What are Loops?

Loops allow programs to:

```text
Repeat a block of code multiple times
```

---

# Real-World Analogy

| Task                               | Loop Behavior                |
| ---------------------------------- | ---------------------------- |
| Sending notifications              | Repeat for all users         |
| Processing blockchain transactions | Repeat for every transaction |
| Reading file lines                 | Repeat until file ends       |
| API request handling               | Repeat for incoming requests |

---

# Why Loops Matter

Without loops:

* Repetitive code increases
* Programs become inefficient
* Automation becomes impossible

---

# Example Without Loop

```go
fmt.Println(1)
fmt.Println(2)
fmt.Println(3)
```

---

# Better With Loop

```go
for i := 1; i <= 3; i++ {
    fmt.Println(i)
}
```

---

# Interactive Understanding

## Question

Why are loops important?

### Answer

They automate repetitive tasks efficiently.

---

# 2. Why Loops Matter

# Loops are Used In

## Blockchain block validation

## Transaction processing

## APIs

## Database operations

## Microservices

## File processing

## Networking

## Automation systems

---

# Example

```go
for i := 0; i < 100; i++ {
    processTransaction()
}
```

---

# Go Has Only One Loop

Go simplifies looping.

Unlike other languages:

```text
No while
No do-while
```

Only:

```go
for
```

---

# 3. The `for` Loop

# What is `for` Loop?

Used to repeatedly execute code.

---

# Syntax

```go
for initialization; condition; update {
    // code
}
```

---

# Components

| Component      | Purpose                 |
| -------------- | ----------------------- |
| Initialization | Start variable          |
| Condition      | Loop continuation check |
| Update         | Value modification      |

---

# Example

```go
package main

import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        fmt.Println(i)
    }
}
```

---

# Output

```text
1
2
3
4
5
```

---

# Execution Flow

```text
Initialization
      ↓
Condition Check
      ↓
True? → Execute Block
      ↓
Update
      ↓
Repeat
```

---

# Step-by-Step Execution

```go
for i := 1; i <= 3; i++
```

---

# Iteration 1

```text
i = 1
1 <= 3 → true
Print 1
```

---

# Iteration 2

```text
i = 2
2 <= 3 → true
Print 2
```

---

# Iteration 3

```text
i = 3
3 <= 3 → true
Print 3
```

---

# Iteration 4

```text
i = 4
4 <= 3 → false
Loop Ends
```

---

# Different Variations

# Only Condition

```go
i := 0

for i < 5 {
    fmt.Println(i)
    i++
}
```

Acts like:

```text
while loop
```

---

# Omitting Parts

```go
for ; ; {
}
```

Creates infinite loop.

---

# Interactive Exercise

## Predict Output

```go
for i := 0; i < 3; i++ {
    fmt.Println(i)
}
```

Answer:

```text
0
1
2
```

---

# 11. Loop Performance Concepts

# Why Loop Performance Matters

Loops are heavily used.

Inefficient loops can:

* Slow systems
* Increase CPU usage
* Reduce blockchain throughput
* Cause scalability issues

---

# Complexity Examples

| Loop Type   | Complexity |
| ----------- | ---------- |
| Single loop | O(n)       |
| Nested loop | O(n²)      |

---

# Optimization Tips

## Avoid unnecessary nesting

## Use break when possible

## Minimize expensive operations inside loops

## Use range efficiently

---

# 12. Practical Examples

# Example 1 — Sum Numbers

```go
sum := 0

for i := 1; i <= 5; i++ {
    sum += i
}
```

---

# Example 2 — Range Over Slice

```go
nums := []int{1,2,3}

for _, n := range nums {
    fmt.Println(n)
}
```

---

# Example 3 — Infinite Server Loop

```go
for {
    listenRequests()
}
```

---

# Example 4 — Continue

```go
if invalid {
    continue
}
```

---

# Example 5 — Labeled Break

```go
break Outer
```

---

# 13. Best Practices

# Keep Loops Readable

---

# Avoid Deep Nesting

---

# Use Range for Collections

---

# Use Break to Improve Efficiency

---

# Avoid Infinite Loops Without Exit

---

# 14. Common Beginner Mistakes

# Mistake 1 — Infinite Loop Accidentally

---

# Mistake 2 — Wrong Loop Condition

---

# Mistake 3 — Modifying Loop Variable Incorrectly

---

# Mistake 4 — Confusing Break and Continue

---

# Mistake 5 — Excessive Nested Loops

---

# 15. Mini Exercises

# Exercise 1

Print numbers 1 to 10.

---

# Exercise 2

Create infinite loop and stop at 5.

---

# Exercise 3

Iterate slice using range.

---

# Exercise 4

Use nested loop to print table.

---

# Exercise 5

Use labeled break.

---

# 16. Final Summary

| Topic         | Purpose               |
| ------------- | --------------------- |
| `for` loop    | Repetition            |
| Infinite loop | Continuous execution  |
| Range loop    | Iterate collections   |
| Nested loops  | Multi-level iteration |
| `break`       | Exit loop             |
| `continue`    | Skip iteration        |
| Labels        | Control nested loops  |

---

# Conclusion

Loops are fundamental building blocks in Go.

They power:

* APIs
* Blockchain systems
* Networking
* Automation
* File systems
* Backend servers
* Distributed systems

Mastering loops improves:

* Algorithmic thinking
* Performance optimization
* System scalability
* Backend engineering skills

---

# Recommended Next Topics

1. Functions
2. Arrays
3. Slices
4. Maps
5. Structs
6. Pointers
7. Interfaces
8. Error Handling
9. Goroutines
10. Channels

---

End of Documentation
