const { z } = require("zod");
//creating object and schema for login
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast 3 characters" })
    .max(255, { message: "Email must more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be atleast 8 characters" })
    .max(1024, { message: "Password must more than 255 characters" }),
});

//creating object an schema
const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(255, { message: "Name must more than 255 characters" }),

  phone: z
    .string({ required_error: "Number is required" })
    .trim()
    .min(10, { message: "Number must be atleast 10 characters" })
    .max(20, { message: "Number must more than 20 characters" }),
});
module.exports = { signupSchema, loginSchema };
