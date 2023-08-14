import Image from 'next/image'
import image from '../../public/images/matress.jpg'
import { BsArrowRight } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'

export default function Mattressspecific() {
  return (
    <div className="relative h-full w-full">
      <Image src={image} alt="image" className="" />
      <div className="absolute top-5 left-7 right-24 sm:right-52 md:right-60 md:top-10 lg:left-16 lg:top-24 xl:left-[10%] xl:w-[550px] 2xl:top-[30%]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" text-sm font-bold sm:text-2xl lg:pr-20 lg:text-3xl xl:pr-0"
        >
          Special mattress padding can hold up{' '}
          <span className="text-[#b19777]"> to 20% moisture</span>,that
          providing comfort sleep also for children
        </motion.p>
        <p className="hidden py-5 font-light sm:block sm:pr-10 sm:text-xs md:mr-20 md:text-[14px]">
          Mauris at odio eu felis maximus mattis. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Vivamus in venenatis magna, sit amet
          ullamcorper nunc.
        </p>
        <button className="btn2 group z-10 text-[12px] font-semibold text-white hover:text-black ">
          Shop Now
          <BsArrowRight className="ml-3 text-sm text-white group-hover:text-black lg:text-lg" />
        </button>
      </div>
    </div>
  )
}
