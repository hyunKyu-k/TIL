## 프로그래머스 "문자열 내 마음대로 정렬하기"

### 문제설명

문자열로 이루어진 배열 strings 와 정수 n 이 주어졌을 때, 각 문자열의 인덱스 n 번째 글자를 기준으로 오름차순 정렬을 합니다. 


### 조건

- strings는 길이 1 이상, 50이하인 배열입니다.
- strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
- strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
- 모든 strings의 원소의 길이는 n보다 큽니다.
- 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다

<br/>

|     strings     |       n    |   return   |
| :-----------: | :-----------:| :---------:|
| ['sun', 'bed', 'car'] |     1      | ['car', 'bed', 'sun'] |
| ['abce', 'abcd', 'cdx'] |     2      |['abcd', 'abce', 'cdx']  |

<br/>

### Code

```js
function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a,b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))
    return answer;
}
```

<br />

### 풀이

- localCompare 이라는 사전식으로 정렬을 만드는 문자열 메소드가 있습니다.
- 들어오는 배열을 오름차순 정렬을 시켜줍니다.
- n 으로 들어오는 인덱스와 일치하는 경우는, 안덱스 기준의 정렬이 아닌 전체기준으로 정렬을 하고, 일치하지 않는 경우는 인덱스 기준으로 정렬을 합니다.



<hr>

삼항연산자가 아닌 조건문 풀이입니다. 가독성이 더 좋을 수 있습니다.

```js
function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a,b) => {
        if(a[n] === b[n]) {
            return a.localeCompare(b) 
        }
        return a[n].localeCompare(b[n])
    })
    return answer;
}
```
