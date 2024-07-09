const Student = require("./../model/student.model");
exports.student_get = async function(req,res){  
    // query
    let list = await Student.find();
    // res.sendFile(__dirname+"/views/home.html");
    let x =0;
    res.render("home",{
        students: list,
        count : x
    });
}
exports.form_new = (req, res) => {
    res.render('new');
  };

exports.save_student = async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.redirect('/');
    } catch (error) {
      res.status(400).send(error);
    }
  }  