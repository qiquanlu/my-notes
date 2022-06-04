---
sidebarDepth: 3
---
# Backtracking

::: tip What is backtracking?
Backtracking is a general algorithm for finding all (or some) solutions to some computational problems (notably Constraint satisfaction problems or CSPs), which incrementally builds candidates to the solution and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot lead to a valid solution.
:::



## Template 


### backtracking

We need restore state after backtracking

```go
func backtracking(x int){
    // need to define termination condition
    if x == n{
        return
    }
    // loop all cases
    for i := 0; i < n; i++{
        // change state
        changeState(x)
        // backtracking
        backtracking(x+1)
        // restore
        restoreState(x)
    }

}
```

## Complexity 

## Practice problems

* [51. N-Queens](https://leetcode.com/problems/n-queens/) 
::: details View solution

```go
func solveNQueens(n int) [][]string {
    var result [][]string
    var board [][]byte
    cols := make([]bool, n)
    diag := make([]bool, 2 * n - 1)
    antidiag := make([]bool, 2 * n - 1)
    
    var underAttack func(int,int) bool
    underAttack = func(row,col int) bool{
        return cols[col] || antidiag[row+col] || diag[row-col+n-1]
    }
    
    var backtracking func(int)
    backtracking = func(row int){
        // termination condition row >= n
        if row >= n{
            // we reached a solution
            solution := []string{}
            for _,eachRow := range board{
                solution = append(solution,string(eachRow))
            }
            result = append(result,solution)
        }
        // try all cols
        for col := 0; col < n; col++{
            if underAttack(row,col){
                continue
            }
            // placeQueen(row,col)
            line := make([]byte,n)
            for i := range line{
                line[i] = '.'
            }
            line[col]='Q'
            board = append(board,line)
            cols[col] = true
            antidiag[row+col] = true
            diag[row-col+n-1] = true
            
            backtracking(row+1)
            // removeQueen(row,col)
            cols[col] = false
            antidiag[row+col] = false
            diag[row-col+n-1] = false
            board = board[:len(board)-1]
        }
    }
    
    backtracking(0)
    
    return result
}

```
:::
---
* [52. N-Queens II](https://leetcode.com/problems/n-queens-ii/) 
::: details View solution

```go
func totalNQueens(n int) int {
    total := 0
    cols := make([]bool,n)
    diag := make([]bool,2 * n - 1)
    antidiag := make([]bool,2 * n - 1)
    var backtracking func(int)
    backtracking = func(row int){
        if row >= n{
            total++
            return
        }
        for col := 0; col < n; col++{
            if cols[col] || antidiag[row+col] || diag[row-col+n-1]{
                continue
            }
            cols[col] = true
            antidiag[row+col] = true
            diag[row-col+n-1] = true
            
            backtracking(row+1)
            
            cols[col] = false
            antidiag[row+col] = false
            diag[row-col+n-1] = false
        }
    }
    backtracking(0)
    return total
}
```
:::
---
* [489. Robot Room Cleaner](https://leetcode.com/problems/robot-room-cleaner/) 
::: details View solution

```go
/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * type Robot struct {
 * }
 * 
 * // Returns true if the cell in front is open and robot moves into the cell.
 * // Returns false if the cell in front is blocked and robot stays in the current cell.
 * func (robot *Robot) Move() bool {}
 *
 * // Robot will stay in the same cell after calling TurnLeft/TurnRight.
 * // Each turn will be 90 degrees.
 * func (robot *Robot) TurnLeft() {}
 * func (robot *Robot) TurnRight() {}
 *
 * // Clean the current cell.
 * func (robot *Robot) Clean() {}
 */

func cleanRoom(robot *Robot) {
    dirs := [][2]int{{0,1},{1,0},{0,-1},{-1,0}}
    visited := make(map[[2]int]bool)
    
    var backtracking func(int, int, int)
    backtracking = func(x, y, dir int){
        //clean current
        robot.Clean()
        visited[[2]int{x,y}] = true
        // try move four directions
        for i := 0; i < 4; i++{
            nextDir := (dir + i) % 4
            nextX, nextY := x + dirs[nextDir][0], y + dirs[nextDir][1]
            if !visited[[2]int{nextX,nextY}] && robot.Move(){
                backtracking(nextX,nextY,nextDir)

                // move back
                robot.TurnRight()
                robot.TurnRight()
                robot.Move()
                robot.TurnLeft()
                robot.TurnLeft()
            }
            robot.TurnRight()
        } 
    }
    backtracking(0,0,0)
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
* [xxx. Some LeetCode Problem](https://leetcode.com/problems/some-leetcode-problem/) 
::: details View solution

```go
// TODO
```
:::
---