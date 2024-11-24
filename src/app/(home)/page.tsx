// import photto from "../../img/logo/photoLogo.jpg";
// import Image from "next/image";
// import Client from "../../homeCm/client";
// import Loader from "@/totalCm/loader";
import React from "react";
import "../../css/main.css";
import "../../css/main.min.css";
import AboutUsHm from "../../components/homeCm/AboutUsHm";
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

      {/* <Loader/> */}

      <Header />

      <HeaderBody />

      <Services />

      <AboutUsHm />

      <Bigimage />

      <Testimonials />

      {/* <!-- Client --> */}

      <GetInTouch />

      <Footer />

      <BackTop />

    </React.Fragment>
  );
}
export default page;