import Node from "./node"

/**
 * Representation of the an Edge in a Graph
 */
export default class Edge {
    /**
     * The edge distance
     */
    distance: number
    /**
     * The starting node
     */
    from: Node
    /**
     * The end node
     */
    to: Node

    constructor(distance: number, from: Node, to: Node) {
        this.distance = distance;
        this.from = from;
        this.to = to;
    }

    toString(): string {
        return `EDGE ${this.from} -> ${this.to} `
    }
}