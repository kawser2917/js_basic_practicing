const shoppingCart = [
    {"name":"pant","price":1200},
    {"name":"shirt","price":2200},
    {"name":"shoes","price":2000},
    {"name":"belt","price":700},
];

function totalCost(shoppingCart){
    let sum = 0;
    for(let i=0;i<shoppingCart.length;i++){
        const product = shoppingCart[i];
        sum +=product.price;
    }
    return sum;
}

const allCost = totalCost(shoppingCart);
console.log(allCost)