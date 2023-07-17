import { useState, useEffect } from 'react';
import Image from "next/image";
import image from "../../public/images/MAT_SLIDE_03.jpg"
import { BsArrowRight } from "react-icons/bs"

export function Hero() {
  const data = [
    {
      id: 1,
      img: "/images/MAT_SLIDE_01.jpg",
      heading1: "Your Comfort",
      heading2: "With Sona Mattresses"
    },
    {
      id: 2,
      img: "/images/MAT_SLIDE_02.jpg",
      heading1: "Perfect Dreams",
      heading2: "With Sona Mattresses"
    },
    {
      id: 1,
      img: "/images/MAT_SLIDE_03.jpg",
      heading1: "Sona Mattresses",
      heading2: "Good Care Of You"
    },
    {
      id: 1,
      img: "/images/MAT_SLIDE_04.jpg",
      heading1: "Comfort that",
      heading2: "Brings Heppiness"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const autoScroll = true
  let slideInterval;
  let intervalTime = 5000

  const nextSlide = () => {
    const isLastSlide = currentIndex === data?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setProgressBar(0)
    setCurrentIndex(newIndex);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval)
  }, [currentIndex])

  useEffect(() => {
    setInterval(() => { setProgressBar((value) => (value + 1) % 67) }, 125)
  }, [])

  const goToSlide = (slideIndex) => {
    setProgressBar(0)
    setCurrentIndex(slideIndex);
  };

  return (
    <>

      <div className='w-full h-full'>
        {
          data?.map((item, index) => {
            return (
              <div className={index === currentIndex ? 'slide active ' : 'slide '}
                key={index}>
                {index === currentIndex && (
                  <img src={item.img} alt="fess manager logo" className='w-full h-full relative' />
                )}
                {index == currentIndex && (
                  <div className='absolute top-32 left-3 xs:top-28 sm:top-40 sm:left-10 md:top-48 lg:top-60 lg:left-16 2xl:top-72 2xl:left-40 2xl:w-[800px]'>
                    <h1 className='text-[#b19777] font-bold xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[55px]'>{item.heading1}</h1>
                    <h1 className='text-black xl:text-[55px] xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold'>{item.heading2}</h1>
                    <p className='font-light 2xl:pr-0 2xl:py-8 text-black text-xs hidden sm:block sm:py-2 sm:mr-80 md:pr-20 lg:pr-60 lg:text-base xl:pr-80 xl:py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odit harum, tenetur ullam est magnam fuga.</p>
                    <button className='btn1 font-semibold text-[12px] hover:text-white border border-black z-50 group text-sm py-1 my-2 sm:py-2 xl:py-3 '>
                      Shop Now
                      <BsArrowRight className='text-black group-hover:text-white text-lg ml-3' />
                    </button>
                  </div>
                )}
              </div>
            )
          })
        }
      </div>

    </>
  )
}
