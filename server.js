

//import express dependency
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes')
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const cors = require('cors');

const app = express();
app.use(cors());
dotenv.config();
connectDB();

app.use(express.json());

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('api/users/allusers',(req, res)=>{
    request(
        {url:'https://web-reads-backend.herokuapp.com/api/users/allusers'},
        (error, response, body)=>{
            if (error || response.statusCode !== 200){
                return res.status(500).json({type: 'error', message: err.message});
            }
            res.json(JSON.parse(body));
        }
    )
});
/*
app.get('/recommend',(req, res)=>{
    request(
        {url:'https://web-reads-ml.herokuapp.com/recommend'},
        (error, response, body)=>{
            if (error || response.statusCode !== 200){
                return res.status(500).json({type: 'error', message: err.message});
            }
            res.json(JSON.parse(body));
        }
    )
});
*/
//Api GET request
app.get("/", (req,res) => {
    res.send("API is running for Webreads");
});


// using the userRoutes file from the routes folder
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
//calling error middlewares
app.use(notFound);
app.use(errorHandler);

//port

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`));