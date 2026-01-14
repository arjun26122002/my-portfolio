import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Net Vibe',
    description: 'A social media application enabling users to like, save, delete, and edit posts, with data stored in MongoDB and Mongoose.',
    technologies: ['React', 'Node.js', 'Redux Toolkit', 'Express.js', 'REST API', 'MongoDB'],
    github: 'https://github.com/arjundey',
    period: 'Jan 2024 – Feb 2024',
  },
  {
    title: 'KBC Clone',
    description: 'A clone website of KBC with integrated data in the frontend, emphasizing the use of states and hooks for enhanced interactivity.',
    technologies: ['React', 'CSS'],
    github: 'https://github.com/arjundey',
    period: 'Feb 2022 – Mar 2022',
  },
  {
    title: 'Cryptonite',
    description: 'An Ethereum-based charity donation platform for anonymity. Created during Hackathon - Diversion 2024.',
    technologies: ['Ethereum', 'Blockchain', 'Web3'],
    period: 'Hackathon 2024',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-yellow-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-yellow-50 mb-12 transition-colors">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-amber-950 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-yellow-50 transition-colors">
                  {project.title}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-yellow-300 hover:text-gray-900 dark:hover:text-yellow-100 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-yellow-400 mb-3 transition-colors">
                {project.period}
              </p>
              <p className="text-gray-700 dark:text-yellow-100 mb-4 flex-grow transition-colors">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-200 dark:bg-amber-900 text-gray-700 dark:text-yellow-200 rounded-full text-xs font-medium transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
