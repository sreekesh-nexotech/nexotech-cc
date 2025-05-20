"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import PageIllustration from "@/components/page-illustration";  
import Link from "next/link";
import Image from "next/image";
import Cta from "@/components/cta";
import ProjectContent from "@/components/ProjectContent";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import ProjectContact from "@/components/project-contact";
import Testimonial from "@/components/testimonial";


export default function Projects() {

     useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
    <Header
      isLogin={false}
      bookLink="#contact"
    />
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
   
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Building Digital Success Stories One Project at a Time
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-sm text-gray-700 md:text-lg"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                From concept to execution, Nexotech Solutions turns bold ideas into powerful, scalable digital products. Explore the innovative projects we've delivered — driving growth, solving real business challenges, and redefining digital success for our clients.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <Link
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#contact"
                  >
                    <span className="relative inline-flex items-center">
                      Start Your Project Today{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </Link>
                  <Link
                      href="#project-section"
                      className="btn bg-white text-gray-800 shadow hover:bg-gray-50 w-full sm:w-auto sm:ml-4 z-10 relative"
                    >
                      Explore Our Work
                    </Link>
                  
                </div>
              </div>
            </div>
          </div>
          
         
        </div>    
      </div>
    </section>

    {/* top contact form */}
    <section className="md:mb-40 mb-20 scroll-mt-[130px]" >
      <ProjectContact 
        heading="Let us build an awesome project together"
        description="Tell us where to reach you — we’ll get in touch to discuss your idea."
        showEmail={false}
        showImage={false}
        nameId="name"
        phoneId="phone"
      />
    </section>


    {/* project contents */}
<section id="project-section" className=" text-center scroll-mt-[130px]">
        <h1 className="mb-6 border-y text-4xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-5xl">Our Works</h1>
</section>

    <ProjectContent
        title="Autogen Bots – Robotics & AI Website"
        description="Showcasing cutting-edge AI, robotics, and computer vision innovation, this website highlights Autogen’s autonomous electric vehicles for agriculture, warehousing, and beyond — designed for business acceleration through automation." website="https://www.autogenbots.com/"
        images={[
          '/images/autoGenMock (4).png',
          '/images/autoGenMock (2).png',
          '/images/autoGenMock (3).png',
          '/images/autoGenMock (1).png',
        ]}
        cost="₹10k"
        duration="7 Days"
        technology="React JS"
      />

      <ProjectContent
        title="Birapt – Influencer Marketing Platform"
        description="A clean, fast-loading website built to present Birapt’s AI-driven influencer marketing engine. Built to support brand-influencer trust and campaign efficiency with real-time collaboration tools." website="https://birapt.com/home"
        images={[
          '/images/biraptMockup (1).png',
          '/images/biraptMockup (2).png',
          '/images/biraptMockup (3).png',
          '/images/biraptMockup (4).png',
        ]}
        cost="₹10k"
        duration="5 Days"
        technology="HTML, CSS, JS, Flask"
      />

      <ProjectContent
        title="Golden Ray – Solar EPC Solutions"
        description="A premium website in progress for one of Kerala’s emerging solar EPC leaders. Built to reflect trust, quality, and customer-first values — while powering solar project conversions." website=""
        images={[
          '/images/goldenRayMock (2).png',
          '/images/goldenRayMock (1).png',
          '/images/goldenRayMock (3).png',
          '/images/goldenRayMock (4).png',
        ]}
        cost="₹80k"
        duration="in-progress"
        technology="React JS, Django, Next JS"
      />

      <ProjectContent
        title="NexoGMS – Smart gym management solution"
        description="A modern, cloud-based platform that streamlines member tracking, payments, communication, and daily gym operations — built to scale with fitness centers of any size." website=""
        images={[
          '/images/NexoGMS_mockup_03.png',
          '/images/NexoGMS_mockup_01.png',
          '/images/NexoGMS_mockup_02.png',
          '/images/NexoGMS_mockup_04.png',
        ]}
        cost="₹120k"
        duration="60 Days"
        technology="React JS, Django, Postgre SQL"
      />

      <ProjectContent
        title="NexoGMS – Mobile application"
        description="A dedicated fitness companion app for gym members — track workouts, vitals, fees, and goals. Supports calorie tracking, branded apps, and AI-powered insights." website=""
        images={[
          '/images/NexoGMS_Mobile 03.png',
          '/images/NexoGMS_Mobile 02.png',
          '/images/NexoGMS_Mobile 04.png',
          '/images/NexoGMS_Mobile 01.png',
        ]}
        cost="₹60k"
        duration="60 Days"
        technology="Flutter"
      />

<Testimonial/>

{/* bottom contact form */}
     <section className="md:mb-40 mb-20 scroll-mt-[130px]" id="contact">
        <ProjectContact 
          heading="Ready to Start Something Great?"
          description="Let’s turn your idea into reality. Drop your details and we’ll take it from here."
          showEmail={true}
          showImage={true}
          nameId="bName"
          phoneId="bPhone"
        />
      </section>

    {/* footer */}
    <Footer />
    </>
  );
}
