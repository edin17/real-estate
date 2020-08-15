import React ,{useState,useEffect}from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import HomePage from './components/HomePage';
import { FaShoppingCart } from 'react-icons/fa';
import Register from './components/Register';
import Login from './components/Login';
import BuyHome from './components/BuyHome';
import axios from 'axios';
import {useSpring,animated} from 'react-spring'
import AddProduct from './components/AddProduct';
import ProductScreen from './components/ProductScreen';

export var loggedUser;

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  const [isLogged,setIsLogged]=useState(false)
  const [toggle,setToggle]=useState(false)


  
  useEffect(() => {
    const povuci=()=>axios.get('/api/users/userlogedin')
    .then(res=>{
      setLoggedInUser(res.data)
      loggedUser=res.data;
      if(!res.data){
        setIsLogged(false)
  
      }else{
        setIsLogged(true)
        
      }
      
    })
    povuci();
    return () => {
      
    };
  }, [])
  
  const aProps=useSpring({display:toggle ? "block":"none",from:{display:"none"}})
  
  const logOut = ()=>{
    setLoggedInUser({});
    setIsLogged(false);
    setToggle(false)
    loggedUser=null;
  }

  
  return (
    <div className="App">
      <BrowserRouter>
      <div className="header">
        <Link to='/' className="logo"><h1>RE</h1></Link>
        {!isLogged && <div className="log-btns">
        <Link className="lbtn" to="/login"><h3>LOGIN</h3></Link>
        <Link className="lbtn" to="/register"><h3>SIGNIN</h3></Link>
          
        
        
        <FaShoppingCart className="lbtn"/>
        </div> 
}
        <Link className="username" onClick={()=>setToggle(!toggle)}><h2>{loggedInUser.username}</h2></Link>


      </div>
      <animated.div className="profile-div" style={aProps}>
        
        
        <Link id="p-option" to='/sellproduct'><h4>Add product</h4></Link>
        <Link id="p-option" to='/login' onClick={logOut}><h4 id="p-option">Log out</h4></Link>
        
      </animated.div>


      <hr></hr>

      <main>
          
            <Route path='/' component={HomePage} exact={true}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route path='/buyhome' component={BuyHome}/>
            <Route path='/sellproduct' component={AddProduct}/>
            <Route path='/product/:id' component={ProductScreen}/>
            
          
        </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
