const express = require('express');
const { getBooks } = require('../controllers/bookControllers');


const router = express.Router()


router.route('/allbooks').get(getBooks);

module.exports = router;