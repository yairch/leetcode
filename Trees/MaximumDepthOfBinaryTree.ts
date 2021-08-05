// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function maxDepth(root: TreeNode | null): number {

    return root ?  1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0 ;
};

// function maxDepth(root: TreeNode | null): number {
    
//     // max depth
//     let max: number = 0;
    
//     // init stack
//     let s = [];
    
//     // while still unvisited nodes
//     // visit last seen node and add it's neighbors to the stack
//     while(!s.length) {
        
//         // visit node
//         let curr = s.pop();
//         s.push(curr.left);
//         s.push(curr.right);
//     }
// };