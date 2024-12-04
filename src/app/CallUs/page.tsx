import React from 'react';
import Head from 'next/head';
import '../../css/main.css';
import '../../css/main.min.css';
import BackTop from '@/components/totalCm/backTop';
import AdressCall from '../../components/callusCm/addres-call';
import ContactUs from '../../components/callusCm/contactUs';
import HeaderBodyCu from '../../components/callusCm/headerBodyCu';
import Header from '@/components/totalCm/header';
import Footer from '@/components/totalCm/footer';

function page() {
  return (
    <React.Fragment>
      <Head>
        <title>Kontaktieren Sie uns - Fero Service | feroservice.info</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Kontaktieren Sie Fero Service für professionelle Büro-, Grund- und Haushaltsreinigung. Erreichen Sie uns per Telefon, E-Mail oder besuchen Sie uns direkt. Wir stehen Ihnen zur Verfügung!"
        />
        <meta
          name="keywords"
          content="Kontakt, Fero Service, feroservice.info, Büroreinigung, Grundreinigung, Haushaltsreinigung, Telefon, E-Mail, Adresse, Reinigungsservice"
        />
        <meta name="author" content="Fero Service" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Kontaktieren Sie uns - Fero Service"
        />
        <meta
          property="og:description"
          content="Wir sind für Sie da! Kontaktieren Sie Fero Service für all Ihre Reinigungsbedürfnisse. Telefon, E-Mail oder Adresse – wir freuen uns, von Ihnen zu hören."
        />
        <meta property="og:url" content="https://feroservice.info/contact-us" />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://feroservice.info/path/to/contact-us-image.jpg"
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kontaktieren Sie uns - Fero Service"
        />
        <meta
          name="twitter:description"
          content="Kontaktieren Sie uns für professionelle Reinigungsservices. Wir freuen uns, Ihnen helfen zu können."
        />
        {/* <meta
          name="twitter:image"
          content="https://feroservice.info/path/to/contact-us-image.jpg"
        /> */}
        <meta name="theme-color" content="#0084ff" />
        <link rel="canonical" href="https://feroservice.info/contact-us" />
      </Head>

      {/* Components */}
      <Header />
      <HeaderBodyCu />
      <AdressCall />
      <ContactUs />
      <Footer />
      <BackTop />
    </React.Fragment>
  );
}

export default page;
