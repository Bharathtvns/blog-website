import { useState } from "react";
import "./register.css";
import { createUserWithEmailAndPassword, } from "firebase/auth";
import { auth }  from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [r_mail, setR_mail] = useState('');
    const [r_password, setR_password] = useState('');
    const [user,setUser] =useState({});
    const register = async e =>{
      e.preventDefault();
      try {
        const user = await createUserWithEmailAndPassword(auth,r_mail,r_password);
        toast.success("User successfully registered")
        window.location = "/login";
      } catch (err) {
        console.log(err.message);
        toast.error("Username already exists. Please login",{
          position:"top-center"
        })
      }
    };

  
    return ( 
        <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" >
        <label>Email ID:</label>
        <input 
          type="email" 
          required 
          value={r_mail}
          onChange={(e) => setR_mail(e.target.value)}
        />
        <label>Password:</label>
        <input 
          type="password" 
          required 
          value={r_password}
          onChange={(e) => setR_password(e.target.value)}
        />
          <button className="registerButton" onClick={register}>Register</button>
          <ToastContainer/>
        </form>
          <button  className="registerLoginButton"> <a href="http://localhost:3000/login">Login</a></button>
      </div>
     );
    }
export default Register;