const mongoose = require("mongoose");

const schema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name:{
        type: String,
        required: [true, "Please add the contact name."]
    },
    email:{
        type: String,
        required: [true, "Please add the email."]
    },
    phone:{
        type: String,
        required: [true, "Please add the phone."]
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Contact",schema)