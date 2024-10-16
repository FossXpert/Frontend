
export default function Home() {
  const arr = [1,2,3,4,5];

  return (
    <div className={`flex justify-center`}>
      {
        arr.map((value,index) => (
          <button key={index}>
            <span>
              &#9733;
            </span>
          </button>
        ))
      }
    </div>
  );
}
