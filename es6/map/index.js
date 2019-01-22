//MAP

//This is widely use.

//This create a new array out of the original array to avoid mutating the original array which is useful

//We all always assign it to a variable and we use return keyword

//Return keyword is required


// Multuplying these values

const numbers = [3, 4, 2, 4];

const doubled = numbers.map((number) => {
    return  number * 10
});

console.log(numbers);
console.log(doubled);

//Example 2

//Displaying the prices of all my cars

let cars = [
    {model: 'Toyota', price: 200},
    {model: 'Nissan', price: 400},
    {model: 'Honda', price: 400}
];

let prices = cars.map((car) => {
    return car.price;
});

//Assuming there is a price change of 2%, I can mutate the new generated array

let newPrices = prices.map((price) => {
    return (price * 0.02) + price
})

console.log(prices);
console.log(newPrices);


