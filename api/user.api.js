const { signin, signup, verify } = require('../service/user.service');

const app = require('express').Router();

app.post('/signin', signin);
app.post('/signup', signup);
app.get('/verify/:token', verify);


module.exports = app;