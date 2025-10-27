import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navigation = [
    { name: 'Home', href: '#home', isSection: true },
    { name: 'About', href: '#about', isSection: true },
    { name: 'Education', href: '#education', isSection: true },
    { name: 'Skills', href: '#skills', isSection: true },
    { name: 'Hackathons', href: '#hackathons', isSection: true },
    { name: 'Projects', href: '#projects', isSection: true },
    { name: 'Articles', href: '#articles', isSection: true },
    { name: 'Services', href: '#services', isSection: true },
    { name: 'Contact', href: '#contact', isSection: true },
    { name: 'All Articles', href: '/articles', isSection: false },
  ];

  useEffect(() => {
    if (!isHomePage) return;
    
    const handleScroll = () => {
      const sections = navigation
        .filter(nav => nav.isSection)
        .map(nav => nav.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavigation = (item: typeof navigation[0]) => {
    if (item.isSection && isHomePage) {
      const element = document.getElementById(item.href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 h-8 w-8 bg-primary/20 rounded-full blur-md animate-pulse-glow"></div>
            </div>
            <span className="text-xl font-cyber font-bold neon-text">
              SD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                item.isSection && isHomePage ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-cyber transform transition-transform duration-300 ${
                      activeSection === item.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavigation(item)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                      (!item.isSection && location.pathname === item.href)
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-cyber transform transition-transform duration-300 ${
                      (!item.isSection && location.pathname === item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/90 backdrop-blur-md rounded-lg mt-2 border border-border">
              {navigation.map((item) => (
                item.isSection && isHomePage ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 rounded-md ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavigation(item)}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 rounded-md ${
                      (!item.isSection && location.pathname === item.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;