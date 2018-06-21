const fruits = [
    {
        title: 'Apple iPhone X 64GB',
        price: 929
    },
    {
        title: 'Apple iPhone X 64GB',
        price: 1199
    },
    {
        title: 'Apple iPad Pro 512GB',
        price: 1229
    },
];

const totalPrice = fruits.reduce((totalPrice, fruit) => totalPrice + fruit.price, 0);
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce