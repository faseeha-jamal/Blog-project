
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from './BlogCard.jsx';
import { setMySaveBlogs } from '../../redux/reducers/userSlice.js';
import { axiosPrivate } from '../../app/config.js';
import { useEffect, useState } from 'react';

function SavedBlog() {
  const token = useSelector((state) => state.userReducer.tokens.accessToken);
  const axiosinstance = axiosPrivate(token);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosinstance.get("/save-blogs",{
          headers: {
            "Content-type": "multipart/form-data",
          },
        });
        dispatch(setMySaveBlogs(response.data.SavedBlogs))
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.log("Error fetching saveBlogs", error);
      }
    };
    fetchBlogs();
  }, [dispatch]);

  const usersaveBlogs = useSelector((state) => state.userReducer.mySaveBlogs)
  console.log("this is user save blog",usersaveBlogs);
   
  return (
    <div className='w-screen'>
           <div className="py-2 text-center flex justify-center items-center">
            <h2 className="text-xl">Saved Blogs....</h2>
            <div className="md:flex flex-wrap gap-10">
              {loading ? (
                <p> Loading....</p>
              ) : usersaveBlogs && usersaveBlogs.length >= 1 ? (
                usersaveBlogs.map((blog) => (
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
    </div>
  )
}

export default SavedBlog