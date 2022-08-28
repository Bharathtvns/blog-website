import { Link } from "react-router-dom";

const BlogList = ({ blogs,title }) => {

  
    return (
      <div>
        <center>
        <h2>{title}</h2>
        
      <div className="blog-list">
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
             <Link to={`/blogs/${blog.blog_id}`}>
            <h2>{ blog.title }</h2>
            <p>{blog.body.substring(0,20)}</p>
            <br />
            <p>Written by { blog.author }</p>
            
            </Link>
           
          </div>
        ))}
      </div>
      </center>
      </div>
    );
  }
   
  export default BlogList;