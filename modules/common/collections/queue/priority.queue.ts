import Element from "./element";
export default class PriorityQueue<T> {
    private elements: Array<Element<T>>

    constructor() {
        this.elements = [];
    }

    enqueue(element: T, priority: number): void {
        const pe: Element<T> = new Element(element, priority);

        for (let i = 0; i < this.elements.length; i++) {
            if (this.elements[i].getPriority() > pe.getPriority()) {
                this.elements.splice(i, 0, pe);
                return;
            }
        }

        this.elements.push(pe);
    }

    dequeue(): Element<T> {
        const el: Element<T> | undefined = this.elements.shift();

        if (el !== undefined) {
            return el;
        }

        throw new Error("cannot dequeue empty queue");
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    getFirst(): Element<T> {
        if (!this.isEmpty()) {
            return this.elements[0];
        }

        throw new Error("cannot get first from empty queue");
    }

    getLast(): Element<T> {
        if (!this.isEmpty()) {
            return this.elements[this.elements.length - 1];
        }

        throw new Error("cannot get last from empty queue");
    }

    clear(): void {
        this.elements = [];
    }
}