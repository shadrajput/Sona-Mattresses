import Image from 'next/image'
import image from '../../public/images/bedroom-interior.jpg'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email == '') return

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (emailRegex.test(email)) {
      try {
        setIsLoading(true)
        fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }).then((res) => {
          setIsLoading(false)
          if (res.status == 200) {
            setEmail('')
            toast.success('Thanks for subscribing')
          } else {
            toast.error('Failed to send email')
          }
        })
      } catch (error) {
        toast.error(error.message)
        setIsLoading(false)
      }
    } else {
      toast.error('Please enter valid email')
    }
  }

  return (
    <>
      <div className="relative">
        <div className="flex h-96 lg:w-full 2xl:h-[350px]">
          <Image
            src="/images/bedroom-interior.jpg"
            alt="image 2"
            className="w-1/2"
            layout="fill"
          />
        </div>
        <div className="absolute top-0 h-full w-full bg-black/70 "></div>
        <div className="absolute left-2 top-12 flex flex-col items-center justify-center sm:left-20 sm:top-20 md:left-[20%] lg:left-72 lg:top-20 xl:top-[12%] xl:left-[32%] ">
          <h1 className="text-2xl font-semibold text-[#b19777] sm:mb-5">
            Subscribe for Members
          </h1>
          <h1 className="text-center text-2xl font-semibold text-white xl:py-3">
            To Receive Latest News and Special Offers
          </h1>
          <form action="" className="">
            <div className="mt-5 flex w-full flex-col">
              <input
                type="text"
                placeholder="Your email..."
                className="w-full px-5 py-3 focus:outline-none md:w-80 md:py-2 lg:py-3 2xl:w-96 2xl:py-4"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                disabled={isLoading}
                onClick={handleSubscribe}
                className={`${
                  isLoading ? 'opacity-60' : ''
                } btn3 mt-5 px-3 py-3 text-sm font-semibold text-white `}
              >
                {isLoading ? 'Loading...' : 'Subscribe'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
