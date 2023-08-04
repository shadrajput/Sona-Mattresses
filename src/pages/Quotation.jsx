import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from '@/components/Input'
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import * as Yup from "yup";

const quotationFormSchema = Yup.object({
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

  phone: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .min(10, "Please enter mobile no.").max(10, "Please enter valid mobile no.").matches(/^[0-9]+$/, "Please enter only numbers").required("Please enter your phone number"),

  size: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required("Please enter size"),

  quantity: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .matches(/^[0-9]+$/, "Please enter only numbers")
    .required("Please enter quantity"),
});

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  size: "",
  quantity: "",
};

export default function Quotation() {
  const [isLoading, setIsLoading] = useState(false)

  const { values, errors, handleBlur, touched, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: initialValues,
    validationSchema: quotationFormSchema,
    async onSubmit(data) {
      console.log(data)
      try {
        setIsLoading(true)
        fetch('/api/quotation', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          setIsLoading(false)
          if (res.status == 200) {
            resetForm();
            toast.success('Thanks for reaching us')
          }
          else {
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
        className="bg-slate-50 pb-10 pt-28 px-5 sm:px-10">
        <div className="w-full flex justify-center items-center ">
          <div className='max-w-3xl'>
            <p className='uppercase font-semibold text-[#ae9775] text-center'> | Get Quotation</p>
            <h2
              id="testimonials-title"
              className="font-display text-3xl font-semibold tracking-tight text-center text-slate-900 sm:text-4xl"
            >
              Connect With Us?
            </h2>
            <p className="mt-4 md:text-lg tracking-tight text-center text-slate-700">
              Our software is so simple that people can’t help but fall in love
              with it. Simplicity is easy when you just skip tons of
              mission-critical features.
            </p>
          </div>
        </div>
        <div className="pt-10 flex justify-center items-center w-full pb-20 ">
          <div className="mt-6 w-full sm:w-4/5 md:w-3/5 xl:w-2/4">
            <form action="#" method="" className="space-y-7" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6 w-full
            ">
                <div className='w-full flex flex-col'>
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.last_name}
                    autoComplete="last_name"
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
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6 w-full">
                <div className='w-full flex flex-col'>
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
                  {
                    errors.email && touched.email
                      ?
                      <small className='mt-2 form-error text-red-600 text-xs font-semibold'>{errors.email}</small>
                      :
                      null
                  }
                </div>
                <div className="w-full flex flex-col">
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
                  {
                    errors.phone && touched.phone
                      ?
                      <small className='mt-2 form-error text-red-600 text-xs font-semibold'>{errors.phone}</small>
                      :
                      null
                  }
                </div>
              </div>
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6 w-full">
                <div className='w-full flex flex-col'>
                  <label htmlFor="" className=" text-slate-800">Size</label>
                  <select name="" id="" className="rounded-md border-slate-200 mt-3 text-sm text-slate-500">
                    <option value="">Select Size</option>
                    <option value="">Single</option>
                    <option value="">Double</option>
                    <option value="">King</option>
                    <option value="">Queen</option>
                    <option value="">Regular</option>
                  </select>
                  {
                    errors.size && touched.size
                      ?
                      <small className='mt-2 form-error text-red-600 text-xs font-semibold'>{errors.size}</small>
                      :
                      null
                  }
                </div>
                <div className="w-full flex flex-col">
                  <label htmlFor="" className="text-slate-800">Dimention <span className="text-xs font-semibold text-slate-500">( In Inch )</span></label>
                  <div className="w-full flex flex-wrap justify-start gap-3 items-center mt-3">
                   <div className=" border rounded-md px-2 py-[4px] cursor-pointer hover:border-[#ae9775] hover:shadow-md ">
                      72 x 48 x 5
                    </div>
                    <div className=" border rounded-md px-2 py-[4px] cursor-pointer hover:border-[#ae9775] hover:shadow-md ">
                      72 x 48 x 5
                    </div>
                    <div className=" border rounded-md px-2 py-[4px] cursor-pointer hover:border-[#ae9775] hover:shadow-md ">
                      72 x 48 x 5
                    </div>
                    <div className=" border rounded-md px-2 py-[4px] cursor-pointer hover:border-[#ae9775] hover:shadow-md ">
                      72 x 48 x 5
                    </div>
                    <div className=" border rounded-md px-2 py-[4px] cursor-pointer hover:border-[#ae9775] hover:shadow-md ">
                      72 x 48 x 5
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col">
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
                {
                  errors.quantity && touched.quantity
                    ?
                    <small className='mt-2 form-error text-red-600 text-xs font-semibold'>{errors.quantity}</small>
                    :
                    null
                }
              </div>
              <div className="pt-1">
                <button
                  type="submit"
                  value="Send"
                  disabled={isLoading}
                  className={` ${isLoading ? 'opacity-60' : ''} btn3 px-3 py-3 mt-5 text-sm text-white font-semibold z-50 w-full`}
                >
                  {
                    isLoading
                      ?
                      'Loading...'
                      :
                      <>Submit <span aria-hidden="true">&rarr;</span></>
                  }
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

