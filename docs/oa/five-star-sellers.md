---
sidebarDepth: 3
---
# Five Star Sellers


::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::

Third-party companies that sell their products online are able to analyze the customer reviews for their products in real time. Imagine that there is creating a category called "five-star sellers" that will only display products sold by companies whose average percentage of five-star reviews per-product is at or above a certain threshold. Given the number of five-star and total reviews for each product a company sells, as well as the threshold percentage, what is the minimum number of additional fivestar reviews the company needs to become a five-star seller?
## Example
For example, let's say there are 3 products (n = 3) where productRatings = [[4,4], [1,2], [3, 6]], and the percentage ratings Threshold = 77. The first number for each product in productRatings denotes the number of fivestar reviews, and the second denotes the number of total reviews. Here is how we can get the seller to reach the threshold with the minimum number of additional five-star reviews:

Before we add more five-star reviews, the percentage for this seller is ((4 / 4) + (1/2) + (3/6))/3 = 66.66%

If we add a five-star review to the second product, the percentage rises to ((4 / 4) + (2/3) +(3/6))/3 = 72.22%

If we add another five-star review to the second product, the percentage rises to ((4 / 4) + (3/4) + (3/6))/3 = 75.00%

If we add a five-star review to the third product, the percentage rises to ((4/4) + (3/4) + (4/7))/3 = 77.38%

At this point, the threshold of 77% has been met. Therefore, the answer is 3 because that is the minimum number of additional five-star reviews the company needs to become a five-star seller.

## Function Description
Complete the function fiveStarReviews in the editor below.

fiveStarReviews has the following parameters:

:::info Input
**int productRatings[n][2]**: a 2-dimensional array of integers where the ith element contains two values, the first one denoting fivestar[i] and the second denoting total[i]

**int ratingsThreshold**: the threshold percentage, which is the average percentage of five-star reviews the products need for the company to be considered a five-star seller
:::

### Returns:
:::info Return
**int**: the minimum number of additional five-star reviews the company needs to meet the threshold ratingsThreshold
:::
## Constraints
:::info Constraints
* 1<=n<=200
* 0 <= fivestar<total<=100
* 1<=ratingsThreshold<100
* The array productRatings contains only non-negative integers.

:::

[Playground](https://leetcode.com/playground/DBKWkZii)
::: details View code

```go
func main() {
    ratings := [][2]int{{4,4},{1,2},{3,6}}
    threshold := 77
    fmt.Println(minFiveStartReviews(ratings, threshold))
}
type MaxHeap [][2]int
func (h MaxHeap) Len() int{ return len(h) }
func (h MaxHeap) Less(i, j int) bool{ return profit(h[i]) > profit(h[j]) }
func (h MaxHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *MaxHeap) Pop() interface{}{
    x := (*h)[len(*h)-1]
    *h = (*h)[:len(*h)-1]
    return x
}
func (h *MaxHeap) Push(x interface{}) {
    *h = append(*h, x.([2]int))
}

func profit(x [2]int) float64{
    return float64(x[0]+1)/float64(x[1]+1) - float64(x[0])/float64(x[1])
}
func minFiveStartReviews(ratings [][2]int, threshold int) int{
    maxHeap := &MaxHeap{}
    current := 0.0
    heap.Init(maxHeap)
    for _,rating := range ratings{
        heap.Push(maxHeap,[2]int{rating[0],rating[1]})
        current += float64(rating[0])/float64(rating[1])
    }
    extra := 0
    target := float64(threshold)/100 * float64(len(ratings))
    for current <= target{
        extra++
        pop := heap.Pop(maxHeap).([2]int)
        current += profit(pop)
        pop[0]++
        pop[1]++
        heap.Push(maxHeap,pop)
    }
    return extra
}
```
:::

## Leetcode Practice
* [1792. Maximum Average Pass Ratio](https://leetcode.com/problems/maximum-average-pass-ratio/)
::: details View solution

```go

type MaxHeap [][2]int

func (h MaxHeap) Len() int{
    return len(h)
}
func (h MaxHeap) Less(i, j int) bool{
    return profit(h[i]) > profit(h[j])
}
func (h MaxHeap) Swap(i, j int){
    h[i], h[j] = h[j], h[i]
}
func (h *MaxHeap) Push(x interface{}){
    *h = append(*h, x.([2]int))
}
func (h *MaxHeap) Pop() interface{}{
    x := (*h)[len(*h)-1]
    *h = (*h)[:len(*h)-1]
    return x
}
func profit(input [2]int) float64{
    return float64(input[0]+1)/float64(input[1]+1) - float64(input[0])/float64(input[1])
}

func maxAverageRatio(classes [][]int, extraStudents int) float64 {
    maxHeap := &MaxHeap{}
    heap.Init(maxHeap)
    for _,class := range classes{
        heap.Push(maxHeap,[2]int{class[0],class[1]})
    }
    for i := 0; i < extraStudents; i++{
        x := heap.Pop(maxHeap).([2]int)
        x[0]++
        x[1]++
        heap.Push(maxHeap,x)
    }
    average := 0.0
    for _,class := range (*maxHeap){
        average += float64(class[0])/float64(class[1])
    }
    average = average / float64(len(classes))
    return average
}
```
:::