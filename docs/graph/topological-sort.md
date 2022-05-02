---
sidebarDepth: 3
---
# Template

::: tip What problems can solve?
Topological sort solves dependency problem. 

Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge uv, vertex u comes before v in the ordering. 
:::

::: warning Limitations

* Topological Sorting for a graph is <b><i> not possible</i></b> if the graph is not a <b> DAG </b>.
* At least one vertex with 0 in-degree to start

:::

## Implementation 

### build adjacency list

We build a dependency list, and maintain an in-degree list for each element

```go
dict := make(map[int][]int)
inDegree := make([]int,n)
for _, relation := range relations{
    prereq := relation[1]
    next := relation[0]
    inDegree[next]++
    dict[prereq] = append(dict[prereq],next)
}
```

### in-degree == 0
If an element has in-degree of 0, this means it has no dependency, or all its dependency already met.

We use a queue to keep track the ones had in-degree of 0
```go
queue := []int{}
// go through current in-degree and push all elements with no dependency to the queue
for i := range inDegree{
    if inDegree[i] == 0{
        queue = append(queue,i)
    }
}

// while size of queue > 0, keep poping elements and push new elements to the queue

for len(queue) > 0 {
    pop := queue[0]
    queue = queue[1:]
    for _, course := range dict[pop]{
        inDegrees[course]--
        if inDegrees[course] == 0{
            queue = append(queue,course)
            }
        }
    }
    
```

## Complexity 
V represents the number of vertices, and E represents the number of edges.

* Time Complexity: <b><i>O(V+E)</i></b>
* Space Complexity: <b><i>O(V+E)</i></b>

## Practice problems

* [210. Course Schedule II
](https://leetcode.com/problems/course-schedule-ii/) 
::: details View solution

```go
func findOrder(numCourses int, prerequisites [][]int) []int {
    dict := make(map[int][]int)
    inDegrees := make([]int,numCourses)
    for _, relation := range prerequisites{
        pre := relation[1]
        course := relation[0]
        dict[pre] = append(dict[pre],course)
        inDegrees[course]++
    }
    counter := numCourses
    queue := []int{}
    for i := range inDegrees{
        if inDegrees[i] == 0{
            counter--
            queue = append(queue,i)
        }
    }
        
    res := []int{}

    for len(queue) > 0 {
        pop := queue[0]
        res = append(res,pop)
        queue = queue[1:]
        for _, course := range dict[pop]{
            inDegrees[course]--
            if inDegrees[course] == 0{
                counter--
                queue = append(queue,course)
            }
        }
    }
    
    if counter == 0{
        return res
    }
    return []int{}
}
```
:::
---
* []() 
::: details View solution

```go

}
```
:::
---
* []() 
::: details View solution

```go

}
```
:::
---
* []() 
::: details View solution

```go

}
```
:::
---