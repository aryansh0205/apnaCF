"use client";
import { motion } from "framer-motion";
import {FiClock, FiMessageSquare, FiSend } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaFacebook, FaRegBuilding } from "react-icons/fa";
import Footer from "../components/Footer"
import Header from "../components/Header";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "easeOut",
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <Header/>
      {/* Hero Section */}
      <div className="relative bg-red-200 md:py-36 py-24  overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots pattern-red-500 pattern-bg-white pattern-size-4 pattern-opacity-100" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold text-black sm:text-5xl"
            >
              Contact ApnaCity Business Team
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl text-black/90 max-w-2xl mx-auto"
            >
              Get in touch for business listings, advertising, and partnerships
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Business Information Section */}
      <div className="relative z-10 -mt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Primary Business Contacts */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-red-50 p-4 flex justify-center">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <FaRegBuilding className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Primary Contact</h3>
              <p className="text-gray-600 mb-4">For corporate inquiries</p>
              <div className="space-y-2">
                <a
                  href="tel:+919876543210"
                  className="text-red-600 font-medium hover:text-red-700 block"
                >
                  (+91) 6306 760 227
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Email: support@apnacity.in
                </p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-red-50 p-4 flex justify-center">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <FiClock className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between">
                  <span className="font-medium">Weekdays:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 5:00 PM</span>
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  *24/7 support for premium partners
                </p>
              </div>
            </div>
          </div>

          {/* Business Registration */}
          {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-red-50 p-4 flex justify-center">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <FiBriefcase className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Information</h3>
              <div className="space-y-2 text-gray-600">
                <p>Name: ApnaCity</p>
                <p>CIN: U12345DL2023PTC123456</p>
                <p className="text-sm text-gray-500 mt-2">
                  Registered Office: Delhi, India
                </p>
              </div>
            </div>
          </div> */}

          {/* Social Media */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-red-50 p-4 flex justify-center">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <FiMessageSquare className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Social Media</h3>
              <p className="text-gray-600 mb-4">Connect with our business team</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://linkedin.com/"
                  className="text-blue-700 hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/"
                  className="text-blue-400 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com/"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/6306760227"
                  className="text-green-500 hover:text-green-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <div className=" py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            <div className="bg-gradient-to-r from-red-600 to-orange-500 p-6 text-white">
              <h2 className="text-2xl font-bold">Business Inquiry Form</h2>
              <p className="opacity-90 mt-1">
                Complete this form for business partnerships and listings
              </p>
            </div>
            <div className="p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="business-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="business-type"
                      name="business-type"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                      required
                    >
                      <option value="">Select Business Type</option>
                      <option value="retail">Retail</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="service">Service Provider</option>
                      <option value="manufacturer">Manufacturer</option>
                      <option value="wholesaler">Wholesaler</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Employees
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                    >
                      <option value="">Select Range</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">
                    Nature of Inquiry <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                    required
                  >
                    <option value="">Select Inquiry Type</option>
                    <option value="listing">Business Listing</option>
                    <option value="advertising">Advertising</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Detailed Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                    Subscribe to our business newsletter
                  </label>
                </div>

                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
                  >
                    Submit Business Inquiry <FiSend className="ml-2" />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

    <Footer/>
    </div>
  );
}