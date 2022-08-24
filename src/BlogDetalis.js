import { useHistory, useParams } from "react-router-dom";
import useFetch from "./fetching";
import Loading from "./loading";

const BlogDetails = async () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = await useFetch(`http://localhost:8000/blogs/${id}` );
  console.log(blog,error,isPending);
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${id}`, { method: 'Delete'})
    .then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <Loading/> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog[id].author }</p>
          <p>{ blog[id].body }</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;