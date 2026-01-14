import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'INFOMATICAE TECHNOLOGY PVT LTD',
    location: 'Kolkata',
    period: 'Feb 2024 – Present',
    highlights: [
      'Developed and enhanced a Diamond ERP platform using React.js, TypeScript, Material-UI, and Nest.js (REST APIs)',
      'Managed PostgreSQL databases using TypeORM and containerized backend services using Docker for scalable deployments',
      'Led full-stack enhancements focused on performance optimization and user experience',
      'Integrated Razorpay payment gateway to facilitate online transactions securely and smoothly',
      'Developed real-time messaging features with WebSockets (Socket.io) to communicate instantly over the platform',
      'Built AI-powered academic platforms (Virtual School / Hello Teacher / Power School) serving students, teachers, parents, and admins',
      'Implemented LLM-based features such as AI-generated academic content and intelligent query handling',
      'Designed and integrated text embedding pipelines for academic data to enable semantic understanding and search',
      'Utilized a Vector Database to store and retrieve embeddings for fast similarity search and contextually aware responses',
      'Applied Retrieval-Augmented Generation (RAG) to provide precise and curriculum-aligned AI responses',
      'Created AI-driven 3D animation videos using the open-source SadTalker model from Hugging Face for interactive and engaging educational content',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'TCM STUNNER IT CONSULTANT LLP',
    location: 'Kolkata',
    period: 'Jul 2023 – Jan 2024',
    highlights: [
      'Developed UI pages and integrated logic for web and mobile applications using React Native, React.js, and Tailwind CSS',
      'Implemented server-side logic using Express.js with RESTful API endpoints to ensure smooth data exchange',
      'Managed PostgreSQL databases using TypeORM for efficient data storage and retrieval, while collaborating with team members to enhance user interaction and satisfaction',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-yellow-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-yellow-50 mb-12 transition-colors">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-amber-950 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-yellow-50 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-yellow-200 mt-1 transition-colors">
                    <Briefcase size={18} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <p className="text-gray-600 dark:text-yellow-300 mt-1 transition-colors">
                    {exp.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-yellow-300 mt-2 md:mt-0 transition-colors">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 dark:text-yellow-100 flex items-start transition-colors"
                  >
                    <span className="text-gray-700 dark:text-yellow-400 mr-2 mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
