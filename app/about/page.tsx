"use client";
import Header from "@/components/ui/header";
import Link from "next/link";
import Footer from "@/components/ui/footer";

export default function AboutUs() {
  return (
    <>
      <Header
        isLogin={true}
        bookLink="/form"
      />
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <div className="text-center py-20">
          <h1 className="text-5xl font-extrabold text-gray-900">Who We Are</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            At Nexotech, we are passionate about crafting digital solutions that redefine the way businesses operate. Our team of experts thrives on innovation, ensuring that every project we undertake delivers real value and impact.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="bg-[#111827] py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                <p className="mt-4 text-gray-600">
                  We strive to empower businesses by developing cutting-edge technology solutions that drive efficiency, enhance user experience, and foster long-term growth. Our mission is to bridge the gap between technology and business needs, delivering solutions that are both innovative and practical.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                <p className="mt-4 text-gray-600">
                  To be a global leader in digital transformation, helping businesses leverage technology for a smarter, more connected future. We envision a world where technology empowers every business to achieve its full potential.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We are built on principles that guide our every decision and interaction. These values define who we are and how we work.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
                <p className="mt-3 text-gray-600">
                  We continuously push the boundaries to create future-ready solutions. Innovation is at the core of everything we do, ensuring our clients stay ahead of the curve.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
                <p className="mt-3 text-gray-600">
                  Honesty and transparency are at the heart of everything we do. We believe in building trust through open communication and ethical practices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900">Customer-Centric</h3>
                <p className="mt-3 text-gray-600">
                  We prioritize our clients' success, delivering tailored solutions that make a difference. Your goals are our goals, and we are committed to helping you achieve them.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#111827] py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-3xl font-bold text-white">Why Choose Nexotech?</h2>
            <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
              We stand out because of our commitment to excellence, innovation, and customer satisfaction. Here’s what makes us different:
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900">Expert Team</h3>
                <p className="mt-3 text-gray-600">
                  Our team comprises industry experts with years of experience in technology and business solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900">Tailored Solutions</h3>
                <p className="mt-3 text-gray-600">
                  We don’t believe in one-size-fits-all. Every solution is customized to meet your unique needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900">Cutting-Edge Technology</h3>
                <p className="mt-3 text-gray-600">
                  We leverage the latest technologies to deliver solutions that are both innovative and reliable.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900">Proven Results</h3>
                <p className="mt-3 text-gray-600">
                  Our track record speaks for itself. We’ve helped numerous businesses achieve their goals through our solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Let’s Create Something Great Together</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Whether you're a startup or an established enterprise, we’re here to bring your ideas to life with technology-driven solutions. Let’s collaborate and build a future that’s smarter, faster, and more connected.
            </p>
            <Link
              href="/form"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}