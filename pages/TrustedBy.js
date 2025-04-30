'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrustedBy() {
  const institutions = [
    { name: "Harvard", logo: "/Harvard.svg", width: 120, height: 40 },
    { name: "Stanford", logo: "/stanford.svg", width: 140, height: 40 },
    { name: "MIT", logo: "/mit.svg", width: 100, height: 40 },
    { name: "Oxford", logo: "/oxford.svg", width: 130, height: 40 },
    { name: "Google for Education", logo: "/google.svg", width: 160, height: 40 },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.p 
          className="text-center text-gray-600 mb-12 md:mb-16 text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by leading educational institutions worldwide
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 items-center justify-center px-4">
          {institutions.map((institution, index) => (
            <motion.div
              key={institution.name}
              className="flex justify-center p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative h-16 w-full max-w-[160px] opacity-70 hover:opacity-100 transition-opacity duration-300 group">
                <Image
                  src={institution.logo}
                  alt={institution.name}
                  width={institution.width}
                  height={institution.height}
                  className="object-contain object-center w-full h-full"
                  style={{
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg" />
              </div>
            </motion.div>
          ))}
        </div>
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