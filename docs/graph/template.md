---
sidebarDepth: 3
---
# Template

::: tip What problems can solve?
Something here
:::



## implementation 


### initialization

We initialize the slice value with its index. 

```go
roots := make([]int,n)
for i := range roots{
    roots[i] = i
}
```

### find()
The find function locates the root node of a given vertex.

We recursively search vertex's parent until roots[x] == x
```go
func find(x int) int{
    if roots[x] == x{
        return x
    }
    return find(roots[x])
}
```

### union()
 The union function connects two previously unconnected vertices by giving them the same root node. 

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

### path compression find()
Each time when we find the vertice's parent, we could save it for next time

```go
func find(x int) int{
    if roots[x] != x{
        roots[x] = find(roots[x])
    }
    return roots[x]
}
```
## complexity 


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