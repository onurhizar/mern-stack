const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');


// @route   GET api/profile
// @desc    Profile of user, needs jwtToken for auth
// @access  Private
router.get('/', auth, async (req,res)=>{
    try {
        // send back everything of user except password
        const user = await User.findById(req.user.id).select('-password')
        res.json(user); // send user data when there is a valid jwt token
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


module.exports = router;