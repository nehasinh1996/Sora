import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Namyaa Skincare</h2>
      <p className="mb-2">
        <strong>Mobile:</strong> +91 999 050 7902
      </p>
      <p className="mb-2">
        <strong>Email:</strong> info@namyaa.in
      </p>
      <p className="mb-2">
        <strong>WhatsApp:</strong> +91 99905 07902
      </p>
      <p className="mb-4">
        <strong>Address:</strong> RG Biocosmetic Private Limited, C-65 Okhla Phase 1, New Delhi 110020, India.
      </p>
      <h3 className="text-lg font-semibold">Stay Connected</h3>
      <div className="flex space-x-4 mt-2">
        {/* Add social media icons/links here */}
      </div>
    </div>
  );
};

export default ContactInfo;
