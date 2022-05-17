const asyncHandler = require('express-async-handler');
const Book = require('../models/bookModel'); 

//get all the users in json form
const getBooks = asyncHandler(async(req,res)=> {
    const books = await Book.find()
    res.json(books);
})

module.exports = { getBooks };