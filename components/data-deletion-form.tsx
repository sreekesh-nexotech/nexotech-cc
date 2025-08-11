/* nexotech-cc/components/data-deletion-form.tsx */
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type DataDeletionFormProps = {
  heading: string;
  description: string;
  mobileId: string;
  emailId: string;
};

export default function DataDeletionForm({
  heading,
  description,
  mobileId,
  emailId,
}: DataDeletionFormProps) {
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Clear success message after 3 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isSuccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSuccess(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    // Validate: at least one field must be valid
    const isEmailValid = emailRegex.test(formData.email);
    const isPhoneValid = phoneRegex.test(formData.mobile);

    if (!isEmailValid && !isPhoneValid) {
      setError("Please enter a valid email address or a 10-digit mobile number.");
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate network delay

    try {
      console.log("Simulating data deletion request with:", formData);
      setIsSuccess(true);
      setFormData({ mobile: "", email: "" });
    } catch (err) {
      console.error("Simulated submission failed:", err);
      setError("Failed to process request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className="relative overflow-hidden bg-[#111827] text-[#E5E7EB] px-8 py-16 rounded-2xl max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center shadow-xl md:gap-5 min-h-[432px] transition-opacity duration-500 z-0">
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
        {isSuccess ? (
          <div className="mb-6 md:mb-0 md:w-full text-center relative z-[1]">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-green-400">
              Request Received!
            </h2>
            <p className="text-lg text-gray-300">
              Your data deletion request has been successfully submitted. We'll
              process it within 7 business days.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 md:mb-0 md:w-1/2 relative z-[1]">
              <h2 className="text-3xl md:text-4xl font-semibold mb-10">
                {heading}
              </h2>
              <p className="text-lg text-gray-300 md:max-w-[400px]">
                {description}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="md:w-1/2 w-full flex flex-col gap-4 relative z-[1]"
            >
              <div>
                <label
                  htmlFor={mobileId}
                  className="block text-sm mb-1 text-white opacity-50"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id={mobileId}
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="9876543210"
                  className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                />
              </div>

              <p className="text-xs text-gray-400 italic">
                Or
              </p>


              <div>
                <label
                  htmlFor={emailId}
                  className="block text-sm mb-1 text-white opacity-50"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id={emailId}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400"
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm py-2 px-3 bg-red-900/20 rounded-md">
                  {error}
                </div>
              )}

              
              <button
                type="submit"
                className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto flex justify-center items-center gap-2 mt-4"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Request{" "}
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
