const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(errorHandler)
app.use("/api/contacts",require("./routes/contactsroutes"));
app.use("/api/users",require("./routes/usersroutes"));

app.listen(port, ()=>{
    console.log("Server is running on " + port)
})