import React from 'react'
import Header1 from './components/Header1'
import Header2 from './components/Header2'
import Header3 from './components/Header3'
import Image from 'next/image'
import Head from 'next/head'
import Header4 from './components/Header4'
import Footer from './components/Footer'

const Page = () => {
  return (
    <div>
      <Head>
        <title>Fusion: India's best online hotel booking site for sanatized today</title>
        <link rel='icon' href='/fusion-logo-.png'></link>
      </Head>
      <Header1/>
      <Header2/>
      <Header3/>
      <div className='mx-20'>
      <div className='my-14'>
        <Image 
          src={"/banner1.png"} 
          alt="banner1" 
          width={200} 
          height={200} 
          className='h-100 w-full'/>
      </div>
      <div className='mb-14'>
      <Image 
          src={"/banner2.png"} 
          alt="banner2" 
          width={200} 
          height={200} 
          className='h-25 w-full'/>
      </div>
      <Header4/>
      </div>
      <Footer/>
    </div>
  )
}

export default Page