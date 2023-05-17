const express = require("express");
const bcrypt = require("bcrypt");
const token = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";
const connectDB = require("./db");
const app = express();
const cors = require("cors");
const collection = require("./models/Login");
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

//Routs
//Login
app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (error) {
    res.json("notexist");
  }
});

//SignIn

app.post("/SignUp", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const data = {
    email: email,
    password: hashedPassword,
  };

  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (error) {
    res.json("notexist");
  }
});

//Middle wares
app.use(express.json());

connectDB();
app.listen(5000, () => console.log("server started on port 5000"));
