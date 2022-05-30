---
sidebarDepth: 3
---
# Template

::: tip What problems can solve?
Something here
:::



## Implementation 


### initialization

We initialize the slice value with its index. 

```go
// some code
```

### func1()
Some function description goes here
```go
func find(x int) int{
    if roots[x] == x{
        return x
    }
    return find(roots[x])
}
```

## Complexity 

## Practice problems

* [542. 01 Matrix](https://leetcode.com/problems/01-matrix/) 
::: details View solution

```go
func updateMatrix(mat [][]int) [][]int {
    m, n := len(mat), len(mat[0])
    res := make([][]int,m)
    for i := range res{
        res[i] = make([]int,n)
    }
    for i := 0; i < m; i++{
        for j := 0; j < n; j++{
            if mat[i][j] == 0{
                res[i][j] = 0
            }else{
                res[i][j] = math.MaxInt32
            }
        }
    }
    
    dirs := [][2]int{{1,0}, {-1,0}, {0,1}, {0,-1}}
    var dfs func(int,int)
    dfs = func(i,j int){
        for _,dir := range dirs{
            x, y := i + dir[0], j + dir[1]
            if x < 0 || y < 0 || x >= m || y >= n{
                continue
            }
            if res[x][y] > res[i][j]+1{
                res[x][y] = res[i][j]+1
                dfs(x,y)
            }
        }
    }
    for i := 0; i < m; i++{
        for j := 0; j < n; j++{
            if res[i][j] == 0{
                dfs(i,j)
            }
        }
    }
    return res
}
```
:::
---

* [841. Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/) 
::: details View solution

```go
func canVisitAllRooms(rooms [][]int) bool {
    n := len(rooms)
    unlocked := make([]bool, n)
    unlocked[0] = true
    var dfs func(int)
    dfs = func(roomIndex int){
        for _, room := range rooms[roomIndex]{
            if !unlocked[room]{
                unlocked[room] = true
                dfs(room)
            }
        }
    }
    dfs(0)
    for i := range unlocked{
        if !unlocked[i]{
            return false
        }
    }
    return true
}
```
:::
---