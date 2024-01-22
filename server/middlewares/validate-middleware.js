const { parseAsync } = require("../validators/auth-validator")

const validate = (schema) => async(req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body= parseBody;
        next();
    } catch (err) {
        const status= 422;
        const message = "Fill the form properly";
        const extraDetail= err.errors[0].message;
        const error = {
            status,
            message,
            extraDetail,
        };
        console.log(error);
        //res.status(400).json({message:message});
        next(error);

    }

};
module.exports=validate;