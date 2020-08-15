import React,{useState} from 'react';
import axios from 'axios'

const Register = () => {
   
   const [name,setName]=useState();
   const [surname,setSurname]=useState();
   const [username,setUsername]=useState();
   const [email,setEmail]=useState();
   const [password,setPassword]=useState();
   
   const registerFunction = (e)=>{
       e.preventDefault();
       axios.post('/api/users/createuser',{
            name:name,
            surname:surname,
            username:username,
            email:email,
            password:password
        })
        .then(res=>{
            if(res.data==='User created'){
                window.location='/login';
            }else{
                window.location='/register';
            }
        })


        
   }
   return <div className="register">
        <form>
            <input className="input-register" type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}></input><br/>
            <input className="input-register" type="text" placeholder="Surname" value={surname} onChange={e=>setSurname(e.target.value)}></input><br/>
            <input className="input-register" type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}></input><br/>
            <input className="input-register" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}></input><br/>
            <input className="input-register" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}></input><br/>
            <button id="register-btn" onClick={registerFunction}>Register</button><br/>
        </form>

    </div>;
}



export default Register;