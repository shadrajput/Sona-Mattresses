import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-20"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className=" text-center">
          <h2 className="font-display text-lg tracking-tight text-white ">
            COOL SUMMER SAVINGS
          </h2>
          <p className="mt-4 text-5xl font-semibold  tracking-tight text-white">
            Don’t Miss Out On These Deals.
          </p>
          <ButtonLink href="/register" color="white" className="mt-10 py-3 px-10  hover:shadow-2xl ">
            Shop Now
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
