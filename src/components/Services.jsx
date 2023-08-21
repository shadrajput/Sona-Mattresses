/* eslint-disable @next/next/no-img-element */
import { AiFillSetting } from 'react-icons/ai'
import { SiAdguard } from 'react-icons/si'
import { AiOutlinePercentage } from 'react-icons/ai'
import { BsCreditCard } from 'react-icons/bs'
import { TbCertificate } from 'react-icons/tb'
import { BiMessageCheck } from 'react-icons/bi'
import sd from '@public/icons/paper-wrap.png'
export default function Services() {
  return (
    <div className="bg-white xl:px-32 xl:py-4">
      <div className="space-y-10 pb-10 xl:space-y-20">
        <div className="grid grid-rows-3 gap-10 px-10 sm:grid-cols-3 sm:grid-rows-1  ">
          <div className="group flex flex-col items-center justify-center">
            <div className="mb-2 translate-y-2 duration-300 group-hover:translate-y-0">
              <AiFillSetting className="relative text-4xl text-[#b19777]" />
            </div>
            <h1 className="pt-6 font-bold">Costomis size Mattress</h1>
            <p className="pt-3 text-center text-sm font-light">
              We are provied customize size mattress provide as per customer
              requirement.
            </p>
          </div>
          <div className="group flex flex-col items-center justify-center">
            <div className="mb-2 translate-y-2 duration-300 group-hover:translate-y-0">
              <SiAdguard className="text-4xl text-[#b19777]" />
            </div>
            <h1 className="pt-6 font-bold">7 Years Guarantee</h1>
            <p className="pt-3 text-center text-sm font-light">
              We are provide 7 year mattress guarantee for customer
              saticfaction.{' '}
            </p>
          </div>
          <div className="group flex flex-col items-center justify-center">
            <div className="mb-2 translate-y-2 duration-300 group-hover:translate-y-0">
              <AiOutlinePercentage className="text-4xl text-[#b19777]" />
            </div>
            <h1 className="pt-6 font-bold">Discount System</h1>
            <p className="pt-3 text-center text-sm font-light">
              There is also a very good discount offer for our customers
            </p>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-10 px-10 sm:grid-cols-3 sm:grid-rows-1 ">
          <div className="group flex flex-col items-center justify-center">
            <div className="mb-2 translate-y-2 duration-300 group-hover:translate-y-0">
              <BsCreditCard className="text-4xl text-[#b19777]" />
            </div>
            <h1 className="pt-6 font-bold">All Payments option accepted</h1>
            <p className="pt-3 text-center text-sm font-light">
              Customer can pay with all payment options here..
            </p>
          </div>
          <div className="group flex flex-col items-center justify-center">
            <div className="mb-2 translate-y-2 duration-300 group-hover:translate-y-0">
              <TbCertificate className="text-4xl text-[#b19777]" />
            </div>
            <h1 className="pt-6 font-bold">Certified Products</h1>
            <p className="pt-3 text-center text-sm font-light">
              Our all product is registered and certified..
            </p>
          </div>
          <div className="group flex flex-col items-center justify-center">
            <div className="mb-2 translate-y-2 duration-300 group-hover:translate-y-0">
              <img src={sd} alt="sd" className="w-10" />
            </div>
            <h1 className="pt-6 font-bold">Mattress Roll Packing</h1>
            <p className="pt-3 text-center text-sm font-light">
              We provide roll packing to the customer for ease of transportation
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
