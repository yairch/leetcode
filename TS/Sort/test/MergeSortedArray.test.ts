import merge from "../MergeSortedArray";

describe("test MergeSortedArray function", () => {
    let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
    it("should return depth of merging of arrays", () => {
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1,2,2,3,5,6]);
    });
  });

