const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
// home logic
const home = async (req, res) => {
  try {
    res.status(200).send("first time create my own server right now");
  } catch (error) {
    console.log(error);
  }
};

//register logic
const register = async (req, res) => {
  try {
    console.log(req);
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "email already exist" });
    }
    const userCreated = await User.create({ username, email, phone, password });
    //msg: userCreated ki jagah yr likha hai registration sucessfull only for token data show in postman
    res.status(201).json({
      msg: "registration sucessfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};

//login logic
const login = async (req, res) => {
  try {
    console.log(req);
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Crendentials" });
    }
    const user = await bcrypt.compare(password, userExist.password);
    console.log(user);
    if (user) {
      res.status(200).json({
        msg: "Login sucessfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

//to send user data to user logic
const user = async (req, res) => {
  try {
    //req.user par user ka full data hai password ko chod ke
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
    // res.status(200).json({ msg: "hi user" }); this for test
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
