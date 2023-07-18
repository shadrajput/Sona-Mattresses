import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import Specifications from '@/components/Specifications'
import SonaMattress from '@/components/SonaMattress'
import Services from '@/components/Services'
import Mattressspecific from '@/components/Mattressspecific'
import Subscribe from '@/components/Subscribe'
import Testimonials from '@/components/Testimonials'
import GoToTop from '@/components/GoToTop'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sona Mattresses</title>
        <meta
          name="Sona Mattresses"
          content="Discover the ultimate sleep experience at Sona Mattresses - your destination for unparalleled comfort and quality. Our premium mattresses are meticulously crafted to ensure a rejuvenating night's rest, promoting optimal health and well-being. Explore our wide range of luxurious options, tailored to suit your unique sleep needs. Elevate your sleep with Sona Mattresses and wake up feeling refreshed, revitalized, and ready to conquer the day." />
      </Head>
      <Header />
      <main>
        <ToastContainer
          position="top-right"
          className="z-[999999]"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Hero />
        <Specifications />
        <SonaMattress />
        <Mattressspecific />
        <Services />
        <Testimonials />
        <Subscribe />
        <GoToTop />
      </main>
      <Footer />
    </>
  )
}
