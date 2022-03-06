import Element from './element';

test('it should create an element', () => {
    const textElement: Element<string> = new Element("A", 10);

    expect(textElement).toBeDefined();
    expect(textElement.getElement()).toBe("A");
    expect(textElement.getPriority()).toBe(10);
});