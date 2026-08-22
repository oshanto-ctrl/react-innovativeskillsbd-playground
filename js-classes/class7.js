// Filter, Map, Reduce -> More Readable, Declarative, Chained -> callback function, Return New array

// Filter
const numbers = [1, 2, 3, 4, 5, 6, 7];
const odds = numbers.filter(function(i){
    return i%2 !== 0;
})
// console.log(odds)

const products = [
    {name: "Aplle Laptop", price: 2000, inStock: true},
    {name: "kite", price: 5, inStock: true},
    {name: "Huwaei Phone", price: 700, inStock: false},
    {name: "Diamond Ear-rings", price: 2300, inStock: true},
    {name: "Type-C charger", price: 65, inStock: false},

];

// Filter products which priced greater than 500
const expensiveProducts = products.filter((product) => product.price >= 500);
// console.log("Expensive Products: ", expensiveProducts)

// Filter products that are not in stocks
const unavailableProducts = products.filter((product) => product.inStock===false);
// console.log("Unavailable Products: ", unavailableProducts);

// Search an product in products array
const searchValue = 'Phone';
const searchResult = products.filter((product)=>product.name.toLowerCase().includes(searchValue.toLowerCase()));
console.log(searchResult);