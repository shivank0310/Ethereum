# Go Language — Array Initialization (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. What is Array Initialization?
2. Difference: Declaration vs Initialization
3. Basic Array Initialization
4. Types of Array Initialization
5. Partial Initialization
6. Index-based Initialization
7. Auto-size Initialization (...)
8. Zero Values in Initialization
9. Initialization with Loops (Conceptual)
10. Memory Understanding
11. Common Mistakes
12. Best Practices
13. Interactive Exercises
14. Final Summary

---

# 1. What is Array Initialization?

## Definition (Simple)

Array initialization means **assigning values to an array at the time of creation or later**.

---

## Layman Explanation

Think of an array like empty boxes:

```text
[ ] [ ] [ ] [ ]
```

Initialization means **putting values into those boxes**:

```text
[10] [20] [30] [40]
```

---

## Formal Definition

> Array initialization is the process of assigning initial values to the elements of an array.

---

# 2. Difference: Declaration vs Initialization

| Concept        | Meaning                  |
| -------------- | ------------------------ |
| Declaration    | Creating array structure |
| Initialization | Assigning values         |

---

## Example

```go
var arr [3]int        // Declaration
arr = [3]int{1,2,3}  // Initialization
```

---

# 3. Basic Array Initialization

## Syntax

```go
arrayName := [size]type{values}
```

---

## Example

```go
arr := [3]int{10, 20, 30}
```

---

## What Happens Internally

* Memory is allocated
* Values are stored sequentially

---

# 4. Types of Array Initialization

## Type 1: Direct Initialization

```go
arr := [3]int{1, 2, 3}
```

---

## Type 2: Using var keyword

```go
var arr = [3]int{1, 2, 3}
```

---

## Type 3: Separate Declaration + Initialization

```go
var arr [3]int
arr = [3]int{1, 2, 3}
```

---

# 5. Partial Initialization

## Definition

Only some elements are initialized, rest get default values.

---

## Example

```go
arr := [5]int{10, 20}
```

---

## Output

```text
[10 20 0 0 0]
```

---

## Why?

Unassigned elements get **zero value**.

---

# 6. Index-based Initialization

## Definition

Assign values to specific indexes.

---

## Syntax

```go
arr := [size]type{index: value}
```

---

## Example

```go
arr := [5]int{0: 10, 3: 50}
```

---

## Output

```text
[10 0 0 50 0]
```

---

## Use Case

When you want to initialize only specific positions.

---

# 7. Auto-size Initialization (...)

## Definition

Let Go automatically determine array size.

---

## Syntax

```go
arr := [...]int{values}
```

---

## Example

```go
arr := [...]int{10, 20, 30, 40}
```

---

## What Happens

Go counts elements → sets size automatically.

---

## Output

```text
[10 20 30 40]
```

---

# 8. Zero Values in Initialization

## Definition

If values are not provided, Go assigns default values.

---

## Defaults

| Type   | Default Value |
| ------ | ------------- |
| int    | 0             |
| float  | 0.0           |
| bool   | false         |
| string | ""            |

---

## Example

```go
var arr [3]int
```

Output:

```text
[0 0 0]
```

---

# 9. Initialization with Loops (Conceptual)

Sometimes values are assigned dynamically.

---

## Example

```go
var arr [5]int

for i := 0; i < 5; i++ {
    arr[i] = i * 10
}
```

---

## Output

```text
[0 10 20 30 40]
```

---

# 10. Memory Understanding (Simple)

Arrays store values in **continuous memory blocks**.

---

## Visual

```text
Index:  0   1   2   3
Value: [10][20][30][40]
```

---

## Why Important?

* Fast access
* Efficient processing

---

# 11. Common Mistakes

## Mistake 1: Size mismatch

```go
arr := [3]int{1,2,3,4} // ERROR
```

---

## Mistake 2: Confusing slices with arrays

```go
[]int ≠ [3]int
```

---

## Mistake 3: Forgetting default values

---

# 12. Best Practices

* Use `...` when size is unknown
* Use index-based init for sparse data
* Prefer slices for dynamic use

---

# 13. Interactive Exercises

## Exercise 1

Create array with 4 values

---

## Exercise 2

Initialize only index 2 and 4

---

## Exercise 3

Use `...` to auto-size

---

## Exercise 4

Print default values array

---

# 14. Final Summary

| Concept        | Meaning               |
| -------------- | --------------------- |
| Initialization | Assigning values      |
| Partial init   | Some values assigned  |
| Index init     | Specific positions    |
| Auto-size      | Compiler decides size |
| Zero values    | Default values        |

---

# Conclusion

Array initialization is a **core concept** in Go programming.

It helps you:

* Store data efficiently
* Control memory usage
* Build structured programs

Understanding this properly is essential before learning:

* Slices (most important)
* Data structures
* Backend systems

---

End of Documentation
