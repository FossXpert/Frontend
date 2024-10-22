import React, { useState } from 'react'
import Model from './Model';

const borderr = 'border border-solid border-black'


const PopupModel = () => {

  const [showModel,setShowModel] = useState(false);

  const handleOnCLick = () => {
    setShowModel(!showModel);
  }

  return (
    <>
      <div className='flex flex-col items-center h-[100vh] text-white bg-[#14161b]'>
        <h1 className={`text-5xl font-bold mt-4`}>Popup Model</h1>
        <button onClick={()=>handleOnCLick()} className={`mt-4 p-2 bg-green-500 text-white rounded-[5px] hover:bg-violet-600`}>Click Here</button>

        { 
          showModel && 
          <Model showModel={showModel} setShowModel={setShowModel}/> 
        }
      </div>
    </>
  )
}

export default PopupModel