import BlogList from "./Allblogs";
import useFetch from "./fetching";

const Home = () => {
const {data:blogs,isLoading,error} = useFetch();
  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <div><body>
 <div class="waviy">
   <span style="--i:1">L</span>
   <span style="--i:2">o</span>
   <span style="--i:3">a</span>
   <span style="--i:4">d</span>
   <span style="--i:5">i</span>
   <span style="--i:6">n</span>
   <span style="--i:7">g</span>
   <span style="--i:8">.</span>
  </div>
</body></div> }
      { blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;