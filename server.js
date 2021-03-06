require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const cors = require('cors')
const transactionRouter = require('./routes/transactionRoute');
const authenticationRoute = require('./routes/authenticationRoute')
const connectDb = require('./config/db');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/transaction', transactionRouter);
app.use('/authentication', authenticationRoute);
connectDb();



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));
