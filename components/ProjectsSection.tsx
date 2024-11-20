import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Hair Salon',
      description: 'A sleek hair salon web application with modern UI and booking functionality.',
      image: '/images/prophair.png',
      liveDemo: 'https://hair-salon-gkn6vevcb-ola-stephs-projects.vercel.app/',
    },
    {
      title: 'Calculator App',
      description: 'A responsive calculator application built with React and TypeScript.',
      image: '/images/propcalc.png',
      liveDemo: 'https://jtechbdev.github.io/Calculator/',
    },
    {
      title: 'Cleaning Service Website',
      description: 'A professional cleaning service website featuring service details and a contact form.',
      image: '/images/prop3.png',
      liveDemo: 'https://cleaningwebsite-w39m.vercel.app/',
    },
    {
      title: 'Task Tracker',
      description: 'A task management app with drag-and-drop functionality.',
      image: '/images/proptask.png',
      liveDemo: 'https://jtechbdev.github.io/todo-list/',
    },
    {
      title: 'Weather App',
      description: 'A weather application that provides real-time updates for any location.',
      image: '/images/propweather.png',
      liveDemo: 'https://jtechbdev.github.io/weatherapp/',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing skills, projects, and contact information.',
      image: '/images/propporfolio.png',
      liveDemo: 'https://your-live-demo-7.com',
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Project Image */}
            <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Project Title */}
            <h3 className="text-xl font-semibold text-center">{project.title}</h3>
            {/* Project Description */}
            <p className="text-gray-400 mt-2 mb-6 text-center">{project.description}</p>
            {/* Buttons */}
            <div className="mt-auto flex flex-col items-center space-y-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black px-4 py-2 rounded-full text-sm transition-colors duration-300"
              >
                Live Demo
              </a>
              <button
                className="w-full text-center border-2 border-yellow-300 text-yellow-300 px-4 py-2 rounded-full text-sm cursor-not-allowed"
                disabled
              >
                GitHub Repo Available on Request
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
