
# Disjoint Sets

::: tip What problems disjoint sets can solve?
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

## practice problems

* [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/) 
::: details Click to view solution

```go
func findCircleNum(isConnected [][]int) int {
    n := len(isConnected)
    
    roots := make([]int, n)
    for i := range roots{
        roots[i] = i
    }
    
    var find func(int) int
    find = func (x int) int{
        if roots[x] != x{
            roots[x] = find(roots[x])
        }
        return roots[x]
    }
    
    var union func(int, int)
    union = func(x, y int){
        xroot := find(x)
        yroot := find(y)
        if xroot != yroot{
            roots[yroot] = xroot
        }
    }
    
    for i := 0; i < n; i++{
        for j := i + 1; j < n; j++{
            if isConnected[i][j] == 1{
                union(i,j)
            }
        }
    } 
    
    count := 0
    for i := range roots{
        if roots[i] == i{
            count++
        }
    }
    
    return count
}
```
:::
---
* [261. Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/)
::: details Click to view solution

```go
fmt.Println("x")
```
:::
---
* [323. Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
::: details Click to view solution

```go
fmt.Println("x")
```
:::
---
* [1101. The Earliest Moment When Everyone Become Friends](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/)
::: details Click to view solution

```go
fmt.Println("x")
```
:::
---
* [1202. Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/)
::: details Click to view solution
```go
fmt.Println("x")
```
:::
---
* [399. Evaluate Division](https://leetcode.com/problems/evaluate-division/)
::: details Click to view solution

```go
fmt.Println("x")
```
:::
---
[1168. Optimize Water Distribution in a Village](https://leetcode.com/problems/optimize-water-distribution-in-a-village/)
::: details Click to view solution
```go
fmt.Println("x")
```
:::
