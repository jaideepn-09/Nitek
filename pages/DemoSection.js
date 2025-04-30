'use client';
import { motion } from "framer-motion";
import {
  HelpCircle,
  DownloadCloud,
  Settings,
  Wrench,
  LogIn,
} from "lucide-react";

export default function SupportSection() {
  const supportItems = [
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "FAQs",
      description:
        "Find answers to common questions about setup, troubleshooting, and features.",
      link: "/FAQSection",
    },
    {
      icon: <DownloadCloud className="w-6 h-6" />,
      title: "Product Manuals & Downloads",
      description: "Access user manuals, software updates, and driver downloads.",
      link: "/downloads",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Warranty & Repairs",
      description: "Check warranty status, request repairs, or schedule maintenance.",
      link: "/support/warranty",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Installation Help",
      description: "Step-by-step guides and video tutorials for setup.",
      link: "/installation",
    },
    {
      icon: <LogIn className="w-6 h-6" />,
      title: "Customer Portal",
      description: "Access your support tickets, service history, and account details.",
      link: "/login",
    },
  ];

  return (
    <section
      id="support"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Comprehensive{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Support Center
          </span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Everything you need to get the most from your NITEK solutions.
        </motion.p>

        {/* Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
              <a
                href={item.link}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium mt-4 transition-colors"
              >
                Explore Resources
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Immediate Support */}
        <motion.div
          className="mt-16 p-8 bg-indigo-50 rounded-xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Immediate Assistance?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+11234567890"
              className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Call Support: +1 (123) 456-7890
            </a>
            <a
              href="mailto:support@nitek.com"
              className="w-full sm:w-auto bg-white text-indigo-600 px-6 py-3 rounded-lg border-2 border-indigo-100 hover:border-indigo-200 transition"
            >
              Email Support
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            24/7 Support Availability | Average Response Time: 15 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
