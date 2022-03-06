import Graph from './graph';
import Node from './node';
let graph: Graph;

beforeEach(() => {
    graph = new Graph();
});

test('it should allow to add a node', () => {
    const A: Node = new Node('A');

    expect(graph.adjacencyList.size).toBe(0);
    graph.addNode(A);
    expect(graph.adjacencyList.size).toBe(1);
});

test('it should allow to add edges', () => {
    const A: Node = new Node('A');
    const B: Node = new Node('B');

    expect(graph.adjacencyList.size).toBe(0);
    graph.addNode(A);
    graph.addNode(B);
    expect(graph.adjacencyList.size).toBe(2);
    graph.addEdge(A, B, 2);
    // expect(graph.adjacencyList.get(A).size).toBe(1);
});

test('it should find the shortest path', () => {
    const A: Node = new Node('A');
    const B: Node = new Node('B');
    const C: Node = new Node('C');
    const D: Node = new Node('D');
    const E: Node = new Node('E');
    const F: Node = new Node('F');

    graph.addNode(A)
    .addNode(B)
    .addNode(C)
    .addNode(D)
    .addNode(E)
    .addNode(F)
    .addEdge(A, B, 2)
    .addEdge(A, D, 3)
    .addEdge(B, C, 6)
    .addEdge(B, E, 10)
    .addEdge(C, F, 4)
    .addEdge(D, C, 4)
    .addEdge(D, E, 3)
    .addEdge(E, F, 7)
    .addEdge(E, D, 3);


});