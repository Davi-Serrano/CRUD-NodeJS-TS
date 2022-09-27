
const mongoose = require("mongoose")

const UserModel = mongoose.model("User",{
 
    name:{
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
});


export { UserModel }