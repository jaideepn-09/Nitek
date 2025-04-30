'use client';
import { motion } from 'framer-motion';
import {
  School,
  GraduationCap,
  Briefcase,
  CloudCog,
  Users,
  Building2,
  ArrowRight
} from 'lucide-react';

export default function SolutionsSection() {
  const categories = [
    {
      icon: <School className="w-10 h-10 md:w-12 md:h-12" />,
      gradient: "from-blue-500 to-cyan-500",
      title: "For Schools",
      description:
        "Complete digital classroom solutions with interactive displays, learning management systems, and student performance analytics.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 md:w-12 md:h-12" />,
      gradient: "from-purple-500 to-pink-500",
      title: "For Colleges & Universities",
      description:
        "Advanced campus-wide solutions including lecture capture systems, virtual labs, and research collaboration platforms.",
    },
    {
      icon: <Briefcase className="w-10 h-10 md:w-12 md:h-12" />,
      gradient: "from-orange-500 to-amber-500",
      title: "For Corporates & Meeting Rooms",
      description:
        "Smart conference solutions with video conferencing, wireless presentation systems, and AI meeting assistants.",
    },
    {
      icon: <CloudCog className="w-10 h-10 md:w-12 md:h-12" />,
      gradient: "from-green-500 to-emerald-500",
      title: "Hybrid & Remote Learning",
      description:
        "Integrated platforms for seamless hybrid learning experiences with real-time collaboration and cloud-based management.",
    },
    {
      icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
      gradient: "from-red-500 to-rose-500",
      title: "Training & Skill Development Centers",
      description:
        "Immersive training environments with VR simulations, skill assessment tools, and certification management systems.",
    },
    {
      icon: <Building2 className="w-10 h-10 md:w-12 md:h-12" />,
      gradient: "from-indigo-500 to-blue-500",
      title: "Government & Public Sector",
      description:
        "Large-scale educational infrastructure solutions for public institutions and government-led education initiatives.",
    },
  ];

  return (
    <section
      id="solutions"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background bubbles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Tailored Solutions for
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Every Learning Environment
            </span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Customized educational technology solutions designed to meet the unique needs of diverse learning organizations
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full bg-white/90 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl border border-white/30 transition-all duration-300 overflow-hidden">
                {/* Gradient Header */}
                <div
                  className={`bg-gradient-to-r ${category.gradient} p-6 sm:p-8 flex items-center justify-center`}
                >
                  <div className="text-white bg-white/10 p-4 sm:p-6 rounded-2xl backdrop-blur-sm">
                    {category.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-5 leading-relaxed">
                    {category.description}
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    Explore Solutions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Keyframe Animation */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
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
