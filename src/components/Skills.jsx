import React from 'react';
import { motion } from 'framer-motion';
import ThreeDHeading from '@/components/ThreeDHeading';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      color: 'text-[#F24E1E]',
      barColor: 'bg-[#F24E1E]',
      borderColor: 'group-hover:border-[#F24E1E]',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C++', level: 95 },
        { name: 'Java', level: 90 },
        { name: 'C', level: 80 },
        { name: 'Javascript', level: 85 }
      ]
    },
    {
      category: 'Frontend',
      color: 'text-[#1ABCFE]',
      barColor: 'bg-[#1ABCFE]',
      borderColor: 'group-hover:border-[#1ABCFE]',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'SwiftUI', level: 70 }
      ]
    },
    {
      category: 'Backend',
      color: 'text-[#0ACF83]',
      barColor: 'bg-[#0ACF83]',
      borderColor: 'group-hover:border-[#0ACF83]',
      skills: [
        { name: 'NodeJS', level: 88 },
        { name: 'ExpressJS', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'PostgreSQL', level: 80 }
      ]
    },
    {
      category: 'DevOps & Cloud',
      color: 'text-[#A259FF]',
      barColor: 'bg-[#A259FF]',
      borderColor: 'group-hover:border-[#A259FF]',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'GitHub', level: 90 },
        { name: 'Google Cloud', level: 90 }
      ]
    },
    {
      category: 'Data & ML',
      color: 'text-[#F24E1E]',
      barColor: 'bg-[#F24E1E]',
      borderColor: 'group-hover:border-[#F24E1E]',
      skills: [
        { name: 'NumPy', level: 80 },
        { name: 'Pandas', level: 85 },
        { name: 'Scikit‑Learn', level: 78 },
        { name: 'PyTorch', level: 70 },
        { name: 'Keras', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#f0fcff] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ThreeDHeading className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Technical <span className="text-[#A259FF]">Skills</span>
          </ThreeDHeading>
          <div className="w-24 h-2 bg-gradient-to-r from-[#A259FF] via-[#F24E1E] to-[#FFC700] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className={`bg-white border border-border rounded-3xl p-8 ${category.borderColor} transition-all duration-300 group hover:shadow-lg`}
            >
              <h3 className={`text-2xl font-bold mb-8 ${category.color}`}>{category.category}</h3>
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground font-semibold">{skill.name}</span>
                      <span className={`${category.color} font-bold`}>{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden border border-gray-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                        className={`h-full ${category.barColor} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;