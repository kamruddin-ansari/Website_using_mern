const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    //If you attemp to use expired token then you will get Unauthorized HTTP
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP,Token not provide" });
  }
  //Assume token is the format "Bearer<jwtToken>, Removing the Bearer prefix"
  const jwtToken = token.replace("Bearer", "").trim();
  console.log("token from auth middleware", jwtToken);
  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    // from user models select method from mongodb to remove password
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    //own custom property pass the user data ab humare req.user full data aa gya hai password ko chod ke
    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    console.log(userData);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized.Invalid token" });
  }
};

module.exports = authMiddleware;
