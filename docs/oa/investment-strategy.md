---
sidebarDepth: 3
---
# Investment Strategy

::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::
Your team at Amazon has been asked to help outline options for a hypothetical investment strategy. Imagine an investor opens a new account and wants to invest in a number of assets. Each asset begins with a balance of 0, and its value is stored in an array using 1-based Indexing. Periodically, a contribution is received and equal investments are made in a subset of the portfolio. Each contribution will be given by investment amount, start index, end index. Each investment in that range will receive the contribution amount. Determine the maximum amount invested in any one investment after all contributions.

For example, start with an array of 5 elements: investments = [0, 0, 0, 0, 0]*. The variables left and right represent the starting and ending indices, inclusive. Another variable, contribution, is the new funds to invest per asset. The first investment is at index 1.

    left	right	contribution	investments
                            [ 0,  0,  0,  0,  0 ] 
    1	2	10	[ 10, 10, 0,  0,  0 ]
    2	4	5	[ 10, 15, 5,  5,  0 ] 
    3	5	12	[ 10, 15, 17, 17, 12]

In the first round, a contribution of 10 is made to investments 1 and 2. In the second round, a contribution of 5 is made to assets 2, 3 and 4. Finally, in the third round, a contribution of 12 is added to investments 3, 4 and 5. The maximum invested in any one asset is 17.

* Note: The investments array is not provided in the function. It is to be created after the number of assets available is known.

## Function description:
Complete the maxValue function in the editor below.

maxValue has the following parameters:

    int n: the number of investments available
    int rounds[o][3]: each rounds[i] contains 3 integers, [left, right, contribution]

Returns:

    int: the maximum invested in any one asset

## Constraints:

    3 <= n <= 10^7
    1 <= o <= 2 * 10^5
    1 <= left <= right <= n
    0 <= contribution <= 10^9

[Playground](https://leetcode.com/playground/fhiyWCSS)
::: details View code

```go
func main() {
    investments := [][3]int{{1,2,10},{2,4,5},{3,5,12}}
    fmt.Println(maxInvestment(investments))
}

func maxInvestment(investments [][3]int) int{
    diff := make([]int,len(investments))
    for _,investment := range investments{
        diff[investment[0]-1] += investment[2]
        if investment[1] < len(investments){
            diff[investment[1]] -= investment[2]
        }
    }
    sum := 0
    max := 0
    for i := range diff{
        sum += diff[i]
        if sum > max{
            max = sum
        }
    }
    return max
}

```
:::

## Leetcode Practice
* [1109. Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/)
::: details View solution

```go
func corpFlightBookings(bookings [][]int, n int) []int {
    diff := make([]int, n)
    res := make([]int, n)
    for _, booking := range bookings{
        diff[booking[0]-1] += booking[2]
        if booking[1] < n{
            diff[booking[1]] -= booking[2]
        }
    }
    
    res[0] = diff[0]
    for i := 1; i < n; i++{
        res[i] = res[i-1]+diff[i]
    }
    return res
}
```
:::