import express from 'express';
import Product from '../models/productModel';


const prouter = express.Router();
const multer=require('multer')


const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'C:/Users/38762/Desktop/React/real-estate/uploads');
  },
  
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})


const upload = multer({storage:storage});
prouter.post('/addproduct',upload.single('file'),(req,res,next)=>{
  next()
    console.log(req.body)
    const name=req.body.name;
    const type=req.body.type;
    const size=req.body.size;
    const rooms=req.body.rooms;
    const price=req.body.price;
    const author=req.body.author;
    const city=req.body.city;
    const part=req.body.part;
    const sell=req.body.sell;
    const equiped=req.body.equiped;
    const description=req.body.description;
    const file=req.body.file;
    
    
   
    
        
      

    const newProduct=new Product({name,type,size,rooms,price,author,city,part,sell,equiped,description,file});
    newProduct.save()
 
    if(newProduct!==null){
    res.send('Product added')
    }
  });

prouter.post('/getproducts',async(req,res)=>{
    const allProducts=await Product.find();
    res.send(allProducts)

})

export default prouter;