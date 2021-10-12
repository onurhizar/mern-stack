# Community Website
Written by Onur Hızar
https://www.github.com/onurhizar


- - -

# TODO
- login "/api/login" db and crypto set
- register "/api/register" db and crypto set
- auth middleware
- user model

- - -

# Changelog

## v1.0.0
- initial commit
- added login and register base page

## v1.0.1
- added mongoose model: ./models/User.js
- added register system to database with bcrypt encryption
- added auth middleware: ./middleware/auth.js
- added route "/api/profile" which uses auth middleware, sends user details back