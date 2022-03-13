import CaesarCypher from './caesar.cypher';

let caesarCypher: CaesarCypher;

beforeEach(() => {
    caesarCypher = new CaesarCypher();
});

test('it should throw an error when the key is too long', () => {
    expect(() => caesarCypher.encrypt('A message of love', 'asd')).toThrowError('Caesar Cypher Key is too long');
});

test('it should throw an error when the key is invalid', () => {
    expect(() => caesarCypher.encrypt('A message of love', '')).toThrowError('Invalid Caesar Cypher key');
    expect(() => caesarCypher.encrypt('A message of love', '%')).toThrowError('Invalid Caesar Cypher key');
});

test('it should throw an error when trying to cypher an invalid character', () => {
    expect(() => caesarCypher.encrypt('A message of love$', 'M')).toThrowError('char: $ not supported');
});

test('it should allow to encrypt a valid text with a valid key', () => {
    const encryptedText: string = caesarCypher.encrypt('A message of love', 'M');
    expect(encryptedText).toBe('MLyq44msqL0rLx07q');
});

test('it should allow to decrypt and decrypt a valid text with a valid key', () => {
    const decryptedText: string = caesarCypher.decrypt('MLyq44msqL0rLx07q', 'M');
    expect(decryptedText).toBe('A message of love');
});
