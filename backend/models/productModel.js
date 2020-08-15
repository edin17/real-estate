import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    type:{type:String,required:true},
    size:{type:String,required:true},
    rooms:{type:String,required:true},
    price:{type:String,required:true},
    author:{type:String,required:true},
    city:{type:String},
    part:{type:String,required:true},
    sell:{type:String,required:true},
    equiped:{type:String},
    
    description:{type:String,required:true},
    file:{type:String}
});

const Product = mongoose.model('Product',productSchema);
module.exports=Product;