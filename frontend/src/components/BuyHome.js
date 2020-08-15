import React ,{useState,useEffect}from 'react';
import {useSpring,animated} from 'react-spring'
import axios from 'axios';
import {Link} from 'react-router-dom'

    export var nesta=[];
const BuyHome = () => {
    const [toggle,setToggle]=useState(false);
    var animationProps=useSpring({marginLeft:toggle ? 0 : -200 ,from:{marginLeft:-200}});
    const [products,setProducts]=useState([]);
    const [preProducts,setPreProducts]=useState([])
    console.log(products)
    
    nesta=products
  
    
    

    
    const [name,setName]=useState('');
    const [type,setType]=useState();
    const [size,setSize]=useState();
    const [rooms,setRooms]=useState();
    const [description,setDescription]=useState();
    const [price,setPrice]=useState()
    const [city,setCity]=useState();
    const [part,setPart]=useState();
    const [equiped,setEquiped]=useState();
    var [sell,setSell]=useState()

    console.log(equiped)

    if(!toggle){
        animationProps=0
    }
    const showFilter=()=>{
        setToggle(!toggle)
        
    }
    useEffect(() => {
        
        const povuci=()=>axios.post('/api/products/getproducts',{
            
        })
        .then(res=>{
            
            setProducts(res.data)
            setPreProducts(res.data)
            
            
        })
       povuci();
      
        return () => {
            
        };
    }, [])
    console.log(sell)
    const clickedProduct = (id)=>{
        products.find(product=>product._id===id)
    }
    
    const filterProducts = (e) =>{
        
        setProducts(preProducts.filter(product=>product.sell===sell || product.rooms===rooms || product.size===size || product.type===type || product.price===price
            || product.city===city || product.part === part || product.equiped===equiped))
        
    }
    const search=()=>{
        setProducts(preProducts.filter(product=>product.name.indexOf(name)!==-1))
    }
    return <div className="buyhome">
        <div class="filter-container">
            <button id="filter-btn" onClick={showFilter}>FILTER</button>
            <input type="search" id="search" value={name} onChange={e=>setName(e.target.value)}></input>
            <button id="filter-btn" onClick={search}>SEARCH</button>
        </div>
        
        
        {toggle && <animated.div className="filter-menu" style={animationProps}>
                <h2 className="filter-text">FILTER</h2>
                
                <input className="filter-text" type="checkbox" value={"rent"} onChange={e=>setSell(e.target.value)}></input>Rent
                <input className="filter-text" type="checkbox" value={"buy"} onChange={e=>setSell(e.target.value)}></input>Buy<br/>
                
                
                <b><label className="filter-text">Rooms number:</label>
                <input className="filter-text" type="number" value={rooms} onChange={e=>setRooms(e.target.value)}></input><br/>
                
                <label className="filter-text">Size(m2):</label>
                <input className="filter-text" type="number" value={size} onChange={e=>setSize(e.target.value)}></input><br/>

                
                <input className="filter-text" type="checkbox" value={"Equiped"} onChange={e=>setEquiped(e.target.value)}></input>Equipped
                <input className="filter-text" type="checkbox" value={"Unequiped"} onChange={e=>setEquiped(e.target.value)}></input>Unequipped<br/>
               

                <label className="filter-text">City:</label>
                <input className="filter-text" type="text" value={city} onChange={e=>setCity(e.target.value)}></input>

                <label className="filter-text">Part of city:</label>
                <input className="filter-text" type="text" value={part} onChange={e=>setPart(e.target.value)}></input><br/>

                <input className="filter-text" type="checkbox" value={"House"} onChange={e=>setType(e.target.value)}></input>House
                <input className="filter-text" type="checkbox" value={"Apartment"} onChange={e=>setType(e.target.value)}></input>Apartment<br/>
                

                <label className="filter-text">Price($):</label>
                <label className="filter-text">From:</label>
                <input className="filter-text input-number" type="number" value={price} onChange={e=>setPrice(e.target.value)}></input>
                <label className="filter-text">To:</label>
                <input className="filter-text input-number" type="number" value={price} onChange={e=>setPrice(e.target.value)}></input><br/></b>

                <button className="filter-btn" onClick={filterProducts}><b>Submit</b></button>

            
        </animated.div>}
        <div className="grid-container">
           {products.map(product=>{ return <Link className="product-box" to={'/product/'+product._id} onClick={()=>clickedProduct(product._id)}>
               {console.log(product._id)}
                <img src={product.file}></img>
                <h4>{product.name}</h4>
                <div className="product-info">
                <p>Type:{product.type}</p>
                <p>Size:{product.size} m²</p>
                <p>Rooms:{product.rooms}</p>
                <h5>Price:${product.price}</h5>
                </div>
            </Link>
            })}

        </div>
    </div>;
}



export default BuyHome;