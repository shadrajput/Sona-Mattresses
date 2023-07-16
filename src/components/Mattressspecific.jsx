import Image from "next/image";
import image from "../../public/images/matress.jpg"
import { BsArrowRight } from "react-icons/bs"

export default function Mattressspecific() {
    return (
        <div className="h-full w-full relative">
            <Image src={image} alt="fess manager logo" className='' />
            <div className="absolute top-[30%] left-[10%] w-[550px]">
                <p className="text-3xl font-bold">Special mattress padding can hold up  <span className="text-[#b19777]"> to 20% moisture</span>,that providing comfort sleep also for children</p>
                <p className="py-5 font-light">
                    Mauris at odio eu felis maximus mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus in venenatis magna, sit amet ullamcorper nunc.
                </p>
                <button className='btn2 font-semibold text-[12px] text-white hover:text-black z-50 group '>
                Shop Now
                <BsArrowRight className='group-hover:text-black text-white text-lg ml-3' />
                </button>
            </div>
        </div>
    )
}

