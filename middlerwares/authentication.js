const { Customer } = require('../models')

const customerAuth = (req, res, next) => {
    const { otp } = req.headers

    try {
        Customer.findOne({
            where: {
                otp
            }
        })
        .then((response) => {
            next()
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = customerAuth