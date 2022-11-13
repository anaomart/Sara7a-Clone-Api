const { addMsg, getMsg } = require('../service/message.service');

const app = require('express').Router();

app.post('/addMsg', addMsg)
app.get('/getMsg', getMsg)


module.exports = app