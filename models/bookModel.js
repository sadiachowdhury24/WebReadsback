const mongoose = require('mongoose')


//userSchema 
const bookSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
          },
          author: {
            type: String,
            required: true,
          },
          rating: {
            type: Number,
            required: true,
          },
          publishyear: {
            type: Number,
            required: true,
          },
          publisher: {
            type: String,
            required: true,
          },
          countsofreview: {
            type: Number,
            required: true,
          },
          languages: {
            type: String,
            required: true,
          },
          pagesnumber: {
            type: Number,
            required: true,
          },
          Description: {
            type: String,
            required: true,
        },    
    },
    {
        //to see when the data was added to the database
      timestamps: true,
    }
  );

 

  //exporting our schema
  const Book = mongoose.model('Book', bookSchema);
  module.exports = Book;
