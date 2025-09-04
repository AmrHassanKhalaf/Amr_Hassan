import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Send as SendIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'amrhassankofficial@example.com',
      href: 'mailto:amrhassankofficial@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+201014243303',
      href: 'tel:+201014243303'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/amrhassan',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/amrhassan',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      href: 'https://wa.me/201014243303',
      color: 'hover:text-green-600'
    },
    {
      icon: Send,
      label: 'Telegram',
      href: 'https://t.me/amrhassan',
      color: 'hover:text-blue-500'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="space-fluid-2xl bg-surface">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-fluid-lg sm:space-y-fluid-xl"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-fluid-md"
          >
            <h2 className="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-fluid-lg sm:text-fluid-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next AI project? Let's discuss how we can work together 
              to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-fluid-lg sm:gap-fluid-xl">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-fluid-lg"
            >
              <div>
                <h3 className="text-fluid-xl sm:text-fluid-2xl font-bold mb-fluid-xs sm:mb-fluid-md text-foreground">
                  Let's Talk About Your Project
                </h3>
                <p className="text-fluid-base sm:text-fluid-lg text-muted-foreground leading-relaxed mb-fluid-sm sm:mb-fluid-lg">
                  I'm always excited to work on innovative AI and data science projects. 
                  Whether you need technical leadership, end-to-end development, or consultation, 
                  I'm here to help turn your vision into reality.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-fluid-xs sm:space-y-fluid-sm">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`flex items-center gap-fluid-xs sm:gap-fluid-sm space-fluid-xs sm:space-fluid-sm bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 ${
                      info.href ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => info.href && window.open(info.href, '_blank')}
                  >
                    <div className="bg-primary/10 space-fluid-xs sm:space-fluid-sm rounded-xl">
                      <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-fluid-xs sm:text-fluid-sm text-muted-foreground">{info.label}</p>
                      <p className="text-fluid-sm sm:text-fluid-base text-foreground font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-fluid-base sm:text-fluid-lg font-semibold mb-fluid-xs sm:mb-fluid-sm text-foreground">
                  Connect With Me
                </h4>
                <div className="flex gap-fluid-xs sm:gap-fluid-sm">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * index }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`bg-card space-fluid-xs sm:space-fluid-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-gradient-primary-subtle border border-primary/20 rounded-xl space-fluid-sm sm:space-fluid-md"
              >
                <div className="flex items-center gap-fluid-xs sm:gap-fluid-sm">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-success rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-fluid-xs sm:text-fluid-sm font-medium text-foreground">
                      Available for New Projects
                    </p>
                    <p className="text-fluid-xs text-muted-foreground">
                      Typically responds within 24 hours
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-2xl space-fluid-sm sm:space-fluid-md lg:space-fluid-lg shadow-elegant border border-border/50"
            >
              <h3 className="text-fluid-xl sm:text-fluid-2xl font-bold mb-fluid-xs sm:mb-fluid-md text-foreground">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-fluid-sm sm:space-y-fluid-md">
                <div className="grid sm:grid-cols-2 gap-fluid-xs sm:gap-fluid-sm">
                  <div>
                    <label htmlFor="name" className="block text-fluid-xs sm:text-fluid-sm font-medium text-foreground mb-fluid-xs sm:mb-fluid-xs">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="transition-all duration-300 focus:border-primary/50 focus:shadow-glow"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-fluid-xs sm:text-fluid-sm font-medium text-foreground mb-fluid-xs sm:mb-fluid-xs">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="transition-all duration-300 focus:border-primary/50 focus:shadow-glow"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-fluid-xs sm:text-fluid-sm font-medium text-foreground mb-fluid-xs sm:mb-fluid-xs">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, timeline, and how I can help..."
                    className="transition-all duration-300 focus:border-primary/50 focus:shadow-glow resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gradient group text-fluid-base sm:text-fluid-lg py-2 sm:py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white mr-1 sm:mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Send Message
                      <SendIcon className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;