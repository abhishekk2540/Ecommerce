import React from "react";
import HeroSection from "@/components/HeroSection";
import Slidder from "@/components/Slidder";
import SectionSlidder from "@/components/SectionSlidder";
import Service from "@/components/Service";
import WhyChooseUs from "@/components/WhyChooseUs";
import HappyCustomer from "@/components/HappyCustomer";
import Question from "@/components/Querstion";
import ContactUsByCall from "@/components/ContactUsByCall";
import Blogs from "@/components/Blogs";
import Disclaimer from "@/components/Disclaimer";
import WhatsAppPulse from "@/components/WhatsaPulse";
import CallingPulse from "@/components/CallingPulse";
const page = () => {
  return (
    <>
      <HeroSection/>
      <WhatsAppPulse/>
      <CallingPulse/>
      <Slidder/>
      <SectionSlidder/>
      <Service/>
      <WhyChooseUs/>
      <HappyCustomer/>
      <Question/>
      <ContactUsByCall/>
      <Blogs/>
      <Disclaimer/>
    </>
  );
};

export default page;
