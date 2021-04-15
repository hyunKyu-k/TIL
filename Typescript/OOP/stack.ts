interface Stack {
    readonly size: number
    push(data: string): void
    pop(): string;
}

type StackNode = {
    readonly data: string;
    // next: StackNode | undefined;
    readonly next?: StackNode;
}

class StackImpl implements Stack {
    private _size: number = 0
    private head?: StackNode;

    get size() {
        return this._size;
    }
    push(data: string) {
        const node: StackNode = {
            data,
            next: this.head
        }
        this.head = node;
        this._size++
    }
    pop(): string {
        if (this.head === undefined) {
            throw new Error("Stack is Empty!");
        }
        const node = this.head;
        this.head = node.next;
        this._size--
        return node.data
    }
}

const stack = new StackImpl()
stack.push('fabian')
stack.push('angela')
stack.push('toms')
stack.pop()

console.log(stack)