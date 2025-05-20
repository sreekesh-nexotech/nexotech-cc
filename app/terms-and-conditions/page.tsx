"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function TermsAndConditions() {
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
              Terms and Conditions
            </h1>
            <p className="mt-2 text-gray-600">Last Updated: 27-04-2025</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              1. Introduction
            </h2>
            <p className="mt-2 text-gray-600">
              Welcome to Nexotech Solutions ("Company", "we", "our", or "us").
              We provide Software as a Service (SaaS) products for gym
              management and custom software development services.
            </p>
            <p className="mt-2 text-gray-600">
              These Terms and Conditions ("Terms") govern your access to and use
              of our services, including our websites, applications, and any
              related offerings (collectively, the "Services"). By accessing or
              using our Services, you agree to be bound by these Terms. If you
              do not agree with these Terms, you must not use our Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              2. Company Information
            </h2>
            <ul className="mt-2 text-gray-600 list-disc pl-5">
              <li>Legal Entity: Nexotech Solutions (Partnership Firm)</li>
              <li>Registered Address: Alappuzha, Kerala, India</li>
              <li>GST Number: 32AAXFN3096L1ZK</li>
              <li>Official Email: office@nexotech.cc</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              3. Services Offered
            </h2>
            <ul className="mt-2 text-gray-600 list-disc pl-5">
              <li>
                <strong>SaaS Services:</strong> We offer gym management SaaS
                solutions to businesses ("B2B Clients").
              </li>
              <li>
                <strong>Custom Development Projects:</strong> We undertake
                customized software development based on mutually agreed work
                orders.
              </li>
              <li>
                <strong>Future Scope:</strong> We may, in the future, offer B2C
                services directly to end-users.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              4. User Responsibilities
            </h2>
            <p className="mt-2 text-gray-600">Users are expected to:</p>
            <ul className="mt-2 text-gray-600 list-disc pl-5">
              <li>
                Provide accurate information during registration and use of
                Services
              </li>
              <li>Maintain the confidentiality of their accounts</li>
              <li>Use the Services only for lawful purposes</li>
              <li>
                Not misuse the platform for commercial gains outside the agreed
                scope
              </li>
              <li>
                Not engage in activities that compromise the security or
                integrity of our Services
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              5. Payment and Refund Policy
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              SaaS Subscription:
            </h3>
            <ul className="mt-2 text-gray-600 list-disc pl-5">
              <li>
                <strong>Monthly Subscription:</strong> Refund requests must be
                made within <strong>7 days</strong> of the subscription date
              </li>
              <li>
                <strong>Annual Subscription:</strong> Refund requests must be
                made within <strong>30 days</strong> of the subscription date
              </li>
              <li>
                <strong>Free Trial:</strong> A <strong>7-day free trial</strong>{" "}
                is available upon request
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Custom Development Projects:
            </h3>
            <ul className="mt-2 text-gray-600 list-disc pl-5">
              <li>Payments are milestone-based</li>
              <li>
                No refunds are provided once a phase is approved by the client
                and corresponding payment is made
              </li>
              <li>
                Satisfaction is ensured by milestone approvals before proceeding
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Lifetime Plans:
            </h3>
            <ul className="mt-2 text-gray-600 list-disc pl-5">
              <li>Lifetime plans are valid for 10 years</li>
              <li>
                After <strong>5 years</strong>, a minimal service cost (not
                exceeding <strong>50% </strong>of the prevailing actual cost)
                will be charged for continued service over the next 5 years
              </li>
            </ul>

            <p className="mt-2 text-gray-600">
              All payments are processed securely via our payment gateway
              partner, <strong>Razorpay</strong>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              6. Intellectual Property
            </h2>
            <ul className="mt-2 text-gray-600 list-disc pl-5">
              <li>
                <strong>SaaS Products:</strong> All rights, title, and interest
                in the software and underlying technologies remain the sole
                property of Nexotech Solutions
              </li>
              <li>
                <strong>Custom Projects:</strong> We retain the Intellectual
                Property (IP) rights unless explicitly transferred to the client
                as per the signed work order
              </li>
              <li>
                Standard warranty of <strong>6 months</strong> is provided for
                custom developments unless the project is categorized under
                discounted projects
              </li>
              <li>
                Discounted projects will not carry any warranty or free support
                unless separately contracted
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              7. Third-Party Services
            </h2>
            <p className="mt-2 text-gray-600">
              Our Services may integrate with third-party services (such as
              <strong>Razorpay</strong> for payments). Nexotech Solutions is not
              liable for the availability, performance, or errors of third-party
              services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              8. Data Privacy and Security
            </h2>
            <p className="mt-2 text-gray-600">
              We prioritize the security and confidentiality of client and user
              data. However, we cannot guarantee absolute security and shall not
              be held liable for breaches arising beyond our reasonable control.
              Use of our Services also implies acceptance of our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              9. Suspension and Termination
            </h2>
            <p className="mt-2 text-gray-600">
              We reserve the right to suspend or terminate services immediately
              if:
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5">
              <li>Payments are not made as per due timelines</li>
              <li>Services are misused for unauthorized commercial gains</li>
              <li>Data is misused or unauthorized access is detected</li>
            </ul>
            <p className="mt-2 text-gray-600">
              In such cases, no refunds will be provided.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              10. Limitation of Liability
            </h2>
            <p className="mt-2 text-gray-600">
              To the maximum extent permitted by law:
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5">
              <li>
                Nexotech Solutions shall not be liable for any indirect,
                incidental, consequential, or punitive damages arising from the
                use or inability to use our Services
              </li>
              <li>
                Our total liability for any claim shall not exceed the amount
                paid by the user for the Services during the six (6) months
                preceding the event giving rise to the liability
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              11. Indemnification
            </h2>
            <p className="mt-2 text-gray-600">
              You agree to indemnify and hold Nexotech Solutions, its partners,
              employees, and affiliates harmless from any claims, damages,
              losses, liabilities, and expenses arising out of your use of the
              Services, violation of these Terms, or infringement of any rights
              of another party.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              12. Governing Law and Jurisdiction
            </h2>
            <p className="mt-2 text-gray-600">
              These Terms shall be governed and construed in accordance with the
              laws of India. Any disputes shall be subject to the exclusive
              jurisdiction of the{" "}
              <strong>District Court of Alappuzha, Kerala, India.</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              13. Dispute Resolution
            </h2>
            <p className="mt-2 text-gray-600">
              Before resorting to court proceedings, the parties agree to
              attempt to resolve any disputes amicably through mutual discussion
              and negotiation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              14. Amendments
            </h2>
            <p className="mt-2 text-gray-600">
              We may amend these Terms at any time by posting the updated
              version on our website. You are advised to review these Terms
              periodically for any changes. Continued use of our Services after
              changes signifies your acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              15. Contact Information
            </h2>
            <p className="mt-2 text-gray-600">
              For any questions, concerns, or complaints regarding these Terms,
              you can contact us at:
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
