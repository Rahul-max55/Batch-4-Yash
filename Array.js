// let arr = [11 , 22 , "rahul" , "23"];

// console.log(arr[1]);

// let arr2 = [];
// console.log(arr2);

// arr2[0] = "rahul";
// arr2[1] = "ra";
// arr2[2] = "a";

// let arr3 = new Array(12 , 13 , 14);
// console.log(arr3);


// let fruits = ["banana" , "apple" , "orange"];
// fruits[1] = "cherry";
// console.log(fruits.length);



// const person = {a:"John", b:"Doe"}; 
// console.log(person["a"]);


// let fruits = ["banana" , "apple" , "orange"];

// console.log(typeof fruits);

// let x = Array.isArray(fruits);
// console.log(x);



// Array Methods ->

// toString

// let fruits = ["banana" , "apple" , "orange" , 25 , 50];
// console.log(`toString : ${fruits.toString()}`);

// join

// console.log(`join : ${fruits.join("|")}`);


// pop and push ->
// let fruits = ["banana" , "apple" , "orange" , 25 , 50];

// fruits.pop();
// fruits.push("xxxx");

// console.log(fruits);

// shift and Unshift
// let fruits = ["banana" , "apple" , "orange" , 25 , 50];

// fruits.shift()
// fruits.unshift("xxxx")

// console.log(fruits);


// concat
// let fruits1 = ["banana" , "apple" , "orange"];
// let fruits2 = [25 , 50];
// let fruits3 = [-1 , -50];


// let arr = fruits1.concat(fruits2 , "xxx" , "rrrr" , fruits3);
// console.log(arr);




// let arr = [11, 2 , 33 , 4];

// splice
// arr.splice(2 , 2 , "rahul" , "birla" , 88 )
// arr.splice(2 , 1)

// splice

// let x = arr.slice(1 , 3);
// let x = arr.slice(2);

// console.log(x);



// Array sort()


// let arr = [11, 2 , 33 , 4];
// let fruits1 = ["banana" , "apple" , "orange" , "g"];

// let x = arr.sort()
// let y = fruits1.sort()
// console.log(x);
// console.log(y);


// let z = fruits1.reverse()
// console.log(z);


// let arr = [11, 2 , 33 , 4];

// let number = arr.sort(function(a , b){
//            return b - a;
// })

// console.log(number);


// let x = Math.max.apply(null , arr);
// let x = Math.min.apply(null , arr);
// console.log(x);


let arr = [
    { name: "bahul", year: 2023 },
    { name: "aahula", year: 2024 },
    { name: "cahul", year: 2020 },
    { name: "yash", year: 2022 }
]


// arr.sort(function(a, b){
//     // console.log(b.year);
//     return b.year - a.year;
// })

arr.sort(function(a, b){
    // console.log(b.year);
    if( b.name > a.name){ return 1}
    if( b.name < a.name){ return -1}
    return 0;
})

console.log(arr);


