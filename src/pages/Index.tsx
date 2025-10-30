import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Internship from '@/components/Internship';
import Skills from '@/components/Skills';
import Hackathons from '@/components/Hackathons';
import Projects from '@/components/Projects';
import FeaturedArticles from '@/components/FeaturedArticles';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-cyber">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Internship />
        <Skills />
        <Hackathons />
        <Projects />
        <FeaturedArticles />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;