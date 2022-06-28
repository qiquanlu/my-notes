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

