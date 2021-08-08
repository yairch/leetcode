import { MinStack } from "../MinStack";

describe("test MinStack function", () => {
    it("should return [-2,-1,-2]", () => {
        let out: number[] = []
        const stack: MinStack = new MinStack();
        stack.push(-2);
        stack.push(0);
        stack.push(-1);
        out.push(stack.getMin());
        out.push(stack.top());
        stack.pop();
        out.push(stack.getMin());
      expect(out).toEqual([-2,-1,-2]);
    });

    it("should return [0,0]", () => {
        let out: number[] = []
        const stack: MinStack = new MinStack();
        stack.push(0);
        stack.push(1);
        stack.push(0);
        out.push(stack.getMin());
        stack.pop();
        out.push(stack.getMin());
      expect(out).toEqual([0,0]);
    });
  });

