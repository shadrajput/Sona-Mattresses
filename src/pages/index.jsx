import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
// import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { AboutUs } from '@/pages/AboutUs'
import Specifications from '@/components/Specifications'
import SonaMattress from '@/components/SonaMattress'
import Services from '@/components/Services'
import Mattressspecific from '@/components/Mattressspecific'
import Subscribe from '@/components/Subscribe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sona Mattresses</title>
        <meta
          name="Mattress"
          content="Fees Manager is the only tool you need to collect and manage student fees. It's easy to use, and it's Very Cheap! With Fees Manager, you can create a class , collect payments, track balances, and send reminders. You can also export your data to QuickBooks or Excel for easy accounting." />
      </Head>
    <Header />
      <main>
        <Hero />
        <Specifications/>
        <SonaMattress/>
        <Mattressspecific/>
        <Services/>
        <Subscribe/>
      </main>
      <Footer />
    </>
  )
}
