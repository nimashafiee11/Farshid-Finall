import React from 'react'
import '../../css/main.css'
import '../../css/main.min.css'
// import Image from 'next/image'
// import photto from '../../img/logo/photoLogo.jpg'
// import Loader from '@/totalCm/loader'
import BackTop from '@/components/totalCm/backTop'
import AdressCall from '../../components/callusCm/addres-call'
import ContactUs from '../../components/callusCm/contactUs'
import HeaderBodyCu  from '../../components/callusCm/headerBodyCu'
import Header from '@/components/totalCm/header'
import Footer from '@/components/totalCm/footer'

function page() {
  return (
    <React.Fragment>

    {/* <Loader/> */}

     <Header/>

	<HeaderBodyCu/>

	<AdressCall/>

    <ContactUs/>
  
    <Footer/>

	<BackTop/>

    </React.Fragment>
  )
}

export default page