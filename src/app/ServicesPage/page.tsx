import React from 'react'
// import Image from 'next/image'
// import photto from '../../img/logo/photoLogo.jpg'
// import Loader from '@/totalCm/loader'
import '../../css/main.css'
import '../../css/main.min.css'
import '../../css/style.css'
import BigImage from '../../components/servicesCm/bigImage'
import CallToAction from '../../components/servicesCm/callToAction'
import FAQ from '../../components/servicesCm/FAQ'
import HeaderBodySv from '../../components/servicesCm/headerBodySv'
import Service1 from '../../components/servicesCm/service1'
import Service2 from '../../components/servicesCm/service2'
import Service3 from '../../components/servicesCm/service3'
import WhyUs from '../../components/servicesCm/whyUs'
import Header from '@/components/totalCm/header'
import Footer from '@/components/totalCm/footer'
import BackTop from '@/components/totalCm/backTop'
import Testimonials from '@/components/homeCm/testimonials'

function page() {
  return (
    <React.Fragment>

    {/* <Loader/> */}

	<Header/>

	<HeaderBodySv/>

	<WhyUs/>

	<Service1/>

	<Service2/>

	<Service3/>

	<BigImage/>


   <Testimonials/>
    
	{/* <!-- Clients --> */}
   
    <FAQ/>

	<CallToAction/>


	 <Footer/>

	<BackTop/>

    </React.Fragment>
  )
}

export default page