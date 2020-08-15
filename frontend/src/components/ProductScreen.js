import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import {loggedUser} from '../App'

import {nesta} from './BuyHome'


const ProductScreen = (props) => {
const [message,setMessage]=useState('')
var [allMessages,setAllMessages]=useState([])
var [filteredMessages,setFilteredMessages]=useState([])



    useEffect(() => {
        axios.post('/api/message/getmessage',{

        })
        .then(res=>{
            setAllMessages(res.data)
        })
        return () => {
            
        };
    }, [])
   
    filteredMessages=allMessages.filter(message=>message.key===props.match.params.id)
    const sendMessage = () =>{
        axios.post('/api/message/addmessage',{
            author:loggedUser.username,
            message:message,
            key:props.match.params.id
            
        })
        
    }


const [products,setProducts]=useState(nesta);
   

        

            
    
       
        
 
   
    console.log(products)
    console.log(props.match.params.id)
    const showProduct=products.find(product=>product._id===props.match.params.id)
    
    console.log(showProduct)
   
   return <div className="product-screen">
        <div className="flex-part">
            <img src={showProduct.file} alt="nema"></img>
            <div className="specifications">
                <h1>{showProduct.name}</h1>
               <hr/>
                <h3>Type:{showProduct.type}</h3><br/>
                <h3>Size:{showProduct.size}</h3><br/>
                <h3>Equiped:{showProduct.equiped}</h3><br/>
                <h3>Rooms:{showProduct.rooms}</h3><br/>
                <h3>City:{showProduct.city}</h3><br/>
                <h3 id="price-detail">Price:${showProduct.price}</h3>
            </div>
        </div>
        <hr></hr>
        <div className="description">
            <h2>Description</h2>
            <p>,as,dpas,cpsdpc,dlcmlsdmcknsdkcnsdkncsdnpkcnsdkcnkosdncksdncknsdkcnkdncksdnkcnsdklncklsdncklnsdklcnsdkc</p>
        </div>
        <hr/>
        <div className="sendm">
            {message==="" && <p style={{color:'red'}}>Message can not be empty</p>}
            {!message==="" && <p style={{color:'green'}}>Message sent</p>}
            <input type="text" placeholder="Send message..." className="message" rows="10" cols="70" value={message} onChange={e=>setMessage(e.target.value)}></input>
            <button type="text" onClick={sendMessage}>Send Message</button>
        </div>
        <div className="comment-block">
            {filteredMessages.map(message=>{
                return <div className="single-message">
                    <div style={{marginLeft:10,fontSize:18}}>
                    <h4>{message.author}</h4>
                    <p>{message.message}</p>
                    </div>
                </div>
            })}
        </div>
    </div>;
}



export default ProductScreen;