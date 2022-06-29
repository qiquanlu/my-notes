---
sidebarDepth: 3
---
# Amazon Annual Sale/Valid Discount Coupon

::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::

At Amazon's annual sale. employees are tasked with generating valid discount coupons for loyal customers. However, there are some used/invalid coupons in the mix and the challenge in this task is to determine whether a given discount coupon is valid or not.

The validity of a discount coupon is determined as follows:
## Rules
:::info Rules:
* An empty discount coupon is valid.
* If a discount coupon A is valid, then a discount coupon C made by adding one character x to both the beginning of A and the end of A is also valid (i.e the discount coupon C = xAx is valid).
* If two discount coupons A and B are valid, then the concatenation of B and A is also valid (i.e the coupons AB and BA are both valid).
* Given **n** discount coupons, each coupon consisting of only lowercase English characters, where the ith discount coupon is denoted **discounts[i]**, determine if each discount coupon is valid or not. A valid coupon is denoted by **1** in the answer may while an invalid coupon is denoted by **0**.
:::
## Input
:::info Input
discounts: Array of discount coupons.
:::

:::info Output
Array of integers, a valid coupon is denoted by 1 and an invalid coupon is denoted by 0.
:::

## Example:
:::info Example:
Input:
**discounts** = ['abba', 'abca']

Output:
**[1, 0]**
:::
Explanation:
'abba' is valid and 'abca' is invalid.

## Intuition
::: details View intuition
Think same characters as parentheses.

Use stack
:::

[Playground](https://leetcode.com/playground/L4LybtuR)
::: details View code
```go
func validDiscountCoupon(discounts []string) []int{
    ret := make([]int, len(discounts))
    for i,discount := range discounts{
        ret[i] = isValid(discount)
    }
    return ret
}

func isValid(discount string) int{
    stack := []byte{}
    seen := make(map[byte]bool)
    for i := range discount{
        if !seen[discount[i]]{
            seen[discount[i]] = true
            stack = append(stack,discount[i])
        }else{
            if len(stack) > 0 && stack[len(stack)-1] == discount[i]{
                stack = stack[:len(stack)-1]
                continue
            }else{
                return 0
            }
        }
    }
    if len(stack) == 0{
        return 1
    }
    return 0
}
```
:::

## Leetcode Practice
* [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
::: details View solution

```go
func isValid(s string) bool {
    hash := map[byte]byte{'(':')','[':']','{':'}'}
    stack := []byte{}
    for i := range s{
        if s[i] == ')' || s[i] == ']' || s[i] == '}'{
            if len(stack)>0 && hash[stack[len(stack)-1]] == s[i]{
                stack = stack[:len(stack)-1]
                continue
            }
            return false
        }else{
            stack = append(stack,s[i])
        }
    }
    return len(stack) == 0
}
```
:::