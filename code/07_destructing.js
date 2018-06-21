const user = {
    id: "59761c23b30d971669fb42ff",
    isActive: true,
    age: 36,
    name: "Dunlap Hubbard",
    gender: "male",
    company: "CEDWARD",
    email: "dunlaphubbard@cedward.com",
    phone: "+1 (890) 543-2508",
    address: "169 Rutledge Street, Konterra, Northern Mariana Islands, 8551"
};

const {email, ...privateUser} = user;

console.log(privateUser);

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment