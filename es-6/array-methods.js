/* Array Methods */

const users = [
  {
    id: 1,
    name: "Rahim",
    age: 22,
    active: true
  },
  {
    id: 2,
    name: "Karim",
    age: 17,
    active: false
  },
  {
    id: 3,
    name: "Nadia",
    age: 25,
    active: true
  }
];

// Which users are active
// Iterative Approach
const activeUsers = [];
for(const user of users){
    if(user.active){
        activeUsers.push(user);
    }
}
// console.log(activeUsers);

/*  map() */

// When to transform every element
// input array -> transform each item -> new array
const names = users.map(user => user.name);
console.log("Users: ", names);
/*
Very common in React:

users.map(user => (
  <UserCard key={user.id} user={user} />
));

*/

/* filter() */

// When to keep only elements satisfy a condition
// input array -> condition? -> (keep / discard) -> new array
const inactiveUsers = users.filter(user => !user.active); // Returns a list of objects
console.log("Inactive list: ", inactiveUsers); 

/* find() */

// find() returns the first matching element.
// if nothing matches return "undefined"
const user = users.find(user => user.id === 2);
console.log("Search result for id: 2\t", user);


/* some() */

// some() checks whether at least one element satisfies a condition
// Does any item satisfy this? (Returns: Boolean)
const hasInactiveUsers = users.some(user => !user.active);
console.log("Inactive users found: ", hasInactiveUsers); // Boolean: true


/* every() */

// Checks whether all elements satisfy a condition
// Think like: does every item satisfy this?
// returns Boolean.

const allAdults = users.every(user => user.age >= 18);
console.log("All above 18 in users list? :", allAdults);

/* forEach() */

// forEach() executes something for every item.
// Distinction: 
// forEach() -> performs an action
// map() -> creates a transformed array
console.log("All username:");
users.forEach(user => {
    console.log(user.name);
});




/* reduce() */

// reduce() combines an array into a single accumulated result.
// reduce(callback, initialValue)
const numbers = [10, 20, 30];
const total = numbers.reduce((sum, number)=>sum+number, 0);
console.log("Total is: ", total);
// Above example: accumulator is 'sum' and current element is 'number'
/* 
process
initial: 0
0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
*/

// reduce() with objects

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 30 },
  { name: "Keyboard", price: 70 }
];
// Calcuate total product
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total Price is: $", totalPrice);

/* sort() */

// sort an array
// For numbers (array) remeber the comparator
const arr = [10, 2, 30, 5];
arr.sort((a, b) => a - b); // ascending sort 
console.log("Ascending sort: ", arr);

arr.sort((a, b) => b - a); // descending sort
console.log("Descending sort: ", arr);

// For Objects:
// Ascending sort by users age.
const compUsersByAge = users.sort((a, b) => a.age - b.age)
console.log(compUsersByAge);

// Careful measurement needed because
// sort() mutates the original array
// in React/state management it's matter a lot.
// instead of users.sort(...)
// we create a copy:
const brr = [3, 2, 3, 1, 500, 101, 1000, -1];
const sortedBrr = [...brr].sort(
    (a, b) => a - b
);

console.log("Org Brr: ", brr);
console.log("Brr Copied then sort: ", sortedBrr);
