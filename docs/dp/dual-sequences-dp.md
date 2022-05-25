---
sidebarDepth: 3
---
# Dual Sequences Dynamic Programming

::: tip What time series DP problems looks like?
*  given two series input(in form of array or string)
:::

## Template 


### define dp[i][j]
Given two sequences ***s*** and ***t*** (in form of arrays or strings)

Define ***dp[i][j]***, which represent solution to subarray ***s[:i]*** and ***t[:j]***

Try to finde relations between previous solutions, like
***dp[i-1][j]***, ***dp[i][j-1]***, or ***dp[i-1][j-1]***


## Complexity 

## Practice problems

* [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) 
::: details View solution

```go
func longestCommonSubsequence(text1 string, text2 string) int {
    m, n := len(text1), len(text2)
    dp := make([][]int,m)
    for i := range dp{
        dp[i] = make([]int,n)
    }
    if text1[0] == text2[0]{
        dp[0][0] = 1
    }
    for i := 1;i < m ; i++{
        if text1[i] == text2[0]{
            dp[i][0] = 1
        }else{
            dp[i][0] = dp[i-1][0]
        }
    }
    for i := 1;i < n ; i++{
        if text2[i] == text1[0]{
            dp[0][i] = 1
        }else{
            dp[0][i] = dp[0][i-1]
        }
    }
    
    for i := 1; i < m; i++{
        for j := 1; j < n; j++{
            if text1[i] == text2[j]{
                dp[i][j] = dp[i-1][j-1] + 1
            }else{
                dp[i][j] = max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[m-1][n-1]
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

* [1092. Shortest Common Supersequence](https://leetcode.com/problems/shortest-common-supersequence/) 
::: details View solution

```go
// TODO
```
:::
---

* [72. Edit Distance](https://leetcode.com/problems/edit-distance/) 
::: details View solution

```go
// TODO
```
:::
---

* [97. Interleaving String](https://leetcode.com/problems/interleaving-string/) 
::: details View solution

```go
// TODO
```
:::
---

* [115. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) 
::: details View solution

```go
// TODO
```
:::
---

* [727. Minimum Window Subsequence](https://leetcode.com/problems/minimum-window-subsequence/) 
::: details View solution

```go
// TODO
```
:::
---

* [583. Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/) 
::: details View solution

```go
// TODO
```
:::
---
* [712. Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) 
::: details View solution

```go
// TODO
```
:::
---
* [1035. Uncrossed Lines](https://leetcode.com/problems/uncrossed-lines/) 
::: details View solution

```go
// TODO
```
:::
---
* [1216. Valid Palindrome III](https://leetcode.com/problems/valid-palindrome-iii) 
::: details View solution

```go
// TODO
```
:::
---
* [1312. Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) 
::: details View solution

```go
// TODO
```
:::
---