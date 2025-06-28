import Image from "next/image";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import WhyChooseUs from "./Components/WhyChooseUS";
import Testimonials from "./Components/Testimonials";
import CallToAction from "./Components/CallToAction";
import Gallery from "./Components/Gallery";
import 'keen-slider/keen-slider.min.css';

import FAQSection from "./Components/Faqs";
export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Services/>
      <WhyChooseUs/>
      <Testimonials/>
      <CallToAction/>
      <Gallery/>
      <FAQSection/>


      
    
    </div>
  );
}
