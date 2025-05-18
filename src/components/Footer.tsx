"use client";

import Link from 'next/link';
import { Github, Mail, Linkedin, Twitter, MapPin, Phone, ArrowUpRight, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/rashidsarkar',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div 
            data-aos="fade-up"
            className="space-y-4"
          >
            <Link href="/" className="text-2xl font-bold flex items-center gap-2 group">
              <Github className="w-6 h-6 text-primary transition-all duration-300 group-hover:rotate-12" />
              <span className="text-gray-900 group-hover:text-primary transition-colors duration-300">
                MD Rashid Sarkar
              </span>
            </Link>
            <p className="text-gray-600">
              A passionate Full Stack Developer building modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                    className="hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="transition-all duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:rashidsarkar558@gmail.com"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  rashidsarkar558@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+8801872970928"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                >
                  +8801872970928
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/rashidsarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/RongilaRashid/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rashidsarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div 
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600"
        >
          <p>© {currentYear} MD Rashid Sarkar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 