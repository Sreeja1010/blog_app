const express = require("express");
const userRouter = express.Router();

userRouter.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password){
        return res.status(400).json({
            msg : 'invalid credentials'
        })
    } else {
        return res.status(201).json({
            msg : 'account created successfully'
        })
    }
})

userRouter.post('/signin', (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({
            msg : 'invalid credentials'
        })
    } else {
        return res.status(201).json({
            msg : 'login successful'
        })
    }
})



