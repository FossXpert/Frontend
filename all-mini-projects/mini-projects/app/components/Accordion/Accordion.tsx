import React from 'react';
import { FaPlus } from 'react-icons/fa';

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


  return (
    <div className='flex flex-col items-center gap-5'>
        <h1 className='text-5xl font-bold '>React Interview Questions</h1>
        <div className={`w-[50vh] h-auto border border-solid border-black`}>
            {
              faq.map((value,index) => (
                  
              ))
            }
        </div>
    </div>
  )
}

export default Accordion