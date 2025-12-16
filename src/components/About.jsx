import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Zap } from 'lucide-react';
import ThreeDHeading from '@/components/ThreeDHeading';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Elegant solutions for complex problems',
      color: 'bg-[#1ABCFE]',
      border: 'group-hover:border-[#1ABCFE]'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Pushing boundaries with modern tech',
      color: 'bg-[#F24E1E]',
      border: 'group-hover:border-[#F24E1E]'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized for speed and efficiency',
      color: 'bg-[#0ACF83]',
      border: 'group-hover:border-[#0ACF83]'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-[#fcf5ff] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ThreeDHeading className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            About <span className="text-[#F24E1E]">Me</span>
          </ThreeDHeading>
          <div className="w-24 h-2 bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white border border-border rounded-3xl p-3">
                <img
                  alt="Armaan Bawa"
                  className="w-full aspect-square object-cover rounded-2xl"
                  src="/armaan.jpg"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1665667332739-d33305807f07';
                  }}
                />
              </div>
              {/* Decorative Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#F24E1E] rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#1ABCFE] rounded-full blur-xl opacity-60"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                I'm a passionate software engineer who sees code as a canvas. I blend <span className="text-[#A259FF] font-semibold">technical precision</span> with <span className="text-[#F24E1E] font-semibold">creative design</span> to build applications that don't just work—they inspire.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                Whether it's architecting a scalable backend or fine-tuning a micro-interaction, I thrive on the details. I believe in the power of open source, community, and continuous learning.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center gap-5 p-5 bg-white border border-border rounded-2xl ${item.border} transition-colors duration-300 group shadow-sm`}
                >
                  <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <item.icon size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;