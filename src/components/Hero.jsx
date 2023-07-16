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
                  <div className='absolute top-72 left-40 w-[700px]'>
                    <h1 className='text-[#b19777] font-bold text-[55px]'>{item.heading1}</h1>
                    <h1 className='text-black text-[55px] font-bold'>{item.heading2}</h1>
                    <p className='font-light pr-52 py-8 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odit harum, tenetur ullam est magnam fuga.</p>
                    <button className='btn1 font-semibold text-[12px] hover:text-white z-50 group text-sm py-3 '>
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
