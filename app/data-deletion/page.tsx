import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { Metadata } from "next";

// Define page-specific metadata
export const metadata = {
  title: "Data Deletion Request | Nexotech",
  description: "Request the deletion of your personal data from Nexotech. Learn how to submit a deletion request and understand what happens to your account.",
  keywords: ["data deletion", "privacy", "account deletion", "Nexotech"],
  openGraph: {
    title: "Data Deletion Request | Nexotech",
    description: "Request the deletion of your personal data from Nexotech.",
    url: "https://www.nexotech.cc/data-deletion",
    siteName: "Nexotech",
    images: [
      {
        url: "https://nexotech.cc/images/logo-01.svg",
        width: 1200,
        height: 630,
        alt: "Nexotech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexotech",
    creator: "@nexotech",
    title: "Data Deletion Request | Nexotech",
    description: "Request the deletion of your personal data from Nexotech.",
    images: ["https://nexotech.cc/images/logo-01.svg"],
  },
};

export default function DataDeletion() {
  return (
    <>
      <Header
          isLogin={true}
          bookLink="/form"
      />
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="prose max-w-4xl mx-auto mt-16">
            <h1 className="text-4xl font-extrabold text-gray-900">
                Data Deletion Request
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              We respect your privacy and are committed to protecting your personal information. If you'd like to delete your account 
or any data we’ve collected, you’re in the right place.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              What happens when you request data deletion?
            </h2>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                 Your account will be permanently deleted.
              </li>
              <li>
                 This action is irreversible.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
               How to Submit a Deletion Request?
            </h2>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                  Please provide the email address associated with your account. We will process your request within 7 business 
days.
              </li>
              <li>
                  Note: We may retain minimal data for legal or compliance purposes if required.
              </li>
            </ul>
            

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              Need help or made a mistake?
            </h2>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                If you submitted a request by accident or need support, contact us at [support@nexotech.cc]
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
               Learn more
            </h2>
            <p className="mt-2 text-gray-600">
              We do <strong>not</strong> sell or rent your personal information
              to third parties. We may share your information with:
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                To understand what data we collect and how we use it, read our 
                <Link
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
