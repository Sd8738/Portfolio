import { Shield, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Shield className="h-8 w-8 text-primary animate-pulse-glow" />
                <div className="absolute inset-0 h-8 w-8 bg-primary/20 rounded-full blur-md animate-pulse-glow"></div>
              </div>
              <span className="text-xl font-cyber font-bold neon-text">
                Sumant Deshmukh
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Future Ethical Hacker & Cybersecurity Enthusiast committed to making the internet a safer place for everyone.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-4 h-4 text-cyber-green" />
              <span>Secure by Design</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Education', href: '#education' },
                { name: 'Skills', href: '#skills' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Get In Touch</h3>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">Email:</strong>
                <br />
                <a 
                  href="mailto:sd397388@gmail.com"
                  className="text-primary hover:text-cyber-blue transition-colors duration-200"
                >
                  sd397388@gmail.com
                </a>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">Location:</strong>
                <br />
                Maharashtra, India
              </div>
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">Response Time:</strong>
                <br />
                24-48 hours
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Sumant Sanjay Deshmukh. All rights reserved.
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-cyber-red animate-pulse" />
                <span>&</span>
                <Code className="w-4 h-4 text-cyber-blue" />
              </div>
            </div>

            <div className="text-xs text-muted-foreground">
              <span className="text-cyber-green">●</span> Secured & Protected
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-card/30 rounded-lg border border-border">
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-cyber-green mt-0.5 flex-shrink-0" />
              <div className="text-xs text-muted-foreground">
                <strong className="text-foreground">Security Notice:</strong> This website follows security best practices. 
                All communications are encrypted and handled with strict confidentiality. 
                PGP encryption available upon request for sensitive discussions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;