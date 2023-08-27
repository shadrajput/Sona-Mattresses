import { useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const quotationFormSchema = Yup.object({
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

  phone: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value
      }
      return true
    })
    .min(10, 'Please enter mobile no.')
    .max(10, 'Please enter valid mobile no.')
    .matches(/^[0-9]+$/, 'Please enter only numbers')
    .required('Please enter your phone number'),

  size: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value
      }
      return true
    })
    .required('Please enter size'),

  quantity: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value
      }
      return true
    })
    .matches(/^[0-9]+$/, 'Please enter only numbers')
    .required('Please enter quantity'),
})

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  size: '',
  quantity: '',
}

export default function Quotation() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectsize, setselectsize] = useState('Regular')

  const HandleSize = (e) => {
    setselectsize(e.target.value)
  }

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
    validationSchema: quotationFormSchema,
    async onSubmit(data) {
      Object.assign(data, { category: selectsize })
      try {
        setIsLoading(true)
        fetch('/api/quotation', {
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
        id="testimonials"
        aria-labelledby="testimonials-title"
        className="bg-slate-50 px-5 pb-10 pt-28 sm:px-10"
      >
        <div className="flex w-full items-center justify-center ">
          <div className="max-w-3xl">
            <p className="text-center font-semibold uppercase text-[#ae9775]">
              {' '}
              | Get Quotation
            </p>
            <h2
              id="testimonials-title"
              className="text-center font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Connect With Us?
            </h2>
            <p className="mt-4 text-center tracking-tight text-slate-700 md:text-lg">
              Elevate Your Sleep Experience with Our Premium Mattresses.
              Discover Comfort Like Never Before and Wake Up Refreshed Every
              Morning.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center pt-10 pb-20 ">
          <div className="mt-6 w-full sm:w-4/5 md:w-3/5 xl:w-2/4">
            <form
              action="#"
              method=""
              className="space-y-7"
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.first_name}
                    autoComplete="first_name"
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.last_name}
                    autoComplete="last_name"
                    required
                  />
                  {errors.last_name && touched.last_name ? (
                    <small className="form-error mt-2 text-xs font-semibold text-red-600">
                      {errors.last_name}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="flex w-full flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
                <div className="flex w-full flex-col">
                  <Input
                    label="Email address"
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    autoComplete="email"
                    required
                  />
                  {errors.email && touched.email ? (
                    <small className="form-error mt-2 text-xs font-semibold text-red-600">
                      {errors.email}
                    </small>
                  ) : null}
                </div>
                <div className="flex w-full flex-col">
                  <Input
                    label="Mobile number"
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    autoComplete="phone"
                    required
                  />
                  {errors.phone && touched.phone ? (
                    <small className="form-error mt-2 text-xs font-semibold text-red-600">
                      {errors.phone}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="flex w-full flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
                <div className="flex w-full flex-col">
                  <label htmlFor="" className="text-slate-800">
                    Category
                  </label>
                  <div className="flex w-full flex-col items-start justify-between">
                    <div className="flex w-full flex-col flex-wrap ">
                      <div className="grid grid-cols-2    gap-5 xs:grid-cols-3 lg:grid-cols-4">
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
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col justify-start space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
                <div className="w-full">
                  <div className="flex w-full flex-col">
                    <label
                      htmlFor=""
                      className="mb-4 text-[14px] text-slate-900"
                    >
                      Size (Inches)
                    </label>
                    <div className="flex flex-wrap items-start ">
                      <input
                        type="text"
                        name="size"
                        placeholder="e.g 72 x 72 x 10"
                        value={values.size}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full rounded-md border-slate-200 text-sm"
                      />
                    </div>
                    {errors.size && touched.size ? (
                      <small className="form-error mt-2 text-xs font-semibold text-red-600">
                        {errors.size}
                      </small>
                    ) : null}
                  </div>
                </div>
                <div className="flex w-5/6 flex-col">
                  <Input
                    label="Quantity"
                    id="quantity"
                    name="quantity"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.quantity}
                    autoComplete="quantity"
                    required
                  />
                  {errors.quantity && touched.quantity ? (
                    <small className="form-error mt-2 text-xs font-semibold text-red-600">
                      {errors.quantity}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="pt-1">
                <button
                  type="submit"
                  value="Send"
                  disabled={isLoading}
                  className={` ${
                    isLoading ? 'opacity-60' : ''
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
      <Footer />
    </>
  )
}
