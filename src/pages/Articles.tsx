import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ExternalLink, Calendar, Clock, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "How I Started Learning Cybersecurity with Hack The Box and TryHackMe",
    excerpt: "My journey into cybersecurity started with curiosity and hands-on practice. Here's how platforms like Hack The Box and TryHackMe became my gateway to understanding security concepts through practical application.",
    url: "https://sumant9.hashnode.dev/how-i-started-learning-cybersecurity-with-hack-the-box-and-tryhackme",
    category: "Learning Journey",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 4,
    title: "Web Application Security: Common Vulnerabilities and Fixes",
    excerpt: "Exploring the OWASP Top 10 vulnerabilities through hands-on examples and practical remediation strategies for secure development.",
    url: "https://sumant9.hashnode.dev",
    category: "Cybersecurity Fundamentals",
    date: "2023-12-20",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 5,
    title: "Linux Command Line for Security Professionals",
    excerpt: "Essential Linux commands and techniques every cybersecurity professional should master, with practical examples and use cases.",
    url: "https://sumant9.hashnode.dev",
    category: "Practical Labs",
    date: "2023-12-15",
    readTime: "7 min read",
    featured: false
  }
];

const categories = ["All", "Learning Journey", "Cybersecurity Fundamentals", "Practical Labs"];

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-cyber font-bold neon-text mb-4">
            Articles & <span className="text-primary">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring cybersecurity concepts, sharing learning experiences, and documenting the journey from beginner to practitioner.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 cyber-glow bg-card/50 backdrop-blur-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="cyber-glow"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="cyber-glow">
              ← Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="cyber-glow bg-card/50 backdrop-blur-sm border-border hover:scale-105 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {article.category}
                  </Badge>
                  {article.featured && (
                    <Badge className="bg-gradient-cyber text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
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

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">No articles found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="cyber-glow"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Footer CTA */}
        <div className="text-center mt-16 p-8 bg-card/30 rounded-lg border border-border backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">
            Want to read more?
          </h3>
          <p className="text-muted-foreground mb-6">
            Visit my complete blog on Hashnode for the latest articles and insights.
          </p>
          <a 
            href="https://sumant9.hashnode.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="cyber-glow bg-gradient-cyber">
              Visit Full Blog
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Articles;