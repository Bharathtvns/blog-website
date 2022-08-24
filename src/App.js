import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBlog from './new'; 
import BlogDetails from './BlogDetalis';
import Footer from './Footer';
import Login from './login';
import Register from './register';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home />    
          </Route>
          <Route  path='/blog/create'>
            <NewBlog />    
          </Route>
          <Route  path='/blog/login'>
            <Login />    
          </Route>
          <Route  path='/blog/register'>
            <Register />    
          </Route>
          <Route  path='/blogs/:id'>
            <BlogDetails />    
          </Route>
        </Switch>
        
      </div>
      <Footer/>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;