import React, { useState } from 'react'

const broderr = 'border border-solid'


const StarRating = () => {

    const [hover,setHover] = useState(0);
    const [rating,setRating] = useState(0);

   const arr = [1,2,3,4,5]
  return (

         <div className={`flex h-[auto] w-auto text-[50px] justify-center ${broderr}`}>
      {
        arr.map((value,index) => (
          <button key={index} 
          className={`flex m-2 ${broderr}`}
          onClick={()=>setRating(value)}
          onMouseOver={() => setHover(value)}
          onMouseLeave={() => setHover(rating)}
          >
            {/* {rating} */}
            <span className={`${value <= ((rating && hover) || hover) ? 'text-yellow-500' : ''}`}>
              &#9733;
            </span>
          </button>
        ))
      }
    </div>
  )
}

export default StarRating