"use client";

import { useState } from "react";

interface FieldError {
  field: string;
  message: string;
}

export default function LeadCollection() {
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

    const form = e.currentTarget; // Store the form reference
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
        setLoading(false);
        return;
      }

      setSuccessMessage("Thank you! Your details have been submitted.");
      form.reset(); // Use the stored reference
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
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Submit Your Details</h1>
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
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}