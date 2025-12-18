import { ArrowRight, Smartphone, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100 rounded-full blur-3xl opacity-30 -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-primary-100 shadow-sm animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
          </span>
          <span className="text-sm font-medium text-primary-800">Available for new projects</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl 2xl:text-8xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
          Crafting Digital <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Experiences
          </span> with Impact
        </h1>

        <p className="max-w-3xl mx-auto text-xl text-neutral-600 mb-10 leading-relaxed">
          I’m <strong className="text-neutral-900">Djellouli Abderrahmane Errazi</strong>, a minimalist creative developer specializing in high-performance mobile apps and smart, scalable solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#projects"
            className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-primary-200 hover:shadow-primary-300 flex items-center"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-xl font-semibold transition-all duration-300 hover:border-primary-200 flex items-center"
          >
            Contact Me
          </a>
        </div>

        {/* Tech Stack Icons Floating */}
        <div className="mt-20 flex justify-center space-x-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <Smartphone size={32} />
          <Code size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;