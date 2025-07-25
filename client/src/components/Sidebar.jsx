import React from 'react'
import {useUser, useClerk} from '@clerk/clerk-react'
import { assets } from '../assets/assets';
import { House, Icon, SquarePen } from 'lucide-react';
const navItems = [
  {to:'/ai' , label : 'Dashboard' , Icon: House},
   {to:'/ai/write-article' , label : 'Write Article' , Icon: SquarePen},

]

const Sidebar = ({sidebar , setSidebar}) => {
  const {user} = useUser();
  const {signOut, openUserProfile} = useClerk()

  if (!user) return null; 
  return (
    <div className= {`w-60 bg-white border-r border-gray-200 flex flex-col justify-between
      items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full' }transition-all duration-300 ease-in-out`}>
        <div className='my-7 w-full'>
          <img src={user.imageUrl} alt='User avatar' className='w-14 rounded-full mx-auto'/>
          <h1 className='mt-1 text-center'>{user.fullName}</h1>
        </div>
      </div>
  )
}

export default Sidebar