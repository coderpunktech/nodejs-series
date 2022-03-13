/**
 * Implementation of the Caesar Cypher cryptographic algorithm
 */
export default class CaesarCypher {
    /**
     * Represents the allowed alphanumeric characters that can be cyphered
     */
    private alphanumericString: string
    /**
     * provides the operations to shift forward and backward
     */
    private operations: Map<string, Function>

    constructor() {
        this.alphanumericString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
        this.operations = new Map();
        this.operations.set('decrypt', (position: number, keyCode: number) => {
            return position - keyCode;
        });
        this.operations.set('encrypt', (position: number, keyCode: number) => {
            return position + keyCode;
        });
    }

    /**
     * Encrypt the given text string using the Caesar Cypher cryptographic algorithm
     * 
     * @param text the text to encrypt
     * @param key the key to use for encryption
     * @returns the encrypted string
     */
    encrypt(text: string, key: string): string {
        return this.caesarCypher(text, key, 'encrypt');
    }

    /**
     * Decrypt the given text string using the Caesar Cypher cryptographic algorithm
     * 
     * @param text the text to decrypt
     * @param key the key to use for decryption
     * @returns the decrypted string
     */
    decrypt(text: string, key: string): string {
        return this.caesarCypher(text, key, 'decrypt');
    }

    /**
     * Implementation of the Caesar Cypher cryptographic algorithm
     * 
     * @param text the text to either encrypt or decrypt
     * @param key the key to use for the cypher operation
     * @param operation the cypher operation (either encrypt or decrypt)
     * @returns the cyphered text
     */
    private caesarCypher(text: string, key: string, operation: string) {
        // calculate the key number
        const keyCode: number = this.keyCode(key);
        // cast the text string to an array of string with single char
        const textChars: Array<string> = text.split('');

        // loop the char array
        return textChars.map((char) => {
            // find the index position in the alphanumeric string
            const position: number = this.alphanumericString.indexOf(char);
            // throw an error if the char is not found
            if (position < 0) {
                throw new Error(`char: ${char} not supported`);
            }

            // calculate the cypher position
            const cypherPosition: number = this.modulo(this.operations.get(operation)!.call(this, position, keyCode), this.alphanumericString.length);

            return this.alphanumericString[cypherPosition];
        })
        .reduce((prev, next) => {
            return prev + next;
        });
    }

    /**
     * Represent the key string as a code number
     * 
     * @param key the text key
     * @returns the number representing this key
     */
    private keyCode(key: string): number {
        if (key.length > 1) {
            throw new Error('Caesar Cypher Key is too long');
        }

        if (!key) {
            throw new Error('Invalid Caesar Cypher key')
        }

        const keyCode: number = this.alphanumericString.indexOf(key);

        if (keyCode < 0) {
            throw new Error('Invalid Caesar Cypher key')
        }

        return keyCode;
    }

    /**
     * Helper method to calculated modulo for negative numbers
     * (required due to a javascript modulo bug)
     * @returns 
     */
    private modulo(x: number, y: number) {
        return ((x % y) + y) % y;
      }
}