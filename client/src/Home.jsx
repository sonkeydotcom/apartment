import React from "react";
import { Link } from "react-router-dom";
import hero from "./assets/hero.jpg";
import features from "./assets/64ee0a8eb51a218a7968f325_as-seeon-n.svg";
import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import avatar from "./assets/avatar.png";
import hal from "./assets/halstead.svg";

const Home = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis elit, fermentum nec rhoncus ac, efficitur vel nulla. Sed venenatis justo nec volutpat vulputate.",
      avatar: avatar,
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Sed id eros nec sem condimentum aliquet. Cras ultricies sem eu arcu posuere, ac posuere neque fringilla. Duis vel fringilla odio. Nullam sed turpis ac magna consectetur laoreet.",
      avatar: avatar,
    },
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "How do I submit a rental application?",
      answer:
        "You can submit a rental application by visiting our website and filling out the online application form. Make sure to provide accurate information and required documentation.",
    },
    {
      id: 2,
      question: "What is the screening process for tenants?",
      answer:
        "Our tenant screening process includes background checks, credit checks, employment verification, and rental history verification to ensure reliable and responsible tenants.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="bg-gray-100 font-sans">
      {/* Header */}

      <header className="bg-slate-800 text-gray-100 py-2 text-center">
        <img src={hal} alt="Halstead Properties" className="w-auto mx-auto" />
      </header>

      {/* Hero Section with Background Image */}
      <section
        className="bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="max-w-7xl mx-auto px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Streamline Your Rental Application Process
          </h2>
          <p className="text-lg mb-8">
            Effortlessly manage applications, screen tenants, and provide
            exceptional service.
          </p>
          <a
            href="/signup"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* As Seen On Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            As Seen On
          </h2>
          <div className="flex justify-center items-center space-x-8">
            {/* Add logos or names of publications */}
            <img src={features} alt="features" className="h-auto" />
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-center bg-gray-300 p-6 rounded-lg">
              {/* Feature Icon */}
              <svg
                className="w-12 h-12 text-indigo-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7c0-1.65685425 1.34314575-3 3-3h9c1.6568542 0 3 1.34314575 3 3v10c0 1.6568542-1.3431458 3-3 3H6c-1.65685425 0-3-1.3431458-3-3V7zM9 13l3 3m0 0l3-3m-3 3V8"
                />
              </svg>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Manage Applications
              </h2>
              <p className="text-gray-600">
                Effortlessly manage and track rental applications from
                prospective tenants.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-300 p-6 rounded-lg">
              {/* Feature Icon */}
              <svg
                className="w-12 h-12 text-indigo-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Tenant Screening
              </h2>
              <p className="text-gray-600">
                Efficiently screen tenants with our comprehensive screening
                tools and background checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Popular Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add popular services */}
            <div className="flex flex-col justify-center items-center bg-gray-200 p-6 rounded-lg">
              <img src={one} alt="features" className="h-auto w-24" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Tenant Screening
              </h2>
              <p className="text-gray-600">
                Efficiently screen tenants with our comprehensive screening
                tools and background checks.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-200 p-6 rounded-lg">
              <img src={two} alt="features" className="h-auto w-24" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Lease Management
              </h2>
              <p className="text-gray-600">
                Streamline lease management with automated reminders, rent
                collection, and lease renewal notifications.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-200 p-6 rounded-lg">
              <img src={three} alt="features" className="h-auto w-24" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Document Storage
              </h2>
              <p className="text-gray-600">
                Securely store and manage important documents, such as leases,
                applications, and tenant records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Display testimonials */}
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-800">{testimonial.text}</p>
                    <p className="text-gray-600 mt-2">- {testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 bg-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          {/* Display FAQs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div>
            <p>&copy;2024 Halsteadrealty. All rights reserved.</p>
            {/* Contact information */}
            <p>E-mail: support@halsteadrealty.rent | Tel: 123-456-7890</p>
          </div>
          <div>
            {/* Footer links */}
            <ul className="flex space-x-4">
              <li>
                <Link to="/login">Landlord</Link>
              </li>

              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
