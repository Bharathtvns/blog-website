import Logo from "./logo-removebg-preview (2).png"
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="navbar">
<a className="image" href="/"><img src= {Logo} style={{height: 150,paddingTop:14   }}/></a>
        <div className="links">
          <Link to="/" >Home</Link>
          <Link to="/blog/create">New Blog</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;