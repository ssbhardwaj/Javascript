const accountId = 144553
let accountEmail = "suman@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;            // --> when no value assigned shows undefined on execution..

// accountId = 2                --> const value change is not allowed..

accountEmail = "ssb@ssb.com"
accountPassword = "212121212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
beacuse of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);