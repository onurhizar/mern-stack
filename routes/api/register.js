const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../../models/User');


// @route   GET api/register
// @desc    Test route
// @access  Public
router.get('/', (req,res)=>{
    res.send('register page test');
});

// validation checker's check list
const checkArray = [
    check('username','name is required').not().isEmpty(),
    check('email','please include a valid email').isEmail(),
    check('password','enter a password with 6 or more characters').isLength({min:6})
];

// @route   GET api/register
// @desc    register user
// @access  Public
router.post('/', checkArray, async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {username, email, password} = req.body;

    try{
        let user = await User.findOne({email:email})
        if (user){ // See if user exists, match error json with validator's
            return res.status(400).json({errors:[{msg:'User already exists'}]});
        }

        user = new User({
            username,
            email,
            password
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save(); // save to db

        // Return jsonwebtoken
        const payload = {
            user:{
                id: user.id
            }
        }
        
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn: 36000},
            (err,token) => {
                if(err) throw err;
                res.json({token});
            });  // production: change to 3600 (1 hour) TODO
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});


module.exports = router;