# 6. Formatting Verbs in Go

# Common Verbs Table

| Verb  | Description     | Example         |
| ----- | --------------- | --------------- |
| `%d`  | Integer         | 10              |
| `%f`  | Float           | 3.14            |
| `%s`  | String          | Hello           |
| `%v`  | Default value   | Any             |
| `%+v` | Struct fields   | Struct display  |
| `%#v` | Go syntax       | Detailed format |
| `%T`  | Type            | int             |
| `%t`  | Boolean         | true            |
| `%c`  | Character       | A               |
| `%p`  | Pointer address | Memory address  |

---

# Width and Precision

```go
fmt.Printf("%.2f", 5.6789)
```

Output:

```text
5.68
```

---

# Padding Example

```go
fmt.Printf("%5d", 42)
```

Output:

```text
   42
```

---

# Left Alignment

```go
fmt.Printf("%-5d", 42)
```

---

# Scientific Notation

```go
fmt.Printf("%e", 12345.0)
```

---

# Interactive Exercise

## Which verb prints type?

Answer:

```text
%T
```

---

# 8. Formatting Strings

# What is String Formatting?

Creating customized output strings.

---

# Using `fmt.Sprintf`

Returns formatted string.

---

# Example

```go
name := "Shiv"
msg := fmt.Sprintf("Hello %s", name)
```

---

# Difference Between `Printf` and `Sprintf`

| Function  | Behavior                 |
| --------- | ------------------------ |
| `Printf`  | Prints output            |
| `Sprintf` | Returns formatted string |

---

# Example

```go
price := 99.99

text := fmt.Sprintf("Price: %.2f", price)
fmt.Println(text)
```

---

# String Building

Useful for:

* Logs
* APIs
* Blockchain transaction messages
* Dynamic UI messages

---

# Multi-Line Formatting

```go
fmt.Printf("Name: %s\nAge: %d", "Shiv", 25)
```

---

# Interactive Exercise

## Which function returns formatted string?

Answer:

```text
fmt.Sprintf
```

---

# 9. String Formatting Internals

# What Happens Internally?

```text
Format String Parsed
        ↓
Formatting Verbs Detected
        ↓
Values Replaced
        ↓
Final Output Generated
```

---

# Example

```go
fmt.Printf("%d", 10)
```

Internally:

```text
%d → integer formatter
10 → inserted
```

---

# Why Formatting Matters

Essential for:

* Professional logs
* Debugging
* Reports
* APIs
* Structured blockchain output

---

# 10. Escape Sequences

# What are Escape Sequences?

Special characters inside strings.

---

# Common Escape Sequences

| Escape | Meaning      |
| ------ | ------------ |
| `\n`   | New line     |
| `\t`   | Tab          |
| `\\`   | Backslash    |
| `\"`   | Double quote |

---

# Example

```go
fmt.Println("Hello\nWorld")
```

Output:

```text
Hello
World
```

---

# Tab Example

```go
fmt.Println("Name\tAge")
```

---

# Interactive Exercise

## Which escape creates newline?

Answer:

```text
\n
```

---
