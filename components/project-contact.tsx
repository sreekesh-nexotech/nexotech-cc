"use client";
import Image from "next/image";
import { useState } from "react";

//props
type ContactFormProps = {
  heading: string;
  description: string;
  showEmail?: boolean;
  showImage?: boolean;
  nameId: string;
  phoneId: string;
};

export default function ContactForm({
  heading,
  description,
  showEmail = false,
  showImage = false,
  nameId,
  phoneId,
}: ContactFormProps) {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // State to track form submission stages
  const [isSubmitted, setIsSubmitted] = useState(false); // For final submission
  const [showOptionalEmail, setShowOptionalEmail] = useState(false); // For first form's optional email

  // Handle input changes with type assertion
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!showEmail && !showOptionalEmail) {
      // First form, first submission: Show optional email input
      setShowOptionalEmail(true);
    } else {
      // First form (second submission) or second form submission: Final submission
      setIsSubmitted(true);
      // storing data (backend call can be done here)
      console.log("Form Data:", formData);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({ name: "", phone: "", email: "" });
    setIsSubmitted(false);
    setShowOptionalEmail(false);
  };

  // Success message component
  const SuccessMessage = () => (
    <div className="text-center text-[#E5E7EB] py-16 animate-fadeIn relative z-[1]">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Thank You!</h2>
      <p className="text-lg text-gray-300 mb-6">
        Our team will contact you shortly to schedule your free demo. We appreciate your interest — thank you for choosing Nexotech.
      </p>
      <button
        onClick={handleReset}
        className="btn group bg-gradient-to-t from-blue-600 to-blue-500 text-white shadow hover:bg-[length:100%_150%] px-6 py-2 rounded-md"
      >
        Submit Another Response
      </button>
    </div>
  );

  return (
    <section>
      <div
        className="relative overflow-hidden bg-[#111827] text-[#E5E7EB] px-8 py-16 rounded-2xl max-w-4xl mx-4 md:mx-auto flex flex-col md:flex-row justify-between items-start md:items-center shadow-xl md:gap-5 min-h-[432px] transition-opacity duration-500 z-0"
      >
        {/* Stripes illustration */}
        {showImage && (
          <div
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 transform z-[-1]"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src="/images/stripes-dark.svg"
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
        )}

        {isSubmitted ? (
          <SuccessMessage />
        ) : (
          <>
            {/* Left Text Section */}
            <div className="mb-6 md:mb-0 md:w-1/2 relative z-[1]">
              <h2 className="text-3xl md:text-4xl font-semibold mb-10">{heading}</h2>
              <p className="text-lg text-gray-300 md:max-w-[400px]">{description}</p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="md:w-1/2 w-full flex flex-col gap-4 relative z-[1]">
              <div>
                <label htmlFor={nameId} className="block text-sm mb-1 text-white opacity-50">
                  Name
                </label>
                <input
                  type="text"
                  id={nameId}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400"
                  required
                  pattern="[A-Za-z\s]{3,}"
                  title="Please enter at least 3 alphabetic characters."
                />
              </div>

              <div>
                <label htmlFor={phoneId} className="block text-sm mb-1 text-white opacity-50">
                  Mobile number
                </label>
                <input
                  type="tel"
                  id={phoneId}
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 1234-567890"
                  className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400"
                  required
                  pattern="[0-9]{*}"
                  title="Enter a valid phone number"
                />
              </div>

              {(showEmail || showOptionalEmail) && (
                <div>
                  <label htmlFor="email" className="block text-sm mb-1 text-white opacity-50">
                    Email address {showOptionalEmail && "(optional)"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400"
                    required={showEmail} // Required for second form, optional for first
                  />
                </div>
              )}

              <button
                type="submit"
                className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
              >
                Get Free Consultation{" "}
                <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                  -&gt;
                </span>
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}