import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeDHeading from '@/components/ThreeDHeading';

const Hero = () => {
  const LINKS = {
    github: 'https://github.com/ArmaanBawa',
    linkedin: 'https://www.linkedin.com/in/armaan-bawa-0b2a09244',
    gmail: 'https://mail.google.com/mail/?view=cm&fs=1&to=bawarman2005@gmail.com',
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-6 bg-[#ffffff] transition-colors duration-300">
      {/* Animated Background Elements - Vibrant Figma Colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F24E1E]/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1ABCFE]/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A259FF]/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ThreeDHeading className="text-6xl md:text-8xl font-black mb-4 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] bg-clip-text text-transparent block md:inline">
                Armaan Bawa
              </span>
              <br className="hidden md:block" />
              <span className="text-foreground block md:inline mt-2 md:mt-0">Software Developer</span>
            </ThreeDHeading>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
          >
            Designing algorithms & crafting <span className="text-[#0ACF83] font-medium">delightful</span> user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Button
              onClick={() => window.open(LINKS.gmail, '_blank')}
              variant="outline"
              className="bg-card border-2 border-[#F24E1E] text-[#F24E1E] hover:bg-[#F24E1E] hover:text-white px-8 py-6 text-lg rounded-2xl font-bold transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2" size={20} />
              Let's Talk
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-6 mt-16"
          >
            {[
              { icon: Github, name: 'GitHub', color: 'hover:text-[#F24E1E] hover:border-[#F24E1E]', href: LINKS.github },
              { icon: Linkedin, name: 'LinkedIn', color: 'hover:text-[#1ABCFE] hover:border-[#1ABCFE]', href: LINKS.linkedin },
              { icon: Mail, name: 'Email', color: 'hover:text-[#0ACF83] hover:border-[#0ACF83]', href: LINKS.gmail }
            ].map((social) => (
              <motion.a
                key={social.name}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-2xl bg-card border border-border ${social.color} flex items-center justify-center transition-all duration-300 group shadow-lg`}
              >
                <social.icon className="text-muted-foreground group-hover:text-inherit transition-colors" size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator centered below the three buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex items-center justify-center mt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Scroll</span>
                <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-gradient-to-b from-[#F24E1E] to-[#A259FF] rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Hero;