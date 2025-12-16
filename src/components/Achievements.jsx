import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Target } from 'lucide-react';
import ThreeDHeading from '@/components/ThreeDHeading';

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Open‑Source Contributor',
      description: 'Actively contributing features, tests, and performance improvements',
      bg: 'bg-[#A259FF]',
      gradient: 'from-[#A259FF] to-[#1ABCFE]'
    },
    {
      icon: Trophy,
      title: 'JEE Advanced Rank Holder',
      description: 'Recognized for competitive excellence in national exam',
      bg: 'bg-[#FFC700]',
      gradient: 'from-[#FFC700] to-[#F24E1E]'
    },
    {
      icon: Star,
      title: 'LeetCode Practice',
      description: 'Solved numerous problems to strengthen DSA fundamentals',
      bg: 'bg-[#1ABCFE]',
      gradient: 'from-[#1ABCFE] to-[#0ACF83]'
    },
    {
      icon: Target,
      title: 'Freelance Delivery',
      description: 'Successfully built and shipped client websites and apps',
      bg: 'bg-[#F24E1E]',
      gradient: 'from-[#F24E1E] to-[#A259FF]'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-[#f0fff7] relative transition-colors duration-300">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A259FF]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ThreeDHeading className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Key <span className="text-[#0ACF83]">Achievements</span>
          </ThreeDHeading>
          <div className="w-24 h-2 bg-gradient-to-r from-[#0ACF83] via-[#1ABCFE] to-[#A259FF] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Colorful Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl`}></div>
              
              <div className="relative bg-white border border-border rounded-3xl p-8 hover:border-gray-400 transition-all duration-300 flex items-center gap-6 shadow-sm">
                <div className={`w-20 h-20 rounded-2xl ${achievement.bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                  <achievement.icon size={36} className="text-black" strokeWidth={2.5} />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 transition-all group-hover:text-[#1ABCFE]">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;