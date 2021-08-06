// Definition for a binary tree node.
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


/** Iterative Solution */

export default function maxDepth(root: TreeNode | null): number {
    
    //  empty tree
    if (!root) return 0;

    // max depth
    let max: number = 0;
    
    // init stack
    let s: {node: TreeNode, depth: number}[] = [];
    s.push({node: root, depth: 1});
    
    // while still unvisited nodes
    // visit last seen node and add it's neighbors to the stack
    while(s.length) {
        
        // visit node
        const {node, depth} = s.pop();

        if (depth > max) max = depth;
        if (node.left) s.push({node: node.left, depth: depth + 1});
        if (node.right) s.push({node: node.right, depth: depth + 1});
    }

    return max;
};


/** Recursive Solution */

// function maxDepth(root: TreeNode | null): number {

//     return root ?  1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0 ;
// };

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