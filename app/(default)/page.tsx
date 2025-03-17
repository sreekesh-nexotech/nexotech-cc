import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Nexotech - Leading IT Solutions",
  description: "Discover the best web development, mobile app development, custom software development  and chatbot development in kerala at Nexotech.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import ServicesOffered from "@/components/services-offered";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      {/* <FeaturesPlanet /> */}
      <ServicesOffered />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
