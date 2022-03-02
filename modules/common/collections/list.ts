/**
 * List implementation
 */
export default class List<T> {
    private items: Array<T>

    constructor() {
        this.items = [];
    }

    /**
     * 
     * @returns a number representing the list size
     */
    size(): number {
        return this.items.length;
    }

    /**
     * Add an item to the list
     * 
     * @param item the item to add to the list
     */
    add(item: T): void {
        this.items.push(item);
    }

    /**
     * Remove an item from the list
     * 
     * @param item the item to remove from the list
     */
    remove(item: T): void {
        this.items = this.items.filter((current) => current === item);
    }

    /**
     * Get the item from the list
     * 
     * @param index the index position of the wanted item
     * @returns the item at the index position
     */
    get(index: number): T {
        return this.items[index];
    }
}