
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
const {data:blogs,isPending,isError}=useFetch(' http://localhost:8000/blogs')
  return (
    <div className="home">
    { isError && <div > Error!</div>   }
   {isPending && <div > loading... </div> }
   {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      
    </div>
  );
}
 
export default Home;