//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// Symbol is used for making a value unique
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//// STACK(primitive) , HEAP(Non-primitive)

let myName = "Amankg"
let anotherName = myName;

anotherName = "gautam";

// console.log(myName);
// console.log(anotherName);

let userOne = {
    name:"aman",
    age:22
}

let userTwo = userOne;
userTwo.name = "gautam";

// console.log(userTwo.name);
// console.log(userOne.name);

// heap me hame refernce of original object milta h to agar koi change krege jo wo original value me bhi change ho jayega
// stack me hame copy milti h to original value change nh hoti

