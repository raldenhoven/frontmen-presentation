const a = [1,2,3,4];
const b = [...a, 5,6,7,8];

console.log(b);

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

console.log({...obj1, ...obj2});

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://www.ecma-international.org/activities/Languages/Language%20overview.pdf (page 22)
