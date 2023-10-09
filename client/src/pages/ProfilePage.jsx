import React, { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "../utils/validations/profileValidation";
import { BloggerDetails } from "../components/common/BloggerDetails";
import Button from "../components/common/Button";
import { UserProfile } from "../components/common/UserProfile";
import BlogCard from "../components/common/BlogCard";
import InputField from "../components/common/InputField";
import { Modal } from "../components/common/Modal";

const ProfilePage = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      paragraph: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("this is values", values);
    },
  });
  const [myBlogs, setMyBlogs] = useState(false);
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
              <p className=" text-neutral-500 hover:text-black"> Home</p>
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
            profileName="Faseeha jamal"
            userEmail="faseeha123@gmail.com"
            isPrimary={true}
          />
          <button className="bg-zinc-200 px-5 py-2 textsm rounded-3xl flex m-auto my-5">
            Logout
          </button>
        </div>
        <div className="w-[85%] m-auto md:w-[40%] md:m-0 md:px-10 ">
          <Button
            text="My Blogs"
            isPrimary={true}
            isFull={true}
            onClick={() => {
              setMyBlogs(true);
            }}
          />{" "}
          <br />
          <Button
            text="Saved Blogs"
            isPrimary={true}
            isFull={true}
            onClick={() => setSavedBlogs(true)}
          />{" "}
          <br />
          <Button
            text="Edit profile"
            isPrimary={true}
            isFull={true}
            onClick={() => setEditProfile(true)}
          />
        </div>
      </div>
      <div>
        <UserProfile isVisible={myBlogs} onClose={() => setMyBlogs(false)}>
          <div className="py-2 text-center">
            <h2 className="text-xl">My Blogs....</h2>
            <div className="md:flex gap-10">
              <BlogCard
                image="./src/assets/blog.jpg"
                profileImg="./src/assets/blog1.jpg"
                profileName="Faseeha Jamal vattoli"
                text="How to Find the Video Games of Yor Youth"
              />
              <BlogCard
                image="./src/assets/blog.jpg"
                profileImg="./src/assets/blog1.jpg"
                profileName="Faseeha Jamal vattoli"
                text="How to Find the Video Games of Yor Youth"
              />
            </div>
          </div>
        </UserProfile>

        <UserProfile
          isVisible={savedBlogs}
          onClose={() => setSavedBlogs(false)}
        >
          <div className="py-2 text-center">
            <h2 className="text-xl">Saved Blogs....</h2>
            <div className="md:flex gap-5">
              <BlogCard
                image="./src/assets/blog.jpg"
                profileImg="./src/assets/blog1.jpg"
                profileName="Faseeha Jamal vattoli"
                text="How to Find the Video Games of Yor Youth"
              />
              <BlogCard
                image="./src/assets/blog.jpg"
                profileImg="./src/assets/blog1.jpg"
                profileName="Faseeha Jamal vattoli"
                text="How to Find the Video Games of Yor Youth"
              />
            </div>
          </div>
        </UserProfile>

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
            />
            <InputField
              type="email"
              placeHolder="Enter You'r new email"
              name="email"
            />
          </div>
        </UserProfile>
      </div>

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
                {selectedImage &&(
                  <img src={selectedImage} alt="" className="w-[50px] h-[50px]" />
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
