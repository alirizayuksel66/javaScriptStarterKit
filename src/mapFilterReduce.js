let cart = [
    {id:1, productName:"Telefon", quantity:2, unitPrice:4000},
    {id:2, productName:"Bilgisayar", quantity:1, unitPrice:10000},
    {id:3, productName:"Tablet", quantity:1, unitPrice:2000},
    {id:4, productName:"Çanta", quantity:2, unitPrice:1000}
]

cart.map(product => {
    console.log(product.productName + " : " + product.quantity * product.unitPrice + "TL")
})

let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)
console.log(total);

let quantityOver2 = cart.filter(product => product.quantity >= 2) 
console.log(quantityOver2);

function addToCart(sepet) {
    sepet.push({id:5, productName:"Ruhsat", quantity:1, unitPrice:7000})
}
addToCart(cart)
console.log(cart)

let sayi = 10;
function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)