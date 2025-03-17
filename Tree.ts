import { Node } from "./Node.ts";
import { buildTree } from "./buildTree.ts";

export class Tree {
  root: Node | null;
  constructor(arr: Array<number>) {
    this.root = buildTree(arr, 0, arr.length);
  }

  insert(value: Node, root: Node | null = this.root): Node | null {
    if (!root) return value;
    if (root.data === value.data) return root;
    if (root.data && value.data) {
      if (root.data > value.data) {
        root.left = this.insert(value, root.left);
      } else {
        root.right = this.insert(value, root.right);
      }
    }
    return root;
  }

  delete(value: Node, root: Node | null = this.root): Node | null {
    if (!root) return null;
    if (root.data === value.data) {
      if (!root.left && !root.right) {
        root = null;
        return root;
      }
      if (root.left && root.right) {
        let min = root.right;
        while (min.left) {
          min = min.left;
        }
        root.data = min.data;
        root.right = this.delete(min, root.right);
        return root;
      }
      if (!root.left) return root.right;
      if (!root.right) return root.left;
    }
    if (root.data && value.data) {
      if (root.data > value.data) {
        root.left = this.delete(value, root.left);
      } else {
        root.right = this.delete(value, root.right);
      }
    }
    return root;
  }

  find(value: number, root: Node | null = this.root): Node | null {
    if (!root) return null;
    if (root.data === value) return root;
    if (root.data) {
      if (root.data > value) {
        return this.find(value, root.left);
      } else {
        return this.find(value, root.right);
      }
    }
    return root;
  }

  levelOrder(
    callback: Function,
    root: Node | null = this.root,
    level: number = 0,
    arr: number[][] = []
  ) {
    if (!callback) throw new Error("A callback function is required");
    if (!root) return;
    if (arr.length <= level) arr.push([]);
    if (root.data) arr[level].push(root.data);
    this.levelOrder(callback, root.left, level + 1, arr);
    this.levelOrder(callback, root.right, level + 1, arr);
    if (level === 0) {
      arr.forEach((levelArr) =>
        levelArr.forEach((element) => callback(element))
      );
    }
    return arr;
  }

  preOrder(callback: Function, root: Node | null, arr: number[] = []) {
    if (!callback) throw new Error("A callback function is required");
    if (!root) return;
    if (root.data) arr.push(root.data);
    this.preOrder(callback, root.left, arr);
    this.preOrder(callback, root.right, arr);
    arr.forEach((element) => callback(element));
    return arr;
  }

  postOrder(callback: Function, root: Node | null, arr: number[] = []) {
    if (!callback) throw new Error("A callback function is required");
    if (!root) return;
    this.postOrder(callback, root.left, arr);
    this.postOrder(callback, root.right, arr);
    if (root.data) arr.push(root.data);
    arr.forEach((element) => callback(element));
    return arr;
  }

  inOrder(callback: Function, root: Node | null, arr: number[] = []) {
    if (!callback) throw new Error("A callback function is required");
    if (!root) return;
    this.inOrder(callback, root.left, arr);
    if (root.data) arr.push(root.data);
    this.inOrder(callback, root.right, arr);
    arr.forEach((element) => callback(element));
    return arr;
  }

  height(value: Node | null) {
    if (!value) return;
    function copy() {}
    const arr = this.levelOrder(copy, value);
    if (!arr) return;
    return arr.length - 1;
  }

  depth(value: Node | null) {
    if (!value) return;
    if (!value.data) return;
    function copy() {}
    const arr = this.levelOrder(copy, this.root);
    const arrTwo = this.levelOrder(copy, this.find(value.data));
    if (!arr || !arrTwo) return;
    return arr.length - arrTwo.length;
  }

  isBalanced() {
    if (!this.root || !this.root.left || !this.root.right) return;
    const leftHeight = this.height(this.root.left);
    const rightHeight = this.height(this.root.right);
    if (!leftHeight || !rightHeight) return;
    return leftHeight - rightHeight > 1 ? false : true;
  }

  reBalance(): Node | null {
    function copy() {}
    const arr = this.inOrder(copy, this.root);
    if (!arr) return null;
    this.root = buildTree(arr, 0, arr.length);
    return this.root;
  }
}
