import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-amber-950 dark:to-yellow-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in order-2 md:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-yellow-50 mb-4 transition-colors">
              Arjun Dey
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-yellow-100 mb-6 transition-colors">
              Software Engineer & Full-Stack Developer
            </p>
            <p className="text-lg text-gray-600 dark:text-yellow-200 mb-8 transition-colors">
              Building scalable web applications with React, Node.js, and TypeScript.
              Team Lead with experience in AI-powered solutions and modern web technologies.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-600 dark:text-yellow-200">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Kolkata</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:arjun.dey.2612@gmail.com" className="hover:text-gray-900 dark:hover:text-yellow-100 transition-colors">
                  arjun.dey.2612@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 8100014395</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/arjundey2612/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-700 dark:bg-amber-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-amber-800 transition-all hover:scale-105"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/arjun26122002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-amber-900 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-yellow-900 transition-all hover:scale-105"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/whatsapp261202.jpeg"
              alt="Arjun Dey"
              className="w-full max-w-sm md:max-w-full rounded-2xl shadow-2xl object-cover hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
