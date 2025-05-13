"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import Link from "next/link";
import Image from "next/image";
import Cta from "@/components/cta";
import ProjectContent from "@/components/ProjectContent";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';


export default function Projects() {

     useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
    <Header />
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-4xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Building Digital Success Stories One Project at a Time
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-base text-gray-700 md:text-lg"
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
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#project-section"
                  >
                    <span className="relative inline-flex items-center">
                      Explore Our Work{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <Link
                      href="/form"
                      className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    >
                      Start Your Project Today
                    </Link>
                  
                </div>
              </div>
            </div>
          </div>
          
         
        </div>    
      </div>
    </section>

    {/* project contents */}

<section id="project-section" className=" text-center scroll-mt-[130px]">
        <h1 className="mb-6 border-y text-4xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-5xl">Our Works</h1>
</section>

    <ProjectContent
        title="Autogen Bots – Robotics & AI Website"
        description="Showcasing cutting-edge AI, robotics, and computer vision innovation, this website highlights Autogen’s autonomous electric vehicles for agriculture, warehousing, and beyond — designed for business acceleration through automation." website="https://www.autogenbots.com/"
        images={[
          '/images/projectImg.png',
          '/images/projectImg (1).png',
          '/images/projectImg (2).png',
        ]}
        cost="₹10k"
        duration="7 Days"
        technology="React JS"
      />

      <ProjectContent
        title="Birapt – Influencer Marketing Platform"
        description="A clean, fast-loading website built to present Birapt’s AI-driven influencer marketing engine. Built to support brand-influencer trust and campaign efficiency with real-time collaboration tools." website="https://birapt.com/home"
        images={[
          '/images/projectImg (1).png',
          '/images/projectImg (3).png',
          '/images/projectImg.png',
        ]}
        cost="₹10k"
        duration="5 Days"
        technology="HTML, CSS, JS, Flask"
      />

      <ProjectContent
        title="Golden Ray – Solar EPC Solutions"
        description="A premium website in progress for one of Kerala’s emerging solar EPC leaders. Built to reflect trust, quality, and customer-first values — while powering solar project conversions." website="https://nexotech.cc/"
        images={[
          '/images/projectImg (2).png',
          '/images/projectImg (1).png',
          '/images/projectImg (3).png',
        ]}
        cost="₹80k"
        duration="in-progress"
        technology="React JS, Django, Next JS"
      />

      <ProjectContent
        title="NexoGMS – Smart gym management solution"
        description="A modern, cloud-based platform that streamlines member tracking, payments, communication, and daily gym operations — built to scale with fitness centers of any size." website="https://nexotech.cc/"
        images={[
          '/images/projectImg (3).png',
          '/images/projectImg.png',
          '/images/projectImg (1).png',
        ]}
        cost="₹120k"
        duration="60 Days"
        technology="React JS, Django, Postgre SQL"
      />

      <ProjectContent
        title="NexoGMS – Mobile application"
        description="A dedicated fitness companion app for gym members — track workouts, vitals, fees, and goals. Supports calorie tracking, branded apps, and AI-powered insights." website="https://nexotech.cc/"
        images={[
          '/images/projectImg (3).png',
          '/images/projectImg.png',
          '/images/projectImg (1).png',
        ]}
        cost="₹60k"
        duration="60 Days"
        technology="Flutter"
      />

    <Cta/>
    <Footer />
    </>
  );
}
