/**
 * Representation of the an Edge in a Graph
 */
export default class Edge {
    /**
     * The edge distance
     */
    private distance: number
    /**
     * The starting node
     */
    private from: string
    /**
     * The end node
     */
    private to: string

    constructor(distance: number, from: string, to: string) {
        this.distance = distance;
        this.from = from;
        this.to = to;
    }

    toString(): string {
        return `EDGE ${this.from} -> ${this.to}`;
    }

    getDistance(): number {
        return this.distance;
    }

    getFrom(): string {
        return this.from;
    }

    getTo(): string {
        return this.to;
    }
}