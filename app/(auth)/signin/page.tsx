
"use client";


import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FieldError {
  field: string;
  message: string;
}

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldError[]>([]);
  const [generalError, setGeneralError] = useState("");
  const router = useRouter();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const getFieldError = (fieldName: string): string | undefined => {
    return fieldErrors.find((err) => err.field === fieldName)?.message;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFieldErrors([]);
    setGeneralError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      setGeneralError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          setFieldErrors(data.errors);
          setGeneralError("Please fix the errors below.");
        } else {
          setGeneralError(data.message || "Login failed. Please try again.");
        }
        setLoading(false);
        return;
      }

      localStorage.setItem("auth_token", data.token); // Save token
      router.push("/dashboard"); // Redirect to dashboard
    } catch (error) {
      setGeneralError(error instanceof Error ? error.message : "An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">Sign in to your account</h1>

      {generalError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {generalError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              getFieldError("email") ? "border-red-500" : ""
            }`}
            required
          />
          {getFieldError("email") && (
            <p className="mt-1 text-sm text-red-600">{getFieldError("email")}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              getFieldError("password") ? "border-red-500" : ""
            }`}
            required
          />
          {getFieldError("password") && (
            <p className="mt-1 text-sm text-red-600">
              {getFieldError("password")}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <Link
          href="/reset-password"
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
}