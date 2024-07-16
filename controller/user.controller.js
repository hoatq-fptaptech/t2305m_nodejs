const User = require("./../model/user.model")
const bcrypt = require("bcryptjs");
const mail = require("./../mail/mail")
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
        
        // send email -- nodemailer
        mail.mail("GMAIL").sendMail({
            from: "T2305M",
            to: user.email,
            cc: "",
            bcc: "",
            subject: "NHớ từ giờ gửi có subject ko sẽ bị trượt",
            // text: ""
            html: "<h1>Welcome you </h1>"
        })

        res.redirect("/");
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.login = (req,res)=>{
    res.render("user/login");
}

exports.postLogin = async (req,res)=>{
    try {
        const email = req.body.email;
        const u = await User.findOne({email: email});
        if(u == null){
            res.send("Email or password is not correct");
            return;
        }
        // verify password
        const verify = await bcrypt.compare(req.body.password, u.password);
        if(verify == false){
            res.send("Email or password is not correct");
            return;
        }
        // login success -> save to session
        req.session.auth = {
            fullname: u.fullname,
            email: u.email,
            role: "staff"
        }

    } catch (error) {
        res.send(error);
    }
}