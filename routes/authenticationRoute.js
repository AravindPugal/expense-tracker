const express = require("express");
const User = require('../models/userModel');
const router = express.Router();



const createUser = async (req, res) => {
    const { username, password } = req.body;
    await User.create(req.body)
    res.status(201).json({ success: true });
}
router.post('/sign-in', createUser);
module.exports = router;