import React from "react";
import { useState } from "react";
// import { login }  from "./firebase";
import { auth }  from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css";
import { useHistory } from "react-router-dom";


const Login = (props) => {

  const [l_mail, setL_mail] = useState('');
    const [l_password, setL_password] = useState('');
    const history = useHistory();
  const login_fun = async e =>{
    try {
      e.preventDefault();
      const user = await props.login(l_mail,l_password);
      console.log(auth.currentUser);
      toast.success("Login Successful",{
        position:"top-center"
      })
      window.location='/'


    } catch (err) {
      console.log(err.message);
      toast.error("Username/password Incorrect",{
        position:"top-center"
      })
    }
  };
  

    return ( 
        <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" >
        <label>Email ID:</label>
        <input 
          type="text" 
          required 
          value={l_mail}
          onChange={(e) => setL_mail(e.target.value)}
        />
        <label>Password:</label>
        <input 
          type="password" 
          required 
          value={l_password}
          onChange={(e) => setL_password(e.target.value)}
        />
          <button className="loginButton" onClick={login_fun}>Login</button>
          <ToastContainer/>
        </form>
        <button  className="loginRegisterButton"> <a href="http://localhost:3000/register">Register</a></button>      </div>
     );
}
 
export default Login;