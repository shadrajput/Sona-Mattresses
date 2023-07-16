import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Head from 'next/head'
import Link from 'next/link'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import Image from "next/image";
import myLogo from "../../public/images/FeesManagerLogo.png"
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Subscribe from '@/components/Subscribe';


import { FiPhoneCall } from "react-icons/fi"
import { CgMail } from "react-icons/cg"
import { MdLocationPin } from "react-icons/md"

export default function ContactUs() {

  const form = useRef();

  const Sendmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_w6skjso", "template_468riwt", form.current, "dYZGJ37pa39lKSSRf")
      .then(res => {
        console.log(res, "res")
        document.getElementById('first_name').value = ' '
        document.getElementById('last_name').value = ' '
        document.getElementById('email').value = ' '
        document.getElementById('message').value = ' '
      }).catch(err => {
        console.log("error", err)
      })
  }

  return (
    <>
      <Header />
      <section
        id="testimonials"
        aria-labelledby="testimonials-title"
        className="bg-slate-50 py-10">
        <div className="w-full flex justify-center items-center ">
          <div className='max-w-3xl'>
            <p className='uppercase font-semibold text-[#b19777] text-center'> | Contact Us</p>
            <h2
              id="testimonials-title"
              className="font-display text-3xl font-semibold tracking-tight text-center text-slate-900 sm:text-4xl"
            >
              Connect with Us?
            </h2>
            <p className="mt-4 text-lg tracking-tight text-center text-slate-700">
              Our software is so simple that people can’t help but fall in love
              with it. Simplicity is easy when you just skip tons of
              mission-critical features.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-20 px-20 py-20'>
          <div className='flex flex-col justify-start items-center'>
            <MdLocationPin className='text-[#b19777] text-6xl' />
            <h1 className='font-semibold py-5'>Location</h1>
            <p className='font-light text-center'>Shade No.1 , Survey No.1303, Village-Undrel , Ta. Daskoroi, Ahmedabad - 382443 , Gujarat , India..
            </p>
          </div>
          <div className='flex flex-col justify-start items-center'>
            <FiPhoneCall className='text-[#b19777] text-6xl' />
            <h1 className='font-semibold py-5'>Phones</h1>
            <p className='font-light'>+91 8401527048
            </p>
          </div>
          <div className='flex flex-col justify-start items-center'>
            <CgMail className='text-[#b19777] text-6xl' />
            <h1 className='font-semibold py-5'>Email</h1>
            <p className='font-light'>sonamattresses@gmail.com
            </p>
          </div>
          <div className='flex flex-col justify-start items-center'>
            <MdLocationPin className='text-[#b19777] text-6xl' />
            <h1 className='font-semibold py-5'>Working hours</h1>
            <p className='font-light'>Wednesday - Sunday
            </p>
            <p className='font-light'>7:00 AM - 5:00 PM
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center w-full pb-20 ">
          <div className="mt-6 w-1/3">
            <form action="#" method="" className="space-y-7" ref={form} onSubmit={Sendmail}>
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6 w-full
            ">
                <div className='w-full'>
                  <Input
                    label="First name"
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    required
                  />
                </div>
                <div className='w-full'>
                  <Input
                    label="Last name"
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>
              <Input
                label="Email address"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <Input
                label="Message"
                id="message"
                name="message"
                type="message"
                required
              />
              <div className="pt-1">
                <button
                  type="submit"
                  value="Send"
                  className="w-full bg-[#b19777] text-white py-3 duration-300 hover:bg-black hover:text-white"
                >
                  Submit <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  )
}
