import List from './list';

test('it should create a list', () => {
    let numbers: List<number> = new List();

    expect(numbers).toBeDefined();
    expect(numbers.size()).toBe(0);
    expect(numbers.isEmpty()).toBe(true);
});

test('it should allow to add elements to a list', () => {
    let numbers: List<number> = new List();

    expect(numbers.size()).toBe(0);

    numbers.add(10);

    expect(numbers.size()).toBe(1);
    expect(numbers.isEmpty()).toBe(false);
});

test('it should allow to get an element from a list', () => {
    let numbers: List<number> = new List();

    numbers.add(10);
    numbers.add(20);
    numbers.add(13);

    expect(numbers.size()).toBe(3);
    expect(numbers.get(0)).toBe(10);
    expect(numbers.isEmpty()).toBe(false);
});

test('it should allow to remove an element from a list', () => {
    let numbers: List<number> = new List();

    numbers.add(10);
    numbers.add(20);

    expect(numbers.size()).toBe(2);

    numbers.remove(10);

    expect(numbers.size()).toBe(1);
    expect(numbers.isEmpty()).toBe(false);
});

test('it should allow to build a list with elements', () => {
    let numbers: List<number> = List.of(15, 23, 13, 44);

    expect(numbers.size()).toBe(4);
    expect(numbers.isEmpty()).toBe(false);
});

test('it should allow to return the values of the list as array', () => {
    let numbers: List<number> = List.of(15, 23, 13, 44);

    expect(numbers.size()).toBe(4);

    let numbersArray: Array<number> = numbers.values();

    expect(numbersArray).toBeDefined();
    expect(numbersArray.length).toBe(4);
    expect(numbers.isEmpty()).toBe(false);
});