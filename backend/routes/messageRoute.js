import express from 'express'
import Message from '../models/messageModel'

const mrouter=express.Router();

mrouter.post('/addmessage',async(req,res)=>{
    const author=req.body.author;
    const message=req.body.message;
    const key=req.body.key;

    const newMessage=new Message({author,message,key});
    newMessage.save()
    
    if(newMessage!==null){
    res.send('Message added')
    }


})

mrouter.post('/getmessage',async(req,res)=>{
    const allMessages=await Message.find();
    res.send(allMessages)
})

export default mrouter;