---
sidebarDepth: 3
---
# Queue (FIFO)

::: tip What is a queue(FIFO)?
In a FIFO data structure, **the first element added to the queue will be processed first**.

As shown in the picture above, the queue is a typical FIFO data stucture. The insert operation is also called enqueue and the new element is always **added at the end of the queue**. The delete operation is called dequeue. You are only allowed to **remove the first element**.
:::



## Implementation 


### initialization

We use slice represent a queue

```go
    queue := []int{}
```

### enqueue
Enqueue is simply append element to the end of the slice
```go
    queue := append(queue,element)
```

### dequeue
Dequeue is simply remove the first element from the slice
```go
    if len(queue > 0){
        queue := queue[1:]
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
        res[i] = make([]int, n)
    }
    queue := [][2]int{}
    
    for i := 0;i < m; i++{
        for j := 0; j < n; j++{
            if mat[i][j] == 0{
                queue = append(queue,[2]int{i,j})
                res[i][j] = 0
            }else{
                res[i][j] = math.MaxInt32
            }
        }
    }
    dirs := [][2]int{{1,0},{-1,0},{0,1},{0,-1}}
    for len(queue) > 0{
        pop := queue[0]
        queue = queue[1:]
        for _, dir := range dirs{
            x, y := pop[0] + dir[0], pop[1] + dir[1]
            if x < 0 || y < 0 || x >= m || y >= n{
                continue
            } 
            if res[x][y] > res[pop[0]][pop[1]] + 1{
                res[x][y] = res[pop[0]][pop[1]] + 1
                queue = append(queue,[2]int{x,y})
            }
        }
    }
    return res
}
```
:::
---
* [752. Open the Lock](https://leetcode.com/problems/open-the-lock/) 
::: details View solution

```go
func openLock(deadends []string, target string) int {
    if target == "0000"{
        return 0
    }
    isDeadends := make(map[string]bool)
    for _,deadend := range deadends{
        if deadend == "0000"{
            return -1
        }
        isDeadends[deadend] = true
    }
    queue := []string{"0000"}
    count := 0
    for len(queue) > 0{
        size := len(queue)
        count++
        for i := 0; i < size; i++{
            pop := queue[0]
            queue = queue[1:]     
            for k := 0; k < 4; k++{
                nexts := nextCombs(pop,k)
                for _,next := range nexts{
                    if next == target{
                        return count
                    }
                    if !isDeadends[next]{
                        isDeadends[next] = true
                        queue = append(queue,next)
                    }
                }
            }
        }     
    }
    return -1
}
func nextCombs(comb string,index int) []string{
    bytes := []byte(comb)
    num := int(bytes[index] - '0')
    pre := (10+num-1) % 10
    next := (num+1) % 10
    res := []string{}
    bytes[index] = byte('0' + pre)
    res = append(res,string(bytes))
    bytes[index] = byte('0' + next)
    res = append(res,string(bytes))
    return res
}
```
:::
---
* [xxx. Some LeetCode Problem](https://leetcode.com/problems/some-leetcode-problem/) 
::: details View solution

```go
// TODO
```
:::
---
* [xxx. Some LeetCode Problem](https://leetcode.com/problems/some-leetcode-problem/) 
::: details View solution

```go
// TODO
```
:::
---
