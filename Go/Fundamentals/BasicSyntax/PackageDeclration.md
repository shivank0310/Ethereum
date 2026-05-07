
# 1. Package Declaration

# What is a Package?

A package is a collection of Go source files.

Packages help organize code into reusable modules.

---

# Syntax

```go
package packageName
```

Example:

```go
package main
```

---

# Why Packages are Important

Packages provide:

* Code modularity
* Reusability
* Better organization
* Namespace management
* Easier maintenance

---

# Types of Packages

## 1. Executable Package

```go
package main
```

Used for executable programs.

---

## 2. Reusable Library Package

```go
package mathutils
```

Used for reusable code.

---

# Example of Custom Package

## File: `mathutils/add.go`

```go
package mathutils

func Add(a int, b int) int {
    return a + b
}
```

---

## File: `main.go`

```go
package main

import (
    "fmt"
    "myapp/mathutils"
)

func main() {
    result := mathutils.Add(5, 3)
    fmt.Println(result)
}
```

---

# Package Naming Rules

## Recommended Naming Style

* Short names
* Lowercase only
* Meaningful names
* No underscores usually

Good:

```go
package math
package auth
package config
```

Bad:

```go
package MathUtils
package MY_PACKAGE
```

---

# Important Rules

## Rule 1

Each Go file must start with a package declaration.

---

## Rule 2

All files in the same directory should belong to the same package.

---

## Rule 3

Package declaration must be the first non-comment line.

---

# Interactive Exercise

## Identify the package name

```go
package blockchain
```

Answer:

The package name is `blockchain`.

---

# 4. The `main` Package

# What is `main` Package?

The `main` package is a special package in Go.

It tells the Go compiler:

> “This package should produce an executable program.”

---

# Why is it Special?

Without `package main`:

* Your program cannot run directly.
* It becomes a reusable library instead.

---

# Example

```go
package main

import "fmt"

func main() {
    fmt.Println("Program Started")
}
```

---

# Compilation Behavior

## With `package main`

Produces executable binary.

Example:

```bash
go build
```

Output:

```text
./myprogram
```

---

## Without `package main`

Creates reusable package.

Cannot directly execute.

---

# Real-World Analogy

Think of:

* `package main` → Main engine
* Other packages → Supporting components

---

# Important Notes

## Only One Entry Point

A Go executable application must have:

```go
package main
```

AND

```go
func main()
```

---

# Common Error

## Missing `main` package

```go
package demo

func main() {
}
```

Error:

```text
package command-line-arguments is not a main package
```

---

# Interactive Understanding

## Question

Can a Go executable run without `package main`?

### Answer

No.

---

# 5. The `main()` Function

# What is `main()`?

The `main()` function is the starting point of a Go program.

Execution begins here.

---

# Syntax

```go
func main() {

}
```

---

# Breakdown

## `func`

Keyword used to declare functions.

---

## `main`

Special function name.

---

## `()`

Function parameters.

`main()` takes no arguments.

---

## `{}`

Function body.

---

# Example

```go
package main

import "fmt"

func main() {
    fmt.Println("Welcome to Go")
}
```

---

# Execution Flow

```text
Program Starts
      ↓
main() Called
      ↓
Statements Execute
      ↓
Program Ends
```

---

# Important Characteristics

## 1. Only One `main()` Function

You cannot define multiple `main()` functions in the same package.

---

## 2. No Return Value

```go
func main() {
}
```

NOT:

```go
func main() int {
}
```

---

## 3. No Parameters

Incorrect:

```go
func main(name string) {
}
```

---

# Calling Other Functions

```go
package main

import "fmt"

func greet() {
    fmt.Println("Hello")
}

func main() {
    greet()
}
```

---

# Interactive Exercise

## Predict Output

```go
func main() {
    fmt.Println("A")
    fmt.Println("B")
}
```

Output:

```text
A
B
```

---