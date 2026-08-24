// Is a javascript expression that
// allows to unpack of values from array, or
// properties from object,
// into distinct varaibles data can be extracted
// from arrays, objects, and neseted objects and 
// assigned to variables

// Array unpack into different variables 
const arr = [10, 20, 30, 40]

console.log("Example 1");
const [w, x, y, z] = arr;
console.log(`All 4 Values ${w}-${x}-${y}-${z}`);

// Skip 2nd value from arr (1st index)
const [m, , o, p] = arr;
console.log("\nExample 2");
console.log(`Skipped value (20): ${m}-${o}-${p}`);

// with spread operator (Skipping the 2nd value)
let [first, , ...last] = ["a", "b", "c", "d"];
console.log(`Is ...last an array: ${Array.isArray(last)}`);
console.log(`First: ${first} Last: ${last}`);

// Swapping with the destruct assignment
let mine = 12, your = 21;
// swapping
[mine, your] = [your, mine]
console.log(`Mine was 12, your was 21 but now You got ${your} & Mine ${mine}`);

// Object destructing
// Simple object
const myobject = {
    x: 10,
    y: 20,
    z: 30,
    m: 40,
    n: 50,
    o: 60,
    p: 70,
};
// On the left side of an assignment, curly braces and colons 
// do not create an object, but rather form a destructuring 
// pattern where the syntax flips from key: value to sourceKey: newVariableName 
// to unpack properties into standalone variables.
// access first two value
({x: x1, y: y1} = myobject);
console.log(`First two value of myobject: ${x1} ${y1}`); 

// get x, y and ...rest operator for rest of the values
({x: x1, y: y1, ...restofvalues} = myobject);
console.log(`\nx=${x1}, y=${y1}, rest of them: ${JSON.stringify(restofvalues)}`);





let company = {
    name: "GFG",
    address: {
        country: "IND",
        state: {
                code: "JS",
                pincode: "820000080",
                article: {
                    topic: "destructing"
                }
        }
    }
};


// access company name
let { name } = company;
// country name
let {address: {country: country}} = company;
// code & pincode
let {address: { state: { code: code, pincode:pincode }}} = company;
// article
let {address: {state: {article: { topic:topic }}}} = company;

console.log(`Company information: ${name} from ${country} at ${code} state with code: ${pincode} having article on ${topic}`);

console.log("\n\n\n");
// Destruct practice with arrow function
let family = {
    name: "bhuiyan",
    sumon: {
        son: "abir",
    },
    rubina: {
        younger_son: "efty",
        elder_son: {
            name: "fahim",
            daughter: {
                name: "inshirah",
                toy: "doraemon",
            },
        },
    },
};


const getUpperCased = (info) => info?.toString().toUpperCase() ?? ""; // typeof inof === "string" ? info.toUpperCase() : "";

// Name of the family
const { name: familyName } = family; 
console.log(`Introduction to ${getUpperCased(familyName)} Family`)

// Who is sumon's son?
const { sumon: {son: sumonSon }} = family;
console.log(`${getUpperCased(sumonSon)} is Sumon's Son.`);

// what is rubina's family name
const {name : rubinaFamilyName } = family;
console.log(`Rubina belonged to ${getUpperCased(rubinaFamilyName)} Family.`);

// what is rubina's elder son's daughter's toy
const { rubina: { elder_son: { daughter: { toy: inshuToy }}}} = family;
console.log(`Rubina's grand-daughter's favorite toy is ${getUpperCased(inshuToy)}`);

// who is efty
const {rubina: {younger_son: efty}} = family;
console.log(`Rubina's Younger Loved Son is ${getUpperCased(efty)} who belongs to ${rubinaFamilyName} Family Surely!`)