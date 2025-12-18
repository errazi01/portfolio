import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's work together.</h2>
        <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
          I'm currently available for freelance work and new opportunities in mobile and web development.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 2xl:gap-24">
          <div className="relative">
            <a
              href="mailto:djelloul.errazi@gmail.com"
              onClick={(e) => {
                // Optional: prevent default if we ONLY want copy, but keeping it allows mail app launch + copy
                // e.preventDefault(); 
                navigator.clipboard.writeText("djelloul.errazi@gmail.com");
                const tooltip = document.getElementById('email-tooltip');
                if (tooltip) {
                  tooltip.classList.remove('opacity-0', 'invisible');
                  setTimeout(() => tooltip.classList.add('opacity-0', 'invisible'), 2000);
                }
              }}
              className="flex items-center space-x-3 text-neutral-300 hover:text-white transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Mail size={18} />
              </div>
              <span className="text-lg">djelloul.errazi@gmail.com</span>
            </a>
            <span
              id="email-tooltip"
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-primary-600 text-white text-xs px-2 py-1 rounded opacity-0 invisible transition-all duration-300 whitespace-nowrap"
            >
              Copied to clipboard!
              <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-primary-600"></span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <ClickTooltip text="Coming Soon">
              <button className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-2 cursor-pointer">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </button>
            </ClickTooltip>

            <a href="https://github.com/errazi01" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-2">
              <Github size={20} />
              <span>errazi01</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Duplicated for verified simplicty, normally would extract to shared component
const ClickTooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 2000);
  };

  return (
    <div className="relative inline-block" onClick={handleClick}>
      {children}
      {isVisible && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-neutral-800 text-white text-xs px-2 py-1 rounded transition-opacity whitespace-nowrap z-50 animate-fade-in-up">
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-neutral-800"></span>
        </span>
      )}
    </div>
  );
};

export default Contact;