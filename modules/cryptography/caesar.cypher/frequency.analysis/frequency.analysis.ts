import Element from "../../../common/collections/queue/element";
import PriorityQueue from "../../../common/collections/queue/priority.queue";

/**
 * Class that allows to run an analysis on characters frequency in a string
 */
export default class FrequencyAnalysis {

    /**
     * Analyse text and returns a priority queue representing character frequency
     * 
     * @param text the text to analyse character frequency for
     * @returns a priority queue with the most frequent character as the first element
     * and the least frequent character as the last element
     */
    public static analyze(text: string): Array<Element<string>> {
        const pq = new PriorityQueue<string>();
        const textChars: Array<string> = text.split('');

        for (let i = 0; i < textChars.length; i++) {
            const char = textChars[i];

            if (char === ' ') {
                continue;
            }

            const removed: Element<string> | null = pq.remove(char);

            if (removed === null) {
                pq.enqueue(char, 1)
            } else {
                pq.enqueue(char, removed.getPriority() + 1)
            }
        }

        // return an array of string elements sorted by most frequent to least frequent
        return pq.getElements().reverse();
    }

}