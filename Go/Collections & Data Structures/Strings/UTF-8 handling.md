# Go Language — UTF-8 Handling (In-Depth, Layman-Friendly Documentation)

---

# Table of Contents

1. Introduction
2. What is UTF-8?
3. Why UTF-8 Matters in Go
4. Strings in Go and UTF-8
5. Bytes vs Characters vs Runes
6. How UTF-8 Encoding Works
7. Measuring Length (Critical Concept)
8. Iterating UTF-8 Strings Correctly
9. Invalid UTF-8 Handling
10. unicode/utf8 Package Functions
11. Converting Between Bytes and Runes
12. Common Mistakes
13. Best Practices
14. Interactive Exercises
15. Final Summary

---

# 1. Introduction

UTF-8 handling is a **core concept** in Go when working with text, especially:

* International languages (Hindi, Chinese, etc.)
* Emojis 😊
* APIs and user input

---

# 2. What is UTF-8?

## Definition (Simple)

UTF-8 is a way of encoding characters into bytes.

---

## Layman Explanation

Computers understand only numbers (bytes).

UTF-8 tells the computer:
👉 "How to store letters like A, 你, 😊 using bytes"

---

## Key Idea

* English characters → 1 byte
* Other characters → 2–4 bytes

---

# 3. Why UTF-8 Matters in Go

Go strings are **UTF-8 encoded by default**.

---

## Meaning

```go
s := "Hello"
```

This is stored in UTF-8 automatically.

---

# 4. Strings in Go and UTF-8

A string in Go is:

👉 A sequence of bytes (not characters)

---

## Example

```go
s := "你好"
fmt.Println(len(s))
```

---

## Output

```text
6
```

---

## Why?

Each character takes 3 bytes.

---

# 5. Bytes vs Characters vs Runes

## Byte

* Smallest unit (8 bits)

---

## Rune

* Represents a Unicode character

---

## Example

```go
s := "你好"

fmt.Println(len(s))           // bytes
fmt.Println(len([]rune(s)))   // characters
```

---

## Output

```text
6
2
```

---

# 6. How UTF-8 Encoding Works

Each character is converted into 1–4 bytes.

---

## Example

```text
'A'  → 1 byte
'你' → 3 bytes
'😊' → 4 bytes
```

---

# 7. Measuring Length (Critical Concept)

## Wrong Way

```go
len(s)
```

Counts bytes

---

## Correct Way

```go
len([]rune(s))
```

Counts characters

---

# 8. Iterating UTF-8 Strings Correctly

## Correct Way (range)

```go
for i, r := range "你好" {
    fmt.Println(i, r)
}
```

---

## Explanation

* `i` → byte index
* `r` → rune (character)

---

## Wrong Way

```go
for i := 0; i < len(s); i++ {
    fmt.Println(s[i])
}
```

---

This prints bytes, not characters.

---

# 9. Invalid UTF-8 Handling

## Example

```go
s := string([]byte{0xff})
```

---

## Result

Go replaces invalid bytes with:

```text
� (replacement character)
```

---

# 10. unicode/utf8 Package Functions

## Import

```go
import "unicode/utf8"
```

---

## Functions

### RuneCountInString

```go
utf8.RuneCountInString(s)
```

---

### ValidString

```go
utf8.ValidString(s)
```

---

### DecodeRuneInString

```go
utf8.DecodeRuneInString(s)
```

---

# 11. Converting Between Bytes and Runes

## String → Rune Slice

```go
r := []rune("你好")
```

---

## Rune Slice → String

```go
s := string(r)
```

---

# 12. Common Mistakes

* Using len() for character count
* Iterating byte-by-byte
* Ignoring Unicode

---

# 13. Best Practices

* Use range for iteration
* Use rune for character operations
* Use utf8 package when needed

---

# 14. Interactive Exercises

1. Count characters in multilingual string
2. Print each rune
3. Convert string to rune slice
4. Validate UTF-8 string

---

# 15. Final Summary

| Concept | Meaning           |
| ------- | ----------------- |
| UTF-8   | Encoding system   |
| Byte    | Raw data          |
| Rune    | Unicode character |
| len     | Byte count        |
| range   | Safe iteration    |

---

# Conclusion

UTF-8 handling is essential for modern applications.

It ensures:

* Correct text processing
* Global language support
* Bug-free string handling

Mastering this makes you a strong Go developer.

---

End of Documentation
