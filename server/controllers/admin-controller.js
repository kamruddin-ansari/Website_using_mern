const User = require("../models/user-model");
const Contact = require("../models/contact-model");
//get all users logic
const getAllUsers = async (req, res, next) => {
  try {
    //removing password only using this {}, {password : 0}
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users Found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
//get all contact logic
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllUsers, getAllContacts };
