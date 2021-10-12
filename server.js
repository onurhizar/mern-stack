const express = require('express');
const connectDB = require('./config/db')

const app = express();
const PORT = process.env.PORT || 5000;
connectDB(); // Connect mongoDB database

// Init middleware
app.use(express.json({extended: false}));  // for req.body

app.get('/',(req,res)=>res.send('Main Page, API is running...'))

// Define routes
app.use('/api/login',require('./routes/api/login'));
app.use('/api/register',require('./routes/api/register'));

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))