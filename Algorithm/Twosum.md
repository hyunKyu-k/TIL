## TwoSum
숫자들로 이루어진 배열 중, 


Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


두개의 요소를 더하여 target 으로 주어진 매개변수와 일치하는 경우, 두 개의 요소의 인덱스를 배열로 리턴합니다.

<br/>

|     input     | output |
| :-----------: | :----: |
| [2, 7, 11, 15 ], 9 | [0, 1]  |

<br/>

### code

```js
const TwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let k = nums.length; k > j; k--) {
      const isEqual = nums[k] + nums[i] === target;
      if (isEqual) {
        return [i, k];
      }
    }
  }
};
```

<br />

## 풀이

반복문을 두 번 돌려, 첫번째 반복문은 배열의 첫번째 인자를 가리킬 것이고, 두번째 반복문은 배열의 끝에서부터 시작한다.
두 인자를 비교하여 target과 일치할 경우 배열에 넣어 리턴하여 해결하였다.
<br/>

<br />
