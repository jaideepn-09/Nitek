'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', offset: 50 });
  }, []);

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-cyan-950 text-white pt-10 pb-32 md:pt-12"
      data-aos="fade-up"
    >
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl mix-blend-soft-light"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500 blur-3xl mix-blend-soft-light"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8 mb-12 lg:mb-0" data-aos="fade-right" data-aos-delay="200">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-200 to-indigo-300">
                Transforming Education
              </span>
              <span className="block mt-4 text-white">With Next-Gen Smart Classroom Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed opacity-90">
              NITEK's Smart School solutions empower educators with seamless technology integration, 
              professional training, and ongoing support to create immersive learning experiences.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {['Seamless Integration', 'Immersive Learning', 'Ongoing Support', 'Proven Results'].map((text) => (
                <div key={text} className="flex items-center space-x-3">
                  <div className="bg-indigo-500 bg-opacity-20 p-2 rounded-full"><CheckIcon /></div>
                  <span className="text-sm font-medium text-gray-200">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a
                href="#demo"
                className="relative group bg-white text-indigo-600 hover:text-indigo-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Request Demo</span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="#solutions"
                className="relative group border-2 border-white hover:border-indigo-300 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-indigo-400 hover:bg-opacity-10"
              >
                <span className="relative z-10">Explore Solutions</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mt-12 lg:mt-0" data-aos="fade-left" data-aos-delay="200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img src="/hero.jpeg" alt="Smart Classroom Solution" className="w-full h-auto object-cover aspect-video" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-indigo-900/20 to-transparent"></div>

              {/* Play Button */}
              <button
                aria-label="Play demo video"
                onClick={() => setShowVideo(true)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Stats Card */}
            <div
              className="absolute floating md:-bottom-6 md:-left-6 bottom-4 left-4 bg-white p-5 rounded-xl shadow-xl"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Learning Improvement</p>
                  <p className="text-gray-900 font-bold text-xl">87% Faster</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Video Player */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-[90%] max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Demo Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              aria-label="Close video"
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 bg-white text-indigo-700 rounded-full p-2 shadow-md hover:bg-red-500 hover:text-white transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
