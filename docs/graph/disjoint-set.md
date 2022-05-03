---
sidebarDepth: 3
---
# Disjoint Sets

::: tip What problems disjoint sets can solve?
Given the vertices and edges between them, how could we quickly check whether two vertices are connected?
:::

We can use slice to represent vertices' relations, each slice index i as the vertex, and it's value is parent vertex

## Implementation 

If a vertex's parent is it self, this means the vertice is not connect to any other vertices.
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

## Complexity 
|                        | Union-find Constructor | Find           | Union          | Connected      |
| ---------------------- | ---------------------- | -------------- | -------------- | -------------- |
| <b>Time Complexity</b> | <i>O(N)</i>            | <i>O(logN)</i> | <i>O(logN)</i> | <i>O(logN)</i> |

<b>find</b> operation, we need<b> <i>O(1)</i></b> time for the best case. In the worst case, it would be <b><i>O(N) </i></b>time when the tree is skewed. However, on average, the time complexity will be <b><i>O(logN)</i></b>.

## Practice problems

* [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/) 
::: details View solution

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
::: details View solution

```go
func validTree(n int, edges [][]int) bool {
    // a valid tree with n nodes has to have exact n-1 edges, and all nodes has to be connected
    if n != len(edges) + 1{
        return false
    }
    if n == 1{
        return true
    }
    
    roots := make([]int, n)
    for i := range roots{
        roots[i] = i
    }
    
    var find func(int) int
    find = func(x int) int{
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
    
    for _,edge := range edges{
        union(edge[0],edge[1])
    }
    
    root := find(0)
    for i := 1; i < n; i++{
        if find(roots[i]) != root{
            return false
        }
    }
    return true
}
```
:::
---
* [323. Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
::: details View solution

```go
func countComponents(n int, edges [][]int) int {
    roots := make([]int, n)
    for i := range roots{
        roots[i] = i
    }
    
    var find func(int) int
    find = func(x int) int{
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
    
    for _, edge := range edges{
        union(edge[0],edge[1])
    }
    
    count := 0
    for i := range roots{
        if find(i) == i{
            count++
        }
    }
    return count
}
```
:::
---
* [1101. The Earliest Moment When Everyone Become Friends](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/)
::: details View solution

```go
func earliestAcq(logs [][]int, n int) int {
    sort.Slice(logs, func(i,j int) bool{
        return logs[i][0] < logs[j][0]
    })
    
    roots := make([]int,n)
    for i := range roots{
        roots[i] = i
    }
    
    var find func(int) int
    find = func(x int) int{
        if roots[x] != x{
            roots[x] = find(roots[x])
        }
        return roots[x]
    }
    count := n
    
    for _,logx := range logs{
        xroot := find(logx[1])
        yroot := find(logx[2])
        if xroot != yroot{
            // we keep track the counter when making new connections
            count-- 
            roots[yroot] = xroot
            if count == 1{
                return logx[0]
            }
        }
    }
    
    return -1
}
```
:::
---
* [1202. Smallest String With Swaps](https://leetcode.com/problems/smallest-string-with-swaps/)
::: details View solution
```go
func smallestStringWithSwaps(s string, pairs [][]int) string {
    roots := make([]int,len(s))
    for i := range roots{
        roots[i] = i
    }
    
    var find func(int) int
    find = func(x int) int {
        if roots[x] != x{
            roots[x] = find(roots[x])
        }
        return roots[x]
    }
    
    for _,pair := range pairs{
        xroot := find(pair[0])
        yroot := find(pair[1])
        
        if xroot != yroot{
            roots[yroot] = xroot
        }
    }
    // group connected positions to dict by root key
    dict := make(map[int][]int)
    for i := range roots{
        root := find(i)
        dict[root] = append(dict[root],i)
    }
    
    // sort positions and map original s to res
    res := make([]byte,len(s))
    for _,values := range dict{
        originPos := make([]int,len(values))
        copy(originPos,values)
        sort.Slice(values, func(i,j int) bool{
            return s[values[i]] < s[values[j]]
        })
        for i := range values{
            res[originPos[i]] = s[values[i]]
        } 
    }
    return string(res)
}
```
:::
---
* [399. Evaluate Division](https://leetcode.com/problems/evaluate-division/)
::: details View solution

```go
// TODO
```
:::
---
[1168. Optimize Water Distribution in a Village](https://leetcode.com/problems/optimize-water-distribution-in-a-village/)
::: details View solution
```go
// TODO
```
:::
* [1971. Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/) 
::: details View solution

```go
func validPath(n int, edges [][]int, source int, destination int) bool {
    roots := make([]int, n)
    for i := range roots{
        roots[i] = i
    }
    
    var find func(int) int
    find = func(x int) int {
        if roots[x] != x{
            roots[x] = find(roots[x])
        }
        return roots[x]
    }
    
    for _,edge := range edges{
        xroot := find(edge[0])
        yroot := find(edge[1])
        if xroot != yroot{
            roots[yroot] = xroot
        }
    }
    return find(source) == find(destination)
}
```
:::
---