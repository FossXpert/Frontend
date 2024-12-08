import Image from 'next/image';
import React, { FC } from 'react'

type Props = {
    image : string;
    heading:string;
    paragraph : string;
    
}

const border = 'border border-solid border-black'

const Card:FC<Props> = ({image,heading,paragraph}) => {
  return (
        <div className={`card-container flex flex-col h-[350px] w-[250px] ${border}`}>
            <div className={`card-top h-[220px] w-[100%] ${border} overflow-hidden`}>
                <Image src={image} alt='Image' width={247} height={250}/>
            </div>
            <div className='card-bottom flex flex-col p-2'>
                <p className='text-2xl font-bold'>{heading}</p>
                <p className=''>{paragraph}</p>
            </div>
        </div>
  )
}

export default Card