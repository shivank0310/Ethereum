# 8. Semicolons in Go

# Does Go Use Semicolons?

Yes — internally.

But developers usually do NOT write them manually.

---

# Automatic Semicolon Insertion

Go compiler automatically inserts semicolons.

Example:

```go
fmt.Println("Hello")
fmt.Println("World")
```

Internally becomes:

```go
fmt.Println("Hello");
fmt.Println("World");
```

---

# Why Go Avoids Manual Semicolons

Benefits:

* Cleaner syntax
* Better readability
* Less clutter
* Fewer syntax mistakes

---

# Important Rule

Semicolons are inserted automatically at line endings.

Because of this:

## Opening brace `{` must stay on same line.

Correct:

```go
func main() {
}
```

Incorrect:

```go
func main()
{
}
```

Why?

Compiler inserts semicolon after `main()`.

It becomes:

```go
func main();
{
}
```

Which is invalid.

---

# When Semicolons Can Be Written

You *can* write them manually.

Example:

```go
fmt.Println("A"); fmt.Println("B")
```

But this is uncommon.

---

# Multiple Statements on One Line

```go
x := 10; y := 20
```

Valid but rarely used.

---

# Interactive Exercise

## Is this valid?

```go
func main()
{
}
```

Answer:

No.

Because of automatic semicolon insertion.

---