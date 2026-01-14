import { Code, Database, Layers, Zap, Palette, Server, Brain } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['Java', 'C', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    icon: Layers,
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'NestJS', 'FastAPI', 'REST APIs'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Vector Databases'],
  },
  {
    icon: Zap,
    title: 'Real-Time & Payments',
    skills: ['Socket.io (WebSockets)', 'Razorpay'],
  },
  {
    icon: Brain,
    title: 'AI / ML & GenAI',
    skills: ['LLMs', 'RAG', 'Text Embeddings', 'Hugging Face'],
  },
  {
    icon: Palette,
    title: 'UI & Styling',
    skills: ['Material-UI', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub', 'Linux'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-amber-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-yellow-50 mb-12 transition-colors">
          Technologies & Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-yellow-950 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-200 dark:bg-amber-900 rounded-lg transition-colors">
                    <Icon className="text-gray-700 dark:text-yellow-200" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-yellow-50 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white dark:bg-amber-900 text-gray-700 dark:text-yellow-100 rounded-full text-sm border border-gray-200 dark:border-amber-800 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
