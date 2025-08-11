/* nexotech-cc/app/data-deletion/page.tsx */
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { Metadata } from "next";
import DataDeletionForm from "@/components/data-deletion-form";

// Define page-specific metadata
export const metadata: Metadata = {
  title: 'Data Deletion | Nexotech',
  description: 'Have questions about data privacy? Our data deletion policy explains how you can request to have your personal information permanently removed.',
  
  // IMPORTANT: Override the robots tag for this page
  robots: {
    index: false, 
    follow: true,   
  },
  
  // The canonical URL for this specific page
  alternates: {
    canonical: 'https://nexotech.cc/data-deletion',
  },
};


export default function DataDeletion() {
  return (
    <>
      <Header isLogin={true} bookLink="/form" />
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Main Prose Content */}
          <div className="prose max-w-4xl mx-auto mt-16">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Data Deletion Request
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              We value your privacy. If youʼve used our services and wish to delete your personal or business data, you can request it here. This includes any data collected through our <strong>WhatsApp API</strong>,<strong> CRM tools</strong>, or <strong> web platform. </strong>
            </p>
            <p className="mt-4 text-lg text-gray-700">
              You may request deletion using your <strong>email address</strong> or <strong>mobile number</strong>—whichever was used to access our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              What happens when you request data deletion?
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              When you request data deletion, we will permanently remove:
            </p>


            <p className="mt-4 font-bold text text-lg text-gray-800">
              If youʼve used our WhatsApp API services:
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>Your <strong>mobile number</strong> from our records</li>
              <li>Message delivery logs (only if stored for tracking)</li>
              <li>CRM entries tied to your mobile number (e.g. leads, conversations)</li>
              <li>Any webhook or integration logs linked to your WhatsApp number</li>
            </ul>
            <p className="mt-4 text text-lg text-gray-700">
              We <strong>do not store WhatsApp message content</strong> unless explicitly enabled for CRM use. 
            </p>


            <p className="mt-4 font-bold text text-lg text-gray-800">
              If youʼve used our CRM or website platform:
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>Your <strong>email, name, and profile details </strong></li>
              <li> Associated records like leads, tasks, notes, activities, and deals </li>
              <li>Analytics or system logs tied to your user profile </li>
            </ul>
            <p className="mt-4 text text-lg text-gray-700">
              <strong>Data deletion is permanent </strong> and cannot be reversed. 
Some limited data may be retained temporarily to comply with tax, legal, or audit 
obligations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              How to Submit a Deletion Request?
            </h2>
            <p className="mt-4 text text-lg text-gray-700">
              Please enter your <strong>email address or mobile number </strong> used with our services. This helps us 
locate and delete all related records securely. <br/>After submitting: 
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                Weʼll verify your request within <strong>24–72 hours</strong>
              </li>
              <li>
                Full deletion will be completed within <strong>7 business days</strong> 
              </li>
              <li>
                Confirmation will be sent via email or WhatsApp (if applicable)
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              Need help or made a mistake?
            </h2>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                If you submitted a request by accident or need support, contact
                us at <a
                href="mailto:office@nexotech.cc"
                className="text-blue-600 hover:underline"
              >
                office@nexotech.cc
              </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              Learn more
            </h2>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                To understand what data we collect and how we use it, read our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                  target="new"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Data Deletion Form */}
          <div className="mt-16 mb-20"> 
            <DataDeletionForm
              heading="Submit a Deletion Request"
              description="Please provide the email address or Mobile Number associated with your account. We will process your request within 7 business days."
              mobileId="deletion-mobile"
              emailId="deletion-email"
            />
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}