# 5. Range Loop

# What is Range Loop?

Used to iterate over collections.

Examples:

* Arrays
* Slices
* Maps
* Strings
* Channels

---

# Syntax

```go
for index, value := range collection {
}
```

---

# Example with Slice

```go
numbers := []int{10, 20, 30}

for index, value := range numbers {
    fmt.Println(index, value)
}
```

---

# Output

```text
0 10
1 20
2 30
```

---

# Ignoring Index

```go
for _, value := range numbers {
    fmt.Println(value)
}
```

---

# Why `_`?

Blank identifier ignores unused values.

---

# Range Over String

```go
for index, char := range "Go" {
    fmt.Println(index, char)
}
```

---

# Important Detail

String iteration uses:

```text
Unicode runes
```

---

# Range Over Map

```go
m := map[string]int{
    "A": 1,
    "B": 2,
}

for key, value := range m {
    fmt.Println(key, value)
}
```

---

# Real-World Uses

## Blockchain transaction iteration

## API response parsing

## Database result processing

## JSON processing

---

# Interactive Exercise

## What does `_` do?

Answer:

```text
Ignores unused value
```

---