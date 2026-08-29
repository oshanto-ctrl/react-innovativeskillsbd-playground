// JS executes code synchronously
// A->B->C

/*
Web apps constantly performs operations
that doesn't finish immediately.
API req -> DB req -> File load -> Timer -> UI
const result = fetch("/api/users") fetch doesn't
immediately give us the users it gives a Promise
*/

/*
Promise is an object, representing the eventual
result of asynchornous operation
Promise(Pending/Fulfilled+Value/Rejected+error)

const promise = fetch("/api/users");
Promise { <pending> } -> Promise { Response } or 
Promsie { Rejected }

3 states of promise.

Pending     :Request ---> pending
Fulfilled   :Request ---> fulfilled -> result
Rejected    :Request ---> rejected  -> error
*/

/*
    .then() and .catch()

    General function with promise:

    func getUser() {
    return fetch("/api/user");
    }
    
    We can consume the Promise:
    getUser()
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error)
        });

    getUser() returns a Promise.
    .then() means: Run this when the Promise is fulfilled.
    .catch() means: Run this when the Promise is reject.
*/

/*
Promise chaining
fetch() gives us a Repsonse.
but actual JSON data comes from:
response.json()

and response.json() returns a promise

fetch("/api/users")
    .then(resposne => response.json())
    .then(users => {
        console.log(users);
    })
    .catch(error => {
        console.error(error)
    });

    The Chain:
    Promise<Response>
        | .then()
    response.json()
        |
    Promise<users>
        | .then()
    users

    Core Mechanism.

*/


/* 
Why async/await exists

Promise chains work:

fetch("/api/users")
    .then(resposne => response.json())
    .then(users => console.log(users))
    .catch(error => console.error(error));

async/await gives syntax more sequential code look.

async function getUsers() {
    const response = await fetch("/api/users");
    const users = await response.json();
    console.log(users);
}

await means approximately: wait for this Promise to settle,
then give me its fulfilled value.
*/


/* 
    try/catch with async/await
    async function getUsers() {
        try {
            const response = await fetch("/api/users");
            const users = await response.json();
            return users;
        } catch(error) {
            console.error(error); 
        }
    }


*/


/*
    HTTP errors and fetch()

    We should check if response is ok. because 
    const response = await fetch("/api/users");
    doesn't automatically throws the HTTP statuses 
    (400/401/403/404/500)
    
    we should often check:

    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
    }
*/

async function getUsers() {
    try {
        const response = await fetch("/api/users");

        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return await response.json();

    } catch(error){
        console.error("Failed to fetch users: ", error);
        throw error;
    }
}
