import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredArticles = [
  {
    id: 1,
    title: "How I Started Learning Cybersecurity with Hack The Box and TryHackMe",
    excerpt: "My journey into cybersecurity started with curiosity and hands-on practice. Discover how platforms like Hack The Box and TryHackMe became my gateway to understanding security concepts.",
    url: "https://sumant9.hashnode.dev/how-i-started-learning-cybersecurity-with-hack-the-box-and-tryhackme",
    category: "Learning Journey",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true
  }
];

const FeaturedArticles = () => {
  return (
    <section id="articles" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold neon-text mb-4">
            Featured <span className="text-primary">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights from my cybersecurity learning journey, technical explorations, and hands-on experiences with security tools and concepts.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12 max-w-2xl mx-auto">
          {featuredArticles.map((article) => (
            <Card 
              key={article.id} 
              className="cyber-glow bg-card/50 backdrop-blur-sm border-border hover:scale-105 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {article.category}
                  </Badge>
                  <Badge className="bg-gradient-cyber text-white">
                    Featured
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button 
                    variant="outline" 
                    className="w-full cyber-glow group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Read Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="text-center">
          <div className="bg-card/30 rounded-lg border border-border backdrop-blur-sm p-8 cyber-glow">
            <h3 className="text-2xl font-bold mb-4">
              Explore More <span className="text-primary">Articles</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Dive deeper into my cybersecurity learning journey, technical insights, and hands-on experiences. 
              Discover the complete archive of articles covering security fundamentals, practical labs, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/articles">
                <Button className="cyber-glow bg-gradient-cyber">
                  View All Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a 
                href="https://sumant9.hashnode.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="cyber-glow">
                  Visit Blog
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;