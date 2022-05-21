---
sidebarDepth: 3
---
# Heap Sort

::: tip What problems can max/min heap solve?
Because max/min heap retain its root is max/min all the time, by push and pop elements, we can find largest/smallest elements
:::

## Implementation 

### define type

We define type of our heap, we are using []int for a max heap. 

```go
type MaxHeap []int
```

### func (h MaxHeap) Len() int

```go
func (h MaxHeap) Len() int {
	return len(h)
}
```

### func (h MaxHeap) Less(i, j int) bool 

```go
func (h MaxHeap) Less(i, j int) bool {
	return h[i] > h[j]
}
```
### func (h MaxHeap) Swap(i, j int) 

```go
func (h MaxHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
}
```
### func (h *MaxHeap) Pop() interface{} 

```go
func (h *MaxHeap) Pop() interface{} {
	n := len(*h)
	x := (*h)[n-1]
	(*h) = (*h)[:n-1]
	return x
}
```
### func (h *MaxHeap) Push(x interface{}) 

```go
func (h *MaxHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}
```


## Priority Queue 

::: tip What is Priority Queue(PQ)?
Priority Queue(PQ) is a special queue or stack, that has addition attribute "priority" in each element
:::


::: details View Priority Queue example using <b>container/heap</b>



```go
package main

import (
	"container/heap"
	"fmt"
)

// An Item is something we manage in a priority queue.
type Item struct {
	value    string // The value of the item; arbitrary.
	priority int    // The priority of the item in the queue.
	// The index is needed by update and is maintained by the heap.Interface methods.
	index int // The index of the item in the heap.
}

// A PriorityQueue implements heap.Interface and holds Items.
type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
	// We want Pop to give us the highest, not lowest, priority so we use greater than here.
	return pq[i].priority > pq[j].priority
}

func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
	pq[i].index = i
	pq[j].index = j
}

func (pq *PriorityQueue) Push(x any) {
	n := len(*pq)
	item := x.(*Item)
	item.index = n
	*pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() any {
	old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil  // avoid memory leak
	item.index = -1 // for safety
	*pq = old[0 : n-1]
	return item
}

// update modifies the priority and value of an Item in the queue.
func (pq *PriorityQueue) update(item *Item, value string, priority int) {
	item.value = value
	item.priority = priority
	heap.Fix(pq, item.index)
}

// This example creates a PriorityQueue with some items, adds and manipulates an item,
// and then removes the items in priority order.
func main() {
	// Some items and their priorities.
	items := map[string]int{
		"banana": 3, "apple": 2, "pear": 4,
	}

	// Create a priority queue, put the items in it, and
	// establish the priority queue (heap) invariants.
	pq := make(PriorityQueue, len(items))
	i := 0
	for value, priority := range items {
		pq[i] = &Item{
			value:    value,
			priority: priority,
			index:    i,
		}
		i++
	}
	heap.Init(&pq)

	// Insert a new item and then modify its priority.
	item := &Item{
		value:    "orange",
		priority: 1,
	}
	heap.Push(&pq, item)
	pq.update(item, item.value, 5)

	// Take the items out; they arrive in decreasing priority order.
	for pq.Len() > 0 {
		item := heap.Pop(&pq).(*Item)
		fmt.Printf("%.2d:%s ", item.priority, item.value)
	}
}
```
:::

## Complexity 

Time complexity : ***O(nlogn)***. At most nn elements are added to the queuequeue. Adding each element is followed by heapification, which takes ***O(logn)*** time.

Space complexity : ***O(n)***. The queuequeue containing the durations of the courses taken can have atmost nn elements

## Practice problems

* [630. Course Schedule III](https://leetcode.com/problems/course-schedule-iii/) 
::: details View solution

```go

type MaxHeap []int

func (h MaxHeap) Len() int {
	return len(h)
}

func (h MaxHeap) Less(i, j int) bool {
	return h[i] > h[j]
}

func (h MaxHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
}

func (h *MaxHeap) Pop() interface{} {
	n := len(*h)
	x := (*h)[n-1]
	(*h) = (*h)[:n-1]
	return x
}

func (h *MaxHeap) Push(x interface{}) {
	(*h) = append((*h), x.(int))
}

func scheduleCourse(courses [][]int) int {
	// sort courses by end date
	sort.Slice(courses, func(i, j int) bool {
		return courses[i][1] < courses[j][1]
	})
	maxHeap := &MaxHeap{}

	day := 0
	for i := 0; i < len(courses); i++ {
		heap.Push(maxHeap, courses[i][0])
		day += courses[i][0]
		if day > courses[i][1] {
			day -= heap.Pop(maxHeap).(int)
		}
	}
	return maxHeap.Len()
}

```
:::
---


