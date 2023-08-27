import Image from 'next/image'
import image from '../../public/images/mattress-image.jpg'
import maticon1 from '../../public/Icons/maticon1.png'
import maticon2 from '../../public/Icons/maticon2.png'
import maticon3 from '../../public/Icons/maticon3.png'
import { motion } from 'framer-motion'

export default function SonaMattress() {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-5 md:items-start xl:px-36 2xl:py-20">
      <div className="grid md:grid-cols-2">
        <div className="order-2 md:order-1 md:mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#b19777] lg:text-4xl"
          >
            Why Sona Mattresses?
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="o text- px-1 text-xl font-bold lg:text-2xl"
          >
            We make for you . We care for you
          </motion.h1>
          <p className="py-5 text-sm font-light">
            We are all about your sleep satisfaction. Our mattresses offer
            unmatched comfort, personalized support, and top-quality materials.
            Experience better sleep with us – because you deserve it
          </p>
        </div>
        <div className="order-1 flex w-full items-center justify-center py-2 md:order-2 ">
          <div className="sm:w-96 xl:w-[400px] 2xl:w-full">
            <Image
              src={image}
              alt="Sona Mattresses"
              className="relative h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
