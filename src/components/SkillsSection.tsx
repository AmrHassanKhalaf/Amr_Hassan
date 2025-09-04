import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Globe, GitBranch, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI / ML',
      icon: Brain,
      skills: ['TensorFlow', 'Scikit-learn', 'NLP', 'Computer Vision'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Analysis',
      icon: Database,
      skills: ['Power BI', 'Pandas', 'Numpy', 'Matplotlib'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['React', 'Next.js', 'Tailwind CSS'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Other Tools',
      icon: Settings,
      skills: ['Linux', 'Firebase', 'Vercel', 'Figma'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="space-fluid-2xl bg-background">
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
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-fluid-lg sm:text-fluid-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with to build amazing solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-fluid-sm sm:gap-fluid-md lg:gap-fluid-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Card className="card-interactive border-0 shadow-elegant bg-card/50 backdrop-blur-sm h-full">
                  <div className="space-fluid-sm sm:space-fluid-md pb-2 sm:pb-4">
                    <div className="flex items-center gap-fluid-sm">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-${category.color.split(' ')[0]} to-${category.color.split(' ')[1]} p-0.5`}>
                        <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                          <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-fluid-lg sm:text-fluid-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent>
                    <div className="flex flex-wrap gap-fluid-xs">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (0.1 * index) + (0.05 * skillIndex) 
                          }}
                        >
                          <Badge 
                            variant="outline"
                            className="bg-primary/10 hover:bg-primary/20 text-primary-foreground border-border hover:border-primary text-fluid-xs sm:text-fluid-sm px-2 py-1 sm:px-3 sm:py-1.5"
                          >
                            {skill}
                          </Badge>
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Skill Badge Count */}
                    <div className="my-fluid-sm sm:my-fluid-md pt-3 sm:pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <span className="text-fluid-xs sm:text-fluid-sm text-muted-foreground">
                          {category.skills.length} Skills
                        </span>
                        <div className="flex -space-x-1">
                          {Array.from({ length: Math.min(category.skills.length, 4) }).map((_, i) => (
                            <div
                              key={i}
                              className="w-3 h-3 bg-gradient-primary rounded-full border-2 border-card group-hover:border-primary/20 transition-colors"
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Technical Stack Chips */}
          <motion.div
            className="my-fluid-lg sm:my-fluid-xl lg:my-fluid-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-fluid-lg sm:text-fluid-xl font-semibold text-center mb-fluid-sm sm:mb-fluid-md lg:mb-fluid-lg text-foreground">
              Core Technologies
            </h3>
            <div
              className="flex flex-wrap justify-center gap-fluid-xs md:gap-fluid-sm"
              role="list"
              aria-label="Technical skills"
            >
              {[
                "Python", "JavaScript", "TypeScript", "PyTorch", "TensorFlow",
                "Scikit-learn", "React", "Next.js", "Tailwind CSS", "Git",
                "Docker", "FastAPI", "Flask", "Power BI", "Linux"
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  role="listitem"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Badge 
                    variant="outline"
                    className="rounded-full px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 hover:bg-primary/20 text-primary-foreground border-border hover:border-primary flex items-center justify-center text-fluid-xs sm:text-fluid-sm"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;