import React from 'react';

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
