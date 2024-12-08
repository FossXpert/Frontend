import Link from "next/link";

export default function Home() {

  const arraysOfLinks = [
    {url : 'star-rating',text:'Star Rating'},
    {url : 'popup-model',text:'Popup Model'},
    {url : 'popover-model',text:'Popover Model'},
    {url : 'accordion',text:'Accordion'},
    {url : 'carousel',text:'Carousel'}
  ]
  return (
    <>
      <div className="flex flex-col justify-center items-center font-bold text-xl h-[100vh]">
        {
          arraysOfLinks.map((value, index) => (
            <Link className={`hover:text-violet-500 hover:font-extrabold`} href={value.url} key={index}>{value.text}</Link>
          ))
        }
      </div>
    </>
  );
}
