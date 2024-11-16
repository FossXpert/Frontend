import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-[100vh]">
        <Link href={'/star-rating'}>Star Rating</Link>
        <Link href={'/popup-model'}>Popup Model</Link>
        <Link href={'/popover-model'}>Popover Model</Link>
      </div>
      <div>
      </div>
    </>
  );
}
