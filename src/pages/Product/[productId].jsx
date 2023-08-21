/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import Head from 'next/head'

import Link from 'next/link'
import { Header } from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import { Footer } from '@/components/Footer'
import { useRouter } from 'next/router'
import Specifications from '@/components/Specifications'
import { product } from '../api/product'
import AllProduct from '@/components/AllProduct'

export default function ProductDetails() {
  const [selectsize, setselectsize] = React.useState('Regular')
  const router = useRouter()
  const { productId } = router.query

  const foundProduct = product.find((item) => item.id == productId)

  const HandleSize = (e) => {
    setselectsize(e.target.value)
  }

  if (!foundProduct) {
    return (
      <div className="flex h-screen flex-wrap items-start justify-center gap-14 py-2 px-8  lg:py-14 lg:px-32">
        <Header />
        <div className=" flex  h-full items-center  text-3xl">
          Page not found.....
        </div>
      </div>
    )
  }

  return (
    <div className=" ">
      <Head>
        <title>{foundProduct?.title}</title>
        <meta name="Sona Mattress" content={foundProduct?.summary} />
      </Head>
      <Header />
      <div className="flex space-x-4  py-24 px-2 lg:px-12">
        <div className=" px-6 lg:flex lg:space-x-8">
          <div className="relative lg:w-1/2">
            <img
              src={foundProduct.img}
              alt={foundProduct.title}
              layout="fill"
              objectFit="contain" // You can adjust this property as needed
              objectPosition="center center" // You can adjust this property as needed
            />
          </div>

          <div className="dede lg:w-1/2">
            <h1 className="text-2xl font-semibold text-black md:text-4xl">
              {foundProduct.title}
            </h1>
            <p className="w-full py-4 text-sm font-light text-slate-500">
              {foundProduct.summary}
            </p>
            <div className="ml-4 py-4">
              <ul className="list-disc space-y-1 text-[14px] text-slate-600 ">
                {/* {foundProduct?.specification?.map((s) => {
                  return (
                    <li className="" key={s}>
                      {s}
                    </li>
                  )
                })} */}
              </ul>
            </div>
            <div>
              {/* <div className="flex w-full flex-col items-start pt-4">
                <div className="flex flex-col ">
                  <label
                    htmlFor=""
                    className="text-[14px] font-semibold text-[#b19777]"
                  >
                    Category
                  </label>
                  <div className="mt-2 flex  flex-wrap items-center space-y-3 space-x-5 ">
                    <button
                      value="Regular"
                      onClick={HandleSize}
                      className={`${
                        selectsize == 'Regular'
                          ? 'border-[#b19777] bg-[#b19777]  font-semibold text-white'
                          : 'font-light'
                      } rounded-full border px-5 py-[5px] text-sm font-light duration-300 hover:border-[#b19777]`}
                    >
                      Regular
                    </button>
                    <button
                      value="Single"
                      onClick={HandleSize}
                      className={`${
                        selectsize == 'Single'
                          ? 'border-[#b19777] bg-[#b19777]  font-semibold text-white'
                          : 'font-light'
                      } rounded-full border px-5 py-[5px] text-sm font-light duration-300 hover:border-[#b19777]`}
                    >
                      Single
                    </button>
                    <button
                      value="Double"
                      onClick={HandleSize}
                      className={`${
                        selectsize == 'Double'
                          ? 'border-[#b19777] bg-[#b19777] font-semibold  text-white'
                          : 'font-light'
                      } rounded-full border px-5 py-[5px] text-sm font-light duration-300 hover:border-[#b19777]`}
                    >
                      Double
                    </button>
                    <button
                      value="King"
                      onClick={HandleSize}
                      className={`${
                        selectsize == 'King'
                          ? 'border-[#b19777] bg-[#b19777]  font-semibold text-white'
                          : 'font-light'
                      } rounded-full border px-5 py-[5px] text-sm font-light duration-300 hover:border-[#b19777]`}
                    >
                      King
                    </button>
                    <button
                      value="Queen"
                      onClick={HandleSize}
                      className={`${
                        selectsize == 'Queen'
                          ? 'border-[#b19777] bg-[#b19777] font-semibold  text-white'
                          : 'font-light'
                      } rounded-full border px-5 py-[5px] text-sm font-light duration-300 hover:border-[#b19777]`}
                    >
                      Queen
                    </button>
                  </div>
                </div>
                {selectsize == 'Regular' ? (
                  <div className="mt-4 flex flex-col">
                    <h1 className="text-[14px] font-semibold text-[#b19777]">
                      Inch{' '}
                    </h1>
                    <div className="flex flex-wrap items-start ">
                      <div className="rounded-md border px-2 py-[3px] text-sm">
                        72 x 72 x 10
                      </div>
                    </div>
                  </div>
                ) : selectsize == 'Single' ? (
                  <div className="mt-4 flex flex-col">
                    <div className="mt-1 flex flex-wrap items-start gap-3">
                      {SingleSizes.map((size, item) => {
                        return (
                          <div className="flex flex-col ">
                            <h1 className="mb-1 text-[14px] font-semibold text-[#b19777]">
                              {size.name}
                            </h1>
                            <div className="rounded-md border px-2 py-[3px] text-sm">
                              {size.size1}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ) : selectsize == 'Double' ? (
                  <div className="mt-4 flex flex-col">
                    <div className="mt-1 flex flex-wrap items-start gap-3">
                      {DoubleSizes.map((size, item) => {
                        return (
                          <div className="flex flex-col ">
                            <h1 className="mb-1 text-[14px] font-semibold text-[#b19777]">
                              {size.name}
                            </h1>
                            <div className="rounded-md border px-2 py-[3px] text-sm">
                              {size.size1}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ) : selectsize == 'King' ? (
                  <div className="mt-4 flex flex-col">
                    <div className="mt-1 flex flex-wrap items-start gap-3">
                      {KingSizes.map((size, item) => {
                        return (
                          <div className="flex flex-col ">
                            <h1 className="mb-1 text-[14px] font-semibold text-[#b19777]">
                              {size.name}
                            </h1>
                            <div className="rounded-md border px-2 py-[3px] text-sm">
                              {size.size1}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ) : selectsize == 'Queen' ? (
                  <div className="mt-4 flex flex-col">
                    <div className="mt-1 flex flex-wrap items-start gap-3">
                      {QueenSizes.map((size, item) => {
                        return (
                          <div className="flex flex-col space-y-2">
                            <h1 className="mb-1 text-[14px] font-semibold text-[#b19777]">
                              {size.name}
                            </h1>
                            <div className="rounded-md border px-2 py-[3px] text-sm">
                              {size.size1}
                            </div>
                            {size.size2 ? (
                              <div className="rounded-md border px-2 py-[3px] text-sm">
                                {size.size2}
                              </div>
                            ) : null}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ) : null}
              </div> */}

              {/* start  */}
              <div className="flex w-full flex-col items-start pt-4">
                <div className="flex flex-col ">
                  <label
                    htmlFor=""
                    className="text-[14px] font-semibold text-[#b19777]"
                  >
                    Category
                  </label>
                  <div className="mt-2 grid grid-cols-2    gap-5 xs:grid-cols-3 lg:grid-cols-4">
                    {Object.keys(foundProduct.size).map((category, index) => (
                      <button
                        key={index}
                        value={category}
                        onClick={HandleSize}
                        className={`${
                          selectsize === category
                            ? 'border-[#b19777] bg-[#b19777]  font-semibold text-white'
                            : 'font-light'
                        } rounded-full border px-5 py-[5px] text-sm font-light duration-300 hover:border-[#b19777]`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Display selected category sizes */}
                {selectsize && foundProduct.size[selectsize] && (
                  <div className="mt-4 flex flex-col">
                    <h1 className="text-[14px] font-semibold text-[#b19777]">
                      Size{' '}
                    </h1>
                    <div className="mt-3 grid grid-cols-1    gap-5 xs:grid-cols-2 lg:grid-cols-3">
                      {Object.entries(foundProduct.size[selectsize]).map(
                        ([key, value], index) => (
                          <div
                            className="overflow-hidden truncate rounded-md border px-2 py-[3px] text-sm"
                            key={index}
                          >
                            {key}: {value}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* end */}
              <div className="flex items-center space-x-2 py-7  ">
                <div className="">
                  <Link href="/Quotation">
                    <input
                      type="checkbox"
                      value="checked"
                      className="h-[13px] w-[13px] cursor-pointer rounded-sm text-xs focus:outline-none"
                    />
                  </Link>
                </div>
                <div>
                  <h1 className="mt-1 text-sm font-semibold uppercase text-[#b19777]">
                    Custom size
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-5 ">
              <div className="w-full">
                <Link href="/ContactUs">
                  <button className="btn3 group  w-full py-3 text-[12px] font-semibold text-white ">
                    Connect with Us
                  </button>
                </Link>
              </div>
              <div className="w-full">
                <Link href="/Quotation">
                  <button className="btn3 group  w-full py-3 text-[12px] font-semibold text-white ">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full  px-4 text-center">
          <div className="">
            <h1 className="text-center font-semibold">Description </h1>
            <div className=" flex items-center justify-center py-2">
              <div className="h-[2px] w-24 bg-[#b19777]"></div>
            </div>
          </div>
          <div className="w-full">
            <p className="  py-4 text-sm font-light">{foundProduct?.desc}</p>
          </div>
        </div>
        <Specifications />
        <div className="py-12">
          <h1 className="text-center font-display text-2xl  tracking-tight text-slate-900 sm:text-xl">
            Recommended for you...
          </h1>
          <AllProduct props={3} />
        </div>
        <Subscribe />
        <Footer />
      </div>
    </div>
  )
}
