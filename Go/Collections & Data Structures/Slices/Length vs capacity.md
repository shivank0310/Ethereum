# Go Language — Length vs Capacity (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What is Length?
3. What is Capacity?
4. Length vs Capacity (Core Difference)
5. Visual Understanding
6. How Length and Capacity Work in Slices
7. Examples Step-by-Step
8. How append() Affects Length & Capacity
9. Internal Growth Mechanism
10. Real-World Analogy
11. Common Mistakes
12. Best Practices
13. Interactive Exercises
14. Final Summary

---

# 1. Introduction

Understanding **length vs capacity** is one of the most important concepts in Go, especially when working with slices.

---

# 2. What is Length?

## Definition (Simple)

Length is the **number of elements currently present in the slice**.

---

## Example

```go
nums := []int{10, 20, 30}
```

```go
len(nums) // 3
```

---

## Key Idea

> Length = How many elements you are currently using

---

# 3. What is Capacity?

## Definition (Simple)

Capacity is the **total number of elements the slice can hold before it needs to grow**.

---

## Example

```go
nums := make([]int, 3, 5)
```

```go
len(nums) // 3
cap(nums) // 5
```

---

## Key Idea

> Capacity = Total space available from the starting point of slice

---

# 4. Length vs Capacity (Core Difference)

| Feature  | Length             | Capacity           |
| -------- | ------------------ | ------------------ |
| Meaning  | Used elements      | Total space        |
| Function | len()              | cap()              |
| Change   | Changes frequently | Changes less often |

---

# 5. Visual Understanding

```text
Slice:
[10 20 30 _ _]

Length = 3
Capacity = 5
```

---

# 6. How Length and Capacity Work in Slices

## Example

```go
arr := [5]int{10, 20, 30, 40, 50}
s := arr[1:3]
```

---

## Breakdown

```text
Slice elements: [20 30]
Length = 2
Capacity = 4 (from index 1 to end)
```

---

# 7. Examples Step-by-Step

## Step 1

```go
s := make([]int, 2, 4)
```

```text
Length = 2
Capacity = 4
```

---

## Step 2

```go
s = append(s, 10)
```

```text
Length = 3
Capacity = 4
```

---

## Step 3

```go
s = append(s, 20)
```

```text
Length = 4
Capacity = 4
```

---

## Step 4

```go
s = append(s, 30)
```

```text
Length = 5
Capacity = 8 (new array created)
```

---

# 8. How append() Affects Length & Capacity

## Case 1: Capacity Available

* Only length increases

## Case 2: Capacity Full

* New array created
* Capacity increases

---

# 9. Internal Growth Mechanism

## Simplified Rule

* Capacity doubles for small slices
* Slower growth for large slices

---

# 10. Real-World Analogy

Think of a **parking lot**:

* Length → cars parked
* Capacity → total parking spots

---

# 11. Common Mistakes

* Confusing length with capacity
* Assuming capacity equals length
* Not understanding reallocation

---

# 12. Best Practices

* Predefine capacity when possible
* Monitor capacity for performance
* Avoid unnecessary reallocations

---

# 13. Interactive Exercises

1. Create slice with len=3, cap=5
2. Append elements and track changes
3. Print len and cap at each step

---

# 14. Final Summary

| Concept  | Meaning                  |
| -------- | ------------------------ |
| Length   | Number of elements       |
| Capacity | Total available space    |
| append   | Changes both dynamically |

---

# Conclusion

Length and capacity are critical for understanding how slices work internally.

Mastering them helps in:

* Writing efficient code
* Avoiding memory issues
* Optimizing performance

---

End of Documentation
