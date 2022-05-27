---
sidebarDepth: 3
---
# Binary Search

::: tip What problems can solve?
* Binary Search maintains the left, right, and middle indicies of the search space and compares the search target or applies the search condition to the middle value of the collection; 
* if the condition is unsatisfied or values unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful. 
* If the search ends with an empty half, the condition cannot be fulfilled and target is not found.
:::



## Implementation 


### divide in half

Binary search is to divide original search space into half, by comparing target with mid point, usually mid point is calculated by left and right index 

```go
mid := l + (r - l) / 2
```

during the process, if any mid point meet the requirement, return the result. Otherwise move left or right to reduce search space

### template
basic template
```go
l, r := 0, len(nums)-1
    
for l <= r{
    m := l + (r - l) / 2
    if nums[m] == target{
        return m
    }
    if nums[m] > target{
        r = m - 1
    }else{
        l = m + 1
    }
}
return -1
```

### pre-processing
Sort if collection is unsorted

### search
Using l <= r loop, and divide search space in half after each comparison

### post-processing
Determin viable candidates in the remaining space.

## Complexity 

## Practice problems

* [704. Binary Search](https://leetcode.com/problems/binary-search/) 
::: details View solution

```go
func search(nums []int, target int) int {
    l, r := 0, len(nums)-1
    
    for l <= r{
        m := l + (r - l) / 2
        if nums[m] == target{
            return m
        }
        if nums[m] > target{
            r = m - 1
        }else{
            l = m + 1
        }
    }
    return -1
}
```
:::
---

* [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
::: details View solution

```go
func search(nums []int, target int) int {
    // find rotation index
    l,r := 0, len(nums) - 1
    for l < r{
        m := l + (r - l) / 2
        if nums[m] <= nums[l]{
            r = m
        }else{
            l = m
        }
    }
    first := bsearch(nums[:r+1],target)
    if first >= 0 {
        return first
    }
    second := bsearch(nums[r+1:],target)
    if second >= 0{
        return l+1 + second 
    }
    return -1
   
}
func bsearch(nums []int,target int) int{
    l,r := 0,len(nums)-1
    for l <= r{
        m := l +(r-l)/2
        if nums[m] == target{
            return m
        }
        if nums[m] > target{
            r = m -1
        }else{
            l = m + 1
        }
        
    }
    return -1
}
```
:::
---