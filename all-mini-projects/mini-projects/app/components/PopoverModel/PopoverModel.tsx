import { useState } from "react";
import Model from "./Model";

const PopoverModel = () => {

    const [showModel,setShowModel] = useState(false);
    const [popup,setPopup] = useState(false);
    
    
    return (
        <>
        <div className="flex flex-col pt-5 items-center gap-4 h-[100vh] bg-[#14161b]">
            <h1 className="text-5xl font-bold text-white">Popover Model</h1>
            <button className={`m-2 w-[6rem] h-[2.5rem] bg-green-500 text-white rounded-[5px] hover:bg-violet-600`}
            onClick={()=>setShowModel(true)}>Hover Me</button>
            {
                showModel && <div> <Model showModal={showModel} setShowModal={setShowModel}/> </div>
            }
            {
                popup && <div> <Popup popup={popup} setPopup={setPopup}/> </div>
            }
        </div>
        </>
    )
}

export default PopoverModel;