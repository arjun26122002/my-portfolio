import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-yellow-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-yellow-50 mb-12 transition-colors">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-700 dark:text-yellow-100 mb-12 text-lg transition-colors">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:arjun.dey.2612@gmail.com"
              className="flex items-center gap-4 p-6 bg-white dark:bg-amber-950 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 bg-gray-200 dark:bg-amber-900 rounded-lg transition-colors">
                <Mail className="text-gray-700 dark:text-yellow-300" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-yellow-400 transition-colors">Email</p>
                <p className="text-gray-900 dark:text-yellow-50 font-medium transition-colors">
                  arjun.dey.2612@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+918100014395"
              className="flex items-center gap-4 p-6 bg-white dark:bg-amber-950 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 bg-gray-200 dark:bg-amber-900 rounded-lg transition-colors">
                <Phone className="text-gray-700 dark:text-yellow-300" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-yellow-400 transition-colors">Phone</p>
                <p className="text-gray-900 dark:text-yellow-50 font-medium transition-colors">
                  +91 8100014395
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-white dark:bg-amber-950 rounded-lg shadow-md">
              <div className="p-3 bg-gray-200 dark:bg-amber-900 rounded-lg transition-colors">
                <MapPin className="text-gray-700 dark:text-yellow-300" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-yellow-400 transition-colors">Location</p>
                <p className="text-gray-900 dark:text-yellow-50 font-medium transition-colors">
                  Kolkata, India
                </p>
              </div>
            </div>

            <a
              href="hhttps://www.linkedin.com/in/arjundey2612/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white dark:bg-amber-950 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 bg-gray-200 dark:bg-amber-900 rounded-lg transition-colors">
                <Linkedin className="text-gray-700 dark:text-yellow-300" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-yellow-400 transition-colors">LinkedIn</p>
                <p className="text-gray-900 dark:text-yellow-50 font-medium transition-colors">
                  Connect with me
                </p>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/arjun26122002"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 dark:bg-amber-900 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-amber-800 transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              View My GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
