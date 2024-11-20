import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10"
    >
      {/* Left Column: Text */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-16 sm:pt-20 md:pt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-snug sm:leading-tight">
          Hi, I&apos;m <span className="text-yellow-300">Jaiyeola Stephen</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 max-w-md sm:max-w-lg">
          I&apos;m a passionate web developer dedicated to crafting elegant and efficient solutions for the digital world.
          With a deep love for code, design, and innovation, I specialize in building responsive, user-focused websites 
          that deliver seamless experiences across all devices.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-md sm:max-w-lg">
          My expertise lies in modern web technologies, clean design, and performance-driven solutions. 
          Whether you&apos;re looking for a developer to bring your idea to life or enhance your online presence, 
          I&apos;m here to make it happen.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <a
            href="/path/to/cv.pdf"
            download
            className="w-full sm:w-auto border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg transition duration-300 text-center"
          >
            Download My CV
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg transition duration-300 text-center"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="md:w-1/2 flex justify-center items-center mt-6 sm:mt-8 md:mt-0">
        <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
          <Image
            src="/images/air.jpg"
            alt="Profile"
            width={320} // Adjust width as needed
            height={320} // Adjust height as needed
            className="w-full h-full object-cover rounded-full"
            priority // Ensures the image is loaded with high priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
