const mongoose = require('mongoose');
module.exports.dbConnection = () => {
    mongoose.connect(url)
        .then(() => console.log('Connection established ..'));
}
