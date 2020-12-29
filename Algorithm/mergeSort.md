## mergeSort

![Merge-sort-example-300px.gif](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Merge-sort-example-300px.gif/220px-Merge-sort-example-300px.gif)


정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다

<br/>

## 입력

**인자 1 : arr**
- number 타입을 요소로 갖는 배열
- arr[i]는 정수
- arr.length 100,000 이하

<br/>

**출력**
- number 타입을 요소로 갖는 배열을 리턴해야 합니다.
- 배열의 요소는 오름차순으로 정렬되어야 합니다.
- arr[i] <= arr[j] (i < j)

<br/>

**주의사항**
- 병합 정렬을 구현해야 합니다.
- arr.sort 사용은 금지됩니다.
- 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.


### Code

```js
const merge = (left, right) => { // [4,7,5] [3,9,1,2]  --> left, right
  let result = [];
  while(left.length && right.length){ // 빈값이 아닐때까지
   if(left[0] < right[0]) { // left, right 의 배열의 첫번째를 비교한다. 
     result.push(left.shift()) // shift 를 통해 비교를 한 후에 삭제하게 만든다.
   } else {
     result.push(right.shift())
   }
  }
  return [...result, ...left, ...right] // 정렬이 끝난 뒤에는 [3,4,7,5,9,1,2]
}
 
const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let half = arr.length / 2;
  if(arr.length < 2) {
    return arr;
  }
  const left = arr.splice(0, half)
  return merge(mergeSort(left),mergeSort(arr))
};

```

<br />

## 풀이

두가지 함수로 나누어 풀었습니다.  
merge 함수는 이미 정렬된 배열 left, right 받아서 하나로 합칩니다.  
mergeSort 함수는 배열을 반으로 나눈 뒤, merge 함수에게 left, right 인자를 넘겨줍니다.  
