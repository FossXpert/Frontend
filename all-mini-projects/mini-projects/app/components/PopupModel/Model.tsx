import { X,Download } from "lucide-react"


const borderr = 'border border-solid border-white'

function Model(){

    return (
        <div className={`flex flex-col justify-center items-center ${borderr}`}>
            <div className={`flex flex-col h-auto w-[auto] mt-10`}>
                <button className={`place-self-end mb-2`}><X size={25}/></button>
                <div className={`rounded-[10px] bg-indigo-500 px-20 py-10 flex flex-col gap-5 justify-center items-center`}>
                    <h1 className={`text-3xl font-extrabold ${borderr}`}>Download Free Ebook</h1>
                    <p className={`m-0 p-0 font-bold text-center max-w-[400px] ${borderr}`}>Want to learn how to crack web-development interviews</p>
                    <form className="flex flex-col gap-2">
                        <input className={`p-2 rounded-[5px]`} type='email' placeholder="Enter Email Id" required/>
                        <button className={`flex rounded-[5px] bg-black gap-2 items-center justify-center py-2 ${borderr}`}><Download size={15}/>Download Ebook</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Model