import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import SonaMattress from '@/components/SonaMattress'
import Services from '@/components/Services'
import Mattressspecific from '@/components/Mattressspecific'
import Subscribe from '@/components/Subscribe'
import GoToTop from '@/components/GoToTop'
import AllProduct from '@/components/AllProduct'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sona Mattresses</title>
        <meta
          name="Sona Mattress"
          content="Best mattress manufacturer in Ahmedabad"
        />
      </Head>
      <Header />
      <main>
        <Hero />

        <div>
          <h1 className="pt-8 text-center text-xl font-bold opacity-50 lg:text-3xl">
            {' '}
            We Provide Diffrent Type of Mattress{' '}
          </h1>
          <AllProduct props={3} />
        </div>
        <SonaMattress />
        <Services />
        {/* <Specifications /> */}
        <Mattressspecific />
        {/* <Testimonials /> */}
        <Subscribe />
        <GoToTop />
      </main>
      <Footer />
    </>
  )
}
