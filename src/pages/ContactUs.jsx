import React, { useRef,useState } from 'react';
import emailjs from 'emailjs-com';
import Head from 'next/head'
import Link from 'next/link'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import Image from "next/image";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Subscribe from '@/components/Subscribe';
import { FiPhoneCall } from "react-icons/fi"
import { CgMail } from "react-icons/cg"
import { MdLocationPin } from "react-icons/md"
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import * as Yup from "yup";

const contactFormSchema = Yup.object({
    first_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(2, "First name must be atleast 2 characters long")
    .max(25, "First name shouldn't be more than 25 characters").matches(/^[a-zA-Z ]+$/, "Please enter only characters").required("Please enter your first name"),

    last_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(2, "Last name must be atleast 2 characters long")
    .max(25, "Last name shouldn't be more than 25 characters").matches(/^[a-zA-Z ]+$/, "Please enter only characters").required("Please enter your last name"),

    email: Yup.string().email("Please enter valid email")
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .required("Please enter your email"),

    
    message: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(2, "Message must be atleast 2 characters long")
    .max(25, "Message shouldn't be more than 25 characters")
    .required("Please enter your message"),
});

const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
};

export default function ContactUs() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const form = useRef();

  const { values, errors, handleBlur, touched, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: contactFormSchema,
        async onSubmit(data) {

          try {
            setIsLoading(true)
            fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }).then((res) => {
              setIsLoading(false)
              if(res.status == 200){
                resetForm()
                toast.success('Thanks for reaching us')
              }
              else{
                toast.error('Failed to send email')
              }
            })
            
          } catch (error) {
            toast.error(error.message)
            setIsLoading(false)
          }
        }
    })

  return (
    <>
      <Header />
      <section
        id="testimonials"
        aria-labelledby="testimonials-title"
        className="bg-slate-50 pb-10 pt-28">
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
        <div className='grid gap-10 px-10 py-10 sm:grid-cols-2 lg:grid-cols-4 md:gap-20 md:px-20 md:py-20'>
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
        <div className="mt-10 flex justify-center items-center w-full xl:pb-20 ">
          <div className="mt-6 w-full px-10 xl:w-1/3">
            <form action="#" method="" className="space-y-7" ref={form} onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6 w-full
            ">
                <div className='w-full flex flex-col'>
                  <Input
                    label="First name"
                    id="first_name"
                    name="first_name"
                    type="text"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="given-name"
                    required
                  />
                  {
                    errors.first_name && touched.first_name
                    ?
                      <small className='mt-2 form-error text-red-600 text-xs font-semibold'>{errors.first_name}</small>
                    :
                      null
                  }
                </div>
                <div className='w-full flex flex-col'>
                  <Input
                    label="Last name"
                    id="last_name"
                    name="last_name"
                    type="text"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="family-name"
                    required
                  />
                  {
                    errors.last_name && touched.last_name
                    ?
                      <small className='mt-2 form-error text-red-600 text-xs font-semibold'>{errors.last_name}</small>
                    :
                      null
                  }
                </div>
              </div>
              <div className='flex flex-col'>
                <Input
                  label="Email address"
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  required
                />
                {
                  errors.email && touched.email
                  ?
                    <small className='mt-2 form-error text-red-600 text-xs font-semibold'>{errors.email}</small>
                  :
                    null
                }
              </div>
              <div className='flex flex-col'>
                <label htmlFor="message" className="block font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-2 border border-gray-200 bg-[#F9FAFB] rounded-md"
                />
                {
                  errors.message && touched.message
                  ?
                    <small className='mt-2 form-error text-red-600 text-xs font-semibold'>{errors.message}</small>
                  :
                    null
                }
              </div>
              <div className="pt-1">
                <button
                  type="submit"
                  value="Send"
                  disabled={isLoading}
                  className={`${isLoading ? 'opacity-60': null} w-full bg-[#b19777] text-white py-3 duration-300 hover:bg-black hover:text-white`}
                >
                  {
                    isLoading 
                    ? 'Loading...' 
                    : <>Submit <span aria-hidden="true">&rarr;</span></> } 
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
