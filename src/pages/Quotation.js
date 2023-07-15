import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import { Input } from '@/components/Input'

export default function Quotation() {
  return (
    <>
      <Header />
      <section
        id="testimonials"
        aria-labelledby="testimonials-title"
        className="bg-slate-50 py-10">
        <div className="w-full flex justify-center items-center ">
          <div className='max-w-3xl'>
            <p className='uppercase font-semibold text-[#ae9775] text-center'> | Get Quotation</p>
            <h2
              id="testimonials-title"
              className="font-display text-3xl font-semibold tracking-tight text-center text-slate-900 sm:text-4xl"
            >
              Connect With Us?
            </h2>
            <p className="mt-4 text-lg tracking-tight text-center text-slate-700">
              Our software is so simple that people can’t help but fall in love
              with it. Simplicity is easy when you just skip tons of
              mission-critical features.
            </p>
          </div>
        </div>
        <div className="py-20 flex justify-center items-center w-full pb-20 ">
          <div className="mt-6 w-1/3">
            <form action="#" method="" className="space-y-7">
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
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6 w-full">
                <div className='w-full'>
                  <Input
                    label="Email address"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="w-full">
                  <Input
                    label="Mobile number"
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6 w-full">
                <div className='w-full'>
                  <Input
                    label="Size"
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="w-full">
                  <Input
                    label="Quantity"
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
              <div className="pt-1">
                <button
                  type="submit"
                  value="Send"
                  className="w-full bg-[#b19777] text-white py-3 hover:bg-black hover:text-white"
                >
                  Submit <span aria-hidden="true">&rarr;</span>
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

