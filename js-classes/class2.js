// Arrays
let colors = ["red", "blue", "green"];
console.log(colors);

let mixedArr = [1, "Hajime", false, [4, 5]];
let boolVal = mixedArr[2]; // False
let nestArrVal = mixedArr[3][1]; // 
console.log("Boolean Value: ", boolVal);
console.log("Nested second Element of [4, 5]: ", nestArrVal)


console.log("Colors in upper case: ");
const colorsV2 = colors.map((color)=>{
    return color.toUpperCase();
});
console.log(colorsV2);

