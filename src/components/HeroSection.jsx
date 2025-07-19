import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 md:pt-0"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {/* Desktop layout */}
            <div className="hidden md:block">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Emmanuel
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Johnson
              </span>
            </div>
            
            {/* Mobile layout - stacked vertically and centered */}
            <div className="md:hidden flex flex-col items-center space-y-2">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Emmanuel
              </span>
              <span className="text-gradient opacity-0 animate-fade-in-delay-2">
                Johnson
              </span>
            </div>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Research-driven and results-oriented Full Stack Developer with strong expertise in Python, Django, and React. I specialize in building robust back-end systems and crafting dynamic, user-focused front-end interfaces. With a passion for clean code, performance optimization, and modern web architecture, I develop scalable web applications tailored to real-world needs. Through hands-on experience in diverse, real-world projects, I have developed strong time management, problem-solving, and task prioritization skills, consistently delivering high-quality solutions on schedule. I stay ahead of the curve by continuously researching emerging technologies, frameworks, and best practices. I'm especially interested in opportunities that allow me to solve complex challenges, collaborate with forward-thinking teams, and contribute to impactful digital products.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
      </div>
    </section>
  );
};