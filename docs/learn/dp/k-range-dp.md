---
sidebarDepth: 3
---
# K Range Dynamic Programming

::: tip What time series DP problems looks like?
*  given one sequence (in form of array or string)
*  divided into k continous range
:::




## Template 


### define dp[i][k]

define ***dp[i][k]***, which represent divide sequence into k ranges, the solution to the i position

find  starting point fo the last range, and divide ***dp[i][k]*** into dp[j-1][k] and s[j;i]

solution is dp[n][k]


## Complexity 

## Practice problems

* [xxx. Some LeetCode Problem](https://leetcode.com/problems/some-leetcode-problem/) 
::: details View solution

```go
// TODO
```
:::
---