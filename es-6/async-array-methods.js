/*
// Mock API  

[
  {
    id: 1,
    name: "Rahim",
    active: true
  },
  {
    id: 2,
    name: "Karim",
    active: false
  }
]

*/

// We fetch with async
// https://jsonplaceholder.typicode.com/users
async function getUserEmails() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json();

    // extract emails with map() and return
    return users.map(user => user.email);
    
}

// const emails = await getUserEmails();
// console.log(emails);



/* async/await + map() important trap */

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return users;
}

const users = await getUsers();
// Below code async callback always returns a promise
// Promise { <pending> }

// const emails = users.map(async user => {
//     return await getUserEmails(user.id);
// });

// console.log(emails);

// We need Promise.all ---- (Most important pattern for real-world js)
const emails = await Promise.all(
    users.map(user => getUserEmails(user.id))
);
console.log(emails);

