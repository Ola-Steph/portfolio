import React, { useState } from 'react';

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'education'>('skills');

  return (
    <section
      id="about"
      className="bg-gray-800 text-white py-16 px-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left"
    >
      {/* Left Column: Video */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
          <video
            src="/images/vid.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>

      {/* Right Column: Text */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col items-center md:items-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300 mb-4 max-w-sm md:max-w-md">
          I'm a passionate developer with a strong foundation in front-end and back-end technologies. 
          My journey in tech began with a love for solving problems and bringing creative ideas to life. 
          Over the years, I have honed my skills in building scalable, user-centric applications, 
          always striving to deliver seamless user experiences.
        </p>
        <p className="text-lg text-gray-300 mb-6 max-w-sm md:max-w-md">
          With a commitment to continuous learning, I stay updated with the latest industry trends 
          and tools, ensuring that my solutions are both modern and efficient. I enjoy working in 
          collaborative environments, leveraging my expertise to contribute to impactful projects.
        </p>
        <p className="text-lg text-gray-300 mb-6 max-w-sm md:max-w-md">
          Outside of coding, I love exploring new technologies, sharing knowledge within developer 
          communities, and tackling challenges that push my creative and technical boundaries. 
          Every project I undertake is an opportunity to grow, innovate, and make a meaningful impact.
        </p>

        {/* Tabs */}
        <div className="w-full">
          <div className="flex justify-center md:justify-start border-b border-gray-600 mb-4">
            <button
              className={`px-4 py-2 text-lg font-medium ${
                activeTab === 'skills'
                  ? 'border-b-2 border-yellow-300 text-yellow-300'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={`px-4 py-2 text-lg font-medium ${
                activeTab === 'education'
                  ? 'border-b-2 border-yellow-300 text-yellow-300'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            {activeTab === 'skills' && (
              <div className="grid grid-cols-3 gap-4 text-left text-gray-300">
                <ul className="space-y-2">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>React</li> 
                  <li>JWT (JSON Web Tokens)</li>
                </ul>
                <ul className="space-y-2">
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>REST APIs</li>
                  <li>Bcrypt</li>
                  <li>Git </li>
                </ul>
                <ul className="space-y-2">
                
                  <li>GitHub</li>
                  <li>PHP</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>Redux</li>
                  <li>Axios</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            )}
            {activeTab === 'education' && (
              <ul className="list-disc list-inside text-left text-gray-300 space-y-4">
                <li>
                  Bachelor's Degree in Computer Science - Pearson Institute, 
                  Midrand Campus, South Africa (2017–2020)
                </li>
                <li>
                  Bachelor's Degree Honors in Software Engineering - Eduvos, 
                  Midrand, South Africa (Jan 2021–Dec 2021)
                </li>
                <li>
                  App Academy Open - Specialization: Software Development
                  <br />
                  <span className="text-gray-400">www.appacademy.io (Feb 2023–Dec 2023)</span>
                  <br />
                  Academic Achievement: Software Engineering
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;