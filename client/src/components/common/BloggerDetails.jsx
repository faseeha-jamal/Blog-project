import React from 'react'

export const BloggerDetails = ({profileImg, profileName,userEmail, isPrimary}) => {
  return (
    <div className={`${isPrimary ? "flex-col" : "flex gap-2"} text-center w-full mt-10`}>
          <div className='w-full'>
              <img
                src={profileImg}
                alt=""
                className={`${isPrimary ? "w-10 h-10 rounded-3xl m-auto": "w-6 h-6 rounded-3xl"}`}
              />
              <p className="text-sm m-2 text-neutral-500">{profileName}</p>
              <p className="text-sm m-2 text-neutral-500">{userEmail}</p>
          </div>
        </div>
  )
}
