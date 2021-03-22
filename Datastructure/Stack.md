## Implementation Stack

---

스택에서 필요한 method 로는 `push` 와 `pop` 이 있습니다.

가장 먼저 데이터를 저정할 공간인 Stack을 만들어봅니다.

```jsx
class Stack {
  constructor() {
    this.stack = [];
  }
}
```

그리고 데이터를 삽입 및 저장하기 위해서 `push` 를 사용합니다.

```jsx
class Stack {
	constructor() {
		this.stack = [];
	}
	// 데이터 삽입
	push(data) {
		this.stack.push(data);
	}
}

// 데이터가 잘 들어갔는지 확인할 필요가 있겠죠?
let checkStack = new Stack();

checkStack.push(1)
checkStack.push(2)

console.log(checkStack)
--> Stack {
  stack: [ 1, 2 ],
  __proto__: Stack { constructor: ƒ Stack(), push: ƒ push() }
}
```

이번에는 데이터를 제거해보도록 하겠습니다. 우리는 데이터를 제거할 것이지만 인자로 특정 데이터를 지정할 필요가 없습니다. 왜냐하면 스택에서는 **LIFO** 로 인하여 마지막 데이터가 제거되야하기 깨문이죠

```jsx
class Stack {
	constructor() {
		this.stack = [];
	}
	// 데이터 삽입
	push(data) {
		this.stack.push(data);
	}
	// 삭제한 데이터를 리턴
	pop() {
		return this.stack.pop();
	}
}

// 데이터가 잘 삭제 되어지는지 확인을 해보겠습니다.
let checkStack = new Stack();
checkStack.push(1)
checkStack.push(2)
// 위에서 checkStack 에 데이터 1과 2를 넣었습니다.
checkStack.pop()
// 삭제!

console.log(checkStack)
-->
2 // 삭제한 데이터를 리턴했기 때문에 삭제 된 2가 출력되었습니다.
Stack {
  stack: [ 1 ],
  __proto__: Stack { constructor: ƒ Stack(), push: ƒ push(), pop: ƒ pop() }
}

```

마지막으로 스택에 들어가있는 데이터를 출력해보도록 하겠습니다. 위의 예시와는 조금 다른 부분이 있습니다

```jsx
class Stack {
	constructor() {
		this.stack = [];
	}
	// 데이터 삽입
	push(data) {
		this.stack.push(data);
	}
	// 삭제한 데이터를 리턴
	pop() {
		return this.stack.pop();
	}
	viewStack() {
		let data = "";
		for(let i = 0; i< this.stack.length; i++) {
			data += this.stack[i];
		}
		return data;
	}
}

let checkStack = new Stack();

checkStack.push('h')
checkStack.push('e')
checkStack.push('l')
checkStack.push('l')
checkStack.push('o')
checkStack.viewStack()

console.log(checkStack)
-->

'hello'

Stack {
  stack: [ 'h', 'e', 'l', 'l', 'o' ],
  __proto__: Stack {
    constructor: ƒ Stack(),
    push: ƒ push(),
    pop: ƒ pop(),
    viewStack: ƒ viewStack()
  }
}
```

## Stack TimeComplexity

---

**특정 값을 얻거나, 검색할 때의 시간복잡도**

- 평균: O(n)
- 최악: O(n)

스택 안의 특정한 요소에 대한 값을 얻기위해서는 스택안의 요소들을 조회해야합니다. 따라서 위의 시간복잡도가 요구됩니다.

**삽입 및 삭제**

- 평균: O(1)
- 최악: O(1)

삽입 및 삭제를 할 때, 가장 맨위에서 데이터를 삽입하거나 삭제하기 때문에 어떠한 요소를 넣는다 하더라도 위의 시간복잡도가 요구됩니다.

**공간복잡성**

: 스택안의 데이터가 늘어날수록 용량도 정비례로 늘어나기 때문에 O(n)이 요구되어집니다.
