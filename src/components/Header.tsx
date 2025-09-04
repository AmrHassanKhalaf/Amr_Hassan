import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun, Download, Menu, X, Github, ExternalLink } from 'lucide-react';
import { FaKaggle } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { href: 'https://github.com/amrhassan', icon: Github, label: 'GitHub' },
    { href: 'https://kaggle.com/amrhassan', icon: FaKaggle, label: 'Kaggle' }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-fluid py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-fluid-xl sm:text-fluid-2xl font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Amr Hassan
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-fluid-sm lg:text-fluid-base text-muted-foreground hover:text-foreground transition-smooth relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Social Links & Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-primary/10"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:bg-primary/10"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Theme Toggle and Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:bg-primary/10 bg-background/80 backdrop-blur-sm shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <Button
              variant={scrolled || isOpen ? "ghost" : "secondary"}
              size="sm"
              className="flex items-center justify-center bg-background/80 backdrop-blur-sm shadow-sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 py-4 px-2 border-t border-border/50 overflow-hidden bg-background/95 backdrop-blur-lg rounded-b-lg shadow-elegant absolute left-0 right-0 mx-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left py-2 text-fluid-base text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="flex items-center pt-4 border-t border-border/50">
                  <div className="flex items-center space-x-4">
                    {socialLinks.map((link) => (
                      <Button
                        key={link.label}
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:bg-primary/10"
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <link.icon className="h-4 w-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;