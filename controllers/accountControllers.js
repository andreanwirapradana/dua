const { Account } = require('../models')

class AccountController {
    static newAccount(req, res, next) {
        const { accountType, balance } = req.body
        let accountNumber =  Math.floor(1000000000 + Math.random() * 1000000000)
        console.log(accountNumber)
        if(!balance) {
            balance = 500000
        }
        Account.create({
            accountType,
            balance,
            accountNumber
        })
        .then((response) => {
            res.status(201).json({ accountNumber, balance })
        })
    }
}

module.exports = AccountController