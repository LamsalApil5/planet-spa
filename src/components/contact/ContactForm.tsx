"use client";

import type React from "react";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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
          <p className="text-xl font-light">spaplanet93@gmail.com</p>
          <div className="space-y-1">
            <p className="text-xl font-light">Phone. +97798458323239,</p>
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