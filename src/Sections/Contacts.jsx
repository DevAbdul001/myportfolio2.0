import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xrbgvqwb");

  if (state.succeeded) {
    return (
      <div className="text-center py-12 bg-green-100">
        <h2 className="text-2xl text-green-600">Thanks for your message!</h2>
        <p>I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <section 
      id="contacts" 
      className="py-16 bg-gray-50 px-4 md:px-20"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
        >
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text" 
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:ring-coral-red focus:border-coral-red"
              placeholder="Tell me about your project..."
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>

          <div>
            <button
              type="submit" 
              disabled={state.submitting}
              className="w-full bg-coral-red text-white py-3 rounded-md  "
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;