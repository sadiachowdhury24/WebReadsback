const express = require('express');
const { registerUser, authUser, getUsers, getMe, addID} = require('../controllers/userControllers');

// importing express Router
const router = express.Router()

// api endpoint, post- storing data in backend
router.route('/signup').post(registerUser);
router.route('/signin').post(authUser);
router.route('/allusers').get(getUsers);
router.route('/loggedIn').get(getMe);
router.route('/loggedIn').post(addID);
//router.route('/recommend').get();
//router.route('/loggedin').get(currentUser);
// export the router
module.exports = router;