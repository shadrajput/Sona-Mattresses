import React from "react"
import { MdOutlineKeyboardArrowUp } from "react-icons/md";


const GoToTop = () => {
    const [isVisible, setisVisible] = React.useState(false)
    const gototop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const listentoscroll = () => {
        let heightToHidden = 750;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setisVisible(true)
        } else {
            setisVisible(false)
        }
    }


    React.useEffect(() => {
        window.addEventListener("scroll", listentoscroll)
    }, [])
    return (
        <div>

            {isVisible && (
                <div className='flex justify-end' onClick={gototop}>
                    <div className='flex flex-col justify-center items-center cursor-pointer hover:text-black hover:border-black duration-500 text-sm z-50 justify-center fixed bottom-5 mr-5 uppercase font-semibold border border-[#b19777] text-[#b19777] w-[40px] h-[40px]' >
                        <MdOutlineKeyboardArrowUp className="w-8 h-8"/>
                    </div>
                </div>
            )}
        </div>
    )
};



export default GoToTop