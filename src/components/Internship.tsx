import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Terminal, Network, Eye, Lock, FileText, ExternalLink, Laptop, Target, Code } from 'lucide-react';

const Internship = () => {
  const miniProjects = [
    {
      title: "Footprinting & Reconnaissance",
      icon: Eye,
      description: "Conducted a comprehensive footprinting project to understand how ethical hackers gather information about a target system before performing security testing.",
      goal: "Identify how much public information could be collected about an organization and its network using both passive and active footprinting techniques.",
      learnings: [
        "Explored social media & public data for passive footprinting",
        "Used tools like Shodan, Netcraft, and Wappalyzer to analyze target website technologies",
        "Found subdomains, SSL/TLS strength, and checked security headers",
        "Practiced Google Dorking, IP analysis, and port scanning to simulate reconnaissance",
        "Gained hands-on experience in identifying potential vulnerabilities in web systems"
      ],
      reportUrl: "https://drive.google.com/file/d/1lpjfg1LHoycCBqFgc8t_UBErjX9vqnW_/view?usp=sharing",
      color: "cyber-blue"
    },
    {
      title: "Anonymity & Privacy in Cybersecurity Operations",
      icon: Lock,
      description: "Focused on learning how to stay anonymous online while performing cybersecurity operations. Explored privacy mechanisms, identity masking techniques, and the safe use of proxy tools in ethical hacking environments.",
      goal: "Understand how attackers and defenders use anonymity to protect systems or identities, and how technologies like VPNs, Proxychains, and TOR enhance privacy.",
      learnings: [
        "Practiced MAC address spoofing using macchanger for wired connections",
        "Used VPNs and Proxychains to test IP masking and DNS leak protection",
        "Configured TOR (The Onion Router) for multi-layered network anonymity",
        "Understood risks like DNS leaks, proxy failures, and speed vs. security tradeoffs",
        "Combined multiple tools to create secure, anonymized browsing and testing environments"
      ],
      reportUrl: "https://drive.google.com/file/d/1-OeR9RVBRRUhZHxLBqH9XAV_fmutpQM1/view?usp=sharing",
      color: "cyber-green"
    }
  ];

  const learningAreas = [
    { icon: Network, text: "Network Security, Web Application Security, and Digital Forensics" },
    { icon: Terminal, text: "Hands-on labs with Wireshark, Burp Suite, Nmap, and Metasploit" },
    { icon: Shield, text: "Introduction to Cybersecurity fundamentals" },
    { icon: Laptop, text: "Working on Linux-based environments and system vulnerabilities" },
    { icon: Code, text: "Threat detection, malware analysis, and security automation" }
  ];

  const tools = [
    "Wireshark", "Burp Suite", "Nmap", "Metasploit", 
    "Shodan", "Netcraft", "Wappalyzer", "Proxychains",
    "TOR", "VPN", "Macchanger", "Linux"
  ];

  return (
    <section id="internship" className="py-20 matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cyber font-bold mb-6">
            Professional <span className="text-primary">Training & Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gaining hands-on cybersecurity expertise through structured training and real-world projects
          </p>
        </div>

        {/* Main Internship Card */}
        <Card className="mb-12 cyber-glow bg-card/80 backdrop-blur-sm border-border">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Shield className="w-12 h-12 text-primary animate-pulse-glow" />
                  <div className="absolute inset-0 w-12 h-12 bg-primary/20 rounded-full blur-md animate-pulse-glow"></div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Cybersecurity Training & Internship
                  </h3>
                  <p className="text-xl text-primary font-semibold">Acmegrade</p>
                </div>
              </div>
              <Badge className="bg-cyber-green/20 text-cyber-green border border-cyber-green/30 px-4 py-2 text-sm animate-pulse">
                Currently Training
              </Badge>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              I'm currently undergoing Cybersecurity training at Acmegrade, where I'm building a strong foundation in information security, DFIR, and ethical hacking through hands-on learning and real-world exercises.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              This training focuses on understanding both offensive and defensive security concepts, helping me connect theoretical knowledge with practical implementation.
            </p>

            {/* Learning Areas */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                What I'm Learning & Practicing:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningAreas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{area.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-foreground mb-3">Tools & Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge 
                    key={tool}
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Current Goal */}
            <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-4 rounded">
              <h4 className="text-lg font-bold text-foreground mb-2">Current Goal:</h4>
              <p className="text-muted-foreground">
                To strengthen my technical skills in cybersecurity and DFIR, collaborate with mentors and peers, and work toward building small real-world security projects as part of this internship.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mini Projects Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Training <span className="text-primary">Mini Projects</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {miniProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={index}
                  className="cyber-glow hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm border-border"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-${project.color}/20 border border-${project.color}/30`}>
                        <IconComponent className={`w-8 h-8 text-${project.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {project.title}
                        </h4>
                        <Badge variant="secondary" className="text-xs">
                          Mini Project {index + 1}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4 p-3 bg-secondary/30 rounded-lg border border-border">
                      <p className="text-xs font-semibold text-foreground mb-1">Goal:</p>
                      <p className="text-sm text-muted-foreground">{project.goal}</p>
                    </div>

                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-foreground mb-3">Key Learnings:</h5>
                      <ul className="space-y-2">
                        {project.learnings.map((learning, idx) => (
                          <li 
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1 flex-shrink-0">▸</span>
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className="w-full group"
                      asChild
                    >
                      <a 
                        href={project.reportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        View Project Report
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;