
# Disjoint Set

::: tip
Given the vertices and edges between them, how could we quickly check whether two vertices are connected?
:::

We can use slice to represent vertices' relations, each slice index i as the vertice, and it's value is parent vertice

## implementation 

If a vertice's parent is it self, this means the vertice is not connect to any other vertices.

We initialize the slice value with its index. 

```go
roots := make([]int,n)
for i := range roots{
    roots[i] = i
}
```

## find()
We recursively search vertice's parent until roots[x] == x
```go
func find(x int) int{
    if roots[x] == x{
        return x
    }
    return find(roots[x])
}
```

## union()
If two vertices' parents not the same, we make one of them as the other's parent, so they are connected.
```go
func union(x,y int){
    xroot := find(x)
    yroot := find(y)
    if xroot != yroot{
        roots[yroot] = xroot
    }
}
```

## path compression find()
Each time when we find the vertice's parent, we could save it for next time

```go
func find(x int) int{
    if roots[x] == x{
        return x
    }
    roots[x] = find(roots[x])
    return roots[x]
}
```