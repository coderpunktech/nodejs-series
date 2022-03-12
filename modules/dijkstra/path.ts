/**
 * Represents a Path object with starting and ending nodes with distance
 */
export default class Path {
    /**
     * the starting node
     */
    private from: string;
    /**
     * the destination node
     */
    private to: string;
    /**
     * The path distance
     */
    private distance: number;

    constructor(from: string, to: string, distance?: number) {
        this.from = from;
        this.to = to;
        if (!distance) {
            throw new Error("distance is required");
        }
        this.distance = distance;
    }

    getFrom(): string {
        return this.from;
    }

    getTo(): string {
        return this.to;
    }

    getDistance(): number {
        return this.distance;
    }
}