import { useHistory, useParams } from "react-router-dom";
import useFetch from "./fetching";
import { FaTrash } from 'react-icons/fa';


const BlogDetails =  () => {
  const { id } = useParams();
  const { data: blogs, error, isLoading } =  useFetch(`http://localhost:8000/blogs/${id}` );  
  console.log(blogs,error,isLoading);
  const history = useHistory();
  let blog = undefined;
  if (Array.isArray(blogs)) {
    blog = blogs.find(ele => ele.blog_id==id)
  }
  console.log(blog);
  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${id}`, { method: 'Delete'})
    .then(() => {
      history.push('/');
    }) 
  }
  
  return (
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && blog&&(
        <article className="oneblog">
          <center><h1>{ blog.title }</h1></center>
          <p>{ blog.body }</p>
          <br />
          <br />
          <p className="authorState">Written by { blog.author }</p>
          
          <button onClick={handleClick} ><FaTrash />
Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;