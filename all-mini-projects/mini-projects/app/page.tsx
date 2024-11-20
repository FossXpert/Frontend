import Link from "next/link";

export default function Home() {
  const arraysOfLinks = [{
    url : [
      'star-rating','popup-model','popover-model','accordion'
    ],
    title : [
      'Star Rating','Popup Model','Popover Model','Accordion'
    ]
  }]
  return (
    <>
      <div className="flex justify-center items-center font-bold text-xl h-[100vh]">
        {
          arraysOfLinks.map((value, index) => (
              
          ))
        }
      </div>
    </>
  );
}
