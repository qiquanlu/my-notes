---
sidebarDepth: 3
---
# Decode Encoded String

::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::

Amazon Web Services (AWS) is working on a new security feature to help encode text. Consider a string that consists of lowercase English alphabetic letters (i.e., [a-z]) only. The following rules are used to encode all of its characters into string s: 

* a is encoded as 1, b is encoded as 2, c is encoded as 3, …, and i is encoded as 9.
* j is encoded as 10#, k is encoded as 11#, l is encoded as 12#, …, and z is encoded as 26#.
* If there are two or more consecutive occurrences of any character, then the character count is written within parentheses (i.e., (c), where c is an integer denoting the count of consecutive occurrences being encoded) immediately following the encoded character. For example, consider the following string encodings:
  * String “abzx” encoded as s = “1226#24#”.
  * String “aabccc” is encoded as s = “1(2)23(3)”.
  * String “bajj” is encoded as s = “2110#(2)”.
  * String “wwxyzwww” is encoded as s = “23#(2)24#25#26#23#(3)”.
  * Given an encoded string s, determine the character counts for each letter of the original, decoded string. Return an integer array of length 26 where index 0 contains the number of ‘a’ characters, index 1 contains the number of ‘b’ characters and so on.
  
## Input
s: an encoded string

## Output
an array of 26 integers as described

## Examples
:::info Example :
Input: 1
s = 1226#24#

Output:
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]
:::

## Explanation:
String “abzx” encoded as “1226#24#”.

## Constraints
* String s consists of decimal integers from 0 to 9, #, and () only.
* 1<=length of s<=10^5.
* It is guaranteed that string s is a valid encoded string.
* 2<=c<=10^4, where c is a parenthetical count of consecutive occurrences of an encoded character.

:::

[Playground](https://leetcode.com/playground/DkPKDf8v)
::: details View code
```go
func DecodeString(s string)string{
    stringGroups := strings.Split(s,")")
    res := []string{}
    for _,stringGroup := range stringGroups{    
        array := strings.Split(stringGroup,"(")
        str := array[0]
        repeat := 1
        if len(array) > 1{
            repeat,_ = strconv.Atoi(array[1])
        }
        res = append(res,helper(str,repeat))
    }
    return strings.Join(res,"")
}

func helper(s string,repeat int)string{
    bytes := []byte{}
    n := len(s)
    for i := 0; i < n; i++{
        if i < n-2 && s[i+2] == '#'{
            num ,_ := strconv.Atoi(s[i:i+2])
            bytes = append(bytes,byte('a' + num - 1))
            i = i+2
            continue
        }
        bytes = append(bytes,(s[i] - '1' + 'a'))
    }
    for i := 1; i<repeat;i++{
        bytes = append(bytes,bytes[len(bytes)-1])
    }
    return string(bytes)
}
```
:::
