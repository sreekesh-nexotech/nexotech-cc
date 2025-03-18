"use client";

import { useState } from "react";

export default function LeadCollection() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const form = e.currentTarget; // Store the form reference
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      setSuccessMessage("Thank you! Your details have been submitted.");
      form.reset(); // Use the stored reference
    } catch (error) {
      console.error(error);
      setErrorMessage(error instanceof Error ? error.message : "An error occurred while submitting your details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Submit Your Details</h1>
      </div>

      {successMessage && <p className="mb-4 text-green-600">{successMessage}</p>}
      {errorMessage && <p className="mb-4 text-red-600">{errorMessage}</p>}

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
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}