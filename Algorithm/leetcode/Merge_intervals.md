### Link

[click to leetcode](https://leetcode.com/problems/merge-intervals/)

<br>

### solution


```js

const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let [start, end] of intervals) {
    let compare = result[result.length - 1];
    if (compare[1] >= start) {
      compare[1] = Math.max(compare[1], end);
    } else {
      result.push([start, end]);
    }
  }
  return result;
};


```
<br>

### other solution

```js
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]]
    
    for(let interval of intervals) {
        let compare = result[result.length-1];
        
        if(compare[1] >= interval[0]) {
            compare[1] = Math.max(compare[1], interval[1])
        } else {
            result.push(interval)
        }
    }
    return result;
};

```
