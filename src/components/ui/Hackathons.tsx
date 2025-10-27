import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy,
  ExternalLink,
  Github,
  Calendar,
  Zap,
  BarChart3,
  Code,
  Palette
} from 'lucide-react';

const Hackathons = () => {
  const projects = [
    {
      title: "Customer Sentiment Watchdog",
      subtitle: "Product Space Hackathon (August 2025)",
      shortDescription: "A real-time sentiment analysis dashboard built in 48 hours. It identifies nuanced customer emotions and visualizes trends with a live chart.",
      fullDescription: "As my submission for the Product Space Hackathon, I developed the Customer Sentiment Watchdog, a dynamic front-end application built from scratch in under 48 hours. The project simulates a real-time dashboard that analyzes customer feedback from various platforms. Using vanilla JavaScript, it categorizes comments into nuanced emotions like frustration, excitement, and disappointment. Data is visualized with a live-updating chart from Chart.js, and a priority alert system flags urgent negative feedback. This project demonstrates my ability to rapidly prototype, develop, and deliver a functional product under a tight deadline.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "Chart.js", "Git", "GitHub", "UI/UX"],
      liveDemo: "https://Sd8738.github.io/Customer-Sentiment-Watchdog/",
      sourceCode: "https://github.com/Sd8738/Customer-Sentiment-Watchdog",
      duration: "48 hours",
      achievement: "Completed MVP",
      icon: BarChart3
    }
  ];

  const skills = [
    { name: "Rapid Prototyping", icon: Zap },
    { name: "JavaScript Development", icon: Code },
    { name: "Data Visualization", icon: BarChart3 },
    { name: "UI/UX Design", icon: Palette }
  ];

  return (
    <section id="hackathons" className="py-20 matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cyber font-bold mb-6">
            Hackathons & <span className="text-primary">Competitions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions under pressure, showcasing rapid development skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="cyber-glow bg-card/50 backdrop-blur-sm border-border overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                      <p className="text-sm text-cyber-blue font-medium">{project.subtitle}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-cyber-green border-cyber-green/30">
                    <Trophy className="w-3 h-3 mr-1" />
                    {project.achievement}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Short Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Full Description */}
                <div className="bg-secondary/30 rounded-lg p-4 border border-border/50">
                  <h4 className="font-semibold text-primary mb-2">Project Details</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-cyber-blue" />
                    <span>Duration: {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-cyber-green" />
                    <span>Status: {project.achievement}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="cyber-glow"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(project.sourceCode, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Developed */}
        <Card className="cyber-glow bg-card/50 backdrop-blur-sm border-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Skills Developed Through Competitions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground">{skill.name}</h4>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-cyber-green/5 rounded-lg border border-primary/20">
              <p className="text-center text-muted-foreground italic">
                "Hackathons have taught me to think fast, code efficiently, and deliver results under pressure. 
                Each challenge pushes me to explore new technologies and refine my problem-solving approach."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hackathons;