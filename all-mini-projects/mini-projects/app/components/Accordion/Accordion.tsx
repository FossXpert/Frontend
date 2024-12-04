 import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa6';

const Accordion = () => {

  const faq = [
    {
      question : 'What is virtual DOM in React ?',
      answer : "The Virtual DOM acts as an intermediary. It's a JavaScript object that mirrors the structure of the real DOM"
    },
    {
      question : 'What is virtual DOM in React ?',
      answer : "The Virtual DOM acts as an intermediary. It's a JavaScript object that mirrors the structure of the real DOM"
    },
    {
      question : 'What is virtual DOM in React ?',
      answer : "The Virtual DOM acts as an intermediary. It's a JavaScript object that mirrors the structure of the real DOM"
    },
    {
      question : 'What is virtual DOM in React ?',
      answer : "The Virtual DOM acts as an intermediary. It's a JavaScript object that mirrors the structure of the real DOM"
    },
    {
      question : 'What is virtual DOM in React ?',
      answer : "The Virtual DOM acts as an intermediary. It's a JavaScript object that mirrors the structure of the real DOM"
    }
  ]
  const [isExpand,setIsExpand] = useState(Array(faq.length).fill(false));
  console.log(isExpand)

  const handleToggle = (index:any) => {
    const old = [...isExpand];
    old[index] = !old[index];
    setIsExpand(old);

  }
  

  return (
    <div className='flex flex-col items-center gap-5'>
        <h1 className='text-5xl font-bold '>React Interview Questions</h1>
        <h1 className='text-3xl font-bold text-red-500 cursor-pointer'>Go To Home</h1>
        <h1 className='text-4xl font-bold text-violet-500'>Accordion</h1>
        <div className={`flex flex-col p-4 gap-2 w-[50vh] h-auto border border-solid border-violet-500`}>
            {
              faq.map((value,index) => (
                <div key={index} className='flex flex-col'>
                  <div className='flex items-center gap-6' onClick={()=>handleToggle(index)}>
                      {isExpand[index] ? <FaMinus className='text-violet-500'/> : <FaPlus/>}
                      {value.question}
                  </div>
                  {
                    isExpand[index] && (
                      value.answer
                    )
                  }
                  
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Accordion