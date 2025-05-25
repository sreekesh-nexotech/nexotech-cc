"use client";
import Image from "next/image";
import { useState } from "react";

type ContactFormProps = {
  heading: string;
  description: string;
  showEmail?: boolean;
  showImage?: boolean;
  nameId: string;
  phoneId: string;
  apiEndpoint?: string;
};

export default function ContactForm({
  heading,
  description,
  showEmail = false,
  showImage = false,
  nameId,
  phoneId,
  apiEndpoint = "/api/submit-lead",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showOptionalEmail, setShowOptionalEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // First step: Show email field if needed
    if (!showEmail && !showOptionalEmail) {
      setShowOptionalEmail(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "",
          message: formData.message,
          company: "", // Added to match LeadCollection fields
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Server responded with ${response.status}`
        );
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit form. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitted(false);
    setShowOptionalEmail(false);
    setError("");
  };

  const SuccessMessage = () => (
    <div className="text-center text-[#E5E7EB] py-16 animate-fadeIn relative z-[1]">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Thank You!</h2>
      <p className="text-lg text-gray-300 mb-6">
        Our team will contact you shortly to schedule your free demo. We appreciate your interest — thank you for choosing Nexotech.
      </p>
      <button
        onClick={handleReset}
        className="btn group bg-gradient-to-t from-blue-600 to-blue-500 text-white shadow hover:bg-[length:100%_150%] px-6 py-2 rounded-md"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Submit Another Response"}
      </button>
    </div>
  );

  return (
    <section>
      <div className="relative overflow-hidden bg-[#111827] text-[#E5E7EB] px-8 py-16 rounded-2xl max-w-4xl mx-4 md:mx-auto flex flex-col md:flex-row justify-between items-start md:items-center shadow-xl md:gap-5 min-h-[432px] transition-opacity duration-500 z-0">
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
            <div className="mb-6 md:mb-0 md:w-1/2 relative z-[1]">
              <h2 className="text-3xl md:text-4xl font-semibold mb-10">{heading}</h2>
              <p className="text-lg text-gray-300 md:max-w-[400px]">{description}</p>
            </div>

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
                  minLength={3}
                  pattern="[A-Za-z\s]{3,}"
                  title="Please enter at least 3 alphabetic characters"
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
                  pattern="[\+0-9\s\-]*"
                  title="Please enter a valid phone number"
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
                    required={showEmail}
                  />
                </div>
              )}

              {error && (
                <div className="text-red-400 text-sm py-2 px-3 bg-red-900/20 rounded-md">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto flex justify-center items-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    Get Free Consultation{" "}
                    <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}