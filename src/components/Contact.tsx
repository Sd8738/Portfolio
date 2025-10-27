import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Send, 
  MapPin, 
  Phone, 
  Shield,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_37ol62n';
      const templateId = 'template_7cul43t';
      const publicKey = 'YohiKS_R9-87C_N8p';

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'sd397388@gmail.com'
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success feedback
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Error feedback
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly at sd397388@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sd397388@gmail.com",
      href: "mailto:sd397388@gmail.com",
      color: "cyber-blue"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Maharashtra, India",
      href: null,
      color: "cyber-green"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sumantdeshmukh",
      color: "cyber-blue"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Sd8738",
      color: "cyber-green"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cyber font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on making the digital world safer. Reach out for consultations, collaborations, or just to connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card className="cyber-glow bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-${info.color}/20 border border-${info.color}/30`}>
                      <info.icon className={`w-5 h-5 text-${info.color}`} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="cyber-glow bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-200 group"
                  >
                    <div className={`p-2 rounded-lg bg-${social.color}/20 border border-${social.color}/30 group-hover:scale-110 transition-transform duration-200`}>
                      <social.icon className={`w-4 h-4 text-${social.color}`} />
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors duration-200">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card className="cyber-glow bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Security First</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-cyber-green mt-0.5 flex-shrink-0" />
                  <span>All communications are treated with strict confidentiality</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-cyber-red mt-0.5 flex-shrink-0" />
                  <span>Response time: 24-48 hours for inquiries</span>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto cyber-glow bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Send Me a Message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="cyber-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="cyber-input"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="cyber-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, questions, or just say hello..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="cyber-input resize-none"
                  />
                </div>
                
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-gradient-cyber text-background font-bold px-8 py-3 hover:scale-105 transition-all duration-300 cyber-glow disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto cyber-glow bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Secure Your Digital Future?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether you're looking for cybersecurity consultation, collaboration opportunities, or just want to discuss the latest in digital security — I'm here to help. Let's work together to make the internet a safer place for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-cyber text-background font-bold px-8 py-3 hover:scale-105 transition-all duration-300 cyber-glow"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start a Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-background px-8 py-3 transition-all duration-300"
                  onClick={() => window.open('mailto:sd397388@gmail.com', '_blank')}
                >
                  Send Quick Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
