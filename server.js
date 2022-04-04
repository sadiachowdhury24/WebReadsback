//import express dependency
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');


const app = express();
dotenv.config();
connectDB();

app.use(express.json());

//Api GET request
app.get("/", (req,res) => {
    res.send("API is running for Webreads");
});


// using the userRoutes file from the routes folder
app.use('/api/users', userRoutes) 

//calling error middlewares
app.use(notFound);
app.use(errorHandler);

//port

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`));