import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Globe, Code } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every system deserves robust protection against digital threats"
    },
    {
      icon: Target,
      title: "Precision Focus",
      description: "Targeting vulnerabilities with surgical precision and ethical approach"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Contributing to a safer digital world for everyone"
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Constantly learning and adapting to emerging technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cyber font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by curiosity and powered by passion for cybersecurity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border cyber-glow">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Mission</h3>
              <blockquote className="text-lg italic text-foreground mb-4 border-l-4 border-primary pl-4">
                "Making the internet a safer place — one system at a time."
              </blockquote>
              <p className="text-muted-foreground leading-relaxed">
                I'm Sumant Sanjay Deshmukh, a passionate DFIR and cybersecurity enthusiast currently pursuing my BTech in Electronics and Computer Science. My journey into digital forensics began with a fascination for understanding how attackers operate and how we can trace, analyze, and stop them before they cause harm.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border cyber-glow">
              <h3 className="text-2xl font-bold mb-4 text-cyber-green">Vision & Goals</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With a long-term goal of becoming a leading Digital Forensics and Incident Response (DFIR) specialist, I'm dedicated to mastering the art of threat hunting, malware analysis, and forensic investigation. I believe that swift incident response and thorough forensic analysis are crucial to minimizing damage and preventing future attacks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My vision extends beyond personal growth — I aspire to contribute to our nation's cybersecurity defense by investigating cyber incidents, uncovering attack patterns, and helping organizations build resilient security postures. From analyzing digital evidence to responding to security breaches, I'm committed to being on the frontlines of cyber defense.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="cyber-glow hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto w-16 h-16 mb-4">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
                    <div className="relative bg-gradient-cyber rounded-full p-4 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-background" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "2028", label: "Expected Graduation" },
            { number: "3+", label: "Years of Learning" },
            { number: "100%", label: "Commitment to Security" },
            { number: "∞", label: "Passion for Learning" }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl font-cyber font-bold text-primary mb-2 group-hover:animate-pulse-glow transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;