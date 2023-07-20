import Image from "next/image";
import image from "../../public/images/matress.jpg"
import { BsArrowRight } from "react-icons/bs"
import { motion, AnimatePresence } from "framer-motion"


export default function Mattressspecific() {
    return (
        <div className="h-full w-full relative">
            <Image src={image} alt="fess manager logo" className='' />
            <div className="absolute top-5 2xl:top-[30%] xl:left-[10%] xl:w-[550px] left-7 right-24 sm:right-52 md:right-60 md:top-10 lg:left-16 lg:top-24">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5 }}
                    className=" text-sm sm:text-2xl lg:text-3xl font-bold lg:pr-20 xl:pr-0">Special mattress padding can hold up  <span className="text-[#b19777]"> to 20% moisture</span>,that providing comfort sleep also for children</motion.p>
                <p className="py-5 hidden font-light sm:block sm:text-xs md:text-[14px] sm:pr-10 md:mr-20">
                    Mauris at odio eu felis maximus mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus in venenatis magna, sit amet ullamcorper nunc.
                </p>
                <button className='btn2 font-semibold text-[12px] text-white hover:text-black z-10 group '>
                    Shop Now
                    <BsArrowRight className='group-hover:text-black text-white text-lg ml-3' />
                </button>
            </div>
        </div>
    )
}

