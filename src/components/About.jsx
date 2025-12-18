const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-50 rounded-full -z-10" />
            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">My Journey</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                I am a passionate developer with a diverse background in mobile development and machine learning.
                My approach combines technical precision with creative problem-solving.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Whether it's building intuitive Flutter apps or integrating complex AI models,
                I strive for code that is clean, efficient, and user-centric.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Bridging the gap between <span className="text-primary-600">Complex Logic</span> and <span className="text-primary-600">Intuitive Design</span>.
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Based in the intersection of mobile tech and data science, I build products that are not just functional, but smart.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border border-neutral-100 rounded-xl bg-neutral-50">
                <h4 className="font-bold text-2xl text-primary-600 mb-1">Mobile First</h4>
                <p className="text-sm text-neutral-500">Expertise in Flutter & Native Dev</p>
              </div>
              <div className="p-4 border border-neutral-100 rounded-xl bg-neutral-50">
                <h4 className="font-bold text-2xl text-primary-600 mb-1">AI Integration</h4>
                <p className="text-sm text-neutral-500">Machine Learning & Python</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;