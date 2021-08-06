import { TreeNode } from "../MaximumDepthOfBinaryTree";
import maxDepth from '../MaximumDepthOfBinaryTree'


describe("test maxDepth function", () => {
    let root: TreeNode = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
    it("should return depth of 3 for maxDepth(root)", () => {
      expect(maxDepth(root)).toBe(3);
    });
  });

