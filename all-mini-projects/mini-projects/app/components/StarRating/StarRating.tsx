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
          onClick={()=>setRating(index+1)}
          onMouseOver={() => setHover(index+1)}
          onMouseLeave={() => setHover(rating)}
          >
            {/* {rating} */}
            <span className={`${ index+1 <= ((rating && hover) || hover) ? 'text-yellow-500' : '' }`}>
              &#9733;
              {rating}
              {hover}
              {index+1}
            </span>
          </button>
        ))
      }
    </div>
  )
}

export default StarRating