import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container-fluid space-fluid-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-3 sm:space-y-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full"></div>
              <h2 className="relative text-fluid-3xl sm:text-fluid-4xl font-bold gradient-text">
                "Let's build something amazing together."
              </h2>
            </div>
            <p className="text-fluid-lg sm:text-fluid-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your ideas into intelligent solutions? Let's connect and make it happen.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
          >
            {navigationLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
                onClick={() => scrollToSection(link.id)}
                className="text-fluid-base sm:text-fluid-lg text-muted-foreground hover:text-foreground font-medium transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </motion.div>

          <div className="border-t border-border/50"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center space-x-1 sm:space-x-2 text-fluid-xs sm:text-fluid-sm text-muted-foreground"
            >
              <span>© 2025 Amr Hassan. All rights reserved.</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 animate-pulse" />
            </motion.div>

            {/* Back to Top Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="group hover:bg-primary hover:text-white transition-all duration-300 text-fluid-xs sm:text-fluid-sm py-1 sm:py-2"
              >
                <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 transition-transform group-hover:-translate-y-1" />
                Back to Top
              </Button>
            </motion.div>
          </div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <p className="text-fluid-xs sm:text-fluid-sm text-muted-foreground">
              Crafted with{' '}
              <Heart className="inline h-3 w-3 sm:h-4 sm:w-4 text-red-500 animate-pulse mx-1" />
              and AI-powered precision
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;