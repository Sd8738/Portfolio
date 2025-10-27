import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Shield, Lock, Eye } from 'lucide-react';
import sumantProfile from '@/assets/sumant-pic-2.jpg';
import cyberBg from '@/assets/cyber-bg.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toType = [
    'Future Ethical Hacker',
    'Cybersecurity Enthusiast', 
    'Digital Security Defender',
    'BTech Student'
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % toType.length;
      const fullText = toType[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, toType]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cyberBg})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="matrix-bg absolute inset-0 opacity-30"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 mb-8">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary cyber-glow">
              <img
                src={sumantProfile}
                alt="Sumant Sanjay Deshmukh"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Orbiting icons */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
              <Shield className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-cyber-blue" />
              <Lock className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 text-cyber-green" />
              <Eye className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 text-cyber-red" />
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-cyber font-bold">
              <span className="text-foreground">Hello, I'm </span>
              <span className="glitch neon-text" data-text="Sumant">
                Sumant
              </span>
            </h1>

            <div className="h-16 flex items-center justify-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-mono text-primary">
                {text}
                <span className="animate-pulse text-cyber-green">|</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Making the internet a safer place — one system at a time. 
              <br />
              BTech ECS student passionate about Digital Forensics & Incident Response (DFIR), threat hunting, and cybersecurity defense.
              <br />
              Building expertise through certifications and hands-on labs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-cyber text-background font-bold px-8 py-3 hover:scale-105 transition-all duration-300 cyber-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-background px-8 py-3 transition-all duration-300"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
            onClick={scrollToAbout}
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;