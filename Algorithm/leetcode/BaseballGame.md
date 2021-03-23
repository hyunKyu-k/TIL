## baseball game

<br>

[click to leetcode]("https://leetcode.com/problems/baseball-game/")

<br>

### solution

```js
const calPoints = (ops) => {
  let result = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "C") {
      result.pop();
    } else if (ops[i] === "D") {
      if (Math.sign(result[result - 1]) === -1) {
        result.push("-" + result[result.length - 1] * 2);
      } else {
        result.push(result[result.length - 1] * 2);
      }
    } else if (ops[i] === "+") {
      result.push(result[result.length - 1] + result[result.length - 2]);
    } else {
      result.push(Number(ops[i]));
    }
  }
  return result.reduce((a, b) => a + b);
};
```
