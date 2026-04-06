// let a = 10;
// let b = a;
// b = 20;
// a = 20;
// console.log(a);
// console.log(b);

const user = {
    name:"민수",
    age:25,
    address:{
        city:"Seoul",
        zip:"12345",
    },
}

function printUserInfo(u){
    console.log(`${u.name}, ${u.age}`);
}


function updateCity(u, newCity){
    u.address.city=newCity;
}

function processDelivery(u){
    console.log(`배송지: ${u.address.city}, ${u.address.zip}`);
}

printUserInfo(user);

processDelivery(user);

updateCity(user, "Busan");

processDelivery(user);

console.log(user);


