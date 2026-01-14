import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Supreme Knowledge Foundation',
    period: 'Sept 2020 – June 2024',
    grade: 'CGPA: 8.65/10',
    coursework: ['Linear Algebra', 'Statistics', 'Machine Learning', 'Data Structures and Algorithms'],
  },
  {
    degree: 'Higher Secondary (WBBCHSE)',
    institution: 'Bally Nischinda Chittaranjan Vidyalaya',
    location: 'Bally, Howrah, 711206',
    period: 'Aug 2018 - July 2020',
    grade: '85.6%',
  },
  {
    degree: 'Secondary (WBBSE)',
    institution: 'Bally Nischinda Chittaranjan Vidyalaya',
    location: 'Bally, Howrah, 711206',
    period: 'Jan 2011 - July 2018',
    grade: '59.4%',
  },
];

const achievements = [
  {
    title: 'Hackathon - Diversion 2024',
    description: 'Created Cryptonite - An Ethereum based charity donation platform for anonymity.',
  },
  {
    title: 'Led High-Performing Team',
    description: 'Successfully led and coordinated a 14-member software development team.',
  },
  {
    title: 'Owned Project Dependencies',
    description: 'Acted as a primary dependency owner, ensuring smooth cross-team collaboration.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-amber-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-yellow-50 mb-12 transition-colors">
          Education & Achievements
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-yellow-50 mb-6 flex items-center gap-2 transition-colors">
            <GraduationCap size={28} className="text-gray-700 dark:text-yellow-300" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-yellow-950 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-yellow-50 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-700 dark:text-yellow-200 font-medium mt-1 transition-colors">
                      {edu.institution}
                    </p>
                    {edu.location && (
                      <p className="text-gray-600 dark:text-yellow-300 text-sm transition-colors">
                        {edu.location}
                      </p>
                    )}
                    <p className="text-gray-700 dark:text-yellow-100 font-semibold mt-2 transition-colors">
                      {edu.grade}
                    </p>
                    {edu.coursework && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white dark:bg-amber-900 text-gray-700 dark:text-yellow-100 rounded-full text-sm border border-gray-200 dark:border-amber-800 transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-gray-600 dark:text-yellow-300 mt-2 md:mt-0 md:text-right transition-colors">
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-yellow-50 mb-6 flex items-center gap-2 transition-colors">
            <Award size={28} className="text-gray-700 dark:text-yellow-300" />
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-yellow-950 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-yellow-50 mb-2 transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-gray-700 dark:text-yellow-100 text-sm transition-colors">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
