const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const search = require("./routes/search");
const review = require("./routes/review");

const app = express();

app.use(bodyParser.json());

// cors
app.use(cors());

// Routes
app.use("/search", search);
app.use("/reviews", review);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on Port ${port}`));
