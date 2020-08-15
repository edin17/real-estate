import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    author:{type:String,required:true},
    message:{type:String,required:true},
    key:{type:String,required:true}
})

const Message = mongoose.model('Message',messageSchema);

module.exports=Message;