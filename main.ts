import { Node } from "./Node.ts";
import { Tree } from "./Tree.ts";
import { prettyPrint } from "./prettyPrint.ts";
const arr = [65, 69, 37, 54, 7, 40, 15, 100, 49, 52];
const balancedTree = new Tree(arr);
balancedTree.insert(new Node(8));
balancedTree.insert(new Node(6));
balancedTree.insert(new Node(67));
prettyPrint(balancedTree.root);
/*
   │       ┌── 100
   │   ┌── 69
   │   │   │       ┌── 67
   │   │   │   ┌── 65
   │   │   └── 54
   └── 52
       │       ┌── 49
       │   ┌── 40
       └── 37
           │   ┌── 15
           │   │   └── 8
           └── 7
               └── 6

 balancedTree.delete(new Node(52));

    │       ┌── 100
    │   ┌── 69
    │   │   │   ┌── 67
    │   │   └── 65
    └── 54
        │       ┌── 49
        │   ┌── 40
        └── 37
            │   ┌── 15
            │   │   └── 8
            └── 7
                └── 6
*/
console.log(balancedTree.find(37));
/*
Node {
     data: 37,
     left: Node {
       data: 7,
       left: Node { data: 6, left: null, right: null },
       right: Node { data: 15, left: [Node], right: null }
     },
     right: Node {
       data: 40,
       left: null,
       right: Node { data: 49, left: null, right: null }
     }
}
*/

function copy() {} //exemple function
console.log(balancedTree.levelOrder(copy, balancedTree.root));
// [[52], [37, 69], [7, 40, 54, 100], [6, 15, 49, 65], [8, 67]];
console.log(balancedTree.preOrder(copy, balancedTree.root));
// [52, 37, 7, 6, 15, 8, 40, 49, 69, 54, 65, 67, 100];
console.log(balancedTree.postOrder(copy, balancedTree.root));
// [6, 8, 15, 7, 49, 40, 37, 67, 65, 54, 100, 69, 52];
console.log(balancedTree.inOrder(copy, balancedTree.root));
// [6, 7, 8, 15, 37, 40, 49, 52, 54, 65, 67, 69, 100];
console.log(balancedTree.height(balancedTree.root));
//4
console.log(balancedTree.depth(balancedTree.root));
//0
console.log(balancedTree.isBalanced());
//true

/*
   ***Some tree before rebalance***

 console.log(balancedTree.isBalanced());
 false

   │       ┌── 100
   │   ┌── 69
   │   │   │   ┌── 65
   │   │   └── 54
   └── 52
       │       ┌── 49
       │   ┌── 40
       └── 37
           │           ┌── 17
           │       ┌── 16
           │   ┌── 15
           └── 7

 prettyPrint(balancedTree.reBalance());

   ***Same tree after rebalance***

 console.log(balancedTree.isBalanced());
 true

   │       ┌── 100
   │       │   └── 69
   │   ┌── 65
   │   │   │   ┌── 54
   │   │   └── 52
   └── 49
       │       ┌── 40
       │   ┌── 37
       │   │   └── 17
       └── 16
           │   ┌── 15
           └── 7
*/
