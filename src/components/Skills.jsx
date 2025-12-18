import { CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["Flutter", "Mobile App Design", "Android/iOS"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "PHP", "React"]
    },
    {
      title: "Data & AI",
      skills: ["Machine Learning", "Python", "Data Analysis"]
    },
    {
      title: "Tools & Design",
      skills: ["Figma", "Git", "Firebase", "Supabase"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Technical Proficiency</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A versatile skillset spanning from frontend UI to backend logic and intelligent algorithms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-neutral-100 hover:border-primary-200 transition-colors shadow-sm hover:shadow-md">
              <h3 className="text-lg font-bold text-neutral-900 mb-6 pb-2 border-b border-neutral-100">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-neutral-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;