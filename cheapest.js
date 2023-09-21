phones = [
    {"name":"Samsung", "Camera": "12px","storage":"32gb","price":32000,"color":"silver"},
    {"name":"Iphone", "Camera": "12px","storage":"32gb","price":102000,"color":"silver"},
    {"name":"Xiaomi", "Camera": "12px","storage":"32gb","price":22000,"color":"silver"},
    {"name":"Realme", "Camera": "12px","storage":"32gb","price":18000,"color":"silver"},
    {"name":"Itel", "Camera": "12px","storage":"32gb","price":12000,"color":"silver"},
    {"name":"Walton", "Camera": "12px","storage":"32gb","price":30000,"color":"silver"},
    {"name":"HTC", "Camera": "12px","storage":"32gb","price":64000,"color":"silver"},
];

function cheapestPrice(phones){
    let cheapest = phones[0];
    for(let i=0;i<phones.length;i++){
        let phone = phones[i]
        if(phone.price < cheapest.price){
            cheapest = phone
        }
    }
    return cheapest;

}

const mySelection = cheapestPrice(phones)
console.log(mySelection)