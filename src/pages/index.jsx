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
import AllProduct from '@/components/AllProduct'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sona Mattresses</title>
        <meta
          name="Mattress"
          content="Best mattress manufacturer in Ahmedabad" />
      </Head>
      <Header />
      <main>
        <Hero />
        <AllProduct/>
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
