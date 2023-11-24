import React from 'react';

const Contact = () => {
  return (
    <div id="Contact">
      <div className="container mx-auto mt-10">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

        <p className="text-lg mb-4">
          Have questions or concerns? Reach out to us using the information below:
        </p>

        <div className="flex flex-col space-y-2">
          <p className="text-lg font-semibold">Email: info@carshop.com</p>
          <p className="text-lg font-semibold">Phone: +1 (555) 123-4567</p>
          {/* Add more contact information as needed */}
        </div>

        <p className="text-lg mt-6">
          We look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
