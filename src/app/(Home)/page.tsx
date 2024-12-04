import React from "react";
import Head from "next/head";
import "../../css/main.css";
import "../../css/main.min.css";
import AboutUsHm from "../../components/homeCm/aboutUsHm";
import Bigimage from "../../components/homeCm/bigimage";
import GetInTouch from "../../components/homeCm/getInTouch";
import HeaderBody from "../../components/homeCm/headerBody";
import Services from "../../components/homeCm/services";
import Testimonials from "../../components/homeCm/testimonials";
import Header from "@/components/totalCm/header";
import Footer from "@/components/totalCm/footer";
import BackTop from "@/components/totalCm/backTop";

function page() {
  return (    
    <React.Fragment>
      <Head>
        <title>Fero Service - Büro-, Grund- und Haushaltsreinigung | feroservice.info</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Fero Service - Professionelle Reinigungsdienste für Büro-, Grund- und Haushaltsreinigung. Vertrauen Sie auf uns für makellose Sauberkeit. Besuchen Sie feroservice.info für Details."
        />
        <meta
          name="keywords"
          content="Fero Service, feroservice.info, Reinigungsdienst, Büroreinigung, Grundreinigung, Haushaltsreinigung, professionelle Reinigung, Sauberkeit, feroservice"
        />
        <meta name="author" content="Fero Service" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Fero Service - Ihr Partner für professionelle Reinigung"
        />
        <meta
          property="og:description"
          content="Effiziente und gründliche Reinigung für Büros, Wohnungen und schwer zugängliche Bereiche. Besuchen Sie feroservice.info und erfahren Sie mehr."
        />
        <meta property="og:url" content="https://feroservice.info" />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://feroservice.info/path/to/featured-image.jpg"
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fero Service - Professionelle Reinigungsdienste"
        />
        <meta
          name="twitter:description"
          content="Fero Service bietet Büroreinigung, Grundreinigung und Haushaltsreinigung für makellose Sauberkeit."
        />
        {/* <meta
          name="twitter:image"
          content="https://feroservice.info/path/to/featured-image.jpg"
        /> */}
        <meta name="theme-color" content="#0084ff" />
        <link rel="canonical" href="https://feroservice.info" />
      </Head>

      {/* Components */}
      <Header />
      <HeaderBody />
      <Services />
      <AboutUsHm />
      <Bigimage />
      <Testimonials />
      <GetInTouch />
      <Footer />
      <BackTop />
    </React.Fragment>
  );
}

export default page;
