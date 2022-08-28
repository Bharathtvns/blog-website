import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBlog from './new'; 
import BlogDetails from './BlogDetalis';
import Footer from './Footer';
import Login from './login';
import Register from './register';
import { auth, login }  from "./firebase";
import Redirect from './redirect';
import { useState } from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import Blog_Details from './auth_blogs'


function App() {

  const [uid,setUid] =  useState("");
  const [loading,setLoading] =  useState(true);
  console.log(loading);
  onAuthStateChanged(auth,state=>{
    setLoading(false);
    console.log(auth.currentUser);
    if (state) {
      setUid(state.uid);
    }
    else{
      setUid("");
    }
  })

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
        <Route exact path='/'>
            <Home />    
          </Route>
        <Route  path='/login'>
            <Login login={login} />    
          </Route>
          <Route  path='/register'>
            <Register />    
          </Route>
          
          {auth.currentUser && <> <Route  path='/blog/create'>
            <NewBlog />    
          </Route>
          <Route  path='/blogs/:id'>
            <BlogDetails />    
          </Route> 
          <Route  path='/blog/:author'>
            <Blog_Details />    
          </Route></>}
          {!loading && 
          <Route  path='*'>
            <Redirect />    
          </Route>}
        </Switch>
        
      </div>
      <Footer/>
    </div>
    
    </Router>
  );
}

export default App;