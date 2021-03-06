import PriorityQueue from './priority.queue';
import Element from './element';

describe('The Priority Queue', () => {
    test('it should create a priority queue', () => {
        const pq = new PriorityQueue();
    
        expect(pq).toBeDefined();
        expect(pq.isEmpty()).toEqual(true);
        expect(() => pq.dequeue()).toThrowError('cannot dequeue empty queue');
        expect(() => pq.getFirst()).toThrowError('cannot get first from empty queue');
        expect(() => pq.getLast()).toThrowError('cannot get last from empty queue');
    });
    
    test('it should enqueue/dequeue elements correctly', () => {
        const pq: PriorityQueue<string> = new PriorityQueue();
    
        pq.enqueue("A", 1);
        pq.enqueue("E", 5);
        pq.enqueue("H", 8);
        pq.enqueue("B", 2);
    
        expect(pq.isEmpty()).toBe(false);
        const current: Element<string> = pq.dequeue();
        expect(current.getElement()).toBe('A');
        expect(current.getPriority()).toBe(1);
    
        const next: Element<string> = pq.dequeue();
        expect(next.getElement()).toBe('B');
        expect(next.getPriority()).toBe(2);
    });
    
    test('it should get the first and last elements from the queue correctly', () => {
        const pq: PriorityQueue<string> = new PriorityQueue();
    
        pq.enqueue("A", 1);
        pq.enqueue("E", 5);
        pq.enqueue("H", 8);
        pq.enqueue("B", 2);
    
        expect(pq.isEmpty()).toBe(false);
    
        const first: Element<string> = pq.getFirst();
        expect(first.getElement()).toBe('A');
        expect(first.getPriority()).toBe(1);
    
        const last: Element<string> = pq.getLast();
        expect(last.getElement()).toBe('H');
        expect(last.getPriority()).toBe(8);
    });

    test('it should allow to remove an priority element and return it', () => {
        const pq: PriorityQueue<string> = new PriorityQueue();
    
        pq.enqueue("A", 1);
        pq.enqueue("E", 5);
        pq.enqueue("H", 8);
        pq.enqueue("B", 2);

        expect(pq.size()).toBe(4)
        const last: Element<string> = pq.getLast();
        expect(last.getElement()).toBe('H');
        expect(last.getPriority()).toBe(8);

        const removed: Element<string> | null = pq.remove('H');

        expect(removed).toBeDefined();
        expect(removed).toEqual(last);
        expect(pq.size()).toBe(3);
        expect(pq.getLast().getElement()).toBe('E');
    })

    test('it should return null when removing a priority element that is not in the queue', () => {
        const pq: PriorityQueue<string> = new PriorityQueue();
    
        pq.enqueue("A", 1);
        pq.enqueue("E", 5);
        pq.enqueue("H", 8);
        pq.enqueue("B", 2);

        expect(pq.size()).toBe(4);

        const removed: Element<string> | null = pq.remove('Z');

        expect(removed).toBe(null);
        expect(pq.size()).toBe(4);
    })
});