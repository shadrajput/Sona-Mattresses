import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Head from 'next/head'
import Link from 'next/link'
import { product } from '@/pages/api/product'

export default function AllProduct({ props }) {
  console.log(props)
  console.log('product', product)

  if (!product) {
    return (
      <div className="flex flex-wrap items-start justify-center gap-14 py-2 px-8  lg:py-14 lg:px-32">
        Product not found
      </div>
    )
  }
  return (
    <>
      <Head>
        <title> Mattess Buy Online </title>
        <meta
          name="Sona Mattress"
          content="Best mattress manufacturer in Ahmedabad"
        />
      </Head>
      <div className=" grid   grid-cols-1 gap-14  py-2 px-8  md:grid-cols-2 lg:grid-cols-3  lg:py-10   lg:px-32">
        {product?.map((item, index) => {
          if (props <= index) return
          return (
            <>
              <div
                key={index}
                className="  flex cursor-pointer flex-col px-2 py-4 duration-300 hover:-translate-y-5 hover:shadow-xl  md:px-10 lg:py-10   "
              >
                <div className="">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="items-cnter flex flex-col justify-center pt-10">
                  <h1 className="truncate overflow-ellipsis pb-5 text-center text-lg font-semibold text-[#b19777]">
                    {item.title}
                  </h1>
                  <p className="text-center  text-sm font-light text-slate-700">
                    <p>
                      {item.desc.length > 100
                        ? item.desc.slice(0, 100) + '...'
                        : item.desc}
                    </p>
                  </p>
                  <div className="flex w-full items-end justify-center pt-5">
                    <Link href={`/Product/${item.id}`}>
                      <button className="btn1 group z-10 my-2 border border-black py-1 text-[11px] text-sm font-semibold hover:text-white sm:py-2 xl:py-3 ">
                        View More
                        <BsArrowRight className="ml-2 text-sm" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
