const Session = require("../models/Session");
const express = require("express");
const { check, validationResult } = require("express-validator");
const fetchWord = require("../utilities/fetchWord");
const checkWord = require("../utilities/checkWord");
const getArrays = require("../utilities/getArrays");
const Attempt = require("../models/Attempt");

const router = express.Router();

router.post(
  "/",
  check("name", "Name is Required!").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.errors[0].msg });
    }

    try {
      const { name } = req.body;
      const word = await fetchWord();

      // console.log(word);

      const session = new Session({ name, word: word.toUpperCase() });
      await session.save();

      res.json({ name: session.name, session_id: session._id });
    } catch (err) {
      // console.log(err);
      return res.status(500).send({ error: "Server Error!" });
    }
  }
);

const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

router.post(
  "/add_attempt",
  [
    check("response", "Response is required").notEmpty(),
    check("session", "Session is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ error: errors.errors[0].msg });
    }

    try {
      const { session, response } = req.body;
      const sess = await Session.findOne({ _id: session });

      if (!sess) {
        return res.status(400).send({ error: "Invalid Session" });
      }

      const { word, attempts } = sess;

      if (response.length !== 5 || attempts.length === 6) {
        return res.status(400).send({ error: "Invalid Response" });
      }

      const resCheck = await checkWord(response);

      if (!resCheck && word !== response) {
        return res
          .status(400)
          .send({ error: "Please enter a valid English word." });
      }

      const color = getArrays(word, response);
      let success = false;
      if (countOccurrences(color, "Green") === 5) success = true;
      // console.log(word, response);

      const attempt = new Attempt({
        number: attempts.length + 1,
        response,
        color,
      });

      await attempt.save();

      sess.attempts = [...sess.attempts, attempt._id];
      await sess.save();

      res.json({ attempt, success });
    } catch (err) {
      // console.log(err);
      return res.status(500).send({ error: "Server Error" });
    }
  }
);

router.get("/giveup/:id", async (req, res) => {
  try {
    const session_id = req.params.id;
    if (!session_id) {
      return res.status(400).send({ error: "Invalid session." });
    }

    const session = await Session.findById(session_id);

    if (!session) {
      return res.status(400).send({ error: "Invalid session." });
    }

    res.json(session);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Server Error" });
  }
});

module.exports = router;
