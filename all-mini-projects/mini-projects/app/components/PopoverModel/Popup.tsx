import React, { FC } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';

type Props = {
  popup : boolean;
  setPopup : (popup:boolean) => void
}

const Popup:FC<Props> = () => {
  return (
    <div className='flex flex-col items-center gap-5 bg-white h-[50vh] w-auto'>
      <h1 className='text-5xl text-black font-bold'>Popup Model</h1>
      <button className='bg-green-500 font-500 w-24 h-10 rounded-[5px] hover:bg-violet-500 hover:text-white'> Click Here </button>
      <div><BsThreeDotsVertical className='hover:text-xl cursor-pointer'/></div>
    </div>
  )
}

export default Popup