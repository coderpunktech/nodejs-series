import Element from "../../../common/collections/queue/element";
import FrequencyAnalysis from "./frequency.analysis";
import CaesarCypher from '../caesar.cypher';

describe('The Frequency Analysis', () => {

    test('it should run an analysis on character frequency', () => {
        const text = 'This general text will be used for the purpose of analysing the character frequency in some text';

        const textFrequency: Array<Element<string>> = FrequencyAnalysis.analyze(text);

        // expect the most frequent char to be 'e'
        expect(textFrequency.length === 0).toBe(false);
        const languageMostFrequent = textFrequency[0];
        expect(languageMostFrequent.getElement()).toBe('e')

        // given some cyphered text
        const cypheredText: string = 'MLyq44msqL0rLx07q';

        const cypheredTextFrequency: Array<Element<string>> = FrequencyAnalysis.analyze(cypheredText);
        
        // expect the most frequent character to be 'q' and 'L'
        // however since 'q' was the last char it is going to be at the top
        expect(cypheredTextFrequency.length === 0).toBe(false);
        const cypheredMostFrequent = cypheredTextFrequency[0];
        expect(cypheredMostFrequent.getElement()).toBe('q')

        // given the same alphanumeric string
        const alphanumericString: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';

        // find the index of the key
        const i = alphanumericString.indexOf(cypheredMostFrequent.getElement()) - alphanumericString.indexOf(languageMostFrequent.getElement()); 
        // find the key
        const key = alphanumericString[i]

        expect(key).toBe('M')

        // decypher the message
        const result: string = new CaesarCypher().decrypt(cypheredText, key);
        expect(result).toBe('A message of love');
    });
})