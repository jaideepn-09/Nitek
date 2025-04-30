'use client';
import { motion } from 'framer-motion';
import { Package, Grid, BarChart, Star } from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function ProductsSection() {
  const products = [
    {
      image: "/ax3-Sizes.png",
      title: "Interactive Flat Panels",
      models: ["65\"", "75\"", "86\"", "98\""],
      description: "4K Ultra HD touch displays with multi-touch capability and built-in Android system"
    },
    {
      image: "/PTXcamera.png",
      title: "PTZ Camera",
      features: ["4K Resolution", "12x Optical Zoom", "Auto Tracking"],
      description: "Professional-grade camera for hybrid learning and conference rooms"
    },
    {
      image: "/birdBarDevice.png",
      title: "Sound Bar with Camera",
      specs: ["Built-in 4K Camera", "Beamforming Mic Array", "120W Output"],
      description: "All-in-one audio-visual solution for crystal clear communication"
    }
  ];

  const productCategories = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Accessories & Add-ons",
      items: ["Wireless Mics", "Interactive Pens", "Wall Mounts", "Mobile Carts"]
    },
    {
      icon: <Grid className="w-6 h-6" />,
      title: "Software & Tools",
      items: ["Classroom Manager", "Whiteboard Suite", "Device Sync", "Analytics Dashboard"]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Comparison Chart",
      link: "/comparison",
      description: "Model-wise technical specifications comparison"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Why Nitek?",
      link: "/usp",
      description: "Discover our unique advantages"
    }
  ];

  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            NITEK{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Product Ecosystem
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Premium hardware and software solutions designed for modern educational environments
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-4 sm:p-6 flex justify-center">
                <Zoom>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="mx-auto h-36 object-contain cursor-zoom-in transition-transform duration-200"
                  />
                </Zoom>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <div className="mb-4">
                  {product.models && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.models.map((model, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {model}
                        </span>
                      ))}
                    </div>
                  )}
                  {product.features && (
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  )}
                  {product.specs && (
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                      {product.specs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <p className="text-gray-600 text-sm sm:text-base">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Categories */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {productCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{category.title}</h3>
              </div>
              {category.items ? (
                <ul className="space-y-2 text-sm text-gray-600">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm">
                  <a href={category.link} className="text-indigo-600 hover:underline">
                    {category.description} →
                  </a>
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating animation CSS */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
