const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/notesapp")
  .then((res) => {
    console.log("connection Successfull");
  })
  .catch((error) => {
    console.log(error);
  });
