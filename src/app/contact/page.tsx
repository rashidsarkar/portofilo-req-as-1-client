'use client';

import { Button } from '../../components/ui/button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-12 "
      >
        Contact Me
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 text-lg">
              Feel free to reach out to me for any questions or opportunities.
              I'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-4 p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg">Email</h3>
                <a
                  href="mailto:rashidsarkar558@gmail.com"
                  className="text-primary hover:underline"
                >
                  rashidsarkar558@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-4 p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg">Phone</h3>
                <a
                  href="tel:+8801872970928"
                  className="text-primary hover:underline"
                >
                  +8801872970928
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-4 p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg">Location</h3>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </motion.div>
            
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/rashidsarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-lg transition-all"
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg transition-all"
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:shadow-lg transition-all"
              >
                <FaTwitter className="text-2xl" />
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
        >
          <form className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="group"
            >
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all group-hover:border-primary bg-gray-50"
                required
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="group"
            >
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all group-hover:border-primary bg-gray-50"
                required
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="group"
            >
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all group-hover:border-primary bg-gray-50"
                required
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="group"
            >
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all group-hover:border-primary bg-gray-50"
                required
              ></textarea>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full bg-black text-white hover:from-primary/90 hover:to-blue-600/90 transition-all py-3 rounded-lg flex items-center justify-center space-x-2 text-lg font-medium"
              >
                <span>Send Message</span>
                <MdSend className="text-xl" />
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 