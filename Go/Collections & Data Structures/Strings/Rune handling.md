# Go Language — Rune Handling (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What is a Rune?
3. Why Runes Matter
4. Rune vs Byte vs Character
5. Declaring and Using Runes
6. Strings and Runes Relationship
7. Iterating Strings with Runes
8. Converting Between String and Runes
9. Working with Unicode Characters
10. Common Rune Operations
11. Performance Considerations
12. Common Mistakes
13. Best Practices
14. Interactive Exercises
15. Final Summary

---

# 1. Introduction

Rune handling is a **core concept in Go** when working with:

* Unicode characters
* International text
* Emojis

---

# 2. What is a Rune?

## Definition (Simple)

A rune represents a **single Unicode character**.

---

## Formal Definition

> A rune is an alias for int32 and represents a Unicode code point.

---

## Example

```go
var r rune = 'A'
```

---

# 3. Why Runes Matter

Because:

* Strings are bytes
* Characters may be multiple bytes
* Runes correctly represent characters

---

# 4. Rune vs Byte vs Character

| Type      | Meaning               |
| --------- | --------------------- |
| Byte      | 8-bit data            |
| Rune      | Unicode character     |
| Character | Human-readable symbol |

---

## Example

```go
s := "你好"
```

* Bytes → 6
* Runes → 2

---

# 5. Declaring and Using Runes

## Example

```go
r := '你'
fmt.Println(r)
fmt.Printf("%c", r)
```

---

## Output

```text
20320
你
```

---

# 6. Strings and Runes Relationship

## Example

```go
s := "Hello"
r := []rune(s)
```

---

## Explanation

* String → bytes
* Rune slice → characters

---

# 7. Iterating Strings with Runes

## Correct Way

```go
for i, r := range "你好" {
    fmt.Println(i, r)
}
```

---

## Output

```text
0 20320
3 22909
```

---

# 8. Converting Between String and Runes

## String → Rune Slice

```go
r := []rune("hello")
```

---

## Rune Slice → String

```go
s := string(r)
```

---

# 9. Working with Unicode Characters

## Example

```go
fmt.Println('😊')
fmt.Printf("%c", '😊')
```

---

# 10. Common Rune Operations

## Count Characters

```go
len([]rune(s))
```

---

## Modify Character

```go
r := []rune("hello")
r[0] = 'H'
```

---

# 11. Performance Considerations

* Converting to rune slice uses memory
* Avoid unnecessary conversions

---

# 12. Common Mistakes

* Using byte instead of rune
* Ignoring Unicode
* Using len() incorrectly

---

# 13. Best Practices

* Use rune for character-level operations
* Use range for iteration
* Convert only when needed

---

# 14. Interactive Exercises

1. Print each rune in string
2. Count characters in Unicode string
3. Modify first character
4. Convert rune slice back to string

---

# 15. Final Summary

| Concept | Meaning           |
| ------- | ----------------- |
| Rune    | Unicode character |
| Byte    | Raw data          |
| []rune  | Character slice   |
| range   | Safe iteration    |

---

# Conclusion

Rune handling is essential for:

* Unicode support
* Global applications
* Correct string processing

Mastering runes makes you confident with real-world Go applications.

---

End of Documentation
