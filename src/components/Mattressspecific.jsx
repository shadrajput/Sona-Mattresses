import Image from 'next/image'
import image from '../../public/images/matress.jpg'
import { BsArrowRight } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Mattressspecific() {
  return (
    <div className="relative h-full w-full">
      <Image src={image} alt="image" className="" />
      <div className="absolute top-5 left-7 right-24 py-10 text-center sm:right-52 md:right-60 md:top-10 md:text-left  lg:left-16 lg:top-24 xl:left-[10%] xl:w-[550px] 2xl:top-[30%]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" text-sm font-bold sm:text-2xl lg:pr-20 lg:text-3xl xl:pr-0"
        >
          Sleep Better, Feel Better
          <span className="text-[#b19777]"> Our Mattress Solves</span>,Sleep
          Troubles for All Ages
        </motion.p>
        <p className="hidden py-5  text-lg font-light sm:block sm:pr-10 md:mr-20 md:text-[14px]">
          Tired of tossing and turning at night? say goodbye to sleep problems
          and wake up refreshed and ready to conquer the day.
        </p>
        <div className="flex  justify-center md:justify-start">
          <Link href={`/Product/`}>
            <button className="btn2  group  text-[12px] font-semibold text-white hover:text-black ">
              Shop Now
              <BsArrowRight className="ml-3 text-sm text-white group-hover:text-black lg:text-lg" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
