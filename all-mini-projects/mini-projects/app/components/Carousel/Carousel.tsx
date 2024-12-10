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
        cardContainerRef.current.scrollLeft -= width; 

      }
  }
  const btnPressNext = () => {
      if(cardContainerRef.current){
        const width = cardContainerRef.current.clientWidth;
        console.log(width)
        cardContainerRef.current.scrollLeft += width; 
      }
  }
  
  return (
    <div className='flex flex-col w-full justify-center items-center gap-5'>
      <h1 className='text-5xl font-bold'>Carousel</h1>
      <div className='flex w-[100vw] justify-around items-center'>
          <button className={`${border} cursor-pointer`} onClick={()=>btnPressPrev()}>
            Prev
          </button>
          <button className={`${border} cursor-pointer`} onClick={()=>btnPressNext()}>
            Next
          </button>
      </div>
      <div ref={cardContainerRef} className='card-container px-2 py-2 flex gap-2 overflow-x-scroll scrollbar-hide justify-start  items-center h-full w-full border border-solid border-black'>
          {
            [...Array(25)].map((value,index) => (
              <Card num={index+1} key={index} image={image} paragraph={paragraph} heading={heading}/>
            ))
          }
      </div>
    </div>
  )
}

export default Carousel;