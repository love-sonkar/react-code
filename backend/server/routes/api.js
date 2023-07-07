const UserModel = require("../config/userSchema");

exports.Home = (req, res) => {
  res.send("Hi");
};

exports.Singup = async (req, res) => {
  const { name, email, password } = req.body;

  const CheckMail = await UserModel.findOne({ email: email });
  if (CheckMail) {
    res.status(409).json({ message: "User is already Present" });
    res.send("eror");
  } else {
    const user = new UserModel({
      name,
      email,
      password,
    });
    const result = await user.save();
    res.status(200).json({
      message: "successfully Registerd",
    });
    console.log(result);
    res.send("hi");
  }
};
