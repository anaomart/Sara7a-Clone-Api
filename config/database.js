const mongoose = require('mongoose');
let url = "mongodb+srv://<omar1>:<xr5Iyl2DLbzYs5Xe>@sara7a.fed2vyk.mongodb.net/test"
module.exports.dbConnection = () => {
    mongoose.connect(url)
        .then(() => console.log('Connection established ..'));
}