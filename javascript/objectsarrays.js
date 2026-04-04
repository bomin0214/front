let ex = {
    name:"멋사",
    major: "소프",
    age:13,
};

console.log(ex.name);
console.log(ex['major']);

ex.hobby = "게임";
ex.name = "아기 사자";

ex.hobby = "맛집탐방";
ex.hobby = "여행가기";

delete ex.age;
console.log(ex);