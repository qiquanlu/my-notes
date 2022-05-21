---
sidebarDepth: 3
---
# Depth First Search

::: tip What problems can solve?
Given a graph, find all of its vertices, and find all paths between two vertices
:::



## Traverse all vertices in a “graph”

Template
* build adjacency list
* use stack(FILO) or queue(FIFO) to save path
* keep track of visited


## Traverse all paths between any two vertices in a “graph”

## Complexity 
Time Complexity: ***O(V+E)***. 

Here, V represents the number of vertices, and E represents the number of edges. We need to check every vertex and traverse through every edge in the graph.

Space Complexity: ***O(V)***.

 Either the manually created stack or the recursive call stack can store up to V vertices.
## Practice problems

* [1971. Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)
::: details View solution

```go
func validPath(n int, edges [][]int, source int, destination int) bool {
    // build adjacency list
    adjList := make(map[int][]int)
    for _,edge := range edges{
        adjList[edge[0]] = append(adjList[edge[0]], edge[1]) 
        adjList[edge[1]] = append(adjList[edge[1]], edge[0]) 
    }
    // use stack
    stack := []int{source}
    // visited
    visited := make([]bool,n)
    
    for len(stack) > 0{
        pop := stack[len(stack)-1]
        stack = stack[:len(stack)-1]
        
        if pop == destination{
            return true
        }
        
        for _,next := range adjList[pop]{
            if !visited[next]{
                visited[next] = true
                stack = append(stack, next)
            }
        }
    }
    return false
}
```

:::
---
* [797. All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/) 
::: details View solution

```go
func allPathsSourceTarget(graph [][]int) [][]int {
    res := [][]int{}
    n := len(graph)
    var backtracking func(int,[]int)
    backtracking = func(from int,path []int){
        if from == n-1{
            t := make([]int,len(path))
            copy(t,path)
            res = append(res,t)
            return
        }
        for i := range graph[from]{
            path = append(path,graph[from][i])
            backtracking(graph[from][i],path)
            path = path[:len(path)-1]
        }
    }
    backtracking(0,[]int{0})
    return res
}
```
:::
---
* [133. Clone Graph](https://leetcode.com/problems/clone-graph/) 
::: details View solution

```go
// TODO
```
:::
---
* [332. Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary) 
::: details View solution

```go
// TODO
```
:::
---
* [1059. All Paths from Source Lead to Destination](https://leetcode.com/problems/all-paths-from-source-lead-to-destination) 
::: details View solution

```go
// TODO
```
:::
---