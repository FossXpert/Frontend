import { X, Download } from "lucide-react"
import { FC, useRef } from "react"

type Props = {
    showModel: boolean,
    setShowModel: (showModel: boolean) => void
}

const borderr = ''

const Model: FC<Props> = ({ setShowModel }) => {

    const modelRef = useRef(null);
    console.log(modelRef.current);

    function modalClose(e: React.MouseEvent<HTMLDivElement>) {
        if (e.target === modelRef.current) {
            setShowModel(false); 
            console.log(e.target)
        }
    }

    return (
        <div ref={modelRef} onClick={(e) => modalClose(e)} className={`inset-0 fixed flex flex-col justify-center items-center ${borderr} bg-opacity-30 bg-black backdrop-blur-sm`}>
            <div className={`flex flex-col`}>
                <button onClick={() => setShowModel(false)} className={`place-self-end mb-2`}><X size={25} /></button>
                <div className={`rounded-[10px] bg-indigo-500 px-20 py-10 flex flex-col gap-5 justify-center items-center`}>
                    <h1 className={`text-3xl font-extrabold ${borderr}`}>Download Free Ebook</h1>
                    <p className={`m-0 p-0 font-bold text-center max-w-[400px] ${borderr}`}>Want to learn how to crack web-development interviews</p>
                    <form className="flex flex-col gap-2">
                        <input className={`p-2 rounded-[5px]`} type='email' placeholder="Enter Email Id" required />
                        <button className={`flex rounded-[5px] bg-black gap-2 items-center justify-center py-2 ${borderr}`}><Download size={15} />Download Ebook</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Model

// Then why blur effect is only working when we setting fixed and inset-0 otherwise it's not working

// Gemini
// Okay, let's understand why the blur effect is only working when you are using fixed and inset-0 together.

// Backdrop Blur and Positioning

// The backdrop-blur-sm utility class from Tailwind CSS that you're using applies a blur effect to the element behind the current element. For this to work effectively, a few key conditions are necessary:

// Positioning Context: The element needs to be positioned outside of the normal document flow to create a separate stacking context. This is usually achieved by setting the position property to fixed or absolute.

// Overlaying: The element should cover or overlap the content you intend to blur. inset-0 achieves this by positioning the element to fill its parent entirely.

// Why it Doesn't Work Without fixed and inset-0

// Without fixed: If the element has a static or relative position, it stays within the normal document flow. The blur effect might not be visible because the element is not positioned on a separate layer above the content to be blurred.

// Without inset-0: If the element doesn't cover the content you want to blur (because it's not positioned with inset-0), the blur will only be applied to the area directly behind the element, which may not be noticeable.

// In your example:

// fixed: Takes the element out of the normal flow and positions it relative to the viewport. This creates the necessary stacking context for the backdrop blur to be applied to the elements behind it.

// inset-0: Ensures the element covers the entire viewport, ensuring the blur effect is visible across the content behind it.

// In simpler terms, imagine a frosted glass pane:

// fixed is like mounting the frosted glass onto a window frame (separate from the wall).
// inset-0 is like making the frosted glass the exact size of the window, covering it completely.
// Without both, the frosted glass effect (blur) won't work as intended.

// I hope this clarifies why both fixed and inset-0 are essential for the backdrop blur to function as expected in your setup. Let me know if you have any other questions.




