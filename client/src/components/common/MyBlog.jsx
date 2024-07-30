import { useEffect, useState } from 'react'
import { axiosPrivate } from "../../app/config.js"
import { useDispatch, useSelector } from 'react-redux';
import { setMyBlogs } from '../../redux/reducers/userSlice.js';
import BlogCard from "./BlogCard.jsx";

function MyBlog() {
    const token = useSelector((state) => state.userReducer.tokens.accessToken);
    const axiosinstance = axiosPrivate(token);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await axiosinstance.get("/my-blogs",{
            headers: {
              "Content-type": "multipart/form-data",
            },
          });
          dispatch(setMyBlogs(response.data.blogs))
          setLoading(false);
          console.log(response);
        } catch (error) {
          console.log("Error fetching myblogs", error);
        }
      };
      fetchBlogs();
    }, [dispatch]);

    const userMyBlogs = useSelector((state) => state.userReducer.myBlogs)
  return (
    <div className='flex justify-center'>
            <h2 className="text-xl text-center">My Blogs....</h2>
            <div className="md:flex flex-wrap gap-10">
              {loading ? (
                <p> Loading....</p>
              ) : userMyBlogs && userMyBlogs.length >= 1 ? (
                userMyBlogs.map((blog) => (
                  <BlogCard
                    key={blog.blogId}
                    blogId={blog.blogId}
                    heading={blog.title}
                    image={blog.image.url}
                    profileImg={blog.image.url}
                    profileName={blog.authorName}
                    text={blog.paragraph}
                  />
                ))
              ) : (
                <p>No blogs available</p>
              )}
            </div>
          
    </div>
  )
}

export default MyBlog