const { Customer } = require('../models')
const { Op } = require('sequelize')

class CustomerControllers {
    static register(req, res, next) {
        const { identityNumber, fullName, address, birthDate, gender } = req.body
        let strIdentityNumber = identityNumber.toString()
        let otpGenerator =  Math.floor(10000 + Math.random() * 10000)
        let strOtp = otpGenerator.toString()
        console.log(identityNumber.length)
        Customer.findAll({
            where: {
                [Op.or]: [
                    {
                        identityNumber: strIdentityNumber,
                        otp: strOtp
                    }
                ]
            }
        })
        .then((response) => {
            if(!response) {
                Customer.create({
                    identityNumber,
                    fullName,
                    address,
                    birthDate,
                    gender,
                    otp: otpGenerator
                })
                .then((data) => {
                    res.status(201).json({ OTP: data.otp })
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        })
        .catch((err) => {
            res.status(500).json(err)
            console.log(err)
        })
    }

    static showCustomers(req, res, next) {
        Customer.findAll()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

module.exports = CustomerControllers