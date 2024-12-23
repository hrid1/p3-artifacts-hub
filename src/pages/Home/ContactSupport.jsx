import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSupport = () => {
  return (
    <div className="bg-base-100 py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact & Support</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-700 mb-4">
            Have questions or need help? Reach out to us via the details below.
          </p>
          <div className="flex items-center gap-4 mb-3">
            <FaEnvelope className="text-amber-400 text-xl" />
            <span className="text-gray-700">support@artifacttracker.com</span>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <FaPhoneAlt className="text-amber-400 text-xl" />
            <span className="text-gray-700">+123-456-7890</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-amber-400 text-xl" />
            <span className="text-gray-700">
              123 Artifact Lane, History City, HC 45678
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="btn bg-amber-300 hover:bg-amber-400 w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
