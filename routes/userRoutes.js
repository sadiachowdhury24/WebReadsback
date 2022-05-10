const express = require('express');
const { registerUser, authUser, getUsers } = require('../controllers/userControllers');

// importing express Router
const router = express.Router()

// api endpoint, post- storing data in backend
router.route('/signup').post(registerUser);
router.route('/signin').post(authUser);
router.route('/allusers').get(getUsers);
// export the router
module.exports = router;
