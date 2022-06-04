---
sidebarDepth: 3
---
# Linked List

::: tip What limitation does singly linked list has?
Unlike the array, we are not able to access a random element in a singly-linked list in constant time. If we want to get the ith element, we have to traverse from the head node one by one. It takes us ***O(N)*** time on average to visit an element by index, where N is the length of the linked list.
:::



## Operations 


### add operation

We can add a new node after a given node ***prev***.

```go
// initialize a new node cur with given value
cur := &ListNode{Val:value}
// link cur's Next to prev's Next
cur.Next = prev.Next
// link prev's Next to cur
prev.Next = cur
```

Unlike an array, we don’t need to move all elements past the inserted element. Therefore, you can insert a new node into a linked list in ***O(1)*** time complexity, which is very efficient.

### add at beginning
We can add a new node in front of a linked list ***head***.

```go
// initialize a new node cur with given value, and it's Next pointer to head
cur := &ListNode{Val:value,Next:head}
// link cur's Next to prev's Next
head = cur
```

## Complexity 

## Practice problems

* [xxx. Some LeetCode Problem](https://leetcode.com/problems/some-leetcode-problem/) 
::: details View solution

```go
// TODO
```
:::
---