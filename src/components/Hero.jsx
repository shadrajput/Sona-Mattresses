import { Container } from '@/components/Container'
import Image from "next/image";
import image from "../../public/MAT_SLIDE_01.jpg"
import { BsArrowRight } from "react-icons/bs"

export function Hero() {
  return (
    <>

      <div className='w-full h-full'>
        <Image src={image} alt="fess manager logo" className='w-full h-full relative' />
        <div className='absolute top-72 left-44 w-[700px]'>
          <h1 className='text-[#ae9775] font-bold text-5xl'>Perfect Dreams</h1>
          <h1 className='text-black text-5xl font-bold'>with Sona Mattresses</h1>
          <p className='font-light pr-52 py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odit harum, tenetur ullam est magnam fuga.</p>
          <button className='flex items-center space-x-3 border px-7 py-4 border-black'>
            <h1 className='uppercase text-sm font-semibold'> Shop Now </h1>
            <BsArrowRight />
          </button>
        </div>
      </div>

    </>
  )
}
