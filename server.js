const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/connectDB');
const path = require('path');

// config dotenv
dotenv.config();

// database 
connectDB();

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes
// USER ROUTES
app.use('/api/v1/users', require('./routes/userRoute'));
// TRANSECTION ROUTES
app.use('/api/v1/transections', require('./routes/transectionRoute'));

// static files
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
});

// port
const PORT = process.env.PORT || 8003;

// listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
