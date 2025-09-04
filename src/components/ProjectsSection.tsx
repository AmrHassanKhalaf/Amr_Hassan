import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Brain, MessageSquare, Heart, Eye, BarChart3, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'IEEE AI ChatBot',
      description: 'Chatbot for IEEE Beni-Suef Student Branch. Uses Pinecone vector DB + LLM to answer academic queries, share resources, and support events.',
      icon: MessageSquare,
      image: '/api/placeholder/400/250',
      techStack: ['AI', 'NLP', 'Python', 'Flask', 'Pinecone'],
      category: 'AI',
      gradient: 'from-blue-500 to-purple-600',
      demoUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Health Care ChatBot',
      description: 'Healthcare assistant that answers medical queries from curated resources using embeddings, intent classification, and safe AI responses.',
      icon: Stethoscope,
      image: '/api/placeholder/400/250',
      techStack: ['AI', 'NLP', 'Python', 'Flask'],
      category: 'AI',
      gradient: 'from-green-500 to-teal-600',
      demoUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Bilingual Sentiment Analysis',
      description: 'Sentiment analysis for English & Arabic. Compared ML, LSTM, and BERT; achieved 91% accuracy with Hugging Face Transformers.',
      icon: Heart,
      image: '/api/placeholder/400/250',
      techStack: ['AI', 'NLP', 'Python', 'Transformers'],
      category: 'NLP',
      gradient: 'from-pink-500 to-red-600',
      demoUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'VGG16 Image Classifier',
      description: 'Smoker vs Non-Smoker classifier using transfer learning (VGG16). Includes data preprocessing, augmentation, and model evaluation.',
      icon: Eye,
      image: '/api/placeholder/400/250',
      techStack: ['AI', 'Computer Vision', 'Python', 'Keras'],
      category: 'Computer Vision',
      gradient: 'from-orange-500 to-yellow-600',
      demoUrl: '#',
      codeUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Diabetes Prediction',
      description: 'Medical data classification using Decision Tree, Logistic Regression, and SVM with SMOTE balancing. Achieved 92% accuracy.',
      icon: BarChart3,
      image: '/api/placeholder/400/250',
      techStack: ['AI', 'Data Science', 'Python', 'Scikit-learn'],
      category: 'Data Science',
      gradient: 'from-purple-500 to-indigo-600',
      demoUrl: '#',
      codeUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Heart Disease Prediction',
      description: 'Compared ML models (LogReg, Random Forest, XGBoost) for predicting heart disease. Includes feature analysis and performance metrics.',
      icon: Brain,
      image: '/api/placeholder/400/250',
      techStack: ['AI', 'Data Science', 'Python', 'XGBoost'],
      category: 'Data Science',
      gradient: 'from-red-500 to-pink-600',
      demoUrl: '#',
      codeUrl: '#',
      featured: false
    }
  ];

  const categories = ['All', 'AI', 'NLP', 'Computer Vision', 'Data Science'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="space-fluid-2xl bg-background">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-fluid-lg sm:text-fluid-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work in AI, Machine Learning, and Data Science
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-fluid-xs"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-primary text-white shadow-glow' 
                    : 'hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-fluid-sm sm:gap-fluid-md lg:gap-fluid-lg">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 } 
                }}
                className={`bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 border border-border/50 group cursor-pointer ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-primary-subtle h-40 sm:h-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="h-12 w-12 sm:h-16 sm:w-16 text-primary/40" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-fluid-xs sm:text-fluid-sm">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="space-fluid-sm sm:space-fluid-md lg:space-fluid-lg">
                  {/* Title & Description */}
                  <div className="mb-fluid-xs sm:mb-fluid-sm">
                    <h3 className="text-fluid-lg sm:text-fluid-xl font-bold text-foreground mb-fluid-xs sm:mb-fluid-sm group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-fluid-xs sm:text-fluid-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-fluid-xs sm:gap-fluid-sm mb-fluid-sm sm:mb-fluid-md">
                   {project.techStack.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="rounded-full px-2 py-1 sm:px-4 sm:py-2 bg-primary/10 hover:bg-primary/20 text-primary-foreground border-border hover:border-primary flex items-center justify-center text-fluid-xs sm:text-fluid-sm"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-fluid-xs sm:gap-fluid-sm">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 group/btn relative overflow-hidden transition-all duration-300 text-fluid-xs sm:text-fluid-sm py-1 sm:py-2"
                      style={{ borderColor: 'hsl(var(--border))' }}
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative z-10 flex items-center justify-center w-full group-hover/btn:text-white transition-colors duration-300">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Demo
                        <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 group/btn relative overflow-hidden transition-all duration-300 text-fluid-xs sm:text-fluid-sm py-1 sm:py-2"
                      style={{ borderColor: 'hsl(var(--border))' }}
                    >
                      <span className="absolute inset-0 w-full h-full bg-black/80 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative z-10 flex items-center justify-center w-full group-hover/btn:text-white transition-colors duration-300">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Code
                        <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Load More / GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center space-y-fluid-sm"
          >
            <h3 className="text-fluid-xl sm:text-fluid-2xl lg:text-fluid-3xl font-bold mb-fluid-xs sm:mb-fluid-sm lg:mb-fluid-md">Want to See More?</h3>
            <p className="text-fluid-base sm:text-fluid-lg text-muted-foreground mb-fluid-sm sm:mb-fluid-md lg:mb-fluid-lg max-w-2xl mx-auto">
              Check out my GitHub profile for more projects and contributions to the open-source community.
            </p>
            <Button 
              className="btn-gradient group text-fluid-base sm:text-fluid-lg py-2 sm:py-3"
              asChild
            >
              <a href="https://github.com/AmrHassanKhalaf" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                View All Projects
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;