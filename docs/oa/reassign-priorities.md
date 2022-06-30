---
sidebarDepth: 3
---
# Reassign Priorities

::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::
An administrator for Amazon Human Resources has created a queue of all current compliance issues along with their priorities. The priorities range from 1 to 99. Create an algorithm that will reassign priorities so that the value of the maximum priority assigned is minimized, keeping the order of priorities between all issues the same.

## Example:

    priorities = [1, 4, 8, 4]

There are three priority levels: 1, 4 and 8. The array elements are reassigned to priorities [1, 2, 3, 2]. Their order of priorities are maintained while the value of the maximum priority is minimized.

Given the priorities of the issues, return a list that contains the reassigned priority values without reordering.

## Function Description:
Complete the reassignedPriorities function in the editor below. It must return an integer array that represents the reassigned priorities of each element in the original order.

reassignedPriorities has the following parameter(s):
* int priorities[n]: an array of integers that represents current priorities

## Constraints:

    1<= n <= 10^5
    1 <= priorities[i] <= 99

## Example:
### Input:

    priorities = [1, 3, 7, 3]

### Output: 

    [1 2 3 2]