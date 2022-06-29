---
sidebarDepth: 3
---
# Bad Numbers

::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::

You've been nominated to participate in a programming challenge as part of your Day 1 Orientation at Amazon. Given an array of bad numbers and a range of integers, determine the longest segment of integers within the range that does not include any bad numbers.

## Input
:::info Input
* **bad_numbers**: an array of integers
* **lower**: an integer, the lower bound, inclusive
* **upper**: an integer, the upper bound, inclusive
:::
## Output
:::info Output
an integer denoting the length of longest contiguous sequence
:::
## Examples
:::info Example 1:
Input:

* bad_numbers = [37,7,22,15,49,60]
* lower = 3
* upper = 48
  
Output: 14
:::
## Explanation:

The segments in the range 3 to 48, inclusive, without any bad numbers are 3,6, 8,14, 16,21, 23,36 and 38,48.

The longest segment is 23,36 and it is 14 elements long, thus the return value is 14.

## Constraints
1≤n≤10^5

1≤ ***badNumbers[i]*** ≤10^9

badNumbers contains distinct elements

## Intuition
::: details View intuition
Sort bad_numbers

adding upper+1 to bad_numbers
:::

[Playground](https://leetcode.com/playground/jM8HAoPT)
::: details View code
```go
func longestSegment(bad_numbers []int ,lower,upper int) int{
    sort.Ints(bad_numbers)
    left := sort.Search(len(bad_numbers),func(i int)bool{ return bad_numbers[i] >= lower})
    right := sort.Search(len(bad_numbers),func(i int)bool{ return bad_numbers[i] > upper})
    bad_numbers = bad_numbers[left:right]
    bad_numbers = append(bad_numbers,upper+1)
    res := 0
    prev := lower-1
    for i := range bad_numbers{
        res = max(res,bad_numbers[i] - prev -1)
        prev = bad_numbers[i]
    }
    return res
}

func max(a, b int) int{
    if a > b{
        return a
    }
    return b
}

```
:::

## Leetcode Practice
* [163. Missing Ranges](https://leetcode.com/problems/missing-ranges/)
::: details View solution

```go
func findMissingRanges(nums []int, lower int, upper int) []string {
    nums = append(nums,upper+1)
    prev := lower - 1
    res := []string{}
    for i := range nums{
        if nums[i] - prev > 1{
            res = append(res,getRange(prev+1,nums[i]-1))
        }            
        prev = nums[i]
    }
    return res
}

func getRange(low,high int) string{
    if low == high{
        return strconv.Itoa(low)
    }
    if high > low{
        return fmt.Sprintf("%d->%d",low,high)
    }
    return ""
}
```
:::