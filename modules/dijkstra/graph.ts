import List from "../common/collections/list";
import Edge from "./edge";
import Node from "./node";

/**
 * Represent the Graph
 */
export default class Graph {
    adjacencyList: Map<Node, List<Edge>>

    constructor() {
        this.adjacencyList = new Map();
    }

    /**
     * Add a node to the graph
     * 
     * @param node the node to add to the graph
     * @returns this
     */
    addNode(node: Node): Graph {
        this.adjacencyList.set(node, new List());
        return this;
    }

    /**
     * Add an edge to the graph
     * 
     * @param from the node the edge starts from
     * @param to the node the edge ends to
     * @param distance the distance between the nodes
     * @returns this
     */
    addEdge(from: Node, to: Node, distance: number): Graph {
        this.adjacencyList.get(from)?.add(new Edge(distance, from, to));
        return this;
    }
}