import React from 'react';
import Head from 'next/head';
import '../../css/main.css';
import '../../css/main.min.css';
import AboutUs from '../../components/aboutCm/aboutUs';
import HeaderBodyAu from '../../components/aboutCm/headerBodyAu';
import LndScapImg from '../../components/aboutCm/lndScapImg';
import Purpose from '../../components/aboutCm/purpose';
import Header from '@/components/totalCm/header';
import Footer from '@/components/totalCm/footer';
import BackTop from '@/components/totalCm/backTop';
import CallToAction from '@/components/servicesCm/callToAction';

function page() {
  return (
    <React.Fragment>
      <Head>
        <title>Über uns - Fero Service | feroservice.info</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta 
          name="description" 
          content="Erfahren Sie mehr über Fero Service – Ihre zuverlässigen Partner für Büro-, Grund- und Haushaltsreinigung. Mit Engagement und Professionalität sorgen wir für makellose Sauberkeit. Besuchen Sie unsere Über-uns-Seite!" 
        />
        <meta 
          name="keywords" 
          content="Über uns, Fero Service, feroservice.info, Reinigungsteam, professionelle Reinigung, Büroreinigung, Grundreinigung, Haushaltsreinigung, unser Ziel, unsere Werte" 
        />
        <meta name="author" content="Fero Service" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Über uns - Fero Service" />
        <meta 
          property="og:description" 
          content="Lernen Sie Fero Service kennen – Ihre Experten für Büro-, Grund- und Haushaltsreinigung. Unsere Mission ist es, Ihnen den besten Reinigungsservice zu bieten." 
        />
        <meta property="og:url" content="https://feroservice.info/about-us" />
        <meta property="og:type" content="website" />
        {/* <meta 
          property="og:image" 
          content="https://feroservice.info/path/to/about-us-image.jpg" 
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Über uns - Fero Service" />
        <meta 
          name="twitter:description" 
          content="Erfahren Sie mehr über unser engagiertes Team und unseren professionellen Reinigungsservice auf unserer Über-uns-Seite." 
        />
        {/* <meta 
          name="twitter:image" 
          content="https://feroservice.info/path/to/about-us-image.jpg" 
        /> */}
        <meta name="theme-color" content="#0084ff" />
        <link rel="canonical" href="https://feroservice.info/about-us" />
      </Head>

      {/* Components */}
      <Header />
      <HeaderBodyAu />
      <AboutUs />
      <Purpose />
      <LndScapImg />
      {/* <OurStory /> */}
      {/* <Team /> */}
      {/* <BigImg /> */}
      <CallToAction />
      <Footer />
      <BackTop />
    </React.Fragment>
  );
}

export default page;
