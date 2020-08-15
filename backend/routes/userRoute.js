import express from 'express';

import User from '../models/usersModels'

const router = express.Router();

router.post('/createuser',(req,res)=>{
    const name=req.body.name;
    const surname=req.body.surname;
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;
    const newUser=new User({name,surname,username,email,password});

    newUser.save()
    .then(result=>{
        console.log(result);
    })
    .catch(err=>console.log(err));
    if(newUser){
    res.send('User created');
    
    }else{
    res.send('Invalid data')
}
    
});
var preUser;
router.post('/loginuser',async(req,res)=>{
    try{
        const username=req.body.username;
        const password=req.body.password;
        
        let dbuser = await User.findOne({username:username,password:password})
        
        if(dbuser){
            console.log('User loged in');
            res.send('User loged in');           
            preUser=dbuser;
        }else{
            console.log('Failed');
            res.send('Failed');
        }
    }catch(error){
    res.send({msg:error.message});
}    
})

router.get('/userlogedin',async(req,res)=>{
    const loggedInUser=preUser;
    res.send(loggedInUser)
    
})


export default router;