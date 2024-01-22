require("dotenv").config();
const express = require("express");
const cors = require("cors");
const adminRoute = require("./router/admin-router");
const serviceRoute = require("./router/service-router");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
// const bodyParser = require('body-parser');

const app = express();
// let tackle cors and connect to the front end
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credential: true,
};
app.use(cors(corsOptions));
app.use(express.json());
// app.use(bodyParser.json());
//error middle ware use for error handling
app.use(errorMiddleware);
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
//defining the admin route
app.use("/api/admin", adminRoute);
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
});
