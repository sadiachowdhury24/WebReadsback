const asyncHandler = require('express-async-handler');
const User = require('../models/userModel'); //importing userModel
const generateToken = require('../utils/generateToken');
const LGid = require('../models/myidModel');


// Registration
const registerUser = asyncHandler(async (req, res) => {
    //requesting from the user
    const { name, email, password } = req.body;


    //checking to see if an user exists, using one of the queries from mongoose (findOne)
    const userExists = await User.findOne({ email });

    if (userExists){
        res.status(400);
        throw new Error("This user already exists!");
    }

    //if not create an user

    const user = await User.create({
        name,
        email,
        password,
    });

   if(user){
       res.status(201).json({
           _id: user._id,
           name: user.name,
           email: user.email,
           token: generateToken(user._id),
           likedBooks: "['Lie by Moonlight', 'The Wizard of Oz']",
       });
   } else{
       res.status(400);
       throw new Error("An error has occurred! ");
   }

});

// sign in 
const authUser = asyncHandler(async (req, res) => {
    //requesting from the user
    const { email, password } = req.body;


    const user = await User.findOne({ email });


    if(user && (await user.matchPassword(password)))  {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            likedBooks: "['Lie by Moonlight', 'The Wizard of Oz']",
        });
    } else{
        res.status(400);
        throw new Error("Your email or password is invalid");

    }

});

//get all the users in json form
const getUsers = asyncHandler(async(req,res)=> {
    const users = await User.find()
    res.json(users);
})

const getMe = asyncHandler(async(req,res)=>{
    const meID = await LGid.find()
    res.json(meID);
})

const addID = asyncHandler(async(req,res)=>{
    const {loginID} = req.body;
    //console.log(loginID);
    const meep = await LGid.create({
        myID: req.body.loginID,
    });
    res.json({
        myID: meep.myID,
    });
})

module.exports = { registerUser, authUser, getUsers, getMe, addID};




 //getting a response
    // res.json({
    //     name,
    //     email,
    // });
