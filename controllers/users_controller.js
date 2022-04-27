const express = require('express');
// const { User } = require('../models');

const router = express.Router()

const db = require('../models')


router.get('/register', async (req, res, next) => {
    try {
        const newUser = await db.User.find({});
        const context = { newUser }
        console.log(newUser);
        return res.render('register.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


router.get('/login', async (req, res, next) => {
    try {
        // const newUser = await db.User.find({});
        // const context = { newUser }
        // console.log(newUser);
        return res.render('login.ejs');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


router.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  });


module.exports = router