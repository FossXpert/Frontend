import React, { FC , useRef } from 'react'
import Card from '../Card/Card';
import Image from 'next/image';

type Props = {
  image : string;
  heading:string;
  paragraph : string;
}
const border = 'border border-solid border-black'

const Carousel:FC<Props> = ({image,heading,paragraph}) => {

  const cardContainerRef = useRef<HTMLDivElement|null>(null);
  console.log(cardContainerRef.current)

  const images = ["https://blog-card-gfe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspacejoy.a67bd4e2.jpg&w=384&q=75",
  "https://blog-card-gfe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspacejoy.a67bd4e2.jpg&w=384&q=75",
  "https://blog-card-gfe.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspacejoy.a67bd4e2.jpg&w=384&q=75" 
  ]
  
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

  const btnPressPrev1 = () => {
    if(cardContainerRef.current){
      const width = cardContainerRef.current.clientWidth;
      console.log(width)
      cardContainerRef.current.scrollBy({left:-width , behavior:'smooth'});
    }
  }
  const btnPressNext1 = () => {
    if(cardContainerRef.current){
      const width = cardContainerRef.current.clientWidth;
      console.log(width)
      cardContainerRef.current.scrollBy({left:width , behavior:'smooth'});
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
      <div ref={cardContainerRef} className='card-container px-2 py-2 flex gap-2 overflow-hidden justify-start  items-center h-full w-full border border-solid border-black'>
          {
            [...Array(25)].map((value,index) => (
              <Card num={index+1} key={index} image={image} paragraph={paragraph} heading={heading}/>
            ))
          }
      </div>

      <h1 className='text-4xl font-bold underline'>Image-Carousel</h1>

      <div className={`button-container flex px-2 justify-between items-center w-[full] h-auto ${border}`}>
          <button className={`${border} cursor-pointer`} onClick={()=>btnPressPrev1()}>
            Prev
          </button>
          <div className={`flex w-full h-[300px] overflow-hidden`}>
            {
              images.map((value,index)=>(
                <Image className='' key={index} src={value} alt='' width={1280} height={720}/>
              ))
            }
          </div>
          <button className={`${border} cursor-pointer`} onClick={()=>btnPressNext1()}>
            Next
          </button>
      </div>
    </div>
  )
}

export default Carousel;