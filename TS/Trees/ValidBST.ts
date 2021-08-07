
//   Definition for a binary tree node.
export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function validRec(root: TreeNode, max: number, min: number): boolean {

    if (root.val >= max || root.val <= min) return false;

    const left: boolean = root.left ? validRec(root.left, root.val, min) : true;
    const right:boolean = root.right ? validRec(root.right, max, root.val): true;

    return left && right;

}

export default function isValidBST(root: TreeNode | null): boolean {

    if (!root) return false;
    
    return validRec(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
};