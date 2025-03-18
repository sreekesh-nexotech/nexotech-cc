"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <div className="bg-gradient-to-b from-blue-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                    <div className="prose max-w-4xl mx-auto mt-16"> {/* Added mt-16 to push content below the navbar */}
                        <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
                        <p className="mt-4 text-lg text-gray-700">
                            At Nexotech, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Information We Collect</h2>
                        <p className="mt-2 text-gray-600">
                            We may collect personal information such as your name, email address, phone number, and payment details when you use our website or services.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">2. How We Use Your Information</h2>
                        <p className="mt-2 text-gray-600">
                            We use your information to provide and improve our services, process transactions, and communicate with you. We may also use your information for marketing purposes, but you can opt out at any time.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Data Security</h2>
                        <p className="mt-2 text-gray-600">
                            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Sharing Your Information</h2>
                        <p className="mt-2 text-gray-600">
                            We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or to fulfill our services.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Cookies and Tracking</h2>
                        <p className="mt-2 text-gray-600">
                            We use cookies and similar technologies to enhance your experience on our website. You can disable cookies in your browser settings, but this may affect website functionality.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Your Rights</h2>
                        <p className="mt-2 text-gray-600">
                            You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:office@nexotech.cc" className="text-blue-600 hover:underline">office@nexotech.cc</a>.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Changes to This Policy</h2>
                        <p className="mt-2 text-gray-600">
                            We may update this privacy policy from time to time. Any changes will be posted on this page, and your continued use of our website constitutes acceptance of the updated policy.
                        </p>

                        <p className="mt-8 text-gray-600">
                            If you have any questions about our privacy practices, please contact us at <a href="mailto:office@nexotech.cc" className="text-blue-600 hover:underline">office@nexotech.cc</a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}