import List from '../common/collections/list';
import Edge from './edge';
import Graph from './graph';
import Node from './node';
import Path from './path';
let graph: Graph;

beforeEach(() => {
    graph = new Graph();
});

test('it should allow to add a node', () => {
    const A: Node = new Node('A');

    expect(graph.getAdjacencyList().size).toBe(0);
    graph.addNode('A');
    expect(graph.getAdjacencyList().size).toBe(1);
});

test('it should allow to add edges', () => {
    const A: Node = new Node('A');
    const B: Node = new Node('B');

    expect(graph.getAdjacencyList().size).toBe(0);
    graph.addNode('A');
    graph.addNode('B');
    expect(graph.getAdjacencyList().size).toBe(2);
    graph.addEdge(A, B, 2);
    const aEdges: List<Edge> | undefined = graph.getAdjacencyList().get(A.getName());
    expect(aEdges).toBeDefined();
    // find a better workaround
    if (aEdges !== undefined) {
        expect(aEdges.size()).toBe(1);
    }
});

test('it should find the shortest path', () => {
    const A: Node = new Node('A');
    const B: Node = new Node('B');
    const C: Node = new Node('C');
    const D: Node = new Node('D');
    const E: Node = new Node('E');
    const F: Node = new Node('F');

    graph.addNode('A')
    .addNode('B')
    .addNode('C')
    .addNode('D')
    .addNode('E')
    .addNode('F')
    .addEdge(A, B, 2)
    .addEdge(A, D, 3)
    .addEdge(B, C, 6)
    .addEdge(B, E, 10)
    .addEdge(C, F, 4)
    .addEdge(D, C, 4)
    .addEdge(D, E, 3)
    .addEdge(E, F, 7)
    .addEdge(E, D, 3);

    const A_C: Path = graph.diijkstra("A", "C"); // 7
    expect(A_C.getDistance()).toBe(7);

    const A_F: Path = graph.diijkstra("A", "F"); // 11
    expect(A_F.getDistance()).toBe(11);

    const A_E: Path = graph.diijkstra("A", "E"); // 6
    expect(A_E.getDistance()).toBe(6);
});