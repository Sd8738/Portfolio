import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      level: "BTech in Electronics & Computer Science (Major) And AI & Data Science (Minor)",
      institution: "Padmabhooshan Vasantraodada Patil Institute of Technology",
      university: "DBATU University",
      period: "2024 - 2028 (Expected)",
      location: "Maharashtra, India",
      status: "Current",
      description: "Specializing in cybersecurity, networking, and computer systems. Building a strong foundation in both hardware and software security aspects.",
      highlights: [
        "Cybersecurity Fundamentals",
        "Network Security Protocols", 
        "Digital Forensics",
        "Ethical Hacking Methodologies"
      ]
    },
    {
      level: "Higher Secondary Certificate (HSC)",
      institution: "Willingdon College",
      university: "Maharashtra State Board",
      period: "2022 - 2024",
      location: "Sangli, Maharashtra",
      status: "Completed",
      description: "Completed science stream with focus on Mathematics, Physics, and Computer Science, laying the groundwork for technical education.",
      highlights: [
        "Science Stream", 
        "Computer Science",
        "Mathematics",
        "Physics"
      ]
    },
    {
      level: "Secondary School Certificate (SSC)",
      institution: "The Cambridge School",
      university: "Maharashtra State Board", 
      period: "2020 - 2022",
      location: "Miraj, Maharashtra",
      status: "Completed",
      description: "Strong academic foundation with early interest in technology and computer systems.",
      highlights: [
        "Academic Excellence",
        "Technology Interest",
        "Leadership Skills",
        "Extracurricular Activities"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cyber font-bold mb-6">
            Educational <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through structured learning and hands-on experience
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-cyber opacity-50"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-pulse-glow"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? '' : 'md:mr-0'}`}>
                  <Card className="cyber-glow hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm border-border">
                    <CardContent className="p-6">
                      {/* Status badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Current' 
                            ? 'bg-cyber-green/20 text-cyber-green border border-cyber-green/30'
                            : 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30'
                        }`}>
                          {edu.status}
                        </span>
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>

                      {/* Education details */}
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {edu.level}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-primary mb-1">
                        {edu.institution}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {edu.university}
                      </p>

                      {/* Meta information */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-foreground">Key Highlights:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded border border-border"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current focus */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto cyber-glow bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Current Academic Focus
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a BTech student in Electronics and Computer Science, I'm diving deep into the intersection of hardware and software security. My coursework provides a comprehensive understanding of system vulnerabilities, network protocols, and defensive strategies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-cyber font-bold text-cyber-blue mb-2">2028</div>
                  <div className="text-sm text-muted-foreground">Expected Graduation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-cyber font-bold text-cyber-green mb-2">7.34</div>
                  <div className="text-sm text-muted-foreground">Current CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-cyber font-bold text-cyber-red mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Learning Mindset</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;