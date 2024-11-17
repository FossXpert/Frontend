import { useState } from "react";
import Model from "./Model";

const PopoverModel = () => {

    const [showModel,setShowModel] = useState(false);


    return (
        <>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Popover Model</h1>
            <button className={`m-2 w-[6rem] h-[2.5rem] bg-green-500 text-white rounded-[5px] hover:bg-violet-600`}
            onMouseEnter={()=>setShowModel(true)}
            onMouseLeave={()=>setShowModel(false)}>Hover Me</button>
            {
                showModel && <div> <Model/> </div>
            }
        </div>
        </>
    )
}

export default PopoverModel;