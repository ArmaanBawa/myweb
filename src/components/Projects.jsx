import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeDHeading from '@/components/ThreeDHeading';

const Projects = () => {
  const projects = [
    {
      title: 'ShoeFindr AI',
      description: 'AI-powered app helping users find the ideal pair of shoes based on descriptive input. Built in ReactJS with integrated e-commerce APIs to fetch and match product data and deliver seamless search UX.',
      tags: ['ReactJS', 'AI', 'APIs'],
      color: 'from-[#A259FF] to-[#1ABCFE]',
      border: 'hover:border-[#A259FF]',
      demo: 'https://shoefindrai.vercel.app/',
      code: 'https://github.com/ArmaanBawa/shoefindrai'
    },
    {
      title: 'YatraVatra',
      description: 'Interactive web platform to discover tourist spots across a city using Google Maps API. Enables visual exploration, details, and community-contributed spots to boost user engagement.',
      tags: ['Google Maps API', 'React', 'Community'],
      color: 'from-[#1ABCFE] to-[#0ACF83]',
      border: 'hover:border-[#1ABCFE]',
      demo: 'https://www.yatravatra.in/',
      code: 'https://github.com/ArmaanBawa/yatravatra'
    },
    {
      title: 'AyuvaCare',
      description: 'A modern Ayurvedic wellness platform with clear, accessible content and a user-friendly interface.',
      tags: ['ReactJS', 'NodeJS', 'MongoDB'],
      color: 'from-[#0ACF83] to-[#FFC700]',
      border: 'hover:border-[#0ACF83]',
      demo: 'https://ayuvacare.com/',
      code: 'https://github.com/ArmaanBawa/ayurvedasite'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#fff5f0] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ThreeDHeading className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Featured <span className="text-[#1ABCFE]">Projects</span>
          </ThreeDHeading>
          <div className="w-24 h-2 bg-gradient-to-r from-[#1ABCFE] via-[#A259FF] to-[#F24E1E] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white border border-border rounded-3xl overflow-hidden ${project.border} transition-all duration-300 group flex flex-col h-full shadow-lg`}
            >
              {/* Header Accent Line (images removed per request) */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-3 transition-all group-hover:text-[#A259FF]">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-bold bg-white text-foreground rounded-lg border border-border group-hover:border-foreground/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button
                    onClick={() => window.open(project.demo, '_blank')}
                    variant="ghost"
                    size="sm"
                    className="flex-1 bg-gray-50 text-foreground hover:bg-gray-100 font-bold rounded-xl transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                  <Button
                    onClick={() => window.open(project.code, '_blank')}
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border text-muted-foreground hover:border-foreground hover:text-foreground rounded-xl transition-all duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;