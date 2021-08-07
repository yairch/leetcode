import { solution } from "../FirstBadVersion";

describe("test FirstBadVersion function", () => {
    const isBadVersion = (n: number): boolean => {
        if(n === 4) return true;
        return false;
    }

    it("should return 4", () => {
        expect(solution(isBadVersion)(5)).toEqual(4);
    });
  });