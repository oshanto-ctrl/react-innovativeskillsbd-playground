const users = [
  { name: "Rahim", age: 22, active: true },
  { name: "Karim", age: 17, active: false },
  { name: "Nadia", age: 25, active: true }
];


// get the name of active adult users name list
// const names = users
//     .filter(user => user.active)
//     .filter(user => user.age >= 18)
//     .map(user => user.name);

const names = users
    .filter(user => user.active && user.age >= 18)
    .map(user => user.name);


console.log("Users (Active, Adult): ", names);

