const { response, json } = require("express");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const userModel = require("../models/user.model");
const { sendEmail } = require("./user.email");
const app = require("../api/user.api");
const jwt = require("jsonwebtoken");
module.exports.signup = async(req, res) => {
    const { name, age, password, email } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
        res.json({ message: "Email already in use" })
    } else {
        bcrypt.hash(password, 3, async(err, hash) => {
            console.warn
            await userModel.insertMany({ name, age, password: hash, email });
            res.json({ message: "success" })
        })
        let token = jwt.sign(email, "omar")
        sendEmail({ email }, token, { expiresIn: 60 * 60 });
    }

}

module.exports.signin = async(req, res) => {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            if (user.emailConfirmed) {
                res.json({ message: "success", user });
            } else {
                res.json({ message: "Conform Your Email First " });
            }

        } else {
            res.json({ message: "password incorrect" });
        }
    } else {
        res.json({ message: "email dose't exist" });
    }
};


module.exports.verify = async(req, res) => {
    console.log('hello verify')
    const { token } = req.params;
    let decoded = jwt.verify(token, "omar")
    let user = await userModel.updateOne({ email: decoded }, { emailConfirmed: true });

    res.json({ message: "Email Confirmed" })
}