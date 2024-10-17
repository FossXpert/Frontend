import React, { useState } from 'react'

const broderr = 'border border-solid border-black'


const StarRating = () => {

    const [hover,setHover] = useState(null)
   const arr = [1,2,3,4,5]
  return (

         <div className={`flex h-[auto] w-auto text-[30px] justify-center ${broderr}`}>
      {
        arr.map((value,index) => (
          <button key={index} className={`flex m-2 ${broderr}`}>
            <span className={`${hover ? 'text-yellow-500' : ''}`}>
              &#9733;
            </span>
          </button>
        ))
      }
    </div>
  )
}

export default StarRating