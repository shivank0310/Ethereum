# Go Language — Embedded Structs (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What are Embedded Structs?
3. Why Embedded Structs are Important
4. Real-World Analogy
5. Basic Struct Recap
6. Syntax of Embedded Structs
7. Creating Embedded Structs
8. Accessing Embedded Fields
9. Method Promotion in Embedded Structs
10. Embedded Structs vs Nested Structs
11. Multiple Embedded Structs
12. Anonymous Field Concept
13. Pointer Embedded Structs
14. Memory Behavior
15. Real-World Use Cases
16. Common Mistakes
17. Best Practices
18. Interactive Exercises
19. Final Summary

---

# 1. Introduction

Go does not support classical inheritance like some object-oriented languages.

Instead, Go encourages:

👉 Composition over inheritance

Embedded structs are one of the main tools used for composition.

---

# 2. What are Embedded Structs?

## Definition (Simple)

An embedded struct is a struct included inside another struct without explicitly giving it a field name.

---

## Formal Definition

> An embedded struct is a struct type declared as an anonymous field within another struct, allowing direct access to its fields and methods.

---

# 3. Why Embedded Structs are Important

* Reuse code
* Share fields and methods
* Build complex structures cleanly
* Simulate inheritance behavior

---

# 4. Real-World Analogy

Think of:

👉 Employee contains Person details

Instead of rewriting:

* Name
* Age
* Address

You embed the Person struct.

---

# 5. Basic Struct Recap

## Person Struct

```go
type Person struct {
    Name string
    Age  int
}
```

---

# 6. Syntax of Embedded Structs

## Example

```go
type Employee struct {
    Person
    Company string
}
```

---

## Explanation

* `Person` becomes embedded field
* No separate field name required

---

# 7. Creating Embedded Structs

## Example

```go
e := Employee{
    Person: Person{
        Name: "Shiv",
        Age:  25,
    },
    Company: "TechCorp",
}
```

---

# 8. Accessing Embedded Fields

## Two Ways

### Explicit Access

```go
fmt.Println(e.Person.Name)
```

---

### Promoted Access

```go
fmt.Println(e.Name)
```

---

## Explanation

Go automatically promotes embedded fields.

---

# 9. Method Promotion in Embedded Structs

## Example

```go
func (p Person) Greet() {
    fmt.Println("Hello", p.Name)
}
```

---

## Usage

```go
e.Greet()
```

---

## Explanation

Methods of embedded struct are promoted.

---

# 10. Embedded Structs vs Nested Structs

| Feature          | Embedded | Nested   |
| ---------------- | -------- | -------- |
| Access           | Promoted | Explicit |
| Reusability      | High     | Medium   |
| Inheritance-like | Yes      | No       |

---

## Nested Example

```go
type Employee struct {
    Person Person
}
```

Requires:

```go
e.Person.Name
```

---

# 11. Multiple Embedded Structs

## Example

```go
type Address struct {
    City string
}

type Employee struct {
    Person
    Address
}
```

---

## Access

```go
fmt.Println(e.Name)
fmt.Println(e.City)
```

---

# 12. Anonymous Field Concept

Embedded fields are also called:

👉 Anonymous fields

Because field name is omitted.

---

# 13. Pointer Embedded Structs

## Example

```go
type Employee struct {
    *Person
}
```

---

## Initialization

```go
e := Employee{
    Person: &Person{
        Name: "Shiv",
    },
}
```

---

## Benefits

* Efficient memory usage
* Shared data
* Avoid copying

---

# 14. Memory Behavior

## Value Embedding

* Entire struct copied

---

## Pointer Embedding

* Shared memory
* Better for large structs

---

# 15. Real-World Use Cases

* HTTP request/response models
* Database entities
* Blockchain transaction models
* Reusable service components

---

# 16. Common Mistakes

* Confusing embedding with inheritance
* Field name conflicts
* Overusing deep embedding

---

# 17. Best Practices

* Prefer composition over inheritance
* Use embedding for reusable behavior
* Avoid excessive nesting and ambiguity

---

# 18. Interactive Exercises

1. Create Person and Employee structs
2. Access promoted fields
3. Add methods and test promotion
4. Use multiple embedded structs
5. Convert to pointer embedding

---

# 19. Final Summary

| Concept           | Meaning                         |
| ----------------- | ------------------------------- |
| Embedded struct   | Struct without field name       |
| Promotion         | Direct access to fields/methods |
| Composition       | Reuse via embedding             |
| Pointer embedding | Shared memory                   |

---

# Conclusion

Embedded structs are essential for:

* Clean architecture
* Code reuse
* Composition-based design
* Real-world Go applications

Mastering them helps you write scalable and maintainable Go systems.

---

End of Documentation
