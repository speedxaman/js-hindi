// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
////// ****** SHALLOW/DEEP COPIES ********
//// SHALLOOW COPY SHARES THE SAME REFERENCE 
/// means if we change in one array it will be changed in original array
// Deep Copies doesnt shaes same refernce means it is called bt value

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods ****************************

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) ///*** it appends at start */
// myArr.shift() // ** it pops starting element */

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// joins changes type from object to STRING of array

// console.log(myArr);
// console.log( newArr);


// slice, splice *********************

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

/// slice original array ko modify nh krta splice krta h


///// PART 2 ARRAY /////******

