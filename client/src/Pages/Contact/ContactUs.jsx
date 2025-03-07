import React, { useState } from "react";
import { FaChevronDown, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Add this at the top of ProfileMenu.js


import Map from "../../Component/Contact/Map";

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "You can track your order in the 'My Orders' section of your account.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Products must be unused and in original packaging.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship internationally. Shipping rates may vary based on location.",
  },
  {
    question: "Are your products cruelty-free?",
    answer:
      "Yes, all our skincare products are cruelty-free and not tested on animals.",
  },
  {
    question:
      "I am not happy with the resolution provided by Customer Support; how do I proceed now?",
    answer:
      "You can escalate the issue by reaching out to our support team via email or phone.",
  },
];

const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="grid grid-cols-2 h-[400px] bg-gray-100">
          <div className="h-full">
            <img
              src='ContactUs.png'
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-md">
                  <button
                    className="w-full text-left text-gray-800 font-medium flex justify-between items-center transition-all duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <FaChevronDown
                      className={`transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Write Us</h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 mb-4 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full p-2 mb-4 border rounded-md"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-2 mb-4 border rounded-md"
              />
              <textarea
                placeholder="Comment"
                className="w-full p-2 mb-4 border rounded-md"
                rows="4"
              ></textarea>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                Send
              </button>
            </form>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Company Name</h2>
            <p className="mb-2">
              <strong>Mobile:</strong> +91 8978364363
            </p>
            <p className="mb-2">
              <strong>Email:</strong> sorainfo@example.com
            </p>
            <p className="mb-2">
              <strong>WhatsApp:</strong> +91 989874635
            </p>
            <p className="mb-4">
              <strong>Address:</strong> SORA Pvt. Ltd, New Delhi, India.
            </p>
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="flex space-x-4 mt-2">
              <NavLink to="#" className="text-blue-600 text-2xl">
                <FaFacebook/>
              </NavLink>
              <NavLink to="#" className="text-red-600 text-2xl">
                <FaInstagram/>
              </NavLink>
              <NavLink to="#" className="text-blue-400 text-2xl">
                <FaLinkedin/>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px]">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
