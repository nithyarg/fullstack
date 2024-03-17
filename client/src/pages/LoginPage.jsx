import React, { useContext } from "react";
import{Link, Navigate, redirect} from "react-router-dom";
import{useState} from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [radirect, setRedirect] =useState(false);
    const  {setUser} =  useContext(UserContext);
    async function handleLoginsubmit(ev) {
     ev.preventDefault();
     try{
      const data= await axios .post('/login',{email,password});
      setUser(data);
        alert('Login successful');
        setRedirect(true);
     }  catch (e) {
        alert('Login failed');
     } 
   
    }

    if (redirect){
        return <Navigate to={'/'}/>
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mb-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-md mx-auto" onSubmit={handleLoginsubmit}>
             <input 
                type="email" 
                placeholder="your@email.com" 
                value={email} 
                onChange={ev => setEmail(ev.target.value)}/>
             <input 
                type="password" 
                placeholder="password" 
                value={password}
                onChange={ev => setPassword(ev.target.value)}/> 
             <button className="primary">Login</button> 
             <div className="text-center py-2 text-gray-500">
                Allready a member 
                <Link className="underline text-black" to={'/register'}>RegisterPage</Link>
                </div>
            </form>
            </div>
            
        </div>
    ); 
}