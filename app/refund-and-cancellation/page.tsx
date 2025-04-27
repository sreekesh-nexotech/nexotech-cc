"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function RefundAndCancellationPolicy() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="prose max-w-4xl mx-auto mt-16">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Refund and Cancellation Policy
            </h1>
            <p className="mt-2 text-gray-600">Last Updated: 27-04-2025</p>
            <p className="mt-4 text-lg text-gray-700">
              At Nexotech Solutions ("Company", "we", "our", or "us"), we value
              our customers and strive to provide the highest quality services.
              This Refund and Cancellation Policy explains how we handle refunds
              and cancellations for our SaaS products and Custom Development
              Projects.
            </p>
            <p className="mt-2 text-gray-600">
              By using our Services, you agree to this policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              1. SaaS Subscription Refund Policy
            </h2>
            <p className="mt-2 text-gray-600">
              We offer a fair refund policy for our SaaS (Software as a Service)
              subscriptions:
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Monthly Subscription:
            </h3>
            <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                Refund requests can be made within <strong>7 days</strong> of
                the subscription date.
              </li>
              <li>No refunds will be provided after the 7-day period.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Annual Subscription:
            </h3>
            <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                Refund requests can be made within <strong>30 days</strong> of
                the subscription start date.
              </li>
              <li>No refunds will be provided after the 30-day period.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Free Trial:
            </h3>
            <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                A <strong>7-day free trial</strong> is available upon request
                before subscribing.
              </li>
              <li>Refunds are not applicable for free trial users.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Cancellation:
            </h3>
            <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
              <li>You can cancel your subscription at any time.</li>
              <li>
                Cancellation will prevent the next billing cycle, but no partial
                refunds will be provided for the current billing cycle.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              2. Lifetime Plan Policy
            </h2>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                Lifetime plans are valid for <strong>10 years</strong> from the
                subscription date.
              </li>
              <li>
                After the <strong>fifth year</strong>, a minimal service cost
                (not exceeding <strong>50%</strong>
                of the prevailing subscription cost) will be charged annually to
                continue receiving services.
              </li>
              <li>
                Lifetime plan purchases are <strong>non-refundable</strong>{" "}
                after the standard 7-day (monthly) or 30-day (annual) refund
                windows.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              3. Custom Development Projects Refund Policy
            </h2>
            <p className="mt-2 text-gray-600">
              Custom software development projects follow a{" "}
              <strong>milestone-based payment system</strong>.
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                Payments are collected after client satisfaction and approval of
                each milestone or phase.
              </li>
              <li>
                Once a milestone payment is made,{" "}
                <strong>no refund will be issued</strong> for that milestone.
              </li>
              <li>
                In case of project termination by the client, no refund will be
                provided for work already completed and approved.
              </li>
              <li>
                For <strong>discounted projects</strong>, no warranty or free
                after-sales support is included unless explicitly agreed upon
                for an additional charge.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              4. Process for Requesting a Refund
            </h2>
            <p className="mt-2 text-gray-600">
              To request a refund, please email us at{" "}
              <a
                href="mailto:office@nexotech.cc"
                className="text-blue-600 hover:underline"
              >
                office@nexotech.cc
              </a>{" "}
              with the following details:
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>Full Name</li>
              <li>Registered Email Address</li>
              <li>Invoice Number</li>
              <li>Reason for Refund Request</li>
            </ul>
            <p className="mt-2 text-gray-600">
              We will process all eligible refund requests within{" "}
              <strong>10 working days</strong> of receiving the request, after
              necessary verification.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              5. Non-Refundable Items
            </h2>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                Payments for Custom Development milestones already approved.
              </li>
              <li>
                Subscription fees beyond the refund eligibility period (7 days
                or 30 days).
              </li>
              <li>Setup fees, if applicable.</li>
              <li>Services involving third-party platform costs.</li>
              <li>
                Discounted or promotional deals where refund clauses are
                explicitly excluded.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              6. Service Cancellation by Nexotech Solutions
            </h2>
            <p className="mt-2 text-gray-600">
              We reserve the right to suspend or terminate Services:
            </p>
            <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
              <li>
                Due to misuse, non-payment, or violation of our Terms and
                Conditions.
              </li>
              <li>
                If such suspension or termination occurs, users will not be
                eligible for any refund.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              7. Governing Law
            </h2>
            <p className="mt-2 text-gray-600">
              This Refund and Cancellation Policy is governed by the laws of
              India. Any disputes arising under this Policy shall be subject to
              the exclusive jurisdiction of the{" "}
              <strong>District Court of Alappuzha, Kerala, India</strong>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">
              8. Contact Us
            </h2>
            <p className="mt-2 text-gray-600">
              For any questions related to refunds or cancellations, please
              contact:
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
