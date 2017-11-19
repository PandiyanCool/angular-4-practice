console.log("I'm in ts file");

console.log('Just test message');

let products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];

let totalValue = products
    .filter(item => item.stock > 0)
    .reduce((prev, item) => prev + (item.price * item.stock), 0);

console.log("Total value: $" + totalValue.toFixed(2));

class MyClass {
    weather: any;
    name: any;
    constructor(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    printMessages() {
        console.log("Hello " + this.name + ". ");
        console.log("Today is " + this.weather + ".");
    }
}
let myData = new MyClass("Adam", "sunny");
myData.printMessages();