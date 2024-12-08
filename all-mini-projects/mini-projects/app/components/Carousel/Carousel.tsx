import React, { FC } from 'react'
import Card from '../Card/Card';

type Props = {
  image : string;
  heading:string;
  paragraph : string;
}

const Carousel:FC<Props> = ({image,heading,paragraph}) => {
  
  const cardContainer = document.querySelector('.card-container');
  console.log("cardContainer",cardContainer)
  console.log(cardContainer?.clientWidth)
  return (
    <div className='flex flex-col w-full justify-center items-center gap-5'>
      <h1 className='text-5xl font-bold'>Carousel</h1>
      <div className='card-container flex gap-2 justify-start w-[auto] items-center h-[50vh] border border-solid border-black'>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
          <Card image={image} paragraph={paragraph} heading={heading}/>
      </div>
    </div>
  )
}

export default Carousel;