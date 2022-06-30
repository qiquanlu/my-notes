---
sidebarDepth: 3
---
# Stock Price (Find Earliest Month Minimum Price Change)

::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::
Given the stock prices of n months, the net price change for the i-th month is defined as the absolute difference between the average of stock prices for the first i months and for the remaining (n−i) months where 1≤i≤n.
Note that these averages are rounded down to an integer. 

The average of a set of integers here is defined as the sum of integers divided by the number of integers, rounded down to the nearest integer.
For example, the average of [1, 2, 3, 4] is the floor of (1 + 2 + 3 + 4) / 4 = 2.5 and the floor of 2.5 is 2.

Given an array of stock prices, find the month at which the net price change is minimum.

If there are several such months, return the earliest month.

## Constraints:

2 <= n <= 10^5

1 <= stockPrice[i] <= 10^9