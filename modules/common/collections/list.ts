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
        this.items = this.items.filter((current) => current !== item);
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

    /**
     * Get all the values in the list as an array
     * 
     * @returns the values of the list as array
     */
    values(): Array<T> {
        return this.items;
    }

    /**
     * Check whether the list is empty or not
     * 
     * @returns true when the list is empty, false otherwise
     */
    isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * Build a new List containing the elements passed as argument
     * 
     * @param elements the elements from the array to build the list with
     * @returns a List containing the elements
     */
    public static of<T>(...elements: Array<T>): List<T> {
        const list: List<T> = new List();
        elements.forEach((el) => list.add(el));
        return list;
    }
}