---
sidebarDepth: 3
---
# Time Series Dynamic Programming Multiple Previous States 

::: tip What time series DP problems looks like?
*  given a series input(in form of array or string), each element consider as a day
*  state at current day only depends on state from previous days
*  find max, min or sum
:::



## Implementation 


### define ***dp[i][j]***

define ***dp[i][j]*** which represent the state j of day i

### state transition equation
find an equation to represent ***d[i][j]*** only using ***d[i-1][j]*** ,***d[i-2][j]*** etc.

### aggregation of ***d[last][j]***
usually find solution by min, max, or sum of ***d[last]

## Complexity 

## Practice problems

* [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) 
::: details View solution

```go
func lengthOfLIS(nums []int) int {
    n := len(nums)
    dp := make([]int,n)
    res := 0
    
    for i := 0;i < n; i++{
        for j := 0; j < i ; j++{
            if nums[i] > nums[j]{
                dp[i] = max(dp[i],dp[j])
            }
        }
        dp[i]++
        
        res = max(res,dp[i])
    }
    return res
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

* [368. Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset/) 
::: details View solution

```go
// TODO
```
:::
---

* [1105. Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves/) 
::: details View solution

```go
// TODO
```
:::
---
