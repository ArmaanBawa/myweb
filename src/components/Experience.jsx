import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import ThreeDHeading from '@/components/ThreeDHeading';

const Experience = () => {
  const experiences = [
    {
      title: 'Open-Source Contributor',
      company: 'Community Projects',
      period: '2025 - Present',
      color: 'text-[#F24E1E]',
      border: 'border-[#F24E1E]',
      gradient: 'from-[#F24E1E] to-[#A259FF]',
      responsibilities: [
        'Implemented features and resolved issues across OSS repos',
        'Authored tests and improved performance in PRs',
        'Collaborated with maintainers on CI/CD and reviews'
      ]
    },
    {
      title: 'Website Development for Freelancing Clients',
      company: 'Freelance',
      period: '2024 - Present',
      color: 'text-[#1ABCFE]',
      border: 'border-[#1ABCFE]',
      gradient: 'from-[#1ABCFE] to-[#0ACF83]',
      responsibilities: [
        'Delivered responsive web and mobile applications',
        'Built full‑stack projects using ReactJS, NodeJS, and MongoDB',
        'Led end‑to‑end deployments and client communication'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-[#f8f9fa] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ThreeDHeading className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Work <span className="text-[#F24E1E]">Experience</span>
          </ThreeDHeading>
          <div className="w-24 h-2 bg-gradient-to-r from-[#F24E1E] via-[#FFC700] to-[#0ACF83] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Rainbow Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] hidden md:block rounded-full opacity-50"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-[26px] top-8 w-6 h-6 rounded-full bg-white border-4 ${exp.border} hidden md:block z-10 shadow-[0_0_10px_currentColor] ${exp.color}`}></div>

                <div className={`md:ml-24 bg-white border border-border rounded-3xl p-8 hover:border-gray-400 transition-all duration-300 group hover:shadow-lg`}>
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${exp.gradient} text-foreground`}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                        <Briefcase size={20} className={exp.color.replace('text-', 'text-')} />
                        {exp.company}
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 ${exp.color} font-bold px-4 py-2 bg-gray-50 rounded-xl border border-border`}>
                      <Calendar size={18} />
                      {exp.period}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div 
                        key={idx} 
                        className="bg-gray-50 rounded-xl p-4 border border-border text-muted-foreground text-sm font-medium hover:border-gray-400 transition-colors"
                      >
                        {responsibility}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;