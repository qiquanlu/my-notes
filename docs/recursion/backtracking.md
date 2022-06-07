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
* [78. Subsets](https://leetcode.com/problems/subsets/) 
::: details View solution

```go
func subsets(nums []int) [][]int {
    var backtracking func(int,int)
    res := [][]int{}
    cur := []int{}
    backtracking = func(index,length int){
        // when cur length is what we wanted, add cur to result and return
        if len(cur) >= length{
            cpy := make([]int,len(cur))
            copy(cpy,cur)
            res = append(res,cpy)
            return
        }
        // otherwise from index to last element of nums, we try backtracking
        for i := index; i < len(nums); i++{
            // add to cur
            cur = append(cur,nums[i])
            // do the backtracking for next element
            backtracking(i+1,length)
            // remove from cur
            cur = cur[:len(cur)-1]            
        }
    }
    
    // we need find all subsets from length 0 to len(nums)
    for n := 0; n <= len(nums); n++{
        backtracking(0,n)
    }
    return res
}
```
:::
---
* [491. Increasing Subsequences](https://leetcode.com/problems/increasing-subsequences/) 
::: details View solution

```go
func findSubsequences(nums []int) [][]int {
    res := [][]int{}
    cur := []int{}

    var backtracking func(int)
    backtracking =  func(index int){
        // When len(cur) > 1, we save cur to result
        if len(cur) > 1{
            cpy := make([]int,len(cur))
            copy(cpy,cur)
            res = append(res, cpy)
        }
        
        seen := map[int]bool{}

        // from starting index to the last element
        // we want to find all the increasing subsequences start with nums[index]
        for i:= index; i < len(nums);i++{
            if seen[nums[i]]{
                continue
            }
            if len(cur) == 0{
                seen[nums[i]] = true
                cur = append(cur,nums[i])
                backtracking(i+1)
                cur = cur[:len(cur)-1] 
                continue
            }
            if nums[i] >= cur[len(cur)-1] && !seen[nums[i]]{
                cur = append(cur,nums[i])
                backtracking(i+1)
                seen[cur[len(cur)-1]] = true
                cur = cur[:len(cur)-1] 
            }
        }
    }
    backtracking(0)
    return res
    
}
```
:::
---
* [37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) 
::: details View solution

```go
func solveSudoku(board [][]byte)  {
    // divide board into 9 subboard from 0 to 8
    // try to fill each subboard
    // initialize rows, cols, subs 2D arrays to keep track which number already exist
    // for example rows[3][6] is true means the 4th row(index 3) already have 7(index 6) in it
    rows,cols,subs := make([][]bool,9), make([][]bool,9), make([][]bool,9)
    for i := 0; i < 9; i++{
        rows[i], cols[i], subs[i]= make([]bool,9), make([]bool,9), make([]bool,9)
    }

    // search existing board, fill all rows, cols and subs
    for i := 0; i < 9; i++{
        for j := 0; j < 9; j++{
            if board[i][j] != '.'{
                num := int(board[i][j] - '0')
                rows[i][num-1] = true
                cols[j][num-1] = true
                sub := (i/3) * 3 + j / 3
                subs[sub][num-1] = true
            }
        }
    }

    var backtracking func(int,int) bool
    backtracking = func(x,y int) bool{
        // when row index > 8 means, we already filled all first 9 row, then done
        if x > 8{
            return true
        } 
        
        // we go from left to righ, top to bottom, and next location we will be visiting is nextX,nextY
        nextX := x + (y+1) / 9
        nextY := (y+1) % 9
        if board[x][y] == '.'{
            // when current position is empty, we try to fill it from 1 to 9
            for num := 1; num <= 9; num++{
                sub := (x/3) * 3 + y / 3
                // if the number we are trying is not valid, move to next
                if rows[x][num-1] || cols[y][num-1] || subs[sub][num-1]{
                    continue
                }
                //fill the number
                board[x][y] = byte('0'+ num)
                rows[x][num-1] = true
                cols[y][num-1] = true
                subs[sub][num-1] = true
                
                // stop further process if backtracking returns true
                if backtracking(nextX,nextY){
                    return true
                }
                //remove the number, so we can try next one
                board[x][y] = '.'
                rows[x][num-1] = false
                cols[y][num-1] = false
                subs[sub][num-1] = false
            }
            return false
            
        }else{
             return backtracking(nextX,nextY)
        }
    }
    backtracking(0,0)
}
```
:::
---
* [93. Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/) 
::: details View solution

```go
func restoreIpAddresses(s string) []string {
  res := []string{}
  n := len(s)
  cur := []string{}
  var backtracking func(int)
  backtracking = func(start int){
    if start >= n{
      if len(cur) == 4{
        res = append(res,strings.Join(cur,"."))
      }
      return
    }
    // when start with '0', it has to be a 0, move to next
    if s[start] == '0'{
      cur = append(cur,"0")
      backtracking(start+1)
      cur = cur[:len(cur)-1]
      return
    }
    // otherwise try first 3 digits
    for i := start; i<n && i < i+3; i++{
      curString := string(s[start:i+1])
      num,_ := strconv.Atoi(curString)
      if num > 255{
        break
      }
      cur = append(cur,curString)
      backtracking(i+1)
      cur = cur[:len(cur)-1]
    }
  }
  backtracking(0)
  return res
}
```
:::
---