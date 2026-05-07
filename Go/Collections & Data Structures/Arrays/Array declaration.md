# Go Language — Array Declaration (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. What is an Array?
2. Why Arrays Matter
3. Key Characteristics of Arrays in Go
4. Basic Array Declaration
5. Different Ways to Declare Arrays
6. Accessing Array Elements
7. Updating Array Values
8. Array Length and Indexing Rules
9. Memory Behavior (Simple Explanation)
10. Arrays vs Slices (Quick Insight)
11. Common Mistakes
12. Best Practices
13. Interactive Exercises
14. Final Summary

---

# 1. What is an Array?

## Definition (Simple)

An **array** is a collection of elements of the **same data type** stored together in a fixed-size structure.

---

## Layman Explanation

Think of an array like a **row of boxes**:

```text
[10] [20] [30] [40]
```

* Each box holds a value
* Each box has a position (index)

---

## Formal Definition

> An array is a fixed-size, ordered collection of elements of the same type stored in contiguous memory locations.

---

# 2. Why Arrays Matter

Arrays help you:

* Store multiple values in one variable
* Organize data efficiently
* Access data quickly using index

---

## Real-Life Example

Imagine storing marks of 5 students:

Instead of:

```go
m1 := 80
m2 := 90
m3 := 75
```

Use:

```go
marks := [5]int{80, 90, 75, 60, 85}
```

---

# 3. Key Characteristics of Arrays in Go

* Fixed size (cannot change later)
* Same data type for all elements
* Indexed (starts from 0)
* Stored in continuous memory

---

# 4. Basic Array Declaration

## Syntax

```go
var arrayName [size]type
```

---

## Example

```go
var numbers [5]int
```

---

## What This Means

* `numbers` is an array
* It can store 5 integers

---

## Default Values

```text
[0 0 0 0 0]
```

Go initializes automatically.

---

# 5. Different Ways to Declare Arrays

## 1. Declare Without Initialization

```go
var arr [3]int
```

Output:

```text
[0 0 0]
```

---

## 2. Declare with Values

```go
arr := [3]int{10, 20, 30}
```

---

## 3. Partial Initialization

```go
arr := [5]int{1, 2}
```

Output:

```text
[1 2 0 0 0]
```

---

## 4. Let Go Count Size

```go
arr := [...]int{10, 20, 30}
```

Go automatically sets size to 3.

---

## 5. Specific Index Initialization

```go
arr := [5]int{0: 10, 3: 50}
```

Output:

```text
[10 0 0 50 0]
```

---

# 6. Accessing Array Elements

## Syntax

```go
arrayName[index]
```

---

## Example

```go
arr := [3]int{10, 20, 30}

fmt.Println(arr[0])
```

Output:

```text
10
```

---

## Important Rule

Index starts from:

```text
0 (not 1)
```

---

# 7. Updating Array Values

## Example

```go
arr := [3]int{10, 20, 30}
arr[1] = 50
```

Output:

```text
[10 50 30]
```

---

# 8. Array Length and Indexing Rules

## Length

```go
len(arr)
```

---

## Example

```go
fmt.Println(len(arr))
```

---

## Index Rule

Valid indexes:

```text
0 to size-1
```

---

## Invalid Example

```go
arr[3] // error if size is 3
```

---

## Error Type

```text
Index out of range
```

---

# 9. Memory Behavior (Simple Explanation)

Arrays store data in **continuous memory locations**.

---

## Why This Matters

* Faster access
* Efficient iteration

---

## Visual

```text
Memory:
[10][20][30][40]
```

---

# 10. Arrays vs Slices (Quick Insight)

| Feature     | Array | Slice   |
| ----------- | ----- | ------- |
| Size        | Fixed | Dynamic |
| Flexibility | Low   | High    |
| Usage       | Rare  | Common  |

---

# 11. Common Mistakes

## 1. Index Out of Range

```go
arr[5]
```

---

## 2. Wrong Size Assumption

```go
[3]int != [4]int
```

---

## 3. Thinking Arrays are Dynamic

They are NOT.

---

# 12. Best Practices

* Use arrays when size is fixed
* Prefer slices for flexibility
* Always check index bounds

---

# 13. Interactive Exercises

## Exercise 1

Create array of 5 integers

---

## Exercise 2

Print 3rd element

---

## Exercise 3

Update 2nd value

---

## Exercise 4

Find length of array

---

## Exercise 5

Initialize array using `...`

---

# 14. Final Summary

| Concept        | Meaning               |
| -------------- | --------------------- |
| Array          | Fixed-size collection |
| Index          | Position of element   |
| Declaration    | Creating array        |
| Initialization | Assigning values      |
| Length         | Number of elements    |

---

# Conclusion

Arrays are the **foundation of data storage** in Go.

They help you:

* Store structured data
* Access elements efficiently
* Build advanced data structures

Understanding arrays is important before learning:

* Slices (very important)
* Maps
* Structs

---

End of Documentation
