export default function Footer() {
  return (
    <footer className="bg-white dark:bg-amber-950 border-t border-gray-200 dark:border-amber-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-600 dark:text-yellow-300 transition-colors">
          © {new Date().getFullYear()} Arjun Dey. Built with React & TypeScript.
        </p>
      </div>
    </footer>
  );
}
