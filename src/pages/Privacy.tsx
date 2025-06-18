
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Nitesh Books. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our 
                website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Identity Data: first name, last name, username</li>
                <li>Contact Data: email address, telephone numbers, addresses</li>
                <li>Transaction Data: details about payments and purchases</li>
                <li>Technical Data: internet protocol (IP) address, browser type and version</li>
                <li>Usage Data: information about how you use our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your personal data for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To process transactions and send related information</li>
                <li>To send periodic emails regarding your order or other products and services</li>
                <li>To improve customer service and support</li>
                <li>To personalize user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate data collection, storage and processing practices and security measures 
                to protect against unauthorized access, alteration, disclosure or destruction of your personal 
                information, username, password, transaction information and data stored on our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or rent your personal identification information to others. We may share 
                generic aggregated demographic information not linked to any personal identification information 
                regarding visitors and users with our business partners and trusted affiliates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under data protection laws, you have rights including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to rectification of your personal data</li>
                <li>The right to erasure of your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: niteshbusiness06@gmail.com</p>
                <p>Phone: +91 9896762610</p>
                <p>Address: Rewari, Haryana, India</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by 
                posting the new privacy policy on this page and updating the "last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
