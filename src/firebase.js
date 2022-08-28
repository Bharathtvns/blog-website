import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { signInWithEmailAndPassword, signOut } from "firebase/auth";





const firebaseConfig = {
    apiKey: "AIzaSyDwMsQ6iUH2U8MDl79L0sfLS1g1DLj5ik4",
    authDomain: "blog-website-30e2c.firebaseapp.com",
    projectId: "blog-website-30e2c",
    storageBucket: "blog-website-30e2c.appspot.com",
    messagingSenderId: "807371394502",
    appId: "1:807371394502:web:60d6281cf0449e035436c7",
    measurementId: "G-ZH4QY443LZ"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const login = async (mail,password) =>{
    
      return( signInWithEmailAndPassword(auth,mail,password))
      // toast.success("Login Successful",{
      //   position:"top-center"
      // })
      // window.location = "/";

    } 
    // catch (err) {
    //   console.log(err.message);
    //   // toast.error("Username/password Incorrect",{
    //   //   position:"top-center"
    //   // })
    // }


  const logout = () => {
    signOut(auth);
    window.location = "/register";
  }
  
  
  // export var auth = getAuth(app);
  // module.exports.login = login ;
  // module.exports.logout = logout ;
  // module.exports.auth = auth;
  export {auth,login,logout}