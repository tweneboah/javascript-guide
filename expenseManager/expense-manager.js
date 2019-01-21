let myAccount = {
    name: "Emmanuel",
    expense: 0,
    income: 0
}


//Add expenses
let addExpenses = function (account, amount) {
    account.expense = account.expense + amount;
    console.log(account)
}

//Add income
let addIncome = function (account, amount) {
    account.income = account.income + amount
}

//Reset Account
let resetAccount = function (account) {
    account.income = 0;
    account.expense = 0;
}

//Account Summary
let accountSummary = function (account) {
    let balance = account.income - account.expense;
    return `Account for ${account.name} has income of ${account.income} with ${account.expense} expenses, hence your balance is ${balance}`
}

addIncome(myAccount, 800)
addExpenses(myAccount, 200)
addIncome(myAccount, 800)
const Summary = accountSummary(myAccount)
console.log(Summary)