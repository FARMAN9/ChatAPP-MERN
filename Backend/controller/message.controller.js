import mongoose from "mongoose";
import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import CryptoJS from "crypto-js";
import  {io,GetReciverSocketId}  from "../SocketIO/server.js";

export const sendMessage = async (req, res) => {
    try {
        let { message } = req.body;
        const ciphertext = CryptoJS.AES.encrypt(message,process.env.SECRET_KEY).toString();
        console.log(ciphertext);
        var bytes  = CryptoJS.AES.decrypt(ciphertext, process.env.SECRET_KEY);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        console.log(originalText);
        message = ciphertext;
        const { id: receiver } = req.params; // Receiver's user ID
        const sender = req.user._id; // Sender's user ID
        console.log("Sender:", sender._id, "Receiver:", receiver, "Message:", message);

        // Validate `message`
        if (!message || typeof message !== "string") {
            return res.status(400).json({ error: "Message is required and must be a string." });
        }

        // Validate `receiver` as a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(receiver)) {
            return res.status(400).json({ error: "Invalid receiver ID." });
        }

        // Find or create conversation
        let conversation = await Conversation.findOne({ members: { $all: [sender, receiver] } });
        if (!conversation) {
            conversation = new Conversation({
                members: [sender, receiver],
            });
            await conversation.save();
        }

        // Create a new message
        const newMessage = new Message({
            sender,
            receiver,
            message,
        });

        // Save the message and update the conversation
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
      
        await Promise.all([conversation.save(), newMessage.save()]);


        // Respond with success

        var bytes  = CryptoJS.AES.decrypt(message, process.env.SECRET_KEY);
        var plainMessage = bytes.toString(CryptoJS.enc.Utf8);
        message = plainMessage;
        newMessage.message = message;
        const reciverSocketId = await GetReciverSocketId(receiver);
        if (reciverSocketId) {
            io.to(reciverSocketId).emit("newMessage", newMessage);
        }
        
        res.status(201).json(newMessage);
    } catch (error) {
        console.error("Error in sendMessage:", error);
        res.status(500).json({
            error: "Internal server error",
            details: error.message,
        });
    }
};




export const getMessages = async (req, res) => {
    try {
        const { id: receiver } = req.params; // Receiver's user ID
        const sender = req.user._id; 
        let conversation = await Conversation.findOne({ members: { $all: [sender, receiver] } }).populate('messages');

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages.map(message => {
            const decryptedMessage = CryptoJS.AES.decrypt(message.message, process.env.SECRET_KEY);
            const plainMessage = decryptedMessage.toString(CryptoJS.enc.Utf8);
            return {
                ...message._doc,
                message: plainMessage,
            };
        });

        return res.status(200).json(messages);
    }
    catch (error) {
        console.error("Error in sendMessage:", error);
        res.status(500).json({
            error: "Internal server error",
            details: error.message,
        });
    }
};
