# 6. Bitwise Operators

# What are Bitwise Operators?

Operate directly on binary bits.

---

# Why Bitwise Operations Matter

Used in:

* Cryptography
* Blockchain hashing
* Networking
* Permissions
* Compression
* Performance optimization

---

# Bitwise Operators Table

| Operator | Meaning     |    |
| -------- | ----------- | -- |
| `&`      | AND         |    |
| `        | `           | OR |
| `^`      | XOR         |    |
| `<<`     | Left Shift  |    |
| `>>`     | Right Shift |    |

---

# Binary Basics

Example:

```text
5  = 0101
3  = 0011
```

---

# Bitwise AND (`&`)

```go
fmt.Println(5 & 3)
```

Binary:

```text
0101
0011
----
0001
```

Output:

```text
1
```

---

# Bitwise OR (`|`)

```go
fmt.Println(5 | 3)
```

Output:

```text
7
```

---

# XOR (`^`)

Returns 1 when bits differ.

```go
fmt.Println(5 ^ 3)
```

Output:

```text
6
```

---

# Left Shift (`<<`)

```go
fmt.Println(1 << 3)
```

Means:

```text
0001 → 1000
```

Output:

```text
8
```

---

# Right Shift (`>>`)

```go
fmt.Println(8 >> 2)
```

Output:

```text
2
```

---

# Real-World Blockchain Usage

Bitwise operators are used in:

* Cryptographic algorithms
* Hash functions
* Permission masks
* Binary serialization

---

# Interactive Exercise

## Result?

```go
1 << 2
```

Answer:

```text
4
```

---