'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { School, Briefcase, Cloud, Video, BookOpen, Rocket, Award, Users } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50
    });
  }, []);

  const solutions = [
    {
      icon: <School size={40} />,
      title: "For Schools",
      bg: "bg-blue-100",
      color: "text-blue-600",
      content: "Transform classrooms with interactive lessons, real-time annotations, and seamless app integration.",
      features: ["4K Display", "Multi-touch Functionality", "Educational Tools Suite", "After-sales Support"]
    },
    {
      icon: <Users size={40} />,
      title: "Colleges & Universities",
      bg: "bg-purple-100",
      color: "text-purple-600",
      content: "Advanced tools for collaborative learning, technical simulations, and academic discussions.",
      features: ["Interactive Presentations", "Real-time Annotations", "STEM Education Support", "Technical Simulations"]
    },
    {
      icon: <Briefcase size={40} />,
      title: "Corporate & Meetings",
      bg: "bg-green-100",
      color: "text-green-600",
      content: "Seamless video conferencing and wireless collaboration for modern workplaces.",
      features: ["4K Video Conferencing", "Wireless Sharing", "Zoom/Teams Integration", "Digital Whiteboarding"]
    },
    {
      icon: <Cloud size={40} />,
      title: "Hybrid & Remote Learning",
      bg: "bg-orange-100",
      color: "text-orange-600",
      content: "Interactive remote education with screen recording and platform compatibility.",
      features: ["Live Class Support", "Screen Recording", "Google Meet/Zoom Ready", "Hybrid Classroom Tools"]
    },
    {
      icon: <Rocket size={40} />,
      title: "Training Centers",
      bg: "bg-pink-100",
      color: "text-pink-600",
      content: "Immersive training solutions for skill development and technical education.",
      features: ["3D Lab Support", "AI Learning Modules", "Hands-on Simulations", "Vocational Training Tools"]
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16" data-aos="zoom-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Redefining Interactive Learning
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly Indian, Globally Inspired - 6 Years of Educational Innovation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {['6+ Years Experience', '5000+ Installations', '98% Satisfaction'].map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <Award className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{item}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Core Message */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Nitek Stands Out
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Combining Indian engineering with global standards, Nitek IFPs transform spaces into dynamic learning environments. 
              Trusted by India's premier institutions, we deliver more than technology - we deliver educational revolutions.
            </p>
            <div className="bg-indigo-50 rounded-xl p-6">
              <ul className="space-y-4">
                {['Teacher-Centric Design', 'Military-Grade Durability', '5-Year Warranty', '24/7 Support'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-indigo-600 p-2 rounded-lg mr-4">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/classroom-demo.jpg" 
                alt="Nitek in Action" 
                className="object-cover w-full h-full" 
              />
            </div>
            <div className="absolute floating -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Rocket className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average Engagement Boost</p>
                  <p className="text-2xl font-bold text-gray-900">+68%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16" data-aos="fade-up">
            Nitek IFP Solutions for Every Environment
          </h2>
          
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              data-aos="fade-up"
            >
              <div className={`p-8 rounded-2xl ${solution.bg} flex items-center justify-center`}>
                <div className="text-center">
                  <div className={`mb-6 mx-auto ${solution.color}`}>{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.content}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {solution.features.map((feature, fIndex) => (
                      <div key={fIndex} className="bg-white p-4 rounded-lg shadow-sm">
                        <span className="text-sm font-medium text-gray-900">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={`/solution-${index + 1}.jpg`} 
                    alt={solution.title} 
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div className="absolute -bottom-6 left-6 bg-white px-6 py-3 rounded-full shadow-md">
                  <span className="text-sm font-medium text-indigo-600">{index + 1}/5 Solutions Showcase</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center" data-aos="zoom-in">
          <div className="bg-indigo-900 text-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h3>
            <p className="text-indigo-200 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo and experience the Nitek difference
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Request Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}