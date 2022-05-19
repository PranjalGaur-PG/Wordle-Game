const Session = require("../models/Session");
const express = require("express");
const {check, validationResult} = require("express-validator");
const fetchWord = require("../utilities/fetchWord");
const checkWord = require("../utilities/checkWord");

const router = express.Router();

router.post('/', check('name', 'Name is required !').notEmpty(), async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors : errors.array()});
    }

    try {

        const { name } = req.body;
        const word = await fetchWord();

        console.log(word);

        const session = new Session({ name, word });
        await session.save();
        res.json(session);

    } catch(err) {

        console.log(err);
        return res.status(500).send({ error : 'Server Error!' });

    }
});

router.post('/add_attempt', check('response', 'Response is required').notEmpty(), async (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors : errors.array()})
    }

    try {

        const { session, response } = req.body;
        const sess = await Session.findOne({_id : session});

        if(!sess) {
            return res.status(400).send({ error : "Invalid Session" });
        }

        if(response.length !== 5) {
            return res.status(400).send({ error : "Invalid Response" });
        }

        // const resCheck = await checkWord(response);
        // console.log(resCheck);
        // if(!resCheck) {
        //     return res.status(400).send({ error : "Please enter a valid English word."});
        // }

    } catch (err) {
        console.log(err);
        return res.status(500).send({ error : "Server Error" });
    }
});