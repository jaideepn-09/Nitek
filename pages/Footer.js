'use client';
import React, { useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <footer className="bg-gradient-to-b from-white to-blue-900 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div 
            className="md:col-span-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-white/10 rounded-lg">
                <span className="text-2xl font-bold text-black">NITEK</span>
              </div>
            </div>
            <p className="text-black text-sm leading-relaxed">
              Empowering educational institutions with cutting-edge technology solutions for smarter classrooms 
              and enhanced learning experiences.
            </p>
            
            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, color: 'bg-blue-600' },
                  { icon: Twitter, color: 'bg-blue-400' },
                  { icon: Instagram, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
                  { icon: Linkedin, color: 'bg-blue-700' }
                ].map(({ icon: Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`p-2 rounded-lg text-white hover:scale-105 transition-transform ${color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div data-aos="fade-left" data-aos-delay="150">
            <h3 className="text-sm font-semibold text-black mb-4 border-b border-black/20 pb-2">
              Solutions
            </h3>
            <ul className="space-y-3">
              {['Smart Classroom', 'Student Analytics', 'Learning Platform', 'Parent Portal'].map((item, index) => (
                <li key={index} data-aos="fade-left" data-aos-delay={200 + index * 50}>
                  <a 
                    href="#" 
                    className="text-black hover:underline text-sm flex items-center group transition-all"
                  >
                    <span className="w-2 h-2 bg-black/0 mr-2 rounded-full group-hover:bg-black transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div data-aos="fade-right" data-aos-delay="150">
            <h3 className="text-sm font-semibold text-black mb-4 border-b border-black/20 pb-2">
              Resources
            </h3>
            <ul className="space-y-3">
              {['Documentation', 'Webinars', 'API Docs', 'Developer Tools'].map((item, index) => (
                <li key={index} data-aos="fade-right" data-aos-delay={200 + index * 50}>
                  <a 
                    href="#" 
                    className="text-black hover:underline text-sm flex items-center group transition-all"
                  >
                    <span className="w-2 h-2 bg-black/0 mr-2 rounded-full group-hover:bg-black transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div 
            className="md:col-span-2 lg:col-span-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-sm font-semibold text-black mb-4 border-b border-black/20 pb-2">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="flex-shrink-0 mt-1 text-black" size={16} />
                <div>
                  <p className="text-black text-sm">Email</p>
                  <a href="mailto:info@nitek.com" className="text-black text-sm hover:underline">info@nitek.com</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="flex-shrink-0 mt-1 text-black" size={16} />
                <div>
                  <p className="text-black text-sm">Phone</p>
                  <a href="tel:+11234567890" className="text-black text-sm hover:underline">+1 (123) 456-7890</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 mt-1 text-black" size={16} />
                <div>
                  <p className="text-black text-sm">Address</p>
                  <p className="text-black text-sm">123 EduTech Way, San Francisco, CA 94107</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div 
          className="mt-12 border-t border-black/10 pt-8"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="max-w-md mx-auto md:mx-0">
            <h3 className="text-sm font-semibold text-black mb-4">Subscribe to Our Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-black/20 rounded-lg px-4 py-2 text-sm text-black placeholder-black/60 focus:outline-none focus:border-black/40"
                data-aos="fade-right"
                data-aos-delay="300"
              />
              <button 
                className="bg-black text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="mt-12 border-t border-black/10 pt-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <div className="text-white text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} NITEK Technologies. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-white hover:underline transition-colors">Privacy Policy</a>
              <a href="#" className="text-white hover:underline transition-colors">Terms of Service</a>
              <a href="#" className="text-white hover:underline transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;