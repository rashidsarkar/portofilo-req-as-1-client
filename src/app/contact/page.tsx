"use client";

import { Button } from "../../components/ui/button";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          description: "I'll get back to you as soon as possible.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message", {
          description: data.message || "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container min-h-screen px-4 py-16 mx-auto bg-gradient-to-b from-white to-gray-50">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-5xl font-bold text-center"
      >
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-gray-800">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Feel free to reach out to me for any questions or opportunities.
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center p-6 space-x-4 transition-all bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl"
          >
            <div className="p-3 text-white rounded-full bg-gradient-to-r from-red-500 to-pink-500">
              <FaEnvelope className="text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Email</h3>
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
            className="flex items-center p-6 space-x-4 transition-all bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl"
          >
            <div className="p-3 text-white rounded-full bg-gradient-to-r from-green-500 to-teal-500">
              <FaPhone className="text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Phone</h3>
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
            className="flex items-center p-6 space-x-4 transition-all bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-xl"
          >
            <div className="p-3 text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Location</h3>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </motion.div>

          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/rashidsarkar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white transition-all rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:shadow-lg"
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white transition-all rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white transition-all rounded-full bg-gradient-to-r from-sky-500 to-blue-500 hover:shadow-lg"
            >
              <FaTwitter className="text-2xl" />
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-8 transition-shadow bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div whileHover={{ scale: 1.01 }} className="group">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 transition-all border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary group-hover:border-primary bg-gray-50"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="group">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 transition-all border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary group-hover:border-primary bg-gray-50"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="group">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 transition-all border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary group-hover:border-primary bg-gray-50"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="group">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 transition-all border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary group-hover:border-primary bg-gray-50"
                required
              ></textarea>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full py-3 space-x-2 text-lg font-medium text-white transition-all bg-black rounded-lg hover:from-primary/90 hover:to-blue-600/90"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <MdSend className="text-xl" />
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
