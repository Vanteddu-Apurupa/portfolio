export const Projects = () => {
  return (
  <section id="projects"
  className="min-h-screen flex items-center justify-center py-20"
  >
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
      {" "}
      Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
          <h3 className="text-xl font-bold mb-2">ClimaCast</h3>
          <p className="text-gray-400 mb-4">
          Engineered a dynamic weather application that fetches real-time meteorological data via APIs, providing users
          with key weather insights like temperature and humidity; improved app engagement by 20% within four
          months.
              </p>
              <div>
                {["MERN","MongoDB"].map((tech,key)=>(
                  <span  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a href="https://climacast123.netlify.app/home" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
              </div>

        </div>


        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
          <h3 className="text-xl font-bold mb-2">MEDISYNC</h3>
          <p className="text-gray-400 mb-4">
          Developed a seamless virtual platform enabling users to book virtual medical appointments, access e
          prescriptions, and retrieve medical records effortlessly; enhanced healthcare accessibility and efficiency, reducing
          consultation wait times by 40% within six months
              </p>
              <div>
                {["SpringBoot","MySQL"].map((tech,key)=>(
                  <span  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a href="https://vanteddu-apurupa.github.io/Medical/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
              </div>

        </div>


      </div>
  </div>

  </section>
  );
};
