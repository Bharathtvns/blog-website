import BlogList from "./Allblogs";
import useFetch from "./fetching";
import { useState } from "react";
import { useParams } from "react-router-dom";


const Home = () => {
const {data:blogs,isLoading,error} = useFetch();
const [name, setName] = useState('');

const give = async e=>{
  e.preventDefault();
      window.location=`/blog/${name}`
}

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <div>Loading...</div> }

      { blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;