import React,{useState} from 'react';
import axios from 'axios'
import {loggedUser} from '../App'


const AddProduct = () => {
   
   const [name,setName]=useState();
   const [type,setType]=useState();
   const [size,setSize]=useState();
   const [rooms,setRooms]=useState();
   const [description,setDescription]=useState();
   const [price,setPrice]=useState();
   const [author,setAuthor]=useState(loggedUser.username);
   const [city,setCity]=useState();
   const [part,setPart]=useState();
   const [sell,setSell]=useState('For sale');
   const [equiped,setEquiped]=useState();


   const [fname,setfName]=useState()
    const [file,setFile]=useState()
    

   const uploadFunction = ()=>{


       
 
       axios.post('/api/products/addproduct',{
            name:name,
            type:type,
            size:size,
            rooms:rooms,
            price:price,
            author:author,
            city:city,
            part:part,
            sell:sell,
            equiped:equiped,
            description:description,
            file:'/uploads/'+file.name
            
            
            
            
           
            
            
        })
        .then(res=>{
            if(res.data==='Product added'){
                window.location='/';
                
            }else{
                window.location='/sellproduct';
                
            }

        })

    
        
   }




       




   return <div className="register">
        <form>
            <input className="input-register" type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}></input><br/>
            <input className="input-register" type="text" placeholder="Type" value={type} onChange={e=>setType(e.target.value)}></input><br/>
            <input className="input-register" type="number" placeholder="Size" value={size} onChange={e=>setSize(e.target.value)}></input><br/>
            <input className="input-register" type="number" placeholder="Rooms" value={rooms} onChange={e=>setRooms(e.target.value)}></input><br/>
            <input className="input-register" type="number" placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)}></input><br/>
            
            <input className="input-register" type="text" placeholder="City" value={city} onChange={e=>setCity(e.target.value)}></input><br/>
            <input className="input-register" type="text" placeholder="Part" value={part} onChange={e=>setPart(e.target.value)}></input><br/>
            <select value={equiped} onChange={e=>setEquiped(e.target.value)}>
                
                <option value="unequiped">Unequiped</option>
                <option value="equiped">Equiped</option>
            </select><br/>
            <select value={sell} onChange={e=>setSell(e.target.value)}>
                <option value="sell">For sale</option>
                <option value="rent">For rent</option>
               
            </select><br/>

            <input type="file" onChange={event=>{
                const file=event.target.files[0]
                setFile(file)
            }} id="choose-file"/><br/>
            
            <textarea className="input-register text-area" type="text" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}></textarea><br/>
            <button id="register-btn" onClick={uploadFunction}>Add your product</button><br/>
        </form>

    </div>;
}



export default AddProduct;