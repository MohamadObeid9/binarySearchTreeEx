import { Node } from "./Node.ts";
import { buildTree } from "./buildTree.ts";

export class Tree {
  root: Node;
  constructor(arr: Array<number>) {
    this.root = buildTree(arr);
  }
}
