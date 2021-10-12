const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');


// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', (req,res)=>{
    res.send('register page test');
})


module.exports = router;