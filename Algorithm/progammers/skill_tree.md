## skill_tree

<br>


[click to programmers](https://programmers.co.kr/learn/courses/30/lessons/49993)

<br>

### solution

```js
function solution(skill, skill_trees) {
  let answer = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    let tree = skill_trees[i].split("");
    tree = tree.filter((s) => skill.includes(s)).join("");

    if (skill.includes(tree) && skill[0] === tree[0]) answer++;
    if (tree.length === 0) answer++;
  }
  return answer;
}
```
