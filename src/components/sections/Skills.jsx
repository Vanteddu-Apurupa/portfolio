export const Skills = () => {
  const skills = [
    { name: "C++", icon: "/images/skills/c++.jpeg" },
    { name: "Java", icon: "/images/skills/java.png" },
    { name: "Python", icon: "/images/skills/pythn.png" },
    { name: "JavaScript", icon: "/images/skills/js.png" },
    { name: "CSS", icon: "/images/skills/css3.svg" },
    { name: "HTML", icon: "/images/skills/html5.png" },
    { name: "TailwindCSS", icon: "/images/skills/tailwindcss.png" },
    { name: "Node.js", icon: "/images/skills/nodejs.png" },
    { name: "React.js", icon: "/images/skills/react.js.png" },
    { name: "GitHub", icon: "/images/skills/github.png" },
    { name: "MySQL", icon: "/images/skills/mysql.png" },
    { name: "MongoDB", icon: "/images/skills/mngDB.webp" },
    { name: "Spring Boot", icon: "/images/skills/spring.png" },
    { name: "AWS", icon: "/images/skills/AWS.png" },
    { name: "Docker", icon: "/images/skills/Docker.png" },
    { name: "Jenkins", icon: "/images/skills/jenkins.jpeg" }
  ];

  return (
    <section id="skills" className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map(({ name, icon }) => (
          <div key={name} className="flex flex-col items-center">
            <img src={icon} alt={name} className="w-16 h-16" />
            <p className="mt-2 text-gray-300">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;