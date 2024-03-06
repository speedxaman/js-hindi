const accountId = 123456
let accountName = "Aman Gautam"
var accountEmail = "speedxaman@gmail.com"
accountPassword = "12365" //not recommended method but it is exists

let accountState;

// accountId = 3215 // not allowed
accountName = "aman gautam";
accountEmail = "afndf@gmail.com";
accountPassword = "54565"
console.log(accountId);

/*
Prefer not to use var 
bcoz of issue in block scope and functional scope

*/

console.table([accountEmail,accountId,accountName,accountPassword,accountState]);