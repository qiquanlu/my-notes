---
sidebarDepth: 3
---
# Number of Binary Substrings

::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::
Kindle Direct Publishing, Amazon's e-book self-publishing platform, is working on a new feature to help authors track the use of text strings in different ways. A substring is a group of contiguous characters in a string. For instance, all substrings of abc are [a, b, c, ab, bc, abc].

Given a binary representation of a number, determine the total number of substrings present that match the following conditions:
- The 0's and 1's are grouped consecutively (e.g., 01, 10, 0011, 1100, 000111, etc.).
- The number of 0's in the substring is equal to the numder of 1's in the substring.

As an example, consider the string 001101. The 4 substrings matching the two conditions include [0011, 01, 10, 01]. Note that 01 appears twice, from indices 1-2 and 4-5. There are other substrings, e.g. 001 and 011 that match the first condition but not the second.

## Function Description
    Complete the function counting in the editor below.

    counting has the following parameter(s):
        string s: a string representation of a binary integer
    Returns
        int: the number of substrings of sthat satisfy the two conditions

## Constraints
    5 <= s <= 5 x 10^5
    each s[i] is either '0' or '1'

## Sample Case
### Input:

    s = "00110"

### Output: 
    
    3

### Explanation
There are three substrings that satisfy both conditions:
0011, 01, 10

