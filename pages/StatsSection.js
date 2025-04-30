'use client';
import { motion } from 'framer-motion';
import { Users, BookOpen, Activity, Clock } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { value: "5,000+", label: "Schools Empowered", icon: <BookOpen className="w-8 h-8" /> },
    { value: "2M+", label: "Students Engaged", icon: <Users className="w-8 h-8" /> },
    { value: "87%", label: "Improved Engagement", icon: <Activity className="w-8 h-8" /> },
    { value: "24/7", label: "Support Available", icon: <Clock className="w-8 h-8" /> },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
            >
              <div className="h-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-white/20">
                <div className="mb-4 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg text-black">{stat.label}</p>
                
                {/* Hover effect elements */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-xl"></div>
                  <div className="absolute inset-0 border border-indigo-400/10"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite -4s;
        }
      `}</style>
    </section>
  );
}