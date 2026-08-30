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
console.log("All username: \n");
users.forEach(user => {
    console.log(user.name);
});




/* reduce() */

// reduce() combines an array into a single accumulated result.

