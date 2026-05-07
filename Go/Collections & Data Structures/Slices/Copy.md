# Go Language — copy() Function (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction to copy()
2. What is copy()?
3. Why copy() is Important
4. Basic Syntax
5. How copy() Works
6. Simple Example
7. Copy Between Slices
8. Partial Copy Behavior
9. Copy vs Assignment (Very Important)
10. Internal Working of copy()
11. Real-World Analogy
12. Common Mistakes
13. Best Practices
14. Interactive Exercises
15. Final Summary

---

# 1. Introduction to copy()

The `copy()` function is used to **duplicate data from one slice to another**.

It is very important for avoiding unintended data changes.

---

# 2. What is copy()?

## Definition (Simple)

`copy()` copies elements from a source slice into a destination slice.

---

## Formal Definition

> copy() is a built-in function that copies elements from a source slice into a destination slice and returns the number of elements copied.

---

# 3. Why copy() is Important

Because:

* Slices share memory
* Changes in one slice can affect another
* copy() prevents this issue

---

# 4. Basic Syntax

```go
copy(destination, source)
```

---

# 5. How copy() Works

* Elements are copied one by one
* Copy stops when either slice ends

---

# 6. Simple Example

```go
src := []int{1, 2, 3}
dst := make([]int, 3)

copy(dst, src)

fmt.Println(dst)
```

Output:

```text
[1 2 3]
```

---

# 7. Copy Between Slices

## Example

```go
src := []int{10, 20, 30}
dst := make([]int, 5)

copy(dst, src)
```

---

## Output

```text
[10 20 30 0 0]
```

---

# 8. Partial Copy Behavior

## Case 1: Destination smaller

```go
src := []int{1,2,3,4}
dst := make([]int, 2)

copy(dst, src)
```

Output:

```text
[1 2]
```

---

## Case 2: Source smaller

```go
src := []int{1,2}
dst := make([]int, 4)

copy(dst, src)
```

Output:

```text
[1 2 0 0]
```

---

# 9. Copy vs Assignment (Very Important)

## Assignment

```go
s1 := []int{1,2,3}
s2 := s1
```

---

## Result

* Both share same memory

---

## Example

```go
s2[0] = 100
fmt.Println(s1)
```

Output:

```text
[100 2 3]
```

---

## Using copy()

```go
s1 := []int{1,2,3}
s2 := make([]int, len(s1))

copy(s2, s1)
```

---

## Result

* Independent slices

---

# 10. Internal Working of copy()

* Copies values, not references
* Creates independent data

---

# 11. Real-World Analogy

Think of:

* Assignment → sharing same notebook
* copy() → making a photocopy

---

# 12. Common Mistakes

* Not allocating destination slice
* Confusing assignment with copy
* Ignoring length differences

---

# 13. Best Practices

* Always allocate destination slice properly
* Use copy() when isolation is needed
* Check sizes before copying

---

# 14. Interactive Exercises

1. Copy slice into another
2. Test assignment vs copy
3. Try partial copy
4. Modify copied slice and observe

---

# 15. Final Summary

| Concept      | Meaning         |
| ------------ | --------------- |
| copy         | Duplicate data  |
| Assignment   | Share memory    |
| Partial copy | Limited by size |

---

# Conclusion

The `copy()` function is essential for:

* Safe data handling
* Avoiding bugs
* Managing memory correctly

Mastering this helps in building reliable Go applications.

---

End of Documentation
