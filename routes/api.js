const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User.js")
const Members = require("../models/Member.js");
const Events = require("../models/Event.js");
const { eventNames } = require("../models/Member.js");

// routes
//  GET
router.get("/", (req, res) => {
  Members.find({})
    .then((data) => {
      console.log("Data:", data);
      res.json(data);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
});
router.get("/event", (req, res) => {
  Events.find({})
    .then((data) => {
      console.log("Data:", data);
      res.json(data);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
});

// POST
router.post("/save", (req, res) => {
  const memberData = req.body;

  const newMember = new Members(memberData);
  newMember.save((err) => {
    if (err) {
      res.status(500).json({ msg: "Sorry there seems to be a problem" });
    } else {
      res.status(200).json({
        msg: "Your data has been successfully saved",
      });
    }
  });
});

router.post("/event-save", (req, res) => {
  const eventData = req.body;

  const newEvent = new Events(eventData);
  newEvent.save((err) => {
    if (err) {
      res.status(500).json({ msg: "Sorry there seems to be a problem" });
    } else {
      res.status(200).json({
        msg: "Your data has been successfully saved",
      });
    }
  });
});

// Register POST request
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  res.send(savedUser);
});

// Login POST request
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send({
      msg: "User not found",
    });
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(400).send({
      msg: "Incorrect Password",
    });
  }

  const token = jwt.sign({ _id: user._id }, "secret");

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.send(token);
});

// GET the current user
router.get("/user", async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];

    const claims = jwt.verify(cookie, "secret");

    if (!claims) {
      return res.status(401).send({
        msg: "Unauthorised user",
      });
    }

    const user = await User.findOne({ _id: claims._id });

    res.send(user);
  } catch (e) {
    return res.status(401).send({
      msg: "Unauthorised user",
    });
  }
});

// POST Logout
router.post("/logout", (req, res) => {
  res.cookie("jwt", { maxAge: 0 });

  res.send({
    message: "logged out",
  });
});



module.exports = router;