const Session = require("../models/Session");
const { Router } = require("express");
const express = require("express");
const {check, validationResult} = require("express-validator");
const fetchWord = require("../utilities/fetchWord");

const router = express.Router();

router.post('/', check('name', 'Name is required !').notEmpty(), async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors : errors.array()});
    }

    try {

        const { name } = req.body;
        const word = fetchWord();
        const session = new Session({ name, word });
        await session.save();

    } catch(err) {

        console.log(err);
        return res.status(500).send("Server Error!");

    }
});

router.get('/', (req, res) => {
    res.send("Session route");
});

module.exports = router;