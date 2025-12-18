import { useState } from 'react';
import { Github, X, Play } from 'lucide-react';
import arVideo from '../assets/augented_reality_navigation.mp4';
import walkVideo from '../assets/walk.mp4';
import smartMenuVideo from '../assets/smart_menu.mp4';
import walkLogo from '../assets/walk.png';
import smartMenuLogo from '../assets/smart_menu.png';

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      title: "Augmented Reality Navigation",
      year: "2024",
      description: "Innovative navigation solution for large facilities (hospitals, universities). Integrates student timetables with AR pathfinding.",
      tags: ["Unity", "AR", "HTML/PHP"],
      video: arVideo,
      logoType: 'text',
      logoContent: 'AR',
      bgColor: 'bg-primary-800'
    },
    {
      title: "Walk – Activity Tracker",
      year: "2024",
      description: "Complete mobile app for tracking physical activity, hydration, and generating personalized health statistics.",
      tags: ["Flutter", "Firebase", "Figma"],
      video: walkVideo,
      logoType: 'image',
      logoContent: walkLogo,
      bgColor: 'bg-primary-800'
    },
    {
      title: "Smart Menu",
      year: "2025",
      description: "Intelligent meal planning assistant with intuitive UI and personalized suggestions.",
      tags: ["Flutter", "Supabase", "Figma"],
      video: smartMenuVideo,
      logoType: 'image',
      logoContent: smartMenuLogo,
      bgColor: 'bg-primary-800'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Featured Projects</h2>
            <p className="text-neutral-600">Showcasing mobile and AR innovation.</p>
          </div>

          <ClickTooltip text="Coming Soon">
            <button className="hidden md:flex items-center text-primary-600 font-medium hover:text-primary-700 cursor-not-allowed opacity-60">
              View all projects
            </button>
          </ClickTooltip>
        </div>

        <div className="grid md:grid-cols-3 gap-8 2xl:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onOpenVideo={() => setSelectedVideo(project.video)} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden inline-block w-full">
          <ClickTooltip text="Coming Soon">
            <button className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 cursor-not-allowed opacity-60">
              View all projects
            </button>
          </ClickTooltip>
        </div>
      </div>

      {/* Video Modal */}
      {/* Video Modal - Layout Updated to match video */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
          {/* Constrain max height/width but fit content */}
          <div className="relative w-auto h-auto max-w-[90vw] max-h-[90vh] overflow-hidden rounded-xl shadow-2xl flex items-center justify-center bg-black" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <video
              src={selectedVideo}
              className="w-full h-full object-contain max-h-[90vh]"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
};

const ProjectCard = ({ project, onOpenVideo }) => {
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={onOpenVideo}
    >

      {/* Play Icon Overlay */}
      <div className="absolute top-4 right-4 z-20">
        <div className="p-2 bg-white/90 text-primary-600 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Play size={20} fill="currentColor" />
        </div>
      </div>

      {/* Card Header / Logo Area - Black BG, Centered */}
      <div className={`h-48 w-full ${project.bgColor} overflow-hidden relative flex items-center justify-center`}>

        {/* Logo / Text */}
        <div className="z-10 transform group-hover:scale-110 transition-transform duration-300">
          {project.logoType === 'image' ? (
            // Increased logo size (h-24 -> h-32)
            <img src={project.logoContent} alt={`${project.title} logo`} className="h-32 w-auto drop-shadow-lg object-contain" />
          ) : (
            // Decreased font size (text-6xl -> text-4xl)
            <span className="text-4xl font-black text-white tracking-tighter drop-shadow-md opacity-90">
              {project.logoContent}
            </span>
          )}
        </div>

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-semibold tracking-wider text-primary-600 uppercase bg-primary-50 px-2 py-1 rounded">
            {project.year}
          </span>
          <div onClick={(e) => e.stopPropagation()}>
            <button disabled className="text-neutral-300 cursor-not-allowed">
              <Github size={18} />
            </button>
          </div>
        </div>

        <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-neutral-600 text-sm mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs font-medium text-neutral-500 border border-neutral-200 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Click Tooltip Component
const ClickTooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop propagation
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 2000); // Hide after 2 seconds
  };

  return (
    <div className="relative inline-block" onClick={handleClick}>
      {children}
      {isVisible && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-neutral-800 text-white text-xs px-2 py-1 rounded transition-opacity whitespace-nowrap z-50 animate-fade-in-up">
          {text}
          {/* Tiny arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-neutral-800"></span>
        </span>
      )}
    </div>
  );
};

export default Projects;