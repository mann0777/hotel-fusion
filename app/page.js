import React from 'react'
import Header1 from './components/Header1'
import Header2 from './components/Header2'
import Header3 from './components/Header3'
import Image from 'next/image'
import Head from 'next/head'
import Header4 from './components/Header4'
import Footer  from './components/Footer'

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Hotel Fusion</title>
        <link rel='icon' href='/fusion-logo-.png'></link>
      </Head>
      <Header1/>
      <Header2/>
      <Header3/>
      <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-20">
        <div className='my-6 sm:my-10 md:my-14'>
          <Image 
            src="/banner1.png" 
            alt="banner1" 
            width={1200} 
            height={400} 
            className='w-full h-auto object-cover'
            priority
          />
        </div>
        <div className='mb-6 sm:mb-10 md:mb-14'>
          <Image 
            src="/banner2.png" 
            alt="banner2" 
            width={1200} 
            height={200} 
            className='w-full h-auto object-cover'
          />
        </div>
        <Header4/>
      </main>
      <Footer/>
    </div>
  )
}

export default Page
