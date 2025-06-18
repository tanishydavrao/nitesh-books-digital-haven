
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Refund = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed">
                At Nitesh Books, we are committed to providing high-quality digital books and exceptional 
                customer service. We want you to be completely satisfied with your purchase. This refund 
                policy outlines the terms and conditions for refunds on digital book purchases.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Digital Products Refund Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Due to the nature of digital products, all sales are generally final. However, we offer 
                refunds in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Technical issues preventing download or access to the purchased book</li>
                <li>Duplicate purchases made by mistake</li>
                <li>Significant content discrepancies from the product description</li>
                <li>Books that are corrupted or unreadable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Time Frame</h2>
              <p className="text-gray-700 leading-relaxed">
                Refund requests must be made within 7 days of the original purchase date. After this period, 
                we cannot guarantee a refund unless there are exceptional circumstances or technical issues 
                on our end.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request a Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Contact our customer support team at niteshbusiness06@gmail.com</li>
                <li>Include your order number and purchase details</li>
                <li>Provide a clear explanation of the reason for the refund request</li>
                <li>Include any relevant screenshots or documentation</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Processing</h2>
              <p className="text-gray-700 leading-relaxed">
                Once your refund request is approved, we will process the refund within 3-5 business days. 
                The refund will be credited back to the original payment method used for the purchase. 
                Please note that it may take additional time for the refund to appear in your account 
                depending on your bank or payment processor.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Items</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following items are not eligible for refunds:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Books that have been successfully downloaded and accessed</li>
                <li>Gift cards or promotional codes</li>
                <li>Subscription services after the trial period</li>
                <li>Books purchased more than 7 days ago (unless technical issues)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Exchanges</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not offer direct exchanges for digital books. If you wish to purchase a different 
                book, please request a refund for the original purchase (if eligible) and make a new 
                purchase for the desired item.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our refund policy or need assistance with a refund request, 
                please contact us:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: niteshbusiness06@gmail.com</p>
                <p>Phone: +91 9896762610</p>
                <p>Address: Rewari, Haryana, India</p>
                <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update or modify this refund policy at any time. Any changes will 
                be effective immediately upon posting on our website. We encourage you to review this 
                policy periodically to stay informed about our refund procedures.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Refund;
