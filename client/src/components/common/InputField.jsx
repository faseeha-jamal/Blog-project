import React from "react";
import { HiOutlineUser,HiOutlineKey,HiOutlineMail,HiOutlineHashtag } from "react-icons/hi";

function InputField({type,placeHolder,icon,name,onChange,value}) {
  return (
    <div className="border-[1px] border-gray-600 rounded-md flex justify-between m-2 p-1 text-sm">
      <input className="bg-transparent w-full p-1" 
      type={type}
       placeholder={placeHolder}
       name={name}
       onChange={onChange}
       value={value}
       />
       
      {icon == "user" ? <HiOutlineUser /> 
       : icon == "password" ? <HiOutlineKey />
       : icon == "email"? <HiOutlineMail />
       :<HiOutlineHashtag /> }

    </div>
  );
}

export default InputField;
