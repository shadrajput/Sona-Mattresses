import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import Head from 'next/head'
import Link from 'next/link'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Subscribe from '@/components/Subscribe'
import { FiPhoneCall } from 'react-icons/fi'
import { CgMail } from 'react-icons/cg'
import { MdLocationPin } from 'react-icons/md'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const contactFormSchema = Yup.object({
  first_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value
      }
      return true
    })
    .min(2, 'First name must be atleast 2 characters long')
    .max(25, "First name shouldn't be more than 25 characters")
    .matches(/^[a-zA-Z ]+$/, 'Please enter only characters')
    .required('Please enter your first name'),

  last_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value
      }
      return true
    })
    .min(2, 'Last name must be atleast 2 characters long')
    .max(25, "Last name shouldn't be more than 25 characters")
    .matches(/^[a-zA-Z ]+$/, 'Please enter only characters')
    .required('Please enter your last name'),

  email: Yup.string()
    .email('Please enter valid email')
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value
      }
      return true
    })
    .required('Please enter your email'),

  message: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value
      }
      return true
    })
    .min(2, 'Message must be atleast 2 characters long')
    .max(25, "Message shouldn't be more than 25 characters")
    .required('Please enter your message'),
})

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  message: '',
}

export default function ContactUs() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const form = useRef()

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactFormSchema,
    async onSubmit(data) {
      try {
        setIsLoading(true)
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }).then((res) => {
          setIsLoading(false)
          if (res.status == 200) {
            resetForm()
            toast.success('Thanks for reaching us')
          } else {
            toast.error('Failed to send email')
          }
        })
      } catch (error) {
        toast.error(error.message)
        setIsLoading(false)
      }
    },
  })

  return (
    <>
      <Header />
      <section
        id="contact"
        aria-labelledby="testimonials-title"
        className="bg-slate-50 pb-10 pt-28"
      >
        <div className="flex w-full items-center justify-center ">
          <div className="max-w-3xl">
            <p className="text-center font-semibold uppercase text-[#b19777]">
              {' '}
              | Contact Us
            </p>
            <h2
              id="testimonials-title"
              className="text-center font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Connect with Us?
            </h2>
            <p className="mt-4 text-center text-lg tracking-tight text-slate-700">
              Our Mattress perfect for all sleepers, budget-friendly, and
              designed for uninterrupted, rejuvenating rest.
            </p>
          </div>
        </div>
        <div className="grid gap-10 px-10 py-10 sm:grid-cols-2 md:gap-20 md:px-20 md:py-20 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-start">
            <MdLocationPin className="text-6xl text-[#b19777]" />
            <h1 className="py-5 font-semibold">Location</h1>
            <p className="text-center font-light">
              Shade No.1 , Survey No.1303, Village-Undrel , Ta. Daskoroi,
              Ahmedabad - 382443 , Gujarat , India..
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <FiPhoneCall className="text-6xl text-[#b19777]" />
            <h1 className="py-5 font-semibold">Phones</h1>
            <p className="font-light">+91 8401527048</p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <CgMail className="text-6xl text-[#b19777]" />
            <h1 className="py-5 font-semibold">Email</h1>
            <p className="font-light">sonamattresses@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <MdLocationPin className="text-6xl text-[#b19777]" />
            <h1 className="py-5 font-semibold">Working hours</h1>
            <p className="font-light">Wednesday - Sunday</p>
            <p className="font-light">7:00 AM - 5:00 PM</p>
          </div>
        </div>
        <div className="mt-10 flex w-full items-center justify-center xl:pb-20 ">
          <div className="mt-6 w-full px-10 xl:w-1/3">
            <form
              action="#"
              method=""
              className="space-y-7"
              ref={form}
              onSubmit={handleSubmit}
            >
              <div
                className="flex w-full flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6
            "
              >
                <div className="flex w-full flex-col">
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
                  {errors.first_name && touched.first_name ? (
                    <small className="form-error mt-2 text-xs font-semibold text-red-600">
                      {errors.first_name}
                    </small>
                  ) : null}
                </div>
                <div className="flex w-full flex-col">
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
                  {errors.last_name && touched.last_name ? (
                    <small className="form-error mt-2 text-xs font-semibold text-red-600">
                      {errors.last_name}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col">
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
                {errors.email && touched.email ? (
                  <small className="form-error mt-2 text-xs font-semibold text-red-600">
                    {errors.email}
                  </small>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="w-full rounded-md border border-gray-200 bg-[#F9FAFB] px-4 py-2"
                />
                {errors.message && touched.message ? (
                  <small className="form-error mt-2 text-xs font-semibold text-red-600">
                    {errors.message}
                  </small>
                ) : null}
              </div>
              <div className="pt-1">
                <button
                  type="submit"
                  value="Send"
                  disabled={isLoading}
                  className={`${
                    isLoading ? 'opacity-60' : null
                  } btn3 z-50 mt-5 w-full px-3 py-3 text-sm font-semibold text-white`}
                >
                  {isLoading ? (
                    'Loading...'
                  ) : (
                    <>
                      Submit <span aria-hidden="true">&rarr;</span>
                    </>
                  )}
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
