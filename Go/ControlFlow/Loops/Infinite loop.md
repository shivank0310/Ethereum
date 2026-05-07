# 4. Infinite Loops

# What is Infinite Loop?

Loop that never stops.

---

# Syntax

```go
for {
    // code
}
```

---

# Example

```go
for {
    fmt.Println("Running")
}
```

---

# Why Infinite Loops Matter

Used in:

## Web servers

## Blockchain nodes

## API listeners

## Event processors

## Network servers

---

# Example — Server Style

```go
for {
    handleRequest()
}
```

---

# Stopping Infinite Loops

Using:

```go
break
```

---

# Example

```go
count := 0

for {
    fmt.Println(count)
    count++

    if count == 5 {
        break
    }
}
```

---

# Output

```text
0
1
2
3
4
```

---

# Interactive Exercise

## Which keyword stops loop?

Answer:

```text
break
```

---