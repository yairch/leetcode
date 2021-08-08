export class MinStack {

    private _stack: number[];
    private _minStack: number[];
    
    constructor() {
        this._stack = new Array();
        this._minStack = new Array();
    }

    push(val: number): void {
        
        this._stack.push(val);

        const min: number = this.getMin() ?? Number.MAX_SAFE_INTEGER;
        if (val <= min) this._minStack.push(val);
    }

    pop(): void {
        
        const popped: number = this._stack.pop();
        const min: number = this.getMin();
        if (popped === min) this._minStack.pop();
    }

    top(): number {

        return this._stack[this._stack.length - 1];
    }

    getMin(): number {
        return this._minStack[this._minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */