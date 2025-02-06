import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import MaxWidthWrapper from "./CustomComponents/MaxWidthWrapper";

const ContactUs = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center py-6 mb-10 bg-white px-6">
      <h4 className="text-blue-500 font-semibold uppercase text-sm tracking-wide">
        Ready to Support
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 text-center">
        Anything unclear or <em className="italic text-gray-600">need help?</em>
      </h2>
      <p className="text-gray-500 mt-3 text-center">
        Relax, we are ready to support 24/7 for you
      </p>

      <div className="lg:w-2/3 md:w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 ">
          <div className="border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition">
            <FaEnvelope className="text-blue-600 text-2xl mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">Contact Us</h3>
            <p className="text-gray-500 text-sm text-center mt-2">
              Contact us to seek help from us, we will help you as soon as
              possible.
            </p>
            <a
              href="mailto:info@leadsnextech.com"
              className="text-gray-600 font-medium mt-2 cursor-pointer hover:text-blue-700"
            >
              info@leadsnextech.com
            </a>
            <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400  transition">
              Contact →
            </button>
          </div>

          <div className="border border-gray-200 shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition">
            <FaPhoneAlt className="text-blue-600 text-2xl mb-4" />
            <h3 className="text-lg font-semibold text-blue-900">
              Customer Service
            </h3>
            <p className="text-gray-500 text-sm text-center mt-2">
              Contact us to seek help from us, we will help you as soon as
              possible.
            </p>
            <a
              href="tel:+08128903427"
              className="text-gray-600 font-medium mt-2 cursor-pointer hover:text-blue-700"
            >
              +08 128 903427
            </a>
            <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400  transition">
              Call Now →
            </button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactUs;
