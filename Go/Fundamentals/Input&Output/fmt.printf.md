# 5. `fmt.Printf`

# What is `fmt.Printf`?

`Printf` allows formatted output.

You control:

* Data formatting
* Alignment
* Precision
* Type representation

---

# Syntax

```go
fmt.Printf(format, values)
```

---

# Example

```go
name := "Shiv"
age := 25

fmt.Printf("Name: %s Age: %d", name, age)
```

---

# Output

```text
Name: Shiv Age: 25
```

---

# What are Formatting Verbs?

Special placeholders.

Examples:

| Verb | Meaning        |
| ---- | -------------- |
| `%d` | Integer        |
| `%f` | Float          |
| `%s` | String         |
| `%v` | Default format |
| `%T` | Type           |
| `%t` | Boolean        |
| `%c` | Character      |
| `%x` | Hexadecimal    |

---

# Integer Formatting

```go
fmt.Printf("%d", 100)
```

---

# Float Formatting

```go
fmt.Printf("%.2f", 3.14159)
```

Output:

```text
3.14
```

---

# Type Printing

```go
fmt.Printf("%T", 10)
```

Output:

```text
int
```

---

# Boolean Formatting

```go
fmt.Printf("%t", true)
```

---

# Hexadecimal Example

```go
fmt.Printf("%x", 255)
```

Output:

```text
ff
```

---

# Why `Printf` is Powerful

Used heavily in:

* Logging systems
* APIs
* Debugging
* Blockchain transaction formatting
* Reports

---

# Interactive Exercise

## Output?

```go
fmt.Printf("%d", 25)
```

Answer:

```text
25
```

---