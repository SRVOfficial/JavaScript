const accountId = 2292
let accountEmail = "eren159@gmail.com"
var accountPassword = "007"
accountCity = "Patna" // Not a good practice
let accountStatus;


// accountId = 4324  // Not Allowed

accountEmail = "erenjeager159@gmail.com"
accountPassword = "009"
accountCity = "Delhi"

console.log(accountId);

/*
    Prefer not to use var
    bcoz of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus])