import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import ThreeDHeading from '@/components/ThreeDHeading';

const Academics = () => {
  const education = [
    {
      degree: '10th Grade — 97.4%',
      institution: "Bhavan's S.L. Public School",
      period: '2022',
      color: 'text-[#A259FF]',
      border: 'border-[#A259FF]',
      dot: 'bg-[#A259FF]'
    },
    {
      degree: '12th Grade — 91.7%',
      institution: "Bhavan's S.L. Public School",
      period: '2024',
      color: 'text-[#1ABCFE]',
      border: 'border-[#1ABCFE]',
      dot: 'bg-[#1ABCFE]'
    },
    {
      degree: 'B.Tech — Information Technology',
      institution: 'Netaji Subhas University of Technology (NSUT)',
      period: '2024 - 2028',
      color: 'text-[#0ACF83]',
      border: 'border-[#0ACF83]',
      dot: 'bg-[#0ACF83]'
    }
  ];

  const certifications = [
    { name: 'Pandas Course — Kaggle', color: 'bg-[#FFC700]', text: 'text-black' },
    { name: 'Introduction to Deep Learning — MIT 6.S191', color: 'bg-[#A259FF]', text: 'text-white' }
  ];

  return (
    <section id="academics" className="py-20 px-6 bg-[#fffef0] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ThreeDHeading className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Education & <span className="text-[#FFC700]">Certificates</span>
          </ThreeDHeading>
          <div className="w-24 h-2 bg-gradient-to-r from-[#FFC700] via-[#F24E1E] to-[#A259FF] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#A259FF] flex items-center justify-center shadow-lg">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="relative space-y-8 pl-4">
              {/* Rainbow Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-gradient-to-b from-[#A259FF] to-[#1ABCFE] rounded-full"></div>

              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-12"
                >
                  <div className={`absolute left-[21px] top-6 w-4 h-4 rounded-full ${edu.dot} ring-4 ring-white transition-all`}></div>
                  
                  <div className={`bg-white border-l-4 ${edu.border} rounded-r-2xl p-6 shadow-md hover:bg-gray-50 transition-colors`}>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                      <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                      <span className={`text-sm ${edu.color} font-bold px-3 py-1 bg-gray-100 rounded-full`}>{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#F24E1E] flex items-center justify-center shadow-lg">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className={`${cert.color} rounded-2xl p-5 shadow-lg flex items-center justify-center text-center h-32 cursor-default`}
                >
                  <span className={`${cert.text} font-bold text-lg leading-tight`}>{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;