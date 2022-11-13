const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports.sendEmail = async(email, token) => {
    console.warn(email.email, "email")
    console.error(token, "email");
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = {
        user: "anaomart@gmail.com",
        pass: "jtuumbmuhxiwowni"
    };


    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `<${testAccount.user}>`, // sender address
        to: `${email.email}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `"<b>You Have Been Hacked</b>"
            <a href="http://localhost:3200/user/verify/${token}">Click</a>
        `, // html body
    });

    console.log(info);
}