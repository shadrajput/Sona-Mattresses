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
          name="Mattress"
          content="Best mattress manufacturer in Ahmedabad" />
      </Head>
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
      <Header />
      <main>
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
