---
sidebarDepth: 3
---
# Form Hackathon Teams/Count Maximum Teams

::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::
Amazon is hosting a team hackathon. 
* 1. Each team will have exactly teamSize developers. 
* 2. A developer's skill level is denoted by skill[i]. 
* 3. The difference between the maximum and minimum skill levels within a team cannot exceed a threshold, maxDiff.

Determine the maximum number of teams that can be formed from the contestants.

## Example
  skill = 3, 4, 3, 1, 6, 5, 

  teamSize = 3,
  
  maxDiff = 2
  
  At most, 2 teams can be formed: 3, 3, 1 and 4, 6, 5. The difference between the maximum and minimum skill levels is 2 in each case, which does not exceed the threshold value of 2.


[Playground](https://leetcode.com/playground/DBKWkZii)
::: details View code

```go
func main() {
    skills := []int{1, 3, 3, 4, 5, 6}
    teamSize := 3
    maxDiff := 2
    fmt.Println(countMaxTeams(skills,teamSize,maxDiff))
}

func countMaxTeams(skills []int,teamSize,maxDiff int) int{
    if len(skills) < teamSize{
        return 0
    }
    sort.Ints(skills)
    res := 0
    for i := 0; i < len(skills)-teamSize+1; {
        // when max & min diff in a team smaller than maxDiff
        if skills[i + teamSize - 1] - skills[i] <= maxDiff{
            res++
            i += teamSize
        }else{
            i++
        }
    }
    return res
}
```
:::