import { X } from 'lucide-react'
import React, { FC, useRef } from 'react'

// const borderr = ''

type Props = {
  showModal : boolean;
  setShowModal : (showModal:boolean) => void
}
 
const Model:FC<Props> = ({setShowModal}) => {

  const hideModal = useRef(null);

  const hideModall = (e:React.MouseEvent<HTMLDivElement>) => {
    if(e.target === hideModal.current){
      setShowModal(false)
    }
  }

  return (
    <div ref={hideModal} onClick={(e)=>hideModall(e)} className={`inset-0 fixed flex flex-col justify-center items-center bg-opacity-30 bg-blac backdrop-blur-sm`}>
        <div className={`flex flex-col`}>
          <button className='self-end text-white border border-solid border-black'><X size={25}/></button>
          <div className={` py-5 rounded-[5px] flex flex-col bg-violet-500 justify-center items-center`}> 
            <h1 className={`text-5xl font-bold`}>Please click here</h1>
            <p className={`m-2 p-2 text-[20px] text-center`}>Want to learn how to crack web-development interviews</p>
            <form className='flex flex-col gap-4 items-center'>
              <input type='email' placeholder='Please enter email' className={`p-2 rounded-md bg-gray-200`}></input>
              <button className='bg-green-500 p-2 w-[100px] rounded-[5px] hover:bg-black hover:text-white'>Click Here</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Model