/* nexotech-cc/components/data-deletion-form.tsx */
"use client";
import Image from "next/image";
import { useState, useEffect } from "react"; // Import useEffect

type DataDeletionFormProps = {
  heading: string;
  description: string;
  nameId: string;
  emailId: string;
};

export default function DataDeletionForm({
  heading,
  description,
  nameId,
  emailId,
}: DataDeletionFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // State for success message

  // useEffect to clear success message after 3 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000); // 3000 milliseconds = 3 seconds
    }
    return () => clearTimeout(timer); // Clean up the timer
  }, [isSuccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSuccess(false); // Reset success state on new submission

    // Simulate loading for a few seconds
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

    try {
      // Simulate a successful submission
      console.log("Simulating data deletion request with:", formData);
      setIsSuccess(true); // Set success state
      setFormData({ name: "", email: "" }); // Clear form data on success
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
                  htmlFor={nameId}
                  className="block text-sm mb-1 text-white opacity-50"
                >
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
                <label
                  htmlFor={emailId}
                  className="block text-sm mb-1 text-white opacity-50"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id={emailId}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400"
                  required
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