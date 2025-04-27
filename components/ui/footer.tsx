import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]"
              : ""
          }`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-6">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; Nexotech.cc - All rights reserved.
            </div>
            <div className="text-sm text-gray-600">
              49/190B, Tharath building, Kalappura PO, Arattuvazhy ward,
              Alappuzha - 688007
            </div>
            <div className="text-sm text-gray-600">
              For sales-related inquiries:{" "}
              <a
                href="mailto:sales@nexotech.cc"
                className="text-blue-600 hover:underline"
              >
                sales@nexotech.cc
              </a>
            </div>
            <div className="text-sm text-gray-600">
              For recruitment-related inquiries:{" "}
              <a
                href="mailto:hr@nexotech.cc"
                className="text-blue-600 hover:underline"
              >
                hr@nexotech.cc
              </a>
            </div>
          </div>

          {/* 2nd block: Quick Links */}
          <div className="sm:col-span-6 lg:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-600 hover:text-blue-600 transition duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block: Legal Links */}
          <div className="sm:col-span-6 lg:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-600 hover:text-blue-600 transition duration-200"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-blue-600 transition duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-and-cancellation"
                  className="text-gray-600 hover:text-blue-600 transition duration-200"
                >
                  Refund and Cancellation Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-and-delivery"
                  className="text-gray-600 hover:text-blue-600 transition duration-200"
                >
                  Shipping and Delivery Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Nexotech'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Nexotech'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
