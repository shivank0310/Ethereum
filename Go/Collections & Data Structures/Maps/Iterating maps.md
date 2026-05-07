# Go Language — Iterating Maps (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What Does Iterating a Map Mean?
3. Basic Syntax (range)
4. Iterating Key-Value Pairs
5. Iterating Only Keys
6. Iterating Only Values
7. Order of Iteration (Very Important)
8. Step-by-Step Examples
9. Modifying Map During Iteration
10. Safe Patterns for Modification
11. Sorting Map Keys for Ordered Output
12. Nested Map Iteration
13. Common Mistakes
14. Best Practices
15. Interactive Exercises
16. Final Summary

---

# 1. Introduction

Iteration means **looping through all elements of a map**.

Since maps store data as key-value pairs, iteration allows you to process each pair.

---

# 2. What Does Iterating a Map Mean?

## Definition (Simple)

Iterating a map means accessing each key and its corresponding value one by one.

---

## Layman Explanation

Think of a map like a **contact list**:

* Name → Phone number

Iterating means going through each contact one by one.

---

# 3. Basic Syntax (range)

```go
for key, value := range mapName {
    // use key and value
}
```

---

# 4. Iterating Key-Value Pairs

## Example

```go
student := map[string]int{
    "math": 90,
    "science": 85,
}

for subject, marks := range student {
    fmt.Println(subject, marks)
}
```

---

## Output (order may vary)

```text
math 90
science 85
```

---

# 5. Iterating Only Keys

## Syntax

```go
for key := range mapName {
    fmt.Println(key)
}
```

---

## Example

```go
for subject := range student {
    fmt.Println(subject)
}
```

---

# 6. Iterating Only Values

## Syntax

```go
for _, value := range mapName {
    fmt.Println(value)
}
```

---

## Example

```go
for _, marks := range student {
    fmt.Println(marks)
}
```

---

# 7. Order of Iteration (Very Important)

## Rule

Maps in Go are **unordered**.

---

## Meaning

* Order is random
* Changes every run

---

## Example

```text
Run 1: math science
Run 2: science math
```

---

# 8. Step-by-Step Examples

## Example 1: Basic Iteration

```go
m := map[string]int{"a":1, "b":2}

for k, v := range m {
    fmt.Println(k, v)
}
```

---

## Example 2: Using condition

```go
for k, v := range m {
    if v > 1 {
        fmt.Println(k)
    }
}
```

---

# 9. Modifying Map During Iteration

## Important

* You can delete elements safely
* Adding elements is unpredictable

---

## Example (delete)

```go
for k := range m {
    delete(m, k)
}
```

---

# 10. Safe Patterns for Modification

## Pattern: Collect keys first

```go
keys := []string{}

for k := range m {
    keys = append(keys, k)
}

for _, k := range keys {
    m[k] = m[k] + 1
}
```

---

# 11. Sorting Map Keys for Ordered Output

## Why?

Maps are unordered

---

## Solution

```go
keys := []string{}

for k := range m {
    keys = append(keys, k)
}

sort.Strings(keys)

for _, k := range keys {
    fmt.Println(k, m[k])
}
```

---

# 12. Nested Map Iteration

## Example

```go
users := map[string]map[string]int{
    "u1": {"age": 25},
}

for user, details := range users {
    for k, v := range details {
        fmt.Println(user, k, v)
    }
}
```

---

# 13. Common Mistakes

* Assuming fixed order
* Modifying map incorrectly during iteration
* Ignoring blank identifier `_`

---

# 14. Best Practices

* Use range for iteration
* Do not rely on order
* Sort keys if order needed
* Use `_` when key/value not needed

---

# 15. Interactive Exercises

1. Iterate map and print all values
2. Print only keys
3. Filter values > 50
4. Sort keys and print in order

---

# 16. Final Summary

| Concept | Meaning        |
| ------- | -------------- |
| range   | Iterate map    |
| key     | Identifier     |
| value   | Data           |
| order   | Not guaranteed |

---

# Conclusion

Map iteration is essential for:

* Processing data
* Filtering values
* Building APIs
* Working with JSON

Understanding this helps you write robust Go programs.

---

End of Documentation
