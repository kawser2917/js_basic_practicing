const shoppingCart = [
    {"name":"pant","price":1200, "quantity":5},
    {"name":"shirt","price":2200, "quantity":5},
    {"name":"shoes","price":2000, "quantity":5},
    {"name":"belt","price":700, "quantity":5},
];

function totalCost(shoppingCart){
    let sum = 0;
    for(let i=0;i<shoppingCart.length;i++){
        const product = shoppingCart[i];
        const totalCost = product.price * product.quantity;
        sum = sum+totalCost
        
    }
    return sum;
}

const allCost = totalCost(shoppingCart);
console.log(allCost)