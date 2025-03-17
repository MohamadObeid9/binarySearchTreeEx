import { Node } from "./Node.ts";
import { prettyPrint } from "./prettyPrint.ts";
import { sortArray } from "./sortArray.ts";

export const buildTree = (
  arr: number[],
  start: number,
  end: number
): Node | null => {
  if (start > end) return null;
  arr = sortArray(arr);
  const middle = start + Math.floor((end - start) / 2);
  const rootElement = new Node(arr[middle]);
  if (!arr[middle]) return null;
  rootElement.left = buildTree(arr, start, middle - 1);
  rootElement.right = buildTree(arr, middle + 1, end);
  return rootElement;
};
const array = [65, 69, 37, 54, 7, 40, 15, 100, 49, 52];
console.log(sortArray(array));
//[7, 15, 37, 40, 49, 52, 54, 65, 69, 100];
prettyPrint(buildTree(array, 0, array.length));
//  │           ┌── undefined
//  │       ┌── 100
//  │   ┌── 69
//  │   │   │   ┌── 65
//  │   │   └── 54
//  └── 52
//      │       ┌── 49
//      │   ┌── 40
//      └── 37
//          │   ┌── 15
//          └── 7
