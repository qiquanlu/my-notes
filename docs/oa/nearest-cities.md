---
sidebarDepth: 3
---
# Nearest Cities

::: tip Where the OA comes from?
The OA problems are from Internet, mostly from leetcode discussions. They are free and available everywhere, so don't trust anyone ask money to access these OA,
:::

There are Fulfillment Centers in multiple cities within a large geographic region. The cities are arranged on a graph that has been divided up like an ordinary Cartesian plane. Each city is located at an integral (x, y) coordinate intersection. City names and locations are given in the form of three arrays: c, x, and y, which are aligned by the index to provide the city name (c[i]), and its coordinates, (x[i], y[i]).

Write an algorithm to determine the name of the nearest city that shares either an x or a y coordinate with the queried city. If no other cities share an xory coordinate, return NONE. If two cities have the same distance to the queried city, q[i], consider the one with an alphabetically smaller name (i.e. 'ab' < 'aba' < 'abb') as the closest choice.

The distance is denoted on a Euclidean plane: the difference in x plus the difference in y.

## Input
The input to the function/method consists of six arguments:
numOfCities, an integer representing the number of cities;
cities, a list of strings representing the names of each city [i];

    xCoordinates, a list of integers representing the X coordinates of each city[i];
    yCoordinates, a list of integers representing the Y-coordinates of each city[i];
    numOfQueries, an integer representing the number of queries;
    queries, a list of strings representing the names of the queried cities.

## Output

Return a list of strings representing the name of the nearest city that shares either an x or a y coordinate with the queried city.

## Constraints

    1 <= numOfCities, numOfQueries < 10^ 5
    1 < xCoordinates[i], yCoordinates[i] <= 10^ 9
    1 < length of queries[i] and cities[i] <= 10

## Note
Each character of all c[i] and q[i] is in the range ascii[a-z, 0-9,-].
All city name values, c[i], are unique. All cities have unique coordinates.

## Example:
### Input:

    numOfCities = 3
    cities = ["c1", "c2","c3"]
    xCoordinates = [3, 2, 1]
    yCoordinates = [3, 2, 3]
    numOfQueries = 3
    queries = ["c1", "c2", "c3"]

### Output:

    ["c3", NONE, "c1"]

### Explanation:
There are three points(3,3), (2,2) and (1,3) represent the coordinates of the cities on the graph. The nearest city to c1 is c3, which shares a y value (distance = (3-1) + (3-3) = 2).

City c2 does not have a nearest city as none share an x or y with c2, so this query returns NONE. A query of c3 returns c1 based on the first calculation. The return array after all queries are complete is [c3, NONE, c1].

## Example:
### Input:

    numOfCities = 5
    cities = ["c1", "c2", "c3", "c4", "c5"]
    xCoordinates = [100, 200, 300, 400, 500]
    yCoordinates = [100, 200, 300, 400, 500]
    numOfQueries = 5
    queries = ["c1", "c2", "c3", "c4", "c5"]

### Output

    [NONE, NONE, NONE, NONE, NONE]

### Explanation:
No nearest cities because none share the same x or y.