export default class Element<T> {
    private element: T
    private priority: number

    constructor(element: T, priority: number) {
        this.element = element;
        this.priority = priority;
    }

    getElement(): T {
        return this.element;
    }

    getPriority(): number {
        return this.priority;
    }
}