import isValidBST from '../ValidBST'
import { TreeNode } from '../ValidBST'

describe("test maxDepth function", () => {
    let root: TreeNode = new TreeNode(2, new TreeNode(1), new TreeNode(3))
    it("should return depth of 3 for maxDepth(root)", () => {
      expect(isValidBST(root)).toBe(true);
    });
  });