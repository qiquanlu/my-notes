---
sidebarDepth: 3
---
# Weather Forecast/Count the Outing Days

::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::
Amazon Alexa AI team is working to add feature that suggest days for camping based on the weather forecast. According to survey, a day is ideal for camping if the amount of rainfall has been non-increasing for the prior k days from the considered day and will be non-decreasing for the following k days from the considered day. Given the predicted rainfall for the next n days, find all ideal days. Formally a day is ideal if the following is true

day[i-k]>=day[i-k+1]>=....>=day[i-1]>=day[i]<=day[i+1]<=....<=day[i+k-1]<=day[i+k]

Return the ideal days in ascending order. 

The ith element of the array represents the data for the day i+1.

Example, given/Input day=[3,2,2,2,3,4], k=2

here day1>=day2>=day3<=day4<=day5, so day3 is ideal

also day2>=day3>=day4<=day5<=day6, so day4 is ideal

The answer is [3,4]

    Ex:- Given/Input day=[1,0,1,0,1], k=1
    So, day1>=day2<=day3
    day3>=day4<=day5
    Output: [2,4]

    Ex:- Given/input day=[1,0,0,0,1], k=2
    So, day1>=day2>=day3 <=day4<=day5
    Output: [3] 

    Ex:- Given day=[1,1,1,1,1,1,1,1,1,1], k=3

    So, day1>=day2>=day3>=day4<=day5<=day6<=day7
    day2>=day3>=day4>=day5<=day6<=day7<=day8
    day3>=day4>=day5>=day6<=day7<=day8<=day9
    day4>=day5>=day6>=day7<=day8<=day9<=day10
    Output: [4,5,6,7]

Input method takes 2 arguments day[n] and k(an integer)
returns int[], the ideal days in sorted ascending