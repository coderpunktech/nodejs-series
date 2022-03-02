/**
 * Representation of a Node object that is part of a Graph
 */
export default class Node {
    /**
     * The Node name
     */
    name: string
    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    toString(): string {
        return `Node ${this.name}`;
    }
}