const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api.js");

mongoose.connect(
  "mongodb+srv://root:root@osa-cluster.fi9rv.mongodb.net/WebDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () =>
  console.log("Mongoose is connected.")
);

// Data Parsing
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000/"],
  })
);
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));