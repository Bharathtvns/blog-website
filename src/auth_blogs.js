import { useHistory, useParams } from "react-router-dom";
import useFetch from "./fetching";
import BlogList from "./Allblogs";


const Blog_Details =  () => {
  const { author } = useParams();
  const { data, error, isLoading } =  useFetch(`http://localhost:8000/blogs/${author}` );  
  console.log(data,error,isLoading);
  const history = useHistory();
  let blogs = undefined;
  if (Array.isArray(data)) {
    blogs = data.filter(ele => ele.author==author)
  }
  console.log(blogs);

  
  
  return (
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <div>
        <body>
</body></div> }
      { blogs && <BlogList blogs={blogs} title={` ${author}'s Blogs` }  />}
    </div>
    </div>
  );
}
 
export default Blog_Details;