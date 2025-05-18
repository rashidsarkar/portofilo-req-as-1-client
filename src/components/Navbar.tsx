"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Github, Mail, Download, Menu, X, Home, FolderGit2, BookOpen, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: FolderGit2 },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Resume-MD Rashid Sarkar-L2.pdf';
    link.download = 'Resume-MD Rashid Sarkar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link 
              href="/" 
              className="text-2xl font-bold flex items-center gap-2 group relative"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
              <Github className="w-6 h-6 text-primary transition-all duration-300 group-hover:rotate-12" />
              <span className="text-gray-900 group-hover:text-primary transition-colors duration-300">
                MD Rashid Sarkar
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname?.startsWith(item.href));
              
              return (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-gray-600 hover:text-primary transition-all duration-300 flex items-center gap-2 group relative",
                      isActive && "text-primary font-medium"
                    )}
                  >
                    <div className={cn(
                      "absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300",
                      isActive && "opacity-5"
                    )} />
                    <item.icon className={cn(
                      "w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary",
                      isActive && "text-primary scale-110"
                    )} />
                    <span className={cn(
                      "relative group-hover:translate-x-1 transition-transform duration-300",
                      isActive && "translate-x-1"
                    )}>{item.name}</span>
                  </Link>
                </div>
              );
            })}
            <Button
              onClick={handleDownload}
              className="bg-primary hover:bg-primary-hover text-black font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-soft">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname?.startsWith(item.href));
                
                return (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 text-gray-600 hover:text-primary transition-all duration-300 group",
                        isActive && "text-primary font-medium"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className={cn(
                        "absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300",
                        isActive && "opacity-5"
                      )} />
                      <item.icon className={cn(
                        "w-4 h-4 transition-all duration-300 group-hover:scale-110",
                        isActive && "text-primary scale-110"
                      )} />
                      {item.name}
                    </Link>
                  </div>
                );
              })}
              <div>
                <Button
                  onClick={handleDownload}
                  className="w-full bg-primary hover:bg-primary-hover text-black font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 