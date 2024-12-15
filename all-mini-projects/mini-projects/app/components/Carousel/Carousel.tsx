import React, { FC , useRef } from 'react'
import Card from '../Card/Card';

   
type Props = {
  image : string;
  heading:string;
  paragraph : string;
}
const border = 'border border-solid border-black'

const Carousel:FC<Props> = ({image,heading,paragraph}) => {

  const cardContainerRef = useRef<HTMLDivElement|null>(null);
  console.log(cardContainerRef.current)
 
  
  const btnPressPrev = () => {
      if(cardContainerRef.current){
        const width = cardContainerRef.current.clientWidth;
        console.log(width)
        cardContainerRef.current.scrollBy({left:-width , behavior:'smooth'});
      }
  }
  const btnPressNext = () => {
      if(cardContainerRef.current){
        const width = cardContainerRef.current.clientWidth;
        console.log(width)
        cardContainerRef.current.scrollBy({left:width , behavior:'smooth'});
      }
  }
 
   
  return (
    <div className='flex flex-col w-[100vw] justify-center items-center gap-5'>
      <h1 className='text-5xl font-bold'>Carousel</h1>
      <div className='flex w-[90%] items-center justify-center'>
      <button className={`${border} text-[20px] !border-[#dbd5d5] left-6 bg-[#fff] rounded-[50%] p-[10px] absolute translate-y-[-50%] cursor-pointer`} onClick={()=>btnPressPrev()}>
            &lt; 
      </button>
      <div ref={cardContainerRef} className='card-container px-2 py-2 w-4/5 flex gap-2 overflow-hidden justify-start  items-center h-full border border-solid border-black'>
          {
            [...Array(25)].map((value,index) => (
              <Card num={index+1} key={index} image={image} paragraph={paragraph} heading={heading}/>
            ))
          }
      </div>
      <button className={`${border} text-[20px] !border-[#dbd5d5] right-6 bg-[#fff] rounded-[50%] p-[10px] absolute translate-y-[-50%] cursor-pointer`} onClick={()=>btnPressNext()}>
          &gt;
      </button>
      </div>
     </div>
  )
}

export default Carousel;