const User = require("./../model/user.model")
const bcrypt = require("bcryptjs");
exports.register = (req,res)=>{
    res.render("user/register");
}
exports.postRegister = async (req,res)=>{
    try {
        const data =  req.body;
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(data.password,salt);
        data.password = hashed;

        const user = new User(data);
        user.save();

        // send email
        // gmail

        res.redirect("/");
    } catch (error) {
        res.status(400).send(error);
    }
}