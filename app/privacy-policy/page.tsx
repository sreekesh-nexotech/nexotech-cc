"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="mt-2 text-gray-600">Last Updated: 27-04-2025</p>
            <p className="mt-4 text-lg text-gray-700">
              At Nexotech Solutions ("Company", "we", "our", or "us"), your
              privacy is of utmost importance to us. This Privacy Policy
              explains how we collect, use, disclose, and protect your personal
              information when you use our services, including our website, web
              applications, mobile applications, and custom development services
              ("Services").
            </p>
            <p className="mt-2 text-gray-600">
              By using our Services, you consent to the practices described in
              this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              1. Company Information
            </h2>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                <strong>Company Name:</strong> Nexotech Solutions (Partnership
                Firm)
              </li>
              <li>
                <strong>Registered Address:</strong> Alappuzha, Kerala, India
              </li>
              <li>
                <strong>GST Number:</strong> 32AAXFN3096L1ZK
              </li>
              <li>
                <strong>Official Email:</strong> office@nexotech.cc
              </li>
            </ul>

            {/* Rest of the privacy policy content remains the same */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              2. Information We Collect
            </h2>
            <p className="mt-2 text-gray-600">
              We collect different types of information to provide and improve
              our Services:
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              a) Information Provided Directly by You:
            </h3>
            <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
              <li>Name</li>
              <li>Contact information (email, phone number, address)</li>
              <li>Company or Gym name and details</li>
              <li>Payment and billing information</li>
              <li>Feedback, queries, and support requests</li>
              <li>Credentials for login to our platforms</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              b) Information Collected Automatically:
            </h3>
            <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
              <li>IP Address</li>
              <li>Browser and device information</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>Log files and analytics data</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              c) Information from Third Parties:
            </h3>
            <p className="mt-1 text-gray-600">
              Payment transaction information via <strong>Razorpay</strong>{" "}
              (only transaction success/failure, not sensitive card details)
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              3. How We Use Your Information
            </h2>
            <p className="mt-2 text-gray-600">
              We use your information for the following purposes:
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                To deliver and manage our SaaS Services and Custom Development
                Projects
              </li>
              <li>To authenticate user identity and manage accounts</li>
              <li>To process transactions and send invoices</li>
              <li>
                To communicate important updates, technical notices, and service
                alerts
              </li>
              <li>To provide customer support</li>
              <li>To improve our Services, features, and user experience</li>
              <li>To ensure compliance with applicable legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              4. Sharing of Information
            </h2>
            <p className="mt-2 text-gray-600">
              We do <strong>not</strong> sell or rent your personal information
              to third parties. We may share your information with:
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                <strong>Service providers</strong> (e.g., Razorpay for payment
                processing)
              </li>
              <li>
                <strong>Legal authorities</strong> if required by law
              </li>
              <li>
                <strong>Business partners</strong> in case of mergers,
                acquisitions, or sale of assets (with prior notice)
              </li>
            </ul>
            <p className="mt-2 text-gray-600">
              All third-party partners are required to maintain confidentiality
              and security standards at least equivalent to ours.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              5. Data Retention
            </h2>
            <p className="mt-2 text-gray-600">
              We retain your personal information:
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                As long as your account is active or as needed to provide you
                services
              </li>
              <li>
                For a minimum of 7 years after account closure to comply with
                tax and regulatory requirements
              </li>
              <li>
                For custom projects, data retention terms will be governed by
                individual work orders, if applicable
              </li>
            </ul>
            <p className="mt-2 text-gray-600">
              You may request deletion of your personal data by contacting us at{" "}
              <a
                href="mailto:office@nexotech.cc"
                className="text-blue-600 hover:underline"
              >
                office@nexotech.cc
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              6. Data Security
            </h2>
            <p className="mt-2 text-gray-600">
              We take appropriate technical and organizational measures to
              protect your personal information, including:
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>Encrypted storage</li>
              <li>Secure transmission (SSL)</li>
              <li>Regular security audits</li>
            </ul>
            <p className="mt-2 text-gray-600">
              However, no method of transmission over the internet or electronic
              storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="mt-2 text-gray-600">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>Authenticate sessions</li>
              <li>Analyze traffic and usage patterns</li>
              <li>Improve functionality</li>
            </ul>
            <p className="mt-2 text-gray-600">
              You can choose to disable cookies through your browser settings;
              however, some features may not function properly without them.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              8. Your Rights
            </h2>
            <p className="mt-2 text-gray-600">You have the right to:</p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict our processing of your data</li>
              <li>Withdraw consent at any time (where applicable)</li>
            </ul>
            <p className="mt-2 text-gray-600">
              Requests can be made by emailing us at{" "}
              <a
                href="mailto:office@nexotech.cc"
                className="text-blue-600 hover:underline"
              >
                office@nexotech.cc
              </a>
              .<br />
              We will respond within a reasonable timeframe.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              9. Third-Party Links
            </h2>
            <p className="mt-2 text-gray-600">
              Our Services may contain links to external websites.
              <br />
              We are not responsible for the privacy practices or content of
              such third-party websites.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              10. Children's Privacy
            </h2>
            <p className="mt-2 text-gray-600">
              Our Services are not intended for individuals under the age of 18.
              <br />
              We do not knowingly collect personal information from children.
              <br />
              If you believe that we have collected information from a child,
              please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              11. Changes to This Privacy Policy
            </h2>
            <p className="mt-2 text-gray-600">
              We reserve the right to update this Privacy Policy at any time.
              <br />
              Changes will be effective immediately upon posting the updated
              policy on our website.
              <br />
              We encourage you to review this page periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              12. Governing Law
            </h2>
            <p className="mt-2 text-gray-600">
              This Privacy Policy shall be governed by and construed in
              accordance with the laws of India.
              <br />
              Any disputes relating to this Policy shall be subject to the
              exclusive jurisdiction of the{" "}
              <strong>District Court of Alappuzha, Kerala, India</strong>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              13. Contact Us
            </h2>
            <p className="mt-2 text-gray-600">
              If you have any questions, concerns, or complaints about this
              Privacy Policy or our data practices, please contact:
            </p>
            <address className="mt-2 text-gray-600 not-italic">
              <strong>Nexotech Solutions</strong>
              <br />
              Alappuzha, Kerala, India
              <br />
              Email:{" "}
              <a
                href="mailto:office@nexotech.cc"
                className="text-blue-600 hover:underline"
              >
                office@nexotech.cc
              </a>
            </address>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
