import List from "../common/collections/list";
import Element from "../common/collections/queue/element";
import PriorityQueue from "../common/collections/queue/priority.queue";
import Edge from "./edge";
import Path from "./path";

/**
 * Represent the Graph
 */
export default class Graph {
    private adjacencyList: Map<string, List<Edge>>

    constructor() {
        this.adjacencyList = new Map();
    }

    /**
     * Add a node to the graph
     * 
     * @param string the node to add to the graph
     * @returns this
     */
    addNode(nodeName: string): Graph {
        this.adjacencyList.set(nodeName, new List());
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
    addEdge(from: string, to: string, distance: number): Graph {
        this.adjacencyList.get(from)?.add(new Edge(distance, from, to));
        return this;
    }

    getAdjacencyList(): Map<string, List<Edge>> {
        return this.adjacencyList;
    }

    /**
     * Implements diijstra algorithm to find the shortest path for this Graph
     * 
     * @param start the starting node
     * @param end the destination node
     * @returns the shortest path represented in a {@link Path} object
     */
    diijkstra(start: string, end: string): Path {
        // prepare the priority queue
        const pq: PriorityQueue<string> = new PriorityQueue();
        // prepare map to store shortest path
        const map: Map<string, number> = new Map();
        const unvisitedNodes: List<string> = new List();
        // get all the nodes from the adjacency list
        const entries: IterableIterator<string> = this.adjacencyList.keys();

        let entry = entries.next();

        while (entry.done === false) {
            // set all the nodes as unvisited
            unvisitedNodes.add(entry.value);
            // set each node distance to infinity
            map.set(entry.value, Infinity);
            entry = entries.next();
        }
        // set the starting node distance to 0
        map.set(start, 0);
        let current: Element<string> = new Element(start, 0);

        // keep looping until all the nodes have been visited
        while(!unvisitedNodes.isEmpty()) {
            // mark the current node as visited
            unvisitedNodes.remove(current.getElement());
            // visit all the edges
            const edges: List<Edge> | undefined = this.adjacencyList.get(current.getElement());
            edges?.values()
                .forEach((edge) => {
                    // calculate the distance cost from the starting node
                    // by adding the current node cost with the edge distance
                    const cost: number = current.getPriority() + edge.getDistance();
                    // get the current cost for this node from the map
                    const currentConst: number = map.get(edge.getTo()) || Infinity;
                    if (cost < currentConst) {
                        // if the cost is less than the currentCost 
                        // then replace it in the map
                        map.set(edge.getTo(), cost);
                        // enqueue the node to the priority list
                        pq.enqueue(edge.getTo(), cost);
                    }
                });

            if (pq.isEmpty()) {
                if (!unvisitedNodes.isEmpty()) {
                    // since the priority queue is empty check whether there are still unvisited nodes
                    const unvisited = unvisitedNodes.get(unvisitedNodes.size() - 1);
                    // if so get the next unvisited node with its current distance or infinity
                    current = new Element(unvisited, map.get(unvisited) || Infinity);
                    continue;
                } else {
                    // the priority queue is empty and there are no unvisited nodes
                    // return the path
                    return new Path(start, end, map.get(end))
                }
            } else {
                // dequeue the priority queue when not empty to get the next current node to visit
                current = pq.dequeue();
            }
        }
        // done! return the path
        return new Path(start, end, map.get(end))
    }
}