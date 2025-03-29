"use client";

import type React from "react";

import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // EmailJS template parameters
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message || "No message provided",
    };

    try {
      const result = await emailjs.send(
        "service_a5iljwp", // Your EmailJS service ID
        "template_sj18lpk", // Your EmailJS template ID
        templateParams,
        "dLYmxH-t0aDOlLqdh" // Your EmailJS public key
      );

      if (result.status === 200) {
        toast.success("Email sent successfully!");

        // Reset form data after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email. Please check your connection.");
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-20">
      {/* Contact Header */}
      <h1 className="text-[80px] md:text-[120px] font-normal leading-none tracking-tighter mb-16 md:mb-24">
        CONTACT
      </h1>

      <div className="grid md:grid-cols-2 gap-x-20">
        {/* Contact Information */}
        <div className="space-y-6 mb-12 md:mb-0">
          <p className="text-xl font-light">Planetspapokhara@gmail.com</p>
          <div className="space-y-1">
            <p className="text-xl font-light">Phone. +9779845832239,</p>
            <p className="text-xl font-light">9804914524</p>
          </div>
          <p className="text-xl font-light">Pokhara-6, lakeside (NEPAL)</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-1">
            <input
              type="text"
              placeholder="First name *"
              required
              className="w-full px-0 py-2 bg-transparent border-0 border-b border-black focus:ring-0 focus:border-black text-lg placeholder:text-black/70"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>

          <div className="space-y-1">
            <input
              type="text"
              placeholder="Last name *"
              required
              className="w-full px-0 py-2 bg-transparent border-0 border-b border-black focus:ring-0 focus:border-black text-lg placeholder:text-black/70"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>

          <div className="space-y-1">
            <input
              type="email"
              placeholder="Email *"
              required
              className="w-full px-0 py-2 bg-transparent border-0 border-b border-black focus:ring-0 focus:border-black text-lg placeholder:text-black/70"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="space-y-1">
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-0 py-2 bg-transparent border-0 border-b border-black focus:ring-0 focus:border-black text-lg placeholder:text-black/70 resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-zinc-900 text-white py-3 text-lg font-light hover:bg-zinc-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
