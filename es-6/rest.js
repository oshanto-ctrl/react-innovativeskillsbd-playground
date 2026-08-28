// rest param (...) allows a function to accept
// any number of arguments and collect them
// in single array.
// It must be last parameter in a function

// Simple addNumber function using rest operator
function addNumbers(...numbers) {
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    return sum;
}

let additionResult = addNumbers(1, 8, -1, 2);
// console.log("Addition: ", additionResult);



// Search Course "x" With multiple Filters
function searchCourse(query, ...filters) {
    // console.log("Searched: ", query);
    // console.log(`Filters ON: [${filters}]`);
    const searchMessage = `Query on: ${query}\nFilters activated: ${filters}`;
    return searchMessage;
}

const sq = searchCourse("Typescript", "react", "2026", "free");
console.log(sq);

