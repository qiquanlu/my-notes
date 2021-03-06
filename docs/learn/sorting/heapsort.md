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

Time complexity : ***O(nlogn)***. At most n elements are added to the queue. Adding each element is followed by heapification, which takes ***O(logn)*** time.

Space complexity : ***O(n)***. The queuequeue containing the durations of the courses taken can have atmost nn elements

## Practice problems


* [253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) 
::: details View solution

```go
func minMeetingRooms(intervals [][]int) int {
    // sort intervals by start time
    sort.Slice(intervals,func(i,j int) bool{
        return intervals[i][0] < intervals[j][0]
    })
    minHeap := &MinHeap{}
    heap.Init(minHeap)
    for _,interval := range intervals{
        // when heap is empty
        if minHeap.Len() == 0{
            heap.Push(minHeap,interval[1])
            continue
        }
        // when heap not empty
        nextEndtime := (*minHeap)[0]
        // when current meeting start after existing meeting, 
        // there is no need to allocate another room, we can 
        // pop existing one and push new one
        if interval[0] >= nextEndtime{
            heap.Pop(minHeap)
        }
        heap.Push(minHeap,interval[1])
    }
    return minHeap.Len()
}

type MinHeap []int

func(h MinHeap) Len() int{
    return len(h)
}

func(h MinHeap) Less(i, j int) bool{
    return h[i] < h[j]
}

func(h MinHeap) Swap(i, j int){
    h[i], h[j] = h[j], h[i]
}

func(h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.(int))
}

func(h *MinHeap) Pop() interface{}{
    pop := (*h)[len(*h)-1]
    *h = (*h)[:len(*h)-1]
    return pop
}
```
:::
---
* [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) 
::: details View solution

```go
type Entry struct{
    Num int
    Count int
}
type MinHeap []Entry

func (h MinHeap) Len() int{
    return len(h)
}

func (h MinHeap) Less(i,j int) bool{
    return h[i].Count < h [j].Count
}

func (h MinHeap) Swap(i,j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *MinHeap) Pop() interface{}{
    pop := (*h)[len(*h) - 1]
    *h = (*h)[:len(*h) - 1]
    return pop
}

func (h *MinHeap) Push(x interface{}){
    *h = append((*h),x.(Entry))
}

func topKFrequent(nums []int, k int) []int {
    //count frequent
    count := map[int]int{}
    for _, num := range nums{
        count[num]++
    }
        
    //use min heap, keep k size element
    minHeap := &MinHeap{}
    heap.Init(minHeap)

    for key,val := range count{
        if minHeap.Len() < k{
            heap.Push(minHeap,Entry{Num:key,Count:val})
            continue
        }
        if val > (*minHeap)[0].Count{
            heap.Push(minHeap,Entry{Num:key,Count:val})
            heap.Pop(minHeap)
        }
    }
    
    ret := []int{}
    for _, element := range *minHeap{
        ret = append(ret, element.Num) 
    }
    return ret
}
```
:::
---

* [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) 
::: details View solution

```go
// min heap
type MinHeap []int

func (h MinHeap) Len() int { return len(h) }

func (h MinHeap) Less(i,j int) bool{ return h[i] < h[j] }

func (h MinHeap) Swap(i,j int){ h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Pop() interface{}{
    pop := (*h)[len(*h)-1]
    *h = (*h)[:len(*h)-1]
    return pop
}

func (h *MinHeap) Push(x interface{}){
    *h = append(*h,x.(int))
}

// use min heap, keep min heap size == k
// because minHeap[0] is the smallest element in heap
// iterate the rest push and pop if greater than minHeap[0]
// after iteration, minHeap has largest k nums, and minHeap[0] is the k largest

func findKthLargest(nums []int, k int) int {
    minHeap := &MinHeap{}
    heap.Init(minHeap)
    
    for i := 0; i < k; i++{
        heap.Push(minHeap,nums[i])
    } 
    
    for i := k; i < len(nums); i++{
        if nums[i] > (*minHeap)[0]{
            heap.Push(minHeap,nums[i])
            heap.Pop(minHeap)            
        }
    }
    return (*minHeap)[0]
}
```
:::
---

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


