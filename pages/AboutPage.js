'use client';
import { motion } from 'framer-motion';
import { Flag, Award, HeartHandshake, ShieldCheck, Rocket } from 'lucide-react';
import Aos from 'aos';

export default function AboutPage() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-blue-50 overflow-hidden" data-aos="fade-up">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Pioneering Interactive Learning
            </span>{' '}
            Since 2018
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Indian education through innovative technology solutions
          </p>
        </motion.div>

        {/* Core Message */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <Flag className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Proudly Indian, Globally Inspired</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Born from a vision to revolutionize classroom technology, Nitek has spent 6 years perfecting interactive 
                solutions tailored for Indian educational needs. Our Made-in-India panels combine global innovation with 
                local understanding.
              </p>
              <div className="bg-indigo-50 rounded-lg p-6">
                <div className="flex flex-wrap gap-4">
                  {['6+ Years Experience', '5000+ Panels Installed', '98% Satisfaction'].map((item, index) => (
                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm">
                      <span className="text-sm font-medium text-indigo-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg">
              <div className="bg-yellow-100 w-max p-3 rounded-lg mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Trusted Excellence</h4>
              <p className="text-gray-600 text-sm">
                Preferred by 100+ premier institutions across India for reliability and performance
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg">
              <div className="bg-green-100 w-max p-3 rounded-lg mb-4">
                <HeartHandshake className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Service First</h4>
              <p className="text-gray-600 text-sm">
                24/7 support with average response time under 2 hours
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg">
              <div className="bg-blue-100 w-max p-3 rounded-lg mb-4">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Built to Last</h4>
              <p className="text-gray-600 text-sm">
                5-year warranty with rugged, classroom-tested design
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg">
              <div className="bg-purple-100 w-max p-3 rounded-lg mb-4">
                <Rocket className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Innovation Driven</h4>
              <p className="text-gray-600 text-sm">
                15+ patented technologies in interactive learning
              </p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-indigo-900 text-white rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-800 rounded-full filter blur-3xl opacity-50"></div>
              <h3 className="text-3xl font-bold mb-6">Our Teaching-First Philosophy</h3>
              <p className="text-indigo-100 leading-relaxed mb-6">
                We design every Nitek panel with actual classroom challenges in mind. Our teacher-centric approach 
                ensures:
              </p>
              <ul className="space-y-4">
                {['Zero Learning Curve', 'Multi-format Content Support', 'Real-time Collaboration', 'Automated Progress Tracking'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-indigo-600 p-2 rounded-lg mr-4">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/home.png" 
                  alt="Nitek Panel in Classroom" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Average Engagement Boost</p>
                    <p className="text-xl font-bold text-gray-900">+68%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="mt-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Promise to Educators
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              "To continuously innovate while maintaining the simplicity and reliability that teachers deserve"
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Meet Our Team
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}