const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(5, 2);
    expect(result).toBe(7);
});

test('should greet user', () => {
    const result = generateGreeting('Kiran');
    expect(result).toBe('Hello Kiran!');
});

test('should greet user with no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});

