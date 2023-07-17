import { useState, useEffect } from 'react';
import Image from "next/image";
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
      id: 3,
      img: "/images/MAT_SLIDE_03.jpg",
      heading1: "Sona Mattresses",
      heading2: "Good Care Of You"
    },
    {
      id: 4,
      img: "/images/MAT_SLIDE_04.jpg",
      heading1: "Comfort that",
      heading2: "Brings Heppiness"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScroll = true
  let slideInterval;
  let intervalTime = 5000

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
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


  return (
    <>
      <div className="w-full h-full">
      {data.map((item, index) => (
        <div
          className={`${index === currentIndex ? 'active' : ''} slide transition-all duration-500 ease-in-out`}
          key={index}
        >
          {index === currentIndex && (
            <img src={item.img} alt="Image" className="w-full h-full relative" />
          )}
          {index === currentIndex && (
            <div className="absolute top-72 left-40 w-[700px]">
              <h1 className="text-[#b19777] font-bold text-[55px]">{item.heading1}</h1>
              <h1 className="text-black text-[55px] font-bold">{item.heading2}</h1>
              <p className="font-light pr-52 py-8 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odit harum, tenetur ullam est magnam fuga.
              </p>
              <button className="btn1 font-semibold text-[12px] hover:text-white z-50 group text-sm py-3">
                Shop Now
                <BsArrowRight className="text-black group-hover:text-white text-lg ml-3" />
              </button>
            </div>
          )}
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {data.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  index === currentIndex ? 'bg-[#B19777]' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
    </div>
    </>
  )
}
