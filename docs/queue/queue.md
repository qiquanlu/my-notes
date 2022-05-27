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

* [xxx. Some LeetCode Problem](https://leetcode.com/problems/some-leetcode-problem/) 
::: details View solution

```go
// TODO
```
:::
---