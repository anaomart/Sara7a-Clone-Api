const express = require('express');
const { dbConnection } = require('./config/database');
const { sendEmail } = require('./service/user.email');
const app = express();
const port = 3200;
app.use(express.json());
app.use("/user", require('./api/user.api'))
app.use('/message', require('./api/message.api'))
dbConnection();


app.listen(port, () => console.log('listening on port ' + port));