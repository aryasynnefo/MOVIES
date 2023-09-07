import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    year:{
        type:Number
    },
    language:{
        type:String
    },
    image:{
        type: String
    }
})

export default mongoose.model.Users||mongoose.model("User",userSchema)



















