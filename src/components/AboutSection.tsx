import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Users, Coffee } from 'lucide-react';

const AboutSection = () => {
  const infoCards = [
    {
      icon: GraduationCap,
      title: 'Role',
      content: 'Machine Learning Developer & Data Analyst',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      content: 'Beni-Suef University — AI Department',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Heart,
      title: 'Interests',
      content: 'AI, Data Science, Problem Solving',
      gradient: 'from-pink-500 to-red-600'
    },
    {
      icon: Coffee,
      title: 'Availability',
      content: 'Open to collaborations, internships, and project reviews',
      gradient: 'from-orange-500 to-yellow-600'
    }
  ];

  return (
    <section id="about" className="space-fluid-2xl bg-surface">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          className="space-y-fluid-lg sm:space-y-fluid-xl lg:space-y-fluid-2xl"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-fluid-md"
          >
            <h2 className="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-fluid-lg sm:text-fluid-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-fluid-lg sm:gap-fluid-xl lg:gap-fluid-2xl items-center">
            
            {/* Biography Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-fluid-md"
            >
              <div className="space-y-fluid-xs sm:space-y-fluid-sm text-fluid-base sm:text-fluid-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm an <span className="text-foreground font-semibold">AI student</span> at the Faculty of Computers and Information, 
                  Beni-Suef National University, and a <span className="text-foreground font-semibold">Machine Learning Developer & Data Analyst</span>.
                </p>
                
                <p>
                  I specialize in <span className="gradient-text font-semibold">Python</span> and modern ML frameworks 
                  (PyTorch, TensorFlow, scikit-learn) and have built end-to-end projects in 
                  <span className="gradient-text font-semibold"> computer vision and NLP</span>.
                </p>
                
                <p>
                  I cover the full project lifecycle — data preprocessing, feature engineering, model training, 
                  deployment, and monitoring — with a focus on <span className="text-foreground font-semibold">performance and production readiness</span>.
                </p>
                
                <p>
                  I also act as a <span className="gradient-text font-semibold">project lead and technical reviewer</span>: 
                  designing architectures, performing code reviews, and turning results into clear, 
                  stakeholder-ready reports and presentations.
                </p>
              </div>

              {/* Achievement Highlight */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-primary-subtle border border-primary/20 rounded-xl space-fluid-sm sm:space-fluid-md lg:space-fluid-lg my-fluid-md sm:my-fluid-lg lg:my-fluid-xl"
              >
                <div className="flex items-start gap-fluid-xs sm:gap-fluid-sm">
                  <div className="bg-primary/10 space-fluid-xs rounded-xl">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-fluid-base sm:text-fluid-lg font-semibold text-foreground mb-1 sm:mb-2">Leadership & Mentoring</h3>
                    <p className="text-fluid-sm sm:text-fluid-base text-muted-foreground">
                      Experienced in leading technical teams, conducting code reviews, and mentoring junior developers 
                      to deliver high-quality AI solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Info Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8"
            >
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 } 
                  }}
                  className="bg-card rounded-xl p-3 sm:p-6 lg:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border/50 group cursor-pointer relative overflow-hidden"
                >
                  {/* Background Animation */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-primary/10 w-8 h-8 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-2 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                      <card.icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    
                    <h3 className="text-fluid-xs sm:text-fluid-lg font-semibold text-foreground mb-1 sm:mb-2 group-hover:gradient-text transition-all duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-fluid-xs sm:text-fluid-base leading-relaxed">
                      {card.content}
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;