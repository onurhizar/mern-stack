const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');


const checkArray = [
    check('email', 'please include a valid email').isEmail(),
    check('password', 'Password is required.').exists()
];

// @route   GET api/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/', checkArray, async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {email, password} = req.body;

    try {
        let user = await User.findOne({email:email});
        
        if (!user){ // if user doesnt exist
            return res
            .status(400)
            .json({errors: [{ msg: 'Invalid credentials' }] });
        }

        // compare password with database
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch){
            return res
            .status(400)
            .json({errors: [{ msg: 'Invalid credentials' }] });
        }

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
})


module.exports = router;