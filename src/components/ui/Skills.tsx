import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Network, 
  Terminal, 
  Eye, 
  Cpu, 
  Lightbulb,
  Monitor,
  Award,
  ExternalLink,
  Trophy
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity Core",
      icon: Shield,
      color: "cyber-blue",
      skills: [
        { name: "Cybersecurity Fundamentals", level: 85, description: "Understanding threat landscapes and security principles" },
        { name: "Penetration Testing", level: 70, description: "Ethical hacking methodologies and vulnerability assessment" },
        { name: "Digital Forensics", level: 75, description: "Incident response and evidence collection techniques" },
        { name: "Risk Assessment", level: 80, description: "Identifying and evaluating security risks" }
      ]
    },
    {
      title: "Networking & Protocols",
      icon: Network,
      color: "cyber-green", 
      skills: [
        { name: "Network Security", level: 85, description: "Securing network infrastructure and communications" },
        { name: "TCP/IP Protocols", level: 90, description: "Deep understanding of internet protocol suite" },
        { name: "Firewall Configuration", level: 75, description: "Network perimeter security and access control" },
        { name: "VPN Technologies", level: 70, description: "Secure remote access solutions" }
      ]
    },
    {
      title: "Operating Systems",
      icon: Monitor,
      color: "cyber-red",
      skills: [
        { name: "Linux Security", level: 80, description: "Unix/Linux system administration and hardening" },
        { name: "Windows Security", level: 85, description: "Microsoft ecosystem security and management" },
        { name: "Command Line Interface", level: 90, description: "Proficiency in terminal and shell scripting" },
        { name: "System Hardening", level: 75, description: "Securing operating system configurations" }
      ]
    },
    {
      title: "Additional Skills",
      icon: Lightbulb,
      color: "cyber-purple",
      skills: [
        { name: "Project Management", level: 85, description: "Planning and executing technical projects" },
        { name: "Responsive Web Design", level: 85, description: "Creating adaptive interfaces across all devices" },
        { name: "Progressive Web Apps (PWAs)", level: 80, description: "Building installable, offline-capable applications" },
        { name: "Design Thinking", level: 85, description: "User-centered approach to problem solving" },
        { name: "Incident Response", level: 70, description: "Managing and mitigating security incidents" },
        { name: "Compliance & Standards", level: 75, description: "Understanding regulatory requirements" },
        { name: "Security Awareness", level: 90, description: "Educating users about security best practices" }
      ]
    }
  ];

  const achievedCertifications = [
    { 
      name: "The Future of Ethical Hacking: AI as an Ally in Cyber Defense", 
      issuer: "LinkedIn Learning", 
      category: "Cybersecurity",
      icon: Shield,
      color: "cyber-blue",
      certificateUrl: "https://www.linkedin.com/learning/certificates/1ABMP77117308"
    },
    { 
      name: "AzureXplore", 
      issuer: "Microsoft Azure", 
      category: "Cloud Computing",
      icon: Cpu,
      color: "cyber-purple",
      certificateUrl: "https://drive.google.com/file/d/10YZsRHZgzKLRrovdvKYyE-GWersJBiLW/view?usp=sharing"
    },
    { 
      name: "Networking Foundations: Protocols and CLI Tools", 
      issuer: "LinkedIn Learning", 
      category: "Networking",
      icon: Network,
      color: "cyber-green",
      certificateUrl: "https://www.linkedin.com/learning/certificates/43ec15e205981431b5771db85e111f88cf7b702cbff0d6d5a72322664b132966"
    },
    { 
      name: "Design Thinking: Understanding the Process", 
      issuer: "LinkedIn Learning", 
      category: "Professional Development",
      icon: Lightbulb,
      color: "cyber-red",
      certificateUrl: "https://www.linkedin.com/learning/certificates/c4d59e9e2eb71b79b8d6bd2b0e4ea74668b463e8fa3c5bf2f471892206a7f7be"
    },
    { 
      name: "Cybersecurity Awareness: Cybersecurity Terminology", 
      issuer: "LinkedIn Learning", 
      category: "Cybersecurity",
      icon: Eye,
      color: "cyber-blue",
      certificateUrl: "https://www.linkedin.com/learning/certificates/62996bf91e5d2e6f6d884475bee469ba0a225df581a5d61b1133a46df59d278d"
    },
    { 
      name: "Cybersecurity Training by Acmegrade", 
      issuer: "Acmegrade", 
      category: "Cybersecurity",
      icon: Shield,
      color: "cyber-blue",
      certificateUrl: "https://cert.diceid.com/cid/JUHus1Mqgw"
    },
    { 
      name: "Smartcops Hackathon", 
      issuer: "Smartcops", 
      category: "Achievement",
      icon: Trophy,
      color: "cyber-purple",
      certificateUrl: "https://drive.google.com/file/d/1Encle98n6rnNkzTg_ojcri2p-OEPR3-B/view?usp=sharing"
    },
    { 
      name: "Prompt Engineering & Programming with OpenAI", 
      issuer: "Columbia+", 
      category: "AI & Machine Learning",
      icon: Cpu,
      color: "cyber-purple",
      certificateUrl: "https://badges.plus.columbia.edu/d0611a34-2046-4d52-a5ca-cb5cb3aafadd"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cyber font-bold mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building comprehensive expertise in cybersecurity and digital defense
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="cyber-glow bg-card/50 backdrop-blur-sm border-border hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/20 border border-${category.color}/30`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="space-y-2"
                      style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s` }}
                    >
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-foreground">{skill.name}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Development Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Professional Development & <span className="text-primary">Ongoing Learning</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="cyber-glow bg-card/50 backdrop-blur-sm border-border hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-cyber-blue/20 border border-cyber-blue/30">
                    <Terminal className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">Pre Security Learning Path</h4>
                    <p className="text-sm text-cyber-blue font-medium">TryHackMe</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building a foundational understanding of computer networking, web application basics, and security principles through interactive, hands-on virtual labs.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-glow bg-card/50 backdrop-blur-sm border-border hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-cyber-green/20 border border-cyber-green/30">
                    <Monitor className="w-6 h-6 text-cyber-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">Information Security Foundations Path</h4>
                    <p className="text-sm text-cyber-green font-medium">Hack The Box Academy</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Developing practical skills in system setup, command-line usage, and core security concepts in a lab-based environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certificates Achieved */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Certificates <span className="text-primary">Achieved</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievedCertifications.map((cert, index) => (
              <a 
                key={cert.name}
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card 
                  className="cyber-glow bg-card/50 backdrop-blur-sm border-border hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4 relative">
                      <ExternalLink className="absolute top-0 right-0 w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div className={`p-2 rounded-lg bg-${cert.color}/20 border border-${cert.color}/30 flex-shrink-0`}>
                        <cert.icon className={`w-5 h-5 text-${cert.color}`} />
                      </div>
                      <div className="flex-1 min-w-0 pr-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-${cert.color}/10 text-${cert.color} border border-${cert.color}/20`}>
                            Completed
                          </span>
                        </div>
                        <h4 className="font-bold text-sm mb-2 text-foreground leading-tight group-hover:text-primary transition-colors">{cert.name}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                        <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-muted/30 text-muted-foreground">
                          {cert.category}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <Card className="cyber-glow bg-card/50 backdrop-blur-sm border-border">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Continuous Learning Philosophy
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              In the rapidly evolving field of cybersecurity, staying current with emerging threats and technologies is crucial. I'm committed to continuous learning, hands-on practice, and staying ahead of the curve in digital security.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-cyber font-bold text-cyber-blue">50+</div>
                <div className="text-sm text-muted-foreground">Hours of Study Weekly</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-cyber font-bold text-cyber-green">10+</div>
                <div className="text-sm text-muted-foreground">Security Tools Explored</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-cyber font-bold text-cyber-purple">8</div>
                <div className="text-sm text-muted-foreground">Certificates Earned</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-cyber font-bold text-cyber-red">∞</div>
                <div className="text-sm text-muted-foreground">Passion for Learning</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;