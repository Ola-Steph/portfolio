import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Connect</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I&apos;m currently looking for new opportunities, and my inbox is always open. Whether you
            have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="flex items-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/Ola-Steph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-3xl transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jaiyeola-stephen-b04559260/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-3xl transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2349057331822"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 text-3xl transition-colors duration-300"
              aria-label="WhatsApp Contact"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <form
            action="https://formspree.io/f/xrbglobe"
            method="POST"
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-300 focus:outline-none transition duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;