const Contact = require("../models/contact-model");

const contactForm = async (req,res) =>{
   try {
    const response =req.body;
    console.log(response);
    await Contact.create(response);

    return res.status(200).json({message:"Message send sucessfully"});
   } catch (error) {
    return res.status(500).json({message:"Message not delievered"});
   }

};
module.exports=contactForm;