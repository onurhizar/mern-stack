# Community Website
Written by Onur Hızar
https://www.github.com/onurhizar


- - -

# TODO
- DDoS protection
- invalid token counter and block the IP
- IP and username block
- Connect frontend and backend

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

## v1.0.2
- added login system with auth middleware, sends back a token

## v1.0.3
- React init
- Index, Login, Register, Blog and Forum page initials
- Login and Register page forms
- Bootstrap