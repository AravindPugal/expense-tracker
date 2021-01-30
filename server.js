require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const transactionRouter = require('./routes/transactionRoute');
const connectDb = require('./config/db');
const app = express();

app.use('/transaction', transactionRouter);
connectDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));
