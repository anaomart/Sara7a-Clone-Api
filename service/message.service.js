const msgModel = require('../models/message.model')
const userModel = require('../models/user.model')

module.exports.addMsg = async(req, res) => {
    const { message, userId } = req.body;
    let user = await userModel.findById(userId);

    if (user) {
        await msgModel.insertMany({ message, userId });
        res.json({ message: 'message Added' })
    } else {
        res.json({ message: 'not found' })
    }
}
module.exports.getMsg = async(req, res) => {
    console.log('workking')
    const userId = req.header("userId")
    console.log(userId);
    let mesgs = await msgModel.find({ userId })
    res.json(mesgs)
}