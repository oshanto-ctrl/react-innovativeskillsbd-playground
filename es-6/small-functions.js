// API Link:  "https://reqres.in/api/users?page=2"

/* fetch and filter */
// Fetch users and return only last name (last_name)

async function getLastNames() {
    try {
        const response = await fetch( "https://reqres.in/api/users?page=2");
        
        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        }

        const json = await response.json();

        // return last name of users(inside response of users
        // and it's data field )
        return json.data.map(user => user.last_name);

    } catch(error){
        console.error("Failed to get users: ", error);
        throw error;
    }
}

const ln = await getLastNames();
// console.log(`Last names of users: ${ln}`);


/* Fetch and transform */
// fetch users and return their id - email

async function getEmailInfo() {
    try {
        const response = await fetch("https://reqres.in/api/users?page=2");

        if(!response.ok){
            throw new Error (`HTTP ${response.status}`);
        }

        const json = await response.json();

        // return the id - email
        return json.data.map(user => `${user.id} - ${user.email}`);

    } catch(error) {
        console.error("Failed to get email info. ", error);
        throw error;
    }
}

const einfo = await getEmailInfo();
// console.log("Email Information: ")
// console.log(einfo);



/* Find one user */
// Find one user with id 11 

async function getUserById(userid){
    try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        
        if(!response.ok){
            throw new Error(`HTTP ${response.satatus}`)
        }

        const json = await response.json();

        // return the user
        return json.data.find(user => user.id === userid);

    } catch(error) {
        console.error("Failed to get user by id. ", error);
        throw Error;
    }
}

const ubid = await getUserById(10); // return an object
// console.log(`User info:\n ${JSON.stringify(ubid, null, 2)}`);
// console.log(ubid);


/* Async + map + Promise.all */




