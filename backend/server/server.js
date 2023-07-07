const express = require("express");
const app = express("app");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const connection = require("./config/connectdatabase");

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/", require("./routes/route"));

app.listen(PORT, () => {
  console.log("server is running in " + PORT);
});
