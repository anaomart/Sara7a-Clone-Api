const { default: mongoose } = require("mongoose");


const messagesSchema = mongoose.Schema({
    message: String,
    userId: mongoose.SchemaTypes.ObjectId,

})

module.exports = mongoose.model('messages', messagesSchema);