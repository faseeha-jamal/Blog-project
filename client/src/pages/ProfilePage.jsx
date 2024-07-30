import React, { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { validationSchema } from "../utils/validations/profileValidation";
import { BloggerDetails } from "../components/common/BloggerDetails";
import Button from "../components/common/Button";
import { UserProfile } from "../components/common/UserProfile";
import InputField from "../components/common/InputField";
import { Modal } from "../components/common/Modal";
import { axiosPrivate } from "../app/config.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogout } from "../redux/reducers/userSlice";
import MyBlog from "../components/common/MyBlog.jsx";
import SavedBlog from "../components/common/SavedBlog.jsx";

const ProfilePage = () => {
  const userName = useSelector((state) => state.userReducer.user.username);
  const userEmail = useSelector((state) => state.userReducer.user.email);
  const token = useSelector((state) => state.userReducer.tokens.accessToken);
  const axiosinstance = axiosPrivate(token);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      image: null,
      paragraph: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("onsubmit clicked");
      try {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("paragraph", values.paragraph);
        formData.append("image", values.image);

        console.log("ready to trigger");

        const response = await axiosinstance.post("/blog", formData, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        });
        console.log("this is response", response);
      } catch (error) {
        console.log("this is catch error", error);
      }
    },
  });

  const handleLogout = () => {
    dispatch(setLogout());
  };
  
  const handleMyBlogsClick = () => {
    setMyBlog(true);
    setSavedBlogs(false);
    setEditProfile(false);
  };

  const handleSavedBlogsClick = () => {
    setMyBlog(false);
    setSavedBlogs(true);
    setEditProfile(false);
  };

  const handleEditProfileClick = () => {
    setMyBlog(false);
    setSavedBlogs(false);
    setEditProfile(true);
  };
  const [myBlogs, setMyBlog] = useState(false);
  const [savedBlogs, setSavedBlogs] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [showmodal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <div className="w-full lg:w-[90%] m-auto text-black bg-zinc-200 md:bg-transparent">
        {/* blogname nav div  */}
        <div className="w-full flex justify-between px-5 mt-10 md:flex-col">
          <h1 className="text-4xl text-center ">BLOG APP NAME</h1>
          {/* Blog name nav  */}
          <nav className=" ">
            <a href="/" className="md:hidden">
              <i class="fa-solid fa-bars text-4xl"></i>
            </a>
            <div className="hidden md:flex justify-center gap-5 text-sm  mt-5 border-b-[1px] border-gray-300 p-5 w-full  ">
              <Link to="/user/home">
                <p className=" text-neutral-500 hover:text-black">Home</p>
              </Link>
              <select
                name=""
                id=""
                className=" text-neutral-500 bg-transparent hover:text-black "
              >
                <option value="Catagaries">Catagaries</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Food">Food</option>
                <option value="Adventure">Adventure</option>
                <option value="Travel">Travel</option>
                <option value="Business">Business</option>
              </select>
              <p className=" text-neutral-500 hover:text-black">Profile</p>
              <p className=" text-neutral-500 hover:text-black">Aboute</p>
              <p className=" text-neutral-500 hover:text-black">Contact</p>
            </div>
          </nav>
        </div>
      </div>

      <div className="md:flex mt-20 w-[80%] m-auto  justify-center gap-2">
        <div className="w-full md:w-[30%] md:border-r-[1px] ">
          <BloggerDetails
            profileImg="./src/assets/blog1.jpg"
            profileName={userName}
            userEmail={userEmail}
            isPrimary={true}
          />
          <button
            className="bg-zinc-200 px-5 py-2 textsm rounded-3xl flex m-auto my-5"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="w-[85%] m-auto md:w-[40%] md:m-0 md:px-10 ">
          <Button
            text="My Blogs"
            isPrimary={true}
            isFull={true}
            onClick={handleMyBlogsClick}
          />{" "}
          <br />
          <Button
            text="Saved Blogs"
            isPrimary={true}
            isFull={true}
            onClick={handleSavedBlogsClick}
          />{" "}
          <br />
          <Button
            text="Edit profile"
            isPrimary={true}
            isFull={true}
            onClick={handleEditProfileClick}
          />
        </div>
      </div>
      <div className="py-20">
         {myBlogs ? (
          <MyBlog/>
         ): savedBlogs ?(
          <SavedBlog />
         ):(
           ""
         ) 
         }
      </div>

        <UserProfile
          isVisible={editProfile}
          onClose={() => setEditProfile(false)}
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-xl text-center">Edit You'r profile....</h2>
            <div className="ml-2 text-sm flex flex-col gap-2">
              <label>Select photo:</label>
              <input type="file" />
            </div>
            <InputField
              type="text"
              placeHolder="Enter You'r new username"
              name="username"
              icon="user"
            />
            <InputField
              type="email"
              placeHolder="Enter You'r new email"
              name="email"
              icon="email"
            />
          </div>
        </UserProfile>
      

      <div className="fixed">
        <button
          className="fixed bottom-5 right-5 px-5 py-2 text-sm rounded-xl bg-black text-white"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add new Blog
        </button>
        <Modal
          isVisible={showmodal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          <div className="w-full m-auto ">
            <h1 className="text-center text-xl mb-5">Add New Blog</h1>
            <p className="text-sm">Enter blog headding</p>
            <InputField
              type="text"
              placeHolder="Add You'r Blog Headding"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title && (
              <p className="text-sm text-left text-red-700">
                {" "}
                {formik.errors.title}{" "}
              </p>
            )}
            <p className="text-sm">Enter Your paragraphs:</p>
            <textarea
              name="paragraph"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.paragraph}
              className="border w-[100%] p-2"
              cols="30"
              rows="10"
            ></textarea>
            {formik.touched.paragraph && formik.errors.paragraph && (
              <p className="text-sm text-left text-red-700">
                {" "}
                {formik.errors.paragraph}{" "}
              </p>
            )}
            <div className="ml-2 text-sm flex flex-col gap-2">
              <label>Select photo:</label>
              <div className="flex">
                <input
                  type="file"
                  name="='image"
                  onChange={(e) => {
                    formik.setFieldValue("image", e.currentTarget.files[0]);
                    const file = e.currentTarget.files[0];
                    setSelectedImage(URL.createObjectURL(file));
                  }}
                  onBlur={formik.handleBlur}
                />
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                )}
              </div>
              {formik.touched.image && formik.errors.image && (
                <p className="text-red-500">{formik.errors.image}</p>
              )}
            </div>
            <Button
              text="Update"
              isPrimary={true}
              onClick={formik.handleSubmit}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ProfilePage;
