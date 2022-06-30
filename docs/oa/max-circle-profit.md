---
sidebarDepth: 3
---
# Max Circle Profit

::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::

An Amazon seller is deciding which of their products to invest in for the next quarter to maximize their profits. They have each of their products listed as segments of a circle. Due to varying market conditions, the products do not sell consistently. The seller wants to achieve maximum profit using limited resources for investment. The product list is segmented into a number of equal segments, and a projected profit is calculated for each segment. The projected profit is the cost to invest versus the sale price of the product. The seller has chosen to invest in a number of contiguous segments along with those opposite. Determine the maximum profit the seller can achieve using this approach.

For example, the product list is divided into n = 6 sections and will select k = 2 contiguous sections and those opposite to invest in. The profit estimates are profit = [1, 5, 1, 3, 7, -3] respectively. The diagrams below show the possible choices with profits[0] at the 9 o'clock position and filling counterclockwise.

The profit levels, from left to right, are 1 + 5 + 7 + 3 = 16, 5 + 1 + 7 +-3 = 10, and 1 + 3 + -3 + 1 = 2. The maximum profit is 16.

## Function Description

Complete the function maxProfit in the editor below. The function must return the maximum profit achievable.

maxProfit has the following parameters:

k: an integer that denotes half of the needed number of products within the list

profit[profit[0],...profit[n-1]]: an array of integers that denote the profit from investing in each of the products

