# Go Language — Map Operations (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction to Map Operations
2. Adding Elements to Map
3. Accessing Elements
4. Updating Elements
5. Deleting Elements
6. Checking Key Existence
7. Iterating Over Map
8. Copying a Map (Important Concept)
9. Nested Maps
10. Maps with Structs/Slices
11. Map Comparison (Important Rule)
12. Map Length
13. Clearing a Map
14. Common Mistakes
15. Best Practices
16. Interactive Exercises
17. Final Summary

---

# 1. Introduction to Map Operations

Map operations are actions you perform on a map such as:

* Insert (Add data)
* Retrieve (Read data)
* Update (Modify data)
* Delete (Remove data)

---

## Real-Life Analogy

Think of a **phonebook**:

* Add contact
* Search contact
* Update number
* Delete contact

---

# 2. Adding Elements to Map

## Syntax

```go
mapName[key] = value
```

---

## Example

```go
student := make(map[string]int)
student["math"] = 90
student["science"] = 85
```

---

# 3. Accessing Elements

## Syntax

```go
value := mapName[key]
```

---

## Example

```go
fmt.Println(student["math"])
```

---

## If Key Does Not Exist

Returns zero value

---

# 4. Updating Elements

## Example

```go
student["math"] = 95
```

---

## Explanation

* Existing key is overwritten

---

# 5. Deleting Elements

## Syntax

```go
delete(mapName, key)
```

---

## Example

```go
delete(student, "science")
```

---

## Important

* No error if key does not exist

---

# 6. Checking Key Existence

## Syntax

```go
value, ok := mapName[key]
```

---

## Example

```go
v, ok := student["physics"]

if ok {
    fmt.Println("Found:", v)
} else {
    fmt.Println("Not Found")
}
```

---

## Why Important?

Because zero value can confuse you

---

# 7. Iterating Over Map

## Syntax

```go
for key, value := range mapName {
    fmt.Println(key, value)
}
```

---

## Example

```go
for k, v := range student {
    fmt.Println(k, v)
}
```

---

## Important Rule

* Order is random

---

# 8. Copying a Map (Important Concept)

## Assignment

```go
m1 := map[string]int{"a":1}
m2 := m1
```

---

## Behavior

* Both point to same data

---

## Example

```go
m2["a"] = 100
fmt.Println(m1)
```

Output:

```text
map[a:100]
```

---

## Proper Copy (Manual)

```go
m2 := make(map[string]int)

for k, v := range m1 {
    m2[k] = v
}
```

---

# 9. Nested Maps

## Example

```go
users := map[string]map[string]int{
    "user1": {"age": 25},
}
```

---

## Access

```go
fmt.Println(users["user1"]["age"])
```

---

# 10. Maps with Structs/Slices

## Example

```go
data := map[string][]int{
    "scores": {90, 80, 70},
}
```

---

# 11. Map Comparison (Important Rule)

## Rule

Maps cannot be compared using ==

---

## Invalid

```go
if m1 == m2 {} // ERROR
```

---

## Only Allowed

```go
if m1 == nil {}
```

---

# 12. Map Length

## Syntax

```go
len(mapName)
```

---

## Example

```go
fmt.Println(len(student))
```

---

# 13. Clearing a Map

## Method 1: Loop delete

```go
for k := range student {
    delete(student, k)
}
```

---

## Method 2: Reinitialize

```go
student = make(map[string]int)
```

---

# 14. Common Mistakes

* Using nil map
* Assuming order
* Not checking key existence
* Thinking assignment copies map

---

# 15. Best Practices

* Always initialize maps
* Use meaningful keys
* Handle missing keys properly

---

# 16. Interactive Exercises

1. Create a map and insert values
2. Update existing key
3. Delete a key
4. Check key existence
5. Copy map manually

---

# 17. Final Summary

| Operation | Description      |
| --------- | ---------------- |
| Add       | Insert key-value |
| Access    | Retrieve value   |
| Update    | Modify value     |
| Delete    | Remove key       |
| Iterate   | Loop through map |

---

# Conclusion

Map operations are fundamental for working with real-world data.

They are used heavily in:

* Backend APIs
* JSON handling
* Databases
* Configuration systems

Mastering these operations is essential for building efficient Go applications.

---

End of Documentation
