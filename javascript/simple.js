let ex1 = function(val){
    return val+1;
};

let ex2 = (val) => {
    return val+1;
};

let ex3 = (val) => val +1;

console.log(ex3(10));
console.log(ex2(10));
console.log(ex1(10));