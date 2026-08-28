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




