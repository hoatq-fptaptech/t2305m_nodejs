const mongoose = require("mongoose");
const student_schema = new mongoose.Schema({
    name: String,
    email: String,
    dob: Date,
    mark: Number
});
module.exports = mongoose.model("Student",student_schema);