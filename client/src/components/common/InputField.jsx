import React from "react";

function InputField({type,placeHolder,icon}) {
  return (
    <div className="border-[1px] border-gray-600 rounded-md flex justify-between m-2 p-2 text-sm">
      <input className="bg-transparent" 
      type={type}
       placeholder={placeHolder}/>
      <i class="fa-regular fa-user"></i>
    </div>
  );
}

export default InputField;
