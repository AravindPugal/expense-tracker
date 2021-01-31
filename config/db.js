const mongoose = require('mongoose');
const personalData = require('./personal');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(personalData.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(connection.connection.host);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;