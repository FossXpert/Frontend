'use client'
import Card from '../components/Card/Card'

 
const page = () => {
    const image = "image-url";
    const heading  = "heding";
    const paragraph = 'paragraph';
    const num = 0

  return (
    <div>
        <Card num={num} image={image} heading={heading} paragraph={paragraph}/>
    </div>
  )
}

export default page