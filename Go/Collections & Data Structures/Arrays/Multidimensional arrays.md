# Go Language — Multidimensional Arrays (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. What is a Multidimensional Array?
2. Why Multidimensional Arrays Matter
3. Types of Multidimensional Arrays
4. 2D Array Declaration
5. 2D Array Initialization
6. Accessing Elements in 2D Arrays
7. Updating Values
8. Iterating (Looping) Through 2D Arrays
9. 3D Arrays (Concept)
10. Memory Representation (Simple)
11. Real-World Use Cases
12. Common Mistakes
13. Best Practices
14. Interactive Exercises
15. Final Summary

---

# 1. What is a Multidimensional Array?

## Definition (Simple)

A **multidimensional array** is an array that contains other arrays as its elements.

---

## Layman Explanation

Think of it like a **table (rows and columns)**:

```text
[ [1, 2, 3],
  [4, 5, 6] ]
```

* Each row is an array
* The whole structure is a 2D array

---

## Formal Definition

> A multidimensional array is an array of arrays, allowing data to be stored in multiple dimensions (rows, columns, etc.).

---

# 2. Why Multidimensional Arrays Matter

They help represent:

* Tables (like Excel)
* Matrices (math)
* Grids (games, maps)
* Images (pixels)

---

# 3. Types of Multidimensional Arrays

## 1D Array

```text
[1, 2, 3]
```

## 2D Array (Most Common)

```text
[ [1,2,3], [4,5,6] ]
```

## 3D Array

```text
Stack of tables
```

---

# 4. 2D Array Declaration

## Syntax

```go
var arr [rows][columns]type
```

---

## Example

```go
var matrix [2][3]int
```

---

## Meaning

* 2 rows
* 3 columns

---

## Default Values

```text
[ [0 0 0]
  [0 0 0] ]
```

---

# 5. 2D Array Initialization

## Syntax

```go
arr := [2][3]int{
    {1, 2, 3},
    {4, 5, 6},
}
```

---

## Visual

```text
Row 0 → [1 2 3]
Row 1 → [4 5 6]
```

---

## Partial Initialization

```go
arr := [2][3]int{
    {1, 2},
}
```

Output:

```text
[ [1 2 0]
  [0 0 0] ]
```

---

# 6. Accessing Elements in 2D Arrays

## Syntax

```go
arr[row][column]
```

---

## Example

```go
fmt.Println(arr[0][1])
```

Output:

```text
2
```

---

## Rule

* Index starts from 0

---

# 7. Updating Values

## Example

```go
arr[1][2] = 10
```

---

## Result

```text
[ [1 2 3]
  [4 5 10] ]
```

---

# 8. Iterating Through 2D Arrays

## Using Nested Loops

```go
for i := 0; i < 2; i++ {
    for j := 0; j < 3; j++ {
        fmt.Println(arr[i][j])
    }
}
```

---

## Explanation

* Outer loop → rows
* Inner loop → columns

---

## Output Order

```text
1 2 3 4 5 6
```

---

# 9. 3D Arrays (Concept)

## Definition

Array of 2D arrays.

---

## Example

```go
var arr [2][2][2]int
```

---

## Visualization

```text
Layer 1
Layer 2
```

---

# 10. Memory Representation (Simple)

Data is stored in **continuous memory**, row by row.

---

## Visual

```text
[1][2][3][4][5][6]
```

---

## Why Important

* Faster access
* Better performance

---

# 11. Real-World Use Cases

* Game boards (tic-tac-toe)
* Matrix operations
* Image processing
* Maps and grids

---

# 12. Common Mistakes

## Mistake 1

Wrong indexing

```go
arr[2][3] // out of range
```

---

## Mistake 2

Confusing rows and columns

---

## Mistake 3

Incorrect size declaration

---

# 13. Best Practices

* Use clear row/column logic
* Keep dimensions simple
* Use loops for traversal

---

# 14. Interactive Exercises

## Exercise 1

Create 2x2 array

---

## Exercise 2

Print all elements

---

## Exercise 3

Update one value

---

## Exercise 4

Create 3D array

---

# 15. Final Summary

| Concept                | Meaning         |
| ---------------------- | --------------- |
| Multidimensional array | Array of arrays |
| 2D array               | Rows + columns  |
| Access                 | arr[i][j]       |
| Iteration              | Nested loops    |

---

# Conclusion

Multidimensional arrays are powerful for handling structured data.

They are widely used in:

* Data processing
* Backend systems
* Scientific computing
* Game development

Mastering this helps you understand:

* Matrices
* Data grids
* Complex data structures

---

End of Documentation
