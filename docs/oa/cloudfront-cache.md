---
sidebarDepth: 3
---
# Cloudfront Caching

::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::
A company wants to build an algo to measure the efficiency of its caching network. The network is represented as a number of nodes and a list of connected pairs. The efficiency of this network can be estimated by first summing the cost of each isolated set of nodes where each individual node has a cost of 1. To account for the increase in efficiency as more nodes are connected, update the cost of each isolated set to be the ceiling of the square root of the original cost and return the final sum of all costs.
## Example:
:::info Example
* n = 10 nodes
* edges = [[1 2] , [1 3] , [2 4] , [3 5] , [7 8]]
* There are 2 isloated sets with more than one node {1,2,3,4,5} and {7,8}. The ceilings of their square roots are:
* 5^1/2 = 2.236 and ceil(2.236) = 3
* 2^1/2 = 1.414 and ceil(1.414) = 2
* The other three isolated nodes are separate and the square root of their weights is 1^1/2 = 1 respectively.
* The sum is 3+2+(3*1) = 8
:::
## Function Description
:::info Complete the function connectedSum in the editor below
* connectedSum has the following parameter(s):
* int n: the number of nodes
* str edges[m]: an array of strings that consist of a space-separated integer pair that denotes two connected nodes, p and q
* Returns:
* int: an integer that denotes the sum of the values calculated
:::
## Constraints:
:::info Constraints
* 2 <= n <= 10^5
* 1 <= m <=10^5
* 1 <= p,q <= n
* p != n
:::

## Sample 
:::info Input
n = 4
edges[] = ["1 2", "1 4"]

**Output**

3
:::

Explanation
* The values to sum are:
* Set {1,2,4}: c =ceil(sqrt(3)) = 2
* Set {3}: c = ceil(sqrt(1)) = 1
* Return 2+1=3
---
:::info Input
n = 8
edges[] = ["8 1", "5 8", "7 3", "8 6"]

**Output**

6
:::
Explanation
* The values to sum for each group are:
* Set {2}: c =ceil(sqrt(1)) = 1
* Set {4}: c = ceil(sqrt(1)) = 1
* Set {1,5,6,8}: c = ceil(sqrt(4)) = 2
* Set {3,7}: c = ceil(sqrt(2)) = 2
* return 1+1+2+2 = 6

## Intuition
::: details View intuition
Connected edges should think of union find
:::

[Playground](https://leetcode.com/playground/Bwck49cF)
::: details View code
```go
func connectedSum(n int, edges [][]int) int{
    roots := make([]int,n)
    for i := range roots{
        roots[i] = i
    }
    var find func(x int) int
    find = func(x int) int{
        if roots[x] != x{
            roots[x] = find(roots[x])
        }
        return roots[x]
    }
    
    union := func(x,y int){
        xroot := find(x)
        yroot := find(y)
        if xroot != yroot{
            roots[yroot] = xroot
        }
    }
    
    for _,edge := range edges{
        union(edge[0]-1,edge[1]-1)
    }
    
    counts := map[int]int{}
    for i := range roots{
        counts[find(i)]++
    }
    res := 0
    for _,count := range counts{
        if count == 1{
            res++
            continue
        }
        if count < 1{
            continue
        }
        t := math.Ceil(math.Sqrt(float64(count)))
        res += int(t)
    }
    return res
}
```
:::

## Leetcode Practice
* [323. Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
::: details View solution

```go
func countComponents(n int, edges [][]int) int {
    roots := make([]int,n)
    for i := range roots{
        roots[i] = i
    }
    
    var find func(int)int
    find = func(x int) int{
        if roots[x] != x{
            roots[x] = find(roots[x])
        }
        return roots[x]
    }
    
    union := func(x, y int){
        xroot := find(x)
        yroot := find(y)
        if xroot != yroot{
            roots[yroot] = xroot
        }
    }
    
    for _,edge := range edges{
        union(edge[0],edge[1])
    }
    
    count:= 0
    for i := range roots{
        if i == find(i){
            count++
        }
    }
    return count
}
```
:::