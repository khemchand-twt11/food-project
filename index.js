const express = require("express");
const { connection } = require("./configs/db");
const cors = require("cors");
const { userRoute } = require("./routes/user.route");
const { authMiddleware } = require("./middlewares/auth");
const { menuRoute } = require("./routes/menu.route");
// const { notesRoute } = require("./routers/notes.routes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "SERVER PAGE" });
});

app.use("/user", userRoute);
app.use("/menu", menuRoute);
app.use(authMiddleware);
// app.use("/notes", notesRoute);
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error.message);
  }
  console.log(`server is running at port ${process.env.PORT}`);
});
