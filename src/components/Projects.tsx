import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Shield, MapPin, Camera, Database, Users, Smartphone, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "AuthenTrack 2.0",
    subtitle: "Smart Attendance Management System",
    description: "AuthenTrack is a smart attendance management app designed to make classroom attendance secure, fast, and proxy-free. It uses webcam verification, location tracking, and real-time Firebase integration to ensure every record is authentic. Built with React and Firebase, the app offers dedicated dashboards for Students, Teachers, and HODs, simplifying attendance tracking and improving transparency. It's lightweight, installable as a Progressive Web App (PWA), and optimized for both web and Android platforms.",
    liveDemo: "https://authen-track2-0.vercel.app/",
    sourceCode: "https://github.com/Sd8738/AuthenTrack2.0.git",
    technologies: [
      { name: "React", color: "cyber-blue" },
      { name: "Firebase", color: "cyber-red" },
      { name: "PWA", color: "cyber-green" },
      { name: "Real-time Database", color: "cyber-blue" },
      { name: "Geolocation API", color: "cyber-green" },
      { name: "Camera API", color: "cyber-red" }
    ],
    features: [
      { icon: Camera, text: "Webcam Verification" },
      { icon: MapPin, text: "Location Tracking" },
      { icon: Database, text: "Real-time Firebase Integration" },
      { icon: Users, text: "Multi-role Dashboards" },
      { icon: Smartphone, text: "Progressive Web App" },
      { icon: Shield, text: "Proxy-free Attendance" }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold neon-text mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications built with modern technologies, solving practical problems with innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="cyber-glow bg-card/50 backdrop-blur-sm border-border hover:scale-[1.02] transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl md:text-3xl leading-tight group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-gradient-cyber text-white">Featured</Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className={`bg-${tech.color}/10 text-${tech.color} border-${tech.color}/30 hover:bg-${tech.color}/20 transition-colors`}
                      >
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      className="w-full cyber-glow bg-gradient-cyber group-hover:scale-105 transition-all duration-300"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Live Demo
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <a 
                    href={project.sourceCode} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full cyber-glow group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="text-center mt-12">
          <div className="bg-card/30 rounded-lg border border-border backdrop-blur-sm p-8 cyber-glow">
            <h3 className="text-2xl font-bold mb-4">
              More Projects <span className="text-primary">Coming Soon</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm constantly working on new projects and exploring innovative technologies. 
              Stay tuned for more exciting developments in cybersecurity, web development, and beyond!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;