---
sidebarDepth: 3
---
# Time Series Dynamic Programming

::: tip What time series DP problems looks like?
*  given a series input(in form of array or string), each element consider as a day
*  state at current day only depends on state from previous day
*  find max, min or sum
:::



## Implementation 


### define ***dp[i][j]***

define ***dp[i][j]*** which represent the state j of day i

```go
// some code
```

### state transition equation
find an equation to represent ***d[i][j]*** only using ***d[i-1][j]*** 
```go
// some code
```

### aggregation of ***d[last][j]***
usually find solution by min, max, or sum of ***d[last][j]***
```go
// some code
```

## Complexity 

## Practice problems

* [198. House Robber](https://leetcode.com/problems/house-robber/) 
::: details View solution

```go
func rob(nums []int) int {
    n := len(nums)

    dp := make([][2]int,n)
    
    // dp[i][0] represent rob, 
    // dp[i][1] represent no rob    
    dp[0] = [2]int{nums[0],0}
    
    for i := 1;i< n;i++{
        dp[i] = [2]int{nums[i]+dp[i-1][1], max(dp[i-1][0],dp[i-1][1])}
    }
    
    return max(dp[n-1][0],dp[n-1][1])
}

func max(a,b int) int{
    if a > b{
        return a
    }
    return b
}
```
:::
---
* [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) 
::: details View solution

```go
func maxProfit(prices []int) int {
    n := len(prices)
    states := [2]int{math.MinInt32,0}
    // 0: buy
    // 1: sell

    for i := 0;i < n; i++{
        states[0] = max(states[0],-prices[i])
        states[1] = max(states[1],states[0]+prices[i])
    }
    return max(states[0],states[1])
}

func max(a,b int)int{
    if a > b{
        return a
    }
    return b
}
```
:::
---
* [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) 
::: details View solution

```go
func maxProfit(prices []int) int {

    n := len(prices)
    states := [4]int{math.MinInt32,0,math.MinInt32,0}
    // 0: hold 1st
    // 1: sold 1st
    // 2: hold 2nd
    // 3: sold 2nd
    for i := 0; i< n;i++{
        price := prices[i]
        states[0] = max(states[0],-price)
        states[1] = max(states[1],states[0]+price)
        states[2] = max(states[2],states[1]-price)
        states[3] = max(states[3],states[2]+price)
    }
    return max(states[1],states[3])
}
func max(a,b int) int{
    if a > b{
        return a
    }
    return b
}
```
:::
---
* [309. Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) 
::: details View solution

```go
func maxProfit(prices []int) int {
    n := len(prices)
    // 0: buy
    // 1: sell
    // 2: cooldown
    states := make([][3]int,n)
    states[0] = [3]int{-prices[0],0,0}
    for i := 1;i < len(prices);i++{
        states[i][0] = max(states[i-1][0],states[i-1][2]-prices[i])
        states[i][1] = max(states[i-1][1],states[i-1][0]+prices[i])
        states[i][2] = max(states[i-1][2],states[i-1][1])
    }
    return max(states[n-1][1],states[n-1][2])
}

func max(a,b int) int{
    if a > b{
        return a
    }
    return b
}
```

Alternatively, we do not need to save states other than i - 1, we can improve space complexity from ***O(n)*** to ***O(1)***
```go
func maxProfit(prices []int) int {
    // 0: buy
    // 1: sell
    // 2: cooldown
    prev := [3]int{math.MinInt32,0,0}
    states := [3]int{}
    for i := 0;i < len(prices);i++{
        states[0] = max(prev[0],prev[2]-prices[i])
        states[1] = max(prev[1],prev[0]+prices[i])
        states[2] = max(prev[2],prev[1])
        prev[0] = states[0]
        prev[1] = states[1]
        prev[2] = states[2]
    }
    return max(states[1],states[2])
}

func max(a,b int) int{
    if a > b{
        return a
    }
    return b
}
```

:::
---
* [376. Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/) 
::: details View solution

```go
func wiggleMaxLength(nums []int) int {
    n := len(nums)
    states := make([][2]int,n)
    // 0 : up at i
    // 1 : down at i
    states[0] = [2]int{1,1}
    for i := 1;i<n;i++{
        // when sequence at i is up
        if nums[i] > nums[i-1]{
            states[i][0] = states[i-1][1]+1
        }else{
            // if not, we could remove current i, and use previous number for next
            states[i][0] = states[i-1][0]
        }
        if nums[i] < nums[i-1]{
            states[i][1] = states[i-1][0]+1
        }else{
            states[i][1] = states[i-1][1]
        }
    }
    if states[n-1][0] > states[n-1][1]{
        return states[n-1][0]
    }
    return states[n-1][1]
}
```
:::
---
* [256. Paint House](https://leetcode.com/problems/paint-house/) 
::: details View solution

```go
func minCost(costs [][]int) int {
    n := len(costs)
    states := make([][]int,n)
    states[0] = make([]int,3)
    copy(states[0],costs[0])
    for i := 1;i < n;i++{
        states[i] = make([]int,3)
        states[i][0] = costs[i][0]+min(states[i-1][1],states[i-1][2])
        states[i][1] = costs[i][1]+min(states[i-1][0],states[i-1][2])
        states[i][2] = costs[i][2]+min(states[i-1][1],states[i-1][0])
    }
    return min(states[n-1][0],min(states[n-1][1],states[n-1][2]))
}
func min(a, b int)int{
    if a < b{
        return a
    }
    return b
}
```
:::
---