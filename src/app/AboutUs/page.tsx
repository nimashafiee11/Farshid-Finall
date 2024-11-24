import React from 'react';
import '../../css/main.css';
import '../../css/main.min.css';
// import Image from 'next/image';
// import photto from '../../img/logo/photoLogo.jpg';
// import Loader from '@/totalCm/loader';
//import OurStory from '../../aboutCm/ourStory'
// import BigImg from '../../aboutCm/bigImg'
// import Team from '../../aboutCm/team'
import AboutUs from '../../components/aboutCm/aboutUs'
import HeaderBodyAu from '../../components/aboutCm/headerBodyAu'
import LndScapImg from '../../components/aboutCm/lndScapImg'
import Purpose from '../../components/aboutCm/purpose'
import Header from '@/components/totalCm/header';
import Footer from '@/components/totalCm/footer';
import BackTop from '@/components/totalCm/backTop';
import CallToAction from '@/components/servicesCm/callToAction';

function page() {
  return (
    <React.Fragment>

	{/* <Loader/> */}

     <Header/>

	<HeaderBodyAu/>

	<AboutUs/>

	<Purpose/>

 	<LndScapImg/>

	{/* <OurStory/> */}

    {/* <Team/> */}

	{/* <BigImg/> */}

	<CallToAction/>

	<Footer/>

	<BackTop/>

    </React.Fragment>
  )
}
export default page