import React,{useState} from 'react';
import axios from 'axios';


const Login = () => {
   

   const [username,setUsername]=useState();
   const [password,setPassword]=useState();
   
   const [userLogged,setUserLogged]=useState(false);


   

   const loginFunction = (e)=>{
       e.preventDefault();
    axios.post('/api/users/loginuser',{
            username:username,
            password:password
        })
        .then(res=>{
            if(res.data==='User loged in'){
                window.location='/'
                
                
            }else{
                
                setUserLogged(true)
                
            }
        });

        
    }
   return <div className="register">
    
        <form onSubmit={loginFunction}>
        {userLogged && <p style={{color:"red"}}>Your username or password is invalid</p>}
            <input className="input-register" type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}></input><br/>
            <input className="input-register" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}></input><br/>
            <button id="register-btn">Login</button><br/>
        </form>

    </div>;
}



export default Login;