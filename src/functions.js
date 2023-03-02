function addToCard(producName, quantity) {
    console.log("Sepete Eklendi : Ürün : "+ producName + " Adet : "+ quantity );
}

//addToCard();
addToCard("Elma",10);
//addToCard("Yumurta");

let sayHello = () => {
    console.log("Hello Wordl !");
}
sayHello();

let sayHello2 = function () {
    console.log("Hello Wordl 2 !");
}
sayHello2();

function addToCard2(producName, quantity, unitPrice) {

}

addToCard2("Elma", 10, 15);
addToCard2("Limon", 5, 20);
addToCard2("Mandalina", 2, 5);

let product1 = {producName:"Limon", quantity:10, unitPrice:15};

function addToCard3(product) {
    console.log("Ürün : "+product.producName);
    console.log("Adet : "+product.quantity);
    console.log("Fiyat : "+product.unitPrice);
}
addToCard3(product1);

let product2 = {producName:"Elma", unitPrice:10, quantity:5};
let product3 = {producName:"Elma", unitPrice:10, quantity:5};
product2 = product3
product2.producName="Karpuz";
console.log(product3.producName);

let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
sayi2 = 100;
console.log(sayi1);

function addToCard4(products) {
    console.log(products);
}

let products = [
    {producName:"Limon", quantity:14, unitPrice:15},
    {producName:"Nane", quantity:11, unitPrice:25},
    {producName:"Armut", quantity:5, unitPrice:10}
]

addToCard4(products);

function add(...numbers) {
    let total = 0; 
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    console.log(total);
}
//add(20,30);
//add(20,30,40);
add(20,30,40,50);

let numbers = [30,50,600,750,90,110]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"40M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Samsun","Trabzon"]
    ]
]
console.log(icAnadolu.name);
console.log(icAnadolu.population);
console.log(icAnadoluSehirleri);

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
= {productName:"Elma", unitPrice:10, quantity: 15})

console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);
