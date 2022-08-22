const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const authorRoute = require("./routes/Author");

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

dotenv.config();

// CONNECT DATABASE
mongoose.connect((process.env.MONGODB_URL), () =>{
    console.log("Connected to mongDB")
})

// ROUTES
app.use("/v1/Author", authorRoute);
app.listen(8000,() => {
    console.log("Server is running...")
});