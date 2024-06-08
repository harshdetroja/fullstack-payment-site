const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1", mainRouter);

app.listen(3000, () => {
  console.log("Server is listening at port ", PORT);
});
