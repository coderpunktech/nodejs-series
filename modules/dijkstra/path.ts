import Node from "./node";

export default class Path {
    private from: Node;
    private to: Node;
    private distance: number;

    constructor(from: Node, to: Node, distance?: number) {
        this.from = from;
        this.to = to;
        if (!distance) {
            throw new Error("distance is required");
        }
        this.distance = distance;
    }

    getFrom(): Node {
        return this.from;
    }

    getTo(): Node {
        return this.to;
    }

    getDistance(): number {
        return this.distance;
    }
}