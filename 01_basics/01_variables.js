// with Var keyword we can re-declare, re-assign the variable and also update the variable

// Declaration of Var
var accountId = 12345;

// Re-declarartion of Var
var accountId = 123455623;

// Re-assignment of Var or updatoin of Var
accountId = 123;

// declaration of variable with let
let accountEmail = "suman@google.com"

// Re-declaration of let is not allowed
// let accountEmail = "suman@twitter.com"

// Re-assignment of let or updation
accountEmail = "suman@twitter.com"

// Declaration of variables using const keyword as const is not allowed to Re-declare or Re-assign or updatation
const accountPassword = "963852741"

// without any keyword also we can declare the variable but this not a good way to code in JS
accountCity = "Ahmedabad"

// varible is declared but value is not assigned
let accountDetails;


console.log(accountId);
console.log(accountEmail);

// console.table will print the data in tabular form
console.table([accountEmail, accountId, accountPassword, accountCity, accountDetails])