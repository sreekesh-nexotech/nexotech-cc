"use client";

import { useState } from "react";
import Header from "@/components/ui/header";

interface FieldError {
  field: string;
  message: string;
}

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldError[]>([]);
  const [generalError, setGeneralError] = useState("");

  const getFieldError = (fieldName: string): string | undefined => {
    return fieldErrors.find((err) => err.field === fieldName)?.message;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setFieldErrors([]);
    setGeneralError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.errors && Array.isArray(responseData.errors)) {
          setFieldErrors(responseData.errors);
          setGeneralError("Please fix the errors below.");
        } else {
          setGeneralError(responseData.message || "Something went wrong");
        }
        return;
      }

      setSuccessMessage("Thank you! Your details have been submitted.");
      form.reset();
      setFieldErrors([]);
    } catch (error) {
      console.error(error);
      setGeneralError(
        error instanceof Error
          ? error.message
          : "An error occurred while submitting your details."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header
        isLogin={true}
        bookLink="/form"
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Form Heading - positioned right below header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Submit Your Details</h1>
          <p className="mt-2 text-gray-600">We'll get back to you shortly</p>
        </div>

        {successMessage && (
          <p className="mb-4 p-4 bg-green-100 text-green-700 rounded">
            {successMessage}
          </p>
        )}
        {generalError && (
          <p className="mb-4 p-4 bg-red-100 text-red-700 rounded">
            {generalError}
          </p>
        )}

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  name="name"
                  id="name"
                  className={`form-input w-full py-2 ${
                    getFieldError("name") ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="John Doe"
                  required
                />
                {getFieldError("name") && (
                  <p className="mt-1 text-sm text-red-600">
                    {getFieldError("name")}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="phone"
                >
                  Mobile Number
                </label>
                <input
                  name="phone"
                  id="phone"
                  className={`form-input w-full py-2 ${
                    getFieldError("phone") ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="(+750) 932-8907"
                  required
                />
                {getFieldError("phone") && (
                  <p className="mt-1 text-sm text-red-600">
                    {getFieldError("phone")}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email ID
                </label>
                <input
                  name="email"
                  id="email"
                  className={`form-input w-full py-2 ${
                    getFieldError("email") ? "border-red-500" : ""
                  }`}
                  type="email"
                  placeholder="johndoe@email.com"
                  required
                />
                {getFieldError("email") && (
                  <p className="mt-1 text-sm text-red-600">
                    {getFieldError("email")}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="company"
                >
                  Company Name (Optional)
                </label>
                <input
                  name="company"
                  id="company"
                  className={`form-input w-full py-2 ${
                    getFieldError("company") ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="ABC Corp"
                />
                {getFieldError("company") && (
                  <p className="mt-1 text-sm text-red-600">
                    {getFieldError("company")}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  id="message"
                  className={`form-textarea w-full py-2 ${
                    getFieldError("message") ? "border-red-500" : ""
                  }`}
                  rows={4}
                  placeholder="Enter your message..."
                ></textarea>
                {getFieldError("message") && (
                  <p className="mt-1 text-sm text-red-600">
                    {getFieldError("message")}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Contact Us Directly
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Sales Support
                </h3>
                <p className="text-gray-600">
                  Call us for immediate assistance
                </p>
                <a
                  href="tel:9429693529"
                  className="mt-1 text-blue-600 hover:text-blue-800 font-medium block"
                >
                  +91 9429693529
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                <p className="text-gray-600">For sales-related inquiries</p>
                <a
                  href="mailto:sales@nexotech.cc"
                  className="mt-1 text-blue-600 hover:text-blue-800 font-medium block"
                >
                  sales@nexotech.cc
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

  return (
    <>
      <Header
        isLogin={true}
        bookLink="/form"
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Form Heading - positioned right below header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Submit Your Details</h1>
          <p className="mt-2 text-gray-600">We'll get back to you shortly</p>
        </div>

        {successMessage && (
          <p className="mb-4 p-4 bg-green-100 text-green-700 rounded">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="mb-4 p-4 bg-red-100 text-red-700 rounded">
            {errorMessage}
          </p>
        )}

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  name="name"
                  id="name"
                  className="form-input w-full py-2"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="phone"
                >
                  Mobile Number
                </label>
                <input
                  name="phone"
                  id="phone"
                  className="form-input w-full py-2"
                  type="text"
                  placeholder="(+750) 932-8907"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email ID
                </label>
                <input
                  name="email"
                  id="email"
                  className="form-input w-full py-2"
                  type="email"
                  placeholder="johndoe@email.com"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="company"
                >
                  Company Name (Optional)
                </label>
                <input
                  name="company"
                  id="company"
                  className="form-input w-full py-2"
                  type="text"
                  placeholder="ABC Corp"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="form-textarea w-full py-2"
                  rows={4}
                  placeholder="Enter your message..."
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Contact Us Directly
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Sales Support
                </h3>
                <p className="text-gray-600">
                  Call us for immediate assistance
                </p>
                <a
                  href="tel:9429693529"
                  className="mt-1 text-blue-600 hover:text-blue-800 font-medium block"
                >
                  +91 9429693529
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                <p className="text-gray-600">For sales-related inquiries</p>
                <a
                  href="mailto:sales@nexotech.cc"
                  className="mt-1 text-blue-600 hover:text-blue-800 font-medium block"
                >
                  sales@nexotech.cc
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
