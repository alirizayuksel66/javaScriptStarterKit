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
console.log(sayi1)