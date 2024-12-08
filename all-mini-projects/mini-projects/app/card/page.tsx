import Card from '../components/Card/Card'

 
const page = () => {
    const image = "image-url";
    const heading  = "heding";
    const paragraph = 'paragraph';

  return (
    <div>
        <Card image={image} heading={heading} paragraph={paragraph}/>
    </div>
  )
}

export default page