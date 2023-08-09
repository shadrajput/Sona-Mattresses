import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'

export default function AllProduct() {
  const Product = [
    {
      id: '1',
      name: 'Pocket Spring Mattress',
      img: 'images/mat_01.jpg',
      desc: 'A Pocket Spring Mattress is a type of bedding that features individual, fabric-wrapped springs, each encased in its own fabric pocket...',
    },
    {
      id: '2',
      name: 'PU Foam Mattress',
      img: 'images/pufoam.jpg',
      desc: "It offers excellent support and comfort by conforming to the body's shape, relieving pressure points, and promoting proper spinal alignment...",
    },
    {
      id: '3',
      name: 'PU & Super Soft Foam Mattress',
      img: 'images/pufoam.jpg',
      desc: 'A mattress designed with an extra soft foam material to provide a plush and luxurious sleeping surface. It offers a cozy and comfortable feel...',
    },
    {
      id: '4',
      name: 'Bonded Mattress',
      img: 'images/mat_06.jpg',
      desc: 'A Bonded Mattress is a type of mattress made by combining different layers of materials using an adhesive or bonding agent. These layers can include foam, cotton, or other fibers...',
    },
    {
      id: '5',
      name: 'Bonded Latex Mattress',
      img: 'images/mat_06.jpg',
      desc: 'A Bonded Latex Mattress is a type of bedding that combines layers of latex foam using a bonding agent. Latex foam is a natural material derived from the sap of rubber trees...',
    },
    {
      id: '6',
      name: 'HR Soft Memory Foam Mattress',
      img: 'images/16866.jpg',
      desc: 'An HR Soft Memory Foam Mattress is a type of bedding that features a combination of high-resilience (HR) foam and memory foam. HR foam provides sturdy support and maintains its shape..',
    },
  ]

  return (
    <>
      <div className="flex flex-wrap items-start justify-center gap-14 py-14 px-32">
        {Product.map((item, index) => {
          console.log(item)
          return (
            <div
              key={index}
              className="flex w-[30%] cursor-pointer flex-col py-10 px-10 duration-300 hover:-translate-y-5 hover:shadow-xl"
            >
              <div className="">
                <img src={item.img} alt="" />
              </div>
              <div className="items-cnter flex flex-col justify-center pt-10">
                <h1 className="pb-5 text-center text-lg font-semibold text-[#b19777]">
                  {item.name}
                </h1>
                <p className="text-center text-sm font-light text-slate-700">
                  {item.desc}
                </p>
                <div className="flex w-full items-end justify-center pt-5">
                  <Link href={`/Product/ProductDetails`}>
                    <button className="btn1 group z-10 my-2 border border-black py-1 text-[11px] text-sm font-semibold hover:text-white sm:py-2 xl:py-3 ">
                      View More
                      <BsArrowRight className="ml-2 text-sm" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
