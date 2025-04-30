'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How difficult is it to implement your system in an existing classroom?",
      answer: "Our implementation process is designed to be as seamless as possible. Most schools can be fully operational within 2-3 weeks. We provide comprehensive training and support throughout the transition period, and our systems are designed to integrate with your existing technology infrastructure."
    },
    {
      question: "What kind of training do you provide for teachers?",
      answer: "We offer multiple training options including on-site workshops, virtual training sessions, and a comprehensive online academy. Our training focuses on both technical operation and pedagogical strategies to maximize the educational impact of our technology. We also provide ongoing professional development opportunities."
    },
    {
      question: "How do you ensure student data privacy and security?",
      answer: "Student data security is our top priority. We comply with all relevant regulations including FERPA, COPPA, and GDPR. Our systems use end-to-end encryption, regular security audits, and role-based access controls. We never sell or share student data with third parties."
    },
    {
      question: "What ongoing costs should we expect after implementation?",
      answer: "Our pricing model is transparent with predictable costs. After implementation, you'll have annual licensing fees for software updates and access to new features, typically 15-20% of the initial software cost. Hardware maintenance contracts are optional but recommended, starting at $500/classroom/year. We also offer budget-friendly multi-year agreements."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="FAQSection" className="py-20 bg-gradient-to-b from-gray-50 to-">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Common Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our smart classroom solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <motion.div
                  className={`p-1 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 shadow-sm hover:shadow-md transition-shadow ${
                    activeIndex === index ? 'bg-gradient-to-r from-indigo-100 to-blue-100' : ''
                  }`}
                >
                  <button 
                    className="w-full flex justify-between items-center p-6 text-left"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="w-6 h-6 text-indigo-600" />
                    </motion.span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                        id={`faq-${index}`}
                        role="region"
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
return (
    <div>
      <FAQSection />
    </div>
  );
}