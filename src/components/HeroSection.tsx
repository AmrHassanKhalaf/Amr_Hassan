import { motion } from "framer-motion"; 
import { Button } from "@/components/ui/button"; 
import { Badge } from "@/components/ui/badge"; 
import { Download, ArrowRight, MapPin } from "lucide-react"; 
import profileImage from "@/assets/profile-amr.jpg"; 


const HeroSection = () => { 
  const handleConnectClick = () => { 
    const contactSection = document.querySelector("#contact"); 
    if (contactSection) { 
      contactSection.scrollIntoView({ behavior: "smooth" }); 
    } 
  }; 


  return ( 
    <section id="home" className="min-h-[100vh] flex items-center pt-16 sm:pt-20 lg:pt-24"> 
      <div className="container-fluid"> 
        <div className="grid lg:grid-cols-2 gap-fluid-md sm:gap-fluid-lg lg:gap-fluid-xl items-center"> 
          {/* Text Content - Now second on mobile */} 
          <motion.div 
            className="text-center lg:text-left space-y-fluid-sm sm:space-y-fluid-md lg:space-y-fluid-lg order-last lg:order-first" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
          > 
            {/* Availability Badge */} 
            <motion.div 
              className="flex justify-center lg:justify-start" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }} 
            > 
              <Badge className="bg-success/10 text-success border-success/20 space-fluid-xs sm:space-fluid-sm pulse-slow text-fluid-xs sm:text-fluid-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-success rounded-full mr-1.5 sm:mr-2"></div>
                Available for Work
              </Badge>
            </motion.div> 


            {/* Main Heading */} 
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }} 
            > 
              <h1 className="text-fluid-4xl sm:text-fluid-5xl lg:text-fluid-6xl font-bold my-fluid-xs sm:my-fluid-sm"> 
                Hello, I'm{" "} 
                <span className="gradient-text">Amr Hassan</span> 
              </h1> 
              <h2 className="text-fluid-xl sm:text-fluid-2xl lg:text-fluid-3xl text-muted-foreground my-fluid-sm sm:my-fluid-md font-medium"> 
                Machine Learning Developer | Data Analyst | Computer Vision & NLP 
              </h2> 
            </motion.div> 


            {/* Location */} 
            <motion.div 
              className="flex items-center justify-center lg:justify-start text-muted-foreground" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4 }} 
            > 
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" /> 
              <span className="text-fluid-sm sm:text-fluid-base">Cairo, Egypt</span> 
            </motion.div> 


            {/* Tagline */} 
            <motion.p 
              className="text-fluid-base sm:text-fluid-lg text-muted-foreground max-w-2xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.5 }} 
            > 
              Machine Learning Developer and Data Analyst, passionate about AI, 
              leading and reviewing projects, and turning data into impactful 
              intelligent solutions. 
            </motion.p> 


            {/* CTA Buttons */} 
            <motion.div 
              className="flex flex-col sm:flex-row gap-fluid-xs sm:gap-fluid-sm lg:gap-fluid-md justify-center lg:justify-start" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 }} 
            > 
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white border-0 hover:shadow-glow transition-smooth text-fluid-base sm:text-fluid-lg space-fluid-sm" 
              > 
                <Download className="mr-fluid-xs h-4 sm:h-5 w-4 sm:w-5" /> 
                Download CV 
              </Button> 
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleConnectClick}
                className="text-fluid-base sm:text-fluid-lg py-2.5 sm:py-3 card-hover border-primary/20 hover:border-primary" 
              > 
                Let's Connect 
                <ArrowRight className="ml-fluid-xs h-5 w-5" /> 
              </Button> 
            </motion.div> 
          </motion.div> 


          {/* Profile Image - Now first on mobile */} 
          <motion.div 
            className="flex justify-center lg:justify-end order-first lg:order-last" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
          > 
            <div className="relative"> 
              {/* Gradient Background */} 
              <motion.div 
                className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20" 
                animate={{ 
                  scale: [1, 1.1, 1], 
                  opacity: [0.2, 0.3, 0.2], 
                }} 
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                }} 
              /> 
              
              {/* Profile Image */} 
              <motion.div 
                className="relative z-10 w-[220px] h-[220px] sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant" 
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 300, damping: 30 }} 
              > 
                <img 
                  src={profileImage} 
                  alt="Amr Hassan - ML Developer" 
                  className="w-full h-full object-cover img-responsive" 
                  loading="lazy" 
                /> 
              </motion.div> 
              
              {/* Floating Elements */} 
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center" 
                animate={{ 
                  y: [0, -10, 0], 
                  rotate: [0, 180, 360], 
                }} 
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                }} 
              > 
                <div className="text-xl md:text-2xl">🤖</div> 
              </motion.div> 
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-14 h-14 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center" 
                animate={{ 
                  y: [0, 10, 0], 
                  rotate: [360, 180, 0], 
                }} 
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                }} 
              > 
                <div className="text-lg md:text-xl">📊</div> 
              </motion.div> 
            </div> 
          </motion.div> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default HeroSection;