const mongoose = require("mongoose");

const schema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please add the username."]
    },
    email:{
        type: String,
        required: [true, "Please add the user email."],
        unique: [true, "Email address already exists."]
    },
    password:{
        type: String,
        required: [true, "Please add the password."]
    }
},{
    timestamps: true
})

module.exports = mongoose.model("User",schema)