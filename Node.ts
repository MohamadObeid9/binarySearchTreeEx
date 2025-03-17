export class Node {
  data: number | null;
  left: Node | null;
  right: Node | null;
  constructor(data: number | null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
