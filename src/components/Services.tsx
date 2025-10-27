import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Smartphone, 
  Users, 
  Building, 
  Scan,
  AlertTriangle,
  BookOpen,
  Zap
} from 'lucide-react';

const Services = () => {
  const futureServices = [
    {
      icon: Shield,
      title: "Personal Cybersecurity Consultation",
      description: "Comprehensive security assessments for individuals to protect personal data, devices, and online presence.",
      features: [
        "Device security audit",
        "Password management setup", 
        "Social media privacy review",
        "Identity theft prevention"
      ],
      status: "Coming Soon",
      target: "Individuals"
    },
    {
      icon: Building,
      title: "Small Business Security Solutions",
      description: "Affordable cybersecurity services tailored for small businesses and startups to establish robust security foundations.",
      features: [
        "Network security assessment",
        "Employee security training",
        "Incident response planning",
        "Compliance guidance"
      ],
      status: "In Development",
      target: "Small Businesses"
    },
    {
      icon: Smartphone,
      title: "Virus Detection Mobile App",
      description: "User-friendly mobile application to help users detect and remove viruses from their devices with real-time protection.",
      features: [
        "Real-time malware scanning",
        "Behavioral analysis",
        "Safe browsing protection",
        "Privacy leak detection"
      ],
      status: "Concept Phase",
      target: "Mobile Users"
    },
    {
      icon: BookOpen,
      title: "Cybersecurity Education Platform",
      description: "Interactive learning platform to educate users about cybersecurity threats and best practices through engaging content.",
      features: [
        "Interactive threat simulations",
        "Security awareness training",
        "Certification programs",
        "Community forums"
      ],
      status: "Planning",
      target: "Everyone"
    }
  ];

  const currentProjects = [
    {
      icon: Scan,
      title: "Vulnerability Assessment Tool",
      description: "Developing an automated tool to scan and assess common vulnerabilities in home networks.",
      progress: 60,
      timeline: "Q2 2025"
    },
    {
      icon: AlertTriangle,
      title: "Phishing Detection System", 
      description: "Machine learning-based system to identify and prevent phishing attacks in real-time.",
      progress: 40,
      timeline: "Q3 2025"
    },
    {
      icon: Users,
      title: "Security Awareness Campaign",
      description: "Educational content series to raise awareness about common cyber threats and prevention methods.",
      progress: 80,
      timeline: "Q1 2025"
    }
  ];

  return (
    <section id="services" className="py-20 matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cyber font-bold mb-6">
            Future <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the next generation of cybersecurity solutions for everyone
          </p>
        </div>


        {/* Vision Statement */}
        <Card className="cyber-glow bg-card/50 backdrop-blur-sm border-border">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Vision for the Future
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
              My goal is to democratize cybersecurity by making professional-grade security solutions accessible to everyone — from individuals protecting their personal data to small businesses securing their digital assets. Through innovative tools and educational initiatives, I aim to create a safer digital ecosystem for all.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-cyber font-bold text-cyber-blue">100K+</div>
                <div className="text-sm text-muted-foreground">Target Users by 2030</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-cyber font-bold text-cyber-green">5+</div>
                <div className="text-sm text-muted-foreground">Security Tools in Development</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-cyber font-bold text-cyber-red">1</div>
                <div className="text-sm text-muted-foreground">Mission: Safer Internet</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;