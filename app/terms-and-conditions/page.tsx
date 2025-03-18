"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="prose max-w-4xl mx-auto mt-16"> {/* Added mt-16 to push content below the navbar */}
            <h1 className="text-4xl font-extrabold text-gray-900">Terms and Conditions</h1>
            <p className="mt-4 text-lg text-gray-700">
              Welcome to Nexotech! These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Acceptance of Terms</h2>
            <p className="mt-2 text-gray-600">
              By accessing this website, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, you must not use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Intellectual Property</h2>
            <p className="mt-2 text-gray-600">
              All content on this website, including text, graphics, logos, and images, is the property of Nexotech and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without our prior written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">3. User Responsibilities</h2>
            <p className="mt-2 text-gray-600">
              You agree to use our website and services for lawful purposes only. You must not engage in any activity that disrupts or interferes with the functionality of the website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Limitation of Liability</h2>
            <p className="mt-2 text-gray-600">
              Nexotech will not be liable for any damages arising from the use of our website or services. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Changes to Terms</h2>
            <p className="mt-2 text-gray-600">
              We reserve the right to modify these terms and conditions at any time. Your continued use of the website constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Governing Law</h2>
            <p className="mt-2 text-gray-600">
              These terms and conditions are governed by and construed in accordance with the laws of [Your Country/Region]. Any disputes will be resolved in the courts of [Your Country/Region].
            </p>

            <p className="mt-8 text-gray-600">
              If you have any questions about these terms, please contact us at <a href="mailto:info@nexotech.com" className="text-blue-600 hover:underline">info@nexotech.com</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}