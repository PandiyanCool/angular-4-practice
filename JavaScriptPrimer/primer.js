console.log("I'm in ts file");
console.log('Just test message');
var products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
var totalValue = products
    .filter(function (item) { return item.stock > 0; })
    .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
console.log("Total value: $" + totalValue.toFixed(2));
var MyClass = (function () {
    function MyClass(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    MyClass.prototype.printMessages = function () {
        console.log("Hello " + this.name + ". ");
        console.log("Today is " + this.weather + ".");
    };
    return MyClass;
}());
var myData = new MyClass("Adam", "sunny");
myData.printMessages();
