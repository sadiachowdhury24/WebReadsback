const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

//userSchema 
const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      likedBooks: {
        type: [String],
        default: "Lie by Moonlight"
        //default: ["Lie by Moonlight", "The Wizard of Oz"]
      },
    },
    {
        //to see when the data was added to the database
      timestamps: true,
    }
  );

  //to encrypt the password for the user 
  
  userSchema.pre("save", async function (next) {
    //if the password is not modified we will go to the next
    if(!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10); //the higher the value, the more secure it is
    this.password = await bcrypt.hash(this.password, salt); //hashing the password
  });

  //decrypt password
  userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
  };

 

  //exporting our schema
  const User = mongoose.model('User', userSchema);
  module.exports = User;
