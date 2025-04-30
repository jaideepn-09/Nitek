'use client';
import { motion } from 'framer-motion';
import { School, Briefcase, HeartPulse, Building2, HandHeart } from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    {
      icon: <School className="w-8 h-8" />,
      title: "Education Sector",
      gradient: "from-blue-500 to-cyan-500",
      description: "Transforming classrooms with interactive learning solutions",
      applications: [
        "Smart Classrooms",
        "Digital Whiteboarding",
        "Remote Learning",
        "Teacher Training"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Corporate & Business",
      gradient: "from-purple-500 to-pink-500",
      description: "Enhancing workplace collaboration and productivity",
      applications: [
        "Video Conferencing",
        "Interactive Boardrooms",
        "Training Centers",
        "Digital Signage"
      ]
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Healthcare & Training",
      gradient: "from-green-500 to-emerald-500",
      description: "Advanced solutions for medical education and care",
      applications: [
        "Surgical Training",
        "Patient Education",
        "Medical Conferencing",
        "Research Collaboration"
      ]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Public Administration",
      gradient: "from-orange-500 to-amber-500",
      description: "Modernizing government operations and services",
      applications: [
        "Digital Governance",
        "Public Training",
        "Crisis Management",
        "Community Outreach"
      ]
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Nonprofits & NGOs",
      gradient: "from-red-500 to-rose-500",
      description: "Empowering social initiatives through technology",
      applications: [
        "Digital Literacy Programs",
        "Remote Education",
        "Collaborative Workspaces",
        "Awareness Campaigns"
      ]
    }
  ];

  return (
    <section id="industries" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Empowering{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Diverse Sectors
            </span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Transformative solutions tailored for various industries' unique needs
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`bg-gradient-to-r ${industry.gradient} p-4 rounded-lg w-max mb-4`}>
                <div className="text-white">
                  {industry.icon}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{industry.description}</p>
              
              <ul className="space-y-2 mt-auto">
                {industry.applications.map((app, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 shrink-0"></span>
                    {app}
                  </li>
                ))}
              </ul>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-100 rounded-xl transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Nitek solutions adapt to your sector's specific requirements, providing tailored 
            interactive technology that enhances communication, collaboration, and learning 
            outcomes across all industries.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
