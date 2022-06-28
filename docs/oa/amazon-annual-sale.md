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
* If two discount coupons A and B are vand, then the concatenation of B and A is also valid (i.e the coupons AB and BA are both valid).
* Given n discount coupons, each coupon consisting of only lowercase English characters, where the ith discount coupon is denoted discountsi, determine if each discount coupon is valid or not. A valid coupon is denoted by 1 in the answer may while an invalid coupon is denoted by 0.
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