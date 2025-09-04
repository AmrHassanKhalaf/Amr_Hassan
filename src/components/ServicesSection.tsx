import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Database, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Code,
  BarChart3,
  Zap,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'AI / ML Project Leadership & Code Review',
      description: 'End-to-end project management and technical oversight for AI initiatives',
      icon: Users,
      gradient: 'from-blue-500 to-purple-600',
      features: [
        'Project scoping, milestone planning, and acceptance criteria',
        'Architecture design (data flow, model boundaries) and PR/code review',
        'Sprint planning, task allocation, and technical mentoring'
      ],
      highlights: ['Project Management', 'Technical Leadership', 'Code Reviews']
    },
    {
      id: 2,
      title: 'End-to-End Machine Learning (Computer Vision & NLP)',
      description: 'Complete ML pipeline development from data to deployment',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-600',
      features: [
        'Data pipelines → preprocessing → augmentation/tokenization → training → validation → deployment',
        'Transfer learning (e.g., VGG/ResNet), custom CNNs, sequence models, and transformer-based pipelines',
        'Frameworks: PyTorch, TensorFlow, scikit-learn; training best practices (early stopping, schedulers, mixed precision)'
      ],
      highlights: ['Computer Vision', 'NLP', 'Deep Learning']
    },
    {
      id: 3,
      title: 'Data Engineering & Analysis',
      description: 'Transform raw data into actionable insights and robust pipelines',
      icon: Database,
      gradient: 'from-green-500 to-teal-600',
      features: [
        'Data cleaning, imbalance handling, feature engineering, and statistical validation',
        'Exploratory Data Analysis (EDA), hypothesis testing, and KPI definition',
        'Deliverables: reproducible datasets, feature catalogs, and stakeholder-ready dashboards'
      ],
      highlights: ['Data Pipelines', 'EDA', 'Statistical Analysis']
    },
    {
      id: 4,
      title: 'MLOps, Deployment & Monitoring',
      description: 'Production-ready ML systems with monitoring and continuous integration',
      icon: Settings,
      gradient: 'from-orange-500 to-red-600',
      features: [
        'Model packaging (Docker), serving (FastAPI/Flask), and REST/gRPC endpoints',
        'CI/CD for models, experiment tracking (MLflow/W&B), versioning (DVC/Git), and rollback strategies',
        'Production monitoring (latency, data drift, accuracy alerts) and A/B testing'
      ],
      highlights: ['MLOps', 'Deployment', 'Monitoring']
    }
  ];

  const additionalServices = [
    { name: 'Flask Integrations', icon: Code },
    { name: 'Flutter Prototypes', icon: Zap },
    { name: 'Packet Tracer Labs', icon: Shield },
    { name: 'Performance Optimization', icon: BarChart3 }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="space-fluid-2xl bg-surface">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 sm:space-y-12 lg:space-y-16"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-fluid-lg sm:text-fluid-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI and Data Science solutions from concept to production
            </p>
          </motion.div>

          {/* Main Services Grid */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 } 
                }}
                className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border/50 group cursor-pointer relative overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Service Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-primary/10 p-3 sm:p-4 rounded-xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-fluid-lg sm:text-fluid-xl font-bold text-foreground mb-1 sm:mb-2 group-hover:gradient-text transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-fluid-sm sm:text-fluid-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 sm:space-y-4 mb-3 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (0.1 * index) + (0.1 * featureIndex) 
                        }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-fluid-xs sm:text-fluid-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-6">
                    {service.highlights.map((highlight, highlightIndex) => (
                      <motion.span
                        key={highlight}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (0.1 * index) + (0.05 * highlightIndex) 
                        }}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 bg-primary/10 text-primary text-fluid-xs font-medium rounded-full border border-primary/20"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 text-fluid-sm sm:text-fluid-base py-1.5 sm:py-2"
                    onClick={scrollToContact}
                  >
                    Get Started
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-primary-subtle border border-primary/20 rounded-2xl p-4 sm:p-6 lg:p-8"
          >
            <h3 className="text-fluid-xl sm:text-fluid-2xl font-bold text-center mb-1 sm:mb-2">Additional Services</h3>
            <p className="text-fluid-sm sm:text-fluid-base text-muted-foreground text-center mb-3 sm:mb-6">
              Secondary expertise for comprehensive project support
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-2 sm:space-x-3 bg-card/50 rounded-xl p-3 sm:p-4 hover:bg-card transition-colors"
                >
                  <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg">
                    <service.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <span className="text-fluid-xs sm:text-fluid-sm font-medium text-foreground">
                    {service.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h3 className="text-fluid-xl sm:text-fluid-2xl font-bold mb-2 sm:mb-4">Ready to Start Your Project?</h3>
            <p className="text-fluid-sm sm:text-fluid-base text-muted-foreground mb-3 sm:mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help you turn your ideas into intelligent, data-driven solutions.
            </p>
            <Button className="btn-gradient group text-fluid-base sm:text-fluid-lg py-2 sm:py-3" onClick={scrollToContact}>
              Let's Talk
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;