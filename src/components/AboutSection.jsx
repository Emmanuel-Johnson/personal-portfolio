import { Database, Code, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Full Stack Developer</h3>
            <p className="text-muted-foreground">
              I am a passionate Full Stack Developer specializing in Python, Django, React, and SQL. With a strong foundation in both backend and frontend development, I enjoy building scalable, high-performance web applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground">
              My expertise lies in creating powerful backend systems with Django, crafting responsive interfaces using React, and managing data efficiently with SQL. I’m always eager to learn new technologies, take on challenges, and contribute to projects that make a meaningful impact. Full stack development allows me to blend creativity with logic — and that’s what keeps me excited every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating user-focused websites and web applications using modern frameworks like Django and React.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">API Development</h4>
                  <p className="text-muted-foreground">
                    Building powerful and scalable RESTful APIs with Django REST Framework to enable seamless frontend-backend integration.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database Management</h4>
                  <p className="text-muted-foreground">
                    Managing data effectively using SQL, with a focus on performance, security, and structured data handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
