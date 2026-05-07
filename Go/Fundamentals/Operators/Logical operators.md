# 5. Logical Operators

# What are Logical Operators?

Logical operators combine boolean expressions.

---

# Logical Operators Table

| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `&&`     | AND     |   |    |
| `        |         | ` | OR |
| `!`      | NOT     |   |    |

---

# AND Operator (`&&`)

Returns true only if both conditions are true.

```go
fmt.Println(true && true)
```

Output:

```text
true
```

---

# OR Operator (`||`)

Returns true if at least one condition is true.

```go
fmt.Println(true || false)
```

Output:

```text
true
```

---

# NOT Operator (`!`)

Reverses boolean value.

```go
fmt.Println(!true)
```

Output:

```text
false
```

---

# Truth Table — AND

| A     | B     | A && B |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

---

# Truth Table — OR

| A     | B     | A || B |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | true   |
| false | true  | true   |
| false | false | false  |

---

# Real-World Uses

## Authentication

```go
isAdmin && isVerified
```

---

## Access Control

```go
hasToken || isGuest
```

---

# Interactive Exercise

## Predict Output

```go
true && false
```

Answer:

```text
false
```

---