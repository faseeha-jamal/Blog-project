import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
 import { FaRegBookmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { axiosPrivate } from "../../app/config";
import { setSaveBlogs } from "../../redux/reducers/userSlice";



function BlogCard({image,profileImg,profileName,text,heading,blogId }) {
  const token = useSelector((state) => state.userReducer.tokens.accessToken);
  const axiosinstance = axiosPrivate(token);
  const dispatch = useDispatch();

  const handleSavedClick = (blogId) =>{
     console.log("hello saved blog",blogId);
      const fetchBlogs = async () => {
        try {
          const response = await axiosinstance.put(`/save-blog/${blogId}`,{
            headers: {
              "Content-type": "multipart/form-data",
            },
          });
          dispatch(setSaveBlogs(response.data.saveBlog))
        } catch (error) {
          console.log("Error fetching saveblogs", error);
        }
      };
      fetchBlogs();
  }
  return (
    <div className="w-[90%] py-3 my-5  md:w-[45%] lg:w-[45%]">
     <Card className="max-w-[24rem] overflow-hidden pb-2">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={image}
          alt="ui/ux review check"
          className="w-full h-[300px] object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray"> {heading} </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal text-sm"> {text} </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Tooltip content="Natali Craig">
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src={profileImg}
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
          <Typography className="font-normal"> {profileName} </Typography>
        </div>
        <button onClick={() => handleSavedClick(blogId)}>
          <FaRegBookmark />
        </button>
      </CardFooter>
    </Card>
    </div>
  );
}

export default BlogCard;
