import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'

export default function ProductList() {

    const Product = [
        {
            id: "1",
            name: "Pocket Spring Mattress",
            img: "images/mat_01.jpg",
            desc: "A Pocket Spring Mattress is a type of bedding that features individual, fabric-wrapped springs, each encased in its own fabric pocket...",
        },
        {
            id: "2",
            name: "PU Foam Mattress",
            img: "images/pufoam.jpg",
            desc: "It offers excellent support and comfort by conforming to the body's shape, relieving pressure points, and promoting proper spinal alignment...",
        },
        {
            id: "3",
            name: "PU & Super Soft Foam Mattress",
            img: "images/pufoam.jpg",
            desc: "A mattress designed with an extra soft foam material to provide a plush and luxurious sleeping surface. It offers a cozy and comfortable feel...",
        },
        {
            id: "4",
            name: "Bonded Mattress",
            img: "images/mat_06.jpg",
            desc: "A Bonded Mattress is a type of mattress made by combining different layers of materials using an adhesive or bonding agent. These layers can include foam, cotton, or other fibers...",
        },
        {
            id: "5",
            name: "Bonded Latex Mattress",
            img: "images/mat_06.jpg",
            desc: "A Bonded Latex Mattress is a type of bedding that combines layers of latex foam using a bonding agent. Latex foam is a natural material derived from the sap of rubber trees...",
        },
        {
            id: "6",
            name: "HR Soft Memory Foam Mattress",
            img: "images/16866.jpg",
            desc: "An HR Soft Memory Foam Mattress is a type of bedding that features a combination of high-resilience (HR) foam and memory foam. HR foam provides sturdy support and maintains its shape..",
        },
    ]

    return (
        <>
            <div className='py-14 flex flex-wrap items-start justify-center gap-14 px-32'>
                {
                    Product.map((item, index) => {
                        console.log(item)
                        return (
                            <div
                                key={index}
                                className='flex flex-col w-[30%] py-10 px-10 hover:shadow-xl hover:-translate-y-5 duration-300 cursor-pointer'>
                                <div className=''>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='flex flex-col justify-center items-cnter pt-10'>
                                    <h1 className='text-lg font-semibold text-[#b19777] text-center pb-5'>{item.name}</h1>
                                    <p className='text-center text-sm font-light text-slate-700'>{item.desc}</p>
                                    <div className='w-full flex justify-center items-end pt-5'>
                                        <Link href={`/Product/ProductDetails`}>
                                            <button
                                                className='btn1 font-semibold text-[11px] hover:text-white border border-black z-10 group text-sm py-1 my-2 sm:py-2 xl:py-3 '>
                                                View More
                                                <BsArrowRight className='text-sm ml-2' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}
