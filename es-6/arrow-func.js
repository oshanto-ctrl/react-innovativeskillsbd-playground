/*

const functionName = (params) => {
        // function body
        // return result ( explicitly returns a value.)
    };

*/

// Takes two numbers as params and return their sum.
// Can have multiple params.
const add = (a, b) => a + b;
console.log(add(5, -7)); // - 2 


// without params
const gfg = () => {
    console.log("Hello from GFG.");
}; 
gfg(); // Called gfg() here.

// Arrow function with single param
// parentheses around params omitted
// Used in callbacks, array methods, simple ops
const square = x => x*x;
console.log("Square of 4 is ", square(4));


// In JS returning object literals within
// functions is concise: () => ({key: value}) retuns
// an object {key: value}
// useful on immediate object create & return
const makeUser = (userName, userEmail) => (
    {
        userName: userName,
        userEmail: userEmail,
    });

console.log("Making user: ", makeUser("Rasel", "rejaul@xmail.com"));


// Async Arrow Functions use of await for wait for promise resolve
const fetchData = async () => {
    const data = await fetch("https://fake-json-api.mock.beeceptor.com/companies/7");
    return data.json();
};

console.log("Random data = ", await fetchData());

/* 

// Real Life Example 
class Button {
    constructor() {
        this.count = 0;
    }

    handleClick = () => {
        this.count++;
        console.log("Button Clicked ", this.count);
    };
}

const button = new Button();
document.getElementById('myButton').addEventListener('click', button.handleClick);
*/

// convert a traditional function that return hello, username to arrow func
const greet = (name) => {
    return `Hello ${name}!`;
};
console.log("\nGreetings: ", greet("Shamim"));






