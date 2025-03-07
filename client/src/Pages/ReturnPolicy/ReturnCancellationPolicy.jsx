import React from "react";

const ReturnCancellationPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800 mt-29">
      {/* Heading */}
      <h1 className="text-5xl font-semibold text-center">Return & Cancellation Policy</h1>
      <p className="text-center text-lg mb-8 mt-15">
        We understand that plans change, and we aim to make returns and cancellations as smooth as possible. Please read our policy below.
      </p>

   

      {/* Return & Cancellation Policy Sections */}
      <div className="space-y-12">
        <div className="text-center">
          <p className="text-gray-600">
            Returns: If you are not satisfied with your purchase, you can return the item within **7 days** of delivery. The item must be unused, in its original condition, and with all tags and packaging intact.
            Refunds for Returns: Once we receive your returned item, the refund will be processed within **5-7 business days** to your original payment method.
            Cancellations:Orders can be canceled within **24 hours** of placement, provided they haven’t been shipped yet. Once shipped, cancellations are not possible.
            Non-Returnable Items:Personalized, perishable, and hygiene-related items cannot be returned. Please review product descriptions before purchase.
            Non-Returnable Items: Personalized, perishable, and hygiene-related items cannot be returned. Please review product descriptions before purchase.
            Return Shipping Costs: Customers are responsible for return shipping costs unless the item is defective or incorrect. We recommend using a trackable shipping method.
          </p>
        </div>


       

        

     

        <div className="text-center">
          <p className="text-gray-600">
            If you have any questions, feel free to reach out at{" "}
            <a href="mailto:sorasupport@gmail.com" className="text-blue-600 hover:underline">
              sorasupport@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ReturnCancellationPolicy;
