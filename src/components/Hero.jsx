import { useState, useEffect } from 'react';
import { BsArrowRight } from "react-icons/bs"
import { motion, AnimatePresence } from "framer-motion"


export function Hero() {
  const data = [
    {
      id: 1,
      img: '/images/MAT_SLIDE_01.jpg',
      heading1: 'Your Comfort',
      heading2: 'With Sona Mattresses',
    },
    {
      id: 2,
      img: '/images/MAT_SLIDE_02.jpg',
      heading1: 'Perfect Dreams',
      heading2: 'With Sona Mattresses',
    },
    {
      id: 3,
      img: '/images/MAT_SLIDE_03.jpg',
      heading1: 'Sona Mattresses',
      heading2: 'Good Care Of You',
    },
    {
      id: 4,
      img: '/images/MAT_SLIDE_04.jpg',
      heading1: 'Comfort that',
      heading2: 'Brings Heppiness',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const autoScroll = true
  let slideInterval
  let intervalTime = 5000

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % data.length)
  }

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }
  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentIndex])

  return (
    <>

      <div className='w-full h-full relative'>
        {
          data.map((item, index) => {
            return (
              <div className={index === currentIndex ? 'slide active ' : 'slide '}
                key={index}>
                {index === currentIndex && (
                  <img src={item.img} alt="image" className='w-full h-full relative object-cover' style={{minHeight: '250px'}} />
                )}
                {index == currentIndex && (
                  <div className='absolute top-32 left-3 xs:top-28 sm:top-40 sm:left-10 md:top-48 lg:top-60 lg:left-16 2xl:top-72 2xl:left-40 2xl:w-[800px]'>
                    <motion.h1
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 0 }}
                      transition={{ duration: .5 }}
                      className='text-[#b19777] font-bold xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[55px]'>{item.heading1}</motion.h1>
                    <motion.h1
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 0 }}
                      transition={{ duration: .5, delay: .5 }}
                      className='text-black xl:text-[55px] xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold pt-3'>{item.heading2}</motion.h1>
                    <motion.p
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 0 }}
                      transition={{ duration: .5, delay: .7 }}
                      className='font-light 2xl:pr-0 2xl:py-8 text-black text-xs hidden sm:block sm:py-2 sm:mr-80 md:pr-20 lg:pr-60 lg:text-base xl:pr-80 xl:py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odit harum, tenetur ullam est magnam fuga.</motion.p>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 0 }}
                      transition={{ duration: .5, delay: .9 }}
                      className='btn1 font-semibold text-[12px] hover:text-white border border-black z-10 group text-sm py-1 my-2 sm:py-2 xl:py-3 '>
                      Shop Now
                      <BsArrowRight className='text-black group-hover:text-white text-lg ml-3' />
                    </motion.button>
                  </div>
                )}
              </div>
            )
          }
        )}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {data.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 cursor-pointer rounded-full ${
                index === currentIndex ? 'bg-[#B19777]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  )
}
