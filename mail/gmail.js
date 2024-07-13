const nodemailer = require("nodemailer");
const config = {
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587, // NO_SSL // 465 (SSL)
    auth: {
        user: "hoatq4@fpt.edu.vn",
        pass: 'wncnqyscslmgnrga'
    }
}
const transport = nodemailer.createTransport(config);
module.exports = transport;