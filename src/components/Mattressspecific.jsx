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
                <button className="bg-black px-8 py-5 space-x-3 hover:bg-white group flex items-center mt-10">
                    <h1 className="text-white text-xs group-hover:text-black uppercase font-bold">Read More</h1>
                    <BsArrowRight className="text-white text-sm group-hover:text-black" />
                </button>
            </div>
        </div>
    )
}

