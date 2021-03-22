## Implementation Queue

---

큐에서 필요한 method는 `push` 와 `shift` 입니다.

먼저 데이터를 저장할 배열 Queue의 생성합니다.

```jsx
class Queue {
  constructor() {
    this.queue = [];
  }
}
```

그리고 노드를 큐에 추가시켜줍니다. 우리는 큐에서 데이터를 삽입시키는 것을 **enqueue**라고 부릅니다.

```jsx
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(data) {
    this.queue.push(data)
  }
}

// Queue에 데이터가 잘 삽입되었는지 확인을 해보겠습니다.
let checkQueue = new Queue
checkQueue.enqueue(1)
checkQueue.enqueue(2)
checkQueue.enqueue(3)

console.log(checkQueue)
-->

Queue {
  queue: [ 1, 2, 3 ],
  __proto__: Queue { constructor: ƒ Queue(), enqueue: ƒ enqueue() }
}
```

이번에는 큐에 추가시켜준 데이터를 다시 삭제시켜보겠습니다.

우리는 큐에서 삭제시키는 것을 **dequeue** 라고 부릅니다.

```jsx
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(data) {
    this.queue.push(data)
  }
	dequeue() {
		this.queue.shift();
	}
}

let checkQueue = new Queue
checkQueue.enqueue(1)
checkQueue.enqueue(2)
checkQueue.enqueue(3)
// Queue에 데이터가 잘 삭제 되는지 확인을 해보겠습니다.
checkQueue.dequeue()
checkQueue.dequeue()

console.log(checkQueue)
-->
Queue {
  queue: [ 3 ],
  __proto__: Queue {
    constructor: ƒ Queue(),
    enqueue: ƒ enqueue(),
    dequeue: ƒ dequeue()
  }
}
```

## Queue TimeComplexity

---

**특정 값을 얻거나, 검색할 때의 시간복잡도**

- 평균: O(n)
- 최악: O(n)

특정 값을 얻거나 조회를 할 때 우리는 큐의 모든 요소들에 접근을 해야합니다. 따라서 시간복잡도는 O(n) 으로 큐의 요소들의 수에 정비례하게 됩니다.

**삽입 및 삭제**

- 삽입: O(1)
- 삭제: O(n)

삽입을 할 때는, 새로운 데이터를 큐의 끝으로 푸쉬하게 됩니다. 따라서 시간복잡도는 항상 같은 O(1)이 됩니다.

하지만 데이터를 삭제하고 싶을 땐, 전체 배열을 조회하여 마지막 항목을 반환하기 때문에 시간복잡도는 큐의 요소들에 정비례하는 O(n)이 되게 됩니다.

**공간복잡성**

: 큐의 데이터가 늘어날수록 용량도 정비례로 늘어나기 때문에 O(n)이 요구되어집니다.
