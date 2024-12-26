import mongoose from "mongoose"; 
import User from "./UsersModel.js";
import Messages from "./messageModel.js";


const conversationSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Messages,
    }],
},
{ timestamps: true });


const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation