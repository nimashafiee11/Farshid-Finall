import React from 'react';
import Head from 'next/head';
import '../../css/main.css';
import '../../css/main.min.css';
import '../../css/style.css';
import BigImage from '../../components/servicesCm/bigImage';
import CallToAction from '../../components/servicesCm/callToAction';
import FAQ from '../../components/servicesCm/FAQ';
import HeaderBodySv from '../../components/servicesCm/headerBodySv';
import Service1 from '../../components/servicesCm/service1';
import Service2 from '../../components/servicesCm/service2';
import Service3 from '../../components/servicesCm/service3';
import WhyUs from '../../components/servicesCm/whyUs';
import Header from '@/components/totalCm/header';
import Footer from '@/components/totalCm/footer';
import BackTop from '@/components/totalCm/backTop';
import Testimonials from '@/components/homeCm/testimonials';

function page() {
  return (
    <React.Fragment>
      <Head>
        <title>Unsere Dienstleistungen - Fero Service | feroservice.info</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Entdecken Sie unsere umfassenden Reinigungsdienste: Büroreinigung, Grundreinigung und Haushaltsreinigung. Fero Service steht für Qualität und Zuverlässigkeit!"
        />
        <meta
          name="keywords"
          content="Fero Service, Dienstleistungen, Büroreinigung, Grundreinigung, Haushaltsreinigung, feroservice.info, Reinigungsservice, professionelle Reinigung"
        />
        <meta name="author" content="Fero Service" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Unsere Dienstleistungen - Fero Service"
        />
        <meta
          property="og:description"
          content="Professionelle Reinigungsdienste für Büro, Haushalt und mehr. Erfahren Sie, warum Fero Service die richtige Wahl für Sie ist."
        />
        <meta
          property="og:url"
          content="https://feroservice.info/services"
        />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://feroservice.info/path/to/services-image.jpg"
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Unsere Dienstleistungen - Fero Service"
        />
        <meta
          name="twitter:description"
          content="Entdecken Sie die hochwertigen Reinigungsdienste von Fero Service. Perfekt für Büros, Haushalte und vieles mehr."
        />
        {/* <meta
          name="twitter:image"
          content="https://feroservice.info/path/to/services-image.jpg"
        /> */}
        <meta name="theme-color" content="#0084ff" />
        <link rel="canonical" href="https://feroservice.info/services" />
      </Head>

      {/* Components */}
      <Header />

      <HeaderBodySv />

      <WhyUs />

      <Service1 />

      <Service2 />

      <Service3 />

      <BigImage />

      <Testimonials />

      <FAQ />

      <CallToAction />

      <Footer />

      <BackTop />
    </React.Fragment>
  );
}

export default page;
