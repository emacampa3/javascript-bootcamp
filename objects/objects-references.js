let myAccount = {
    name: 'Ema',
    expenses: 0,
    income: 0
}

let addIncome = function (account, amount) {
    account.income += amount
    return account.income
}
addIncome(myAccount, 100)

let addExpense = function (account, amount) {
    account.expenses += amount
    return account.expenses
}
addExpense(myAccount, 50)

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${myAccount.name} has $${balance}, $${myAccount.income} in income and $${myAccount.expenses} in expenses.`
}
let accountSummary = getAccountSummary(myAccount)
console.log(accountSummary)

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}
let reset = resetAccount(myAccount)
