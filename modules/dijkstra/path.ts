import List from "../common/collections/list";
import Edge from "./edge";

export default class Path {
    edges: List<Edge>

    constructor(edges: List<Edge>) {
        this.edges = edges;
    }
}