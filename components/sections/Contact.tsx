"use client";

import { useForm, ValidationError } from "@formspree/react";
import { siteConfig } from "@/data/content";
import { useState } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xwvnygdy");
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string; email?: string; message?: string }>({});

  const validateAndSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value.trim();
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const newErrors: typeof errors = {};

    // First Name — only letters
    if (!firstName) {
      newErrors.firstName = "First name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(firstName)) {
      newErrors.firstName = "First name must contain only letters.";
    }

    // Last Name — only letters
    if (!lastName) {
      newErrors.lastName = "Last name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(lastName)) {
      newErrors.lastName = "Last name must contain only letters.";
    }

    // Email — valid format
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Message — required
    if (!message) {
      newErrors.message = "Message is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    handleSubmit(e);
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Contact
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 text-xl font-medium mb-10">
        Get in touch.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left side */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
              I'd like to hear from you!
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              If you have any inquiries or just want to say hi, please use the contact form and I'll get back to you!
            </p>
          </div>

          {/* LinkedIn */}
          <div className="mt-10">
            <p className="text-sm text-zinc-400 mb-3">Connect with me</p>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right side — Form */}
        <div>
          {state.succeeded ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
              <span className="text-4xl">🎉</span>
              <p className="text-zinc-900 dark:text-zinc-100 font-semibold text-lg">
                Message sent!
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={validateAndSubmit} className="flex flex-col gap-4">
              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-zinc-600 dark:text-zinc-400">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-zinc-600 dark:text-zinc-400">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-zinc-600 dark:text-zinc-400">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  className="px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-zinc-600 dark:text-zinc-400">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className="self-end px-8 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:opacity-80 transition disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}