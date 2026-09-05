import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, FileText } from 'lucide-react';
import PortfolioLayout from '../components/PortfolioLayout';

const ContactPage = () => {
  return (
    <PortfolioLayout>
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Interested in collaborating or discussing AI/ML opportunities? Let's talk!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Mail, label: "Email", value: "surplussuman987@gmail.com", href: "mailto:surplussuman987@gmail.com" },
                { icon: Phone, label: "Phone", value: "6383595092", href: "tel:6383595092" },
                { icon: MapPin, label: "Location", value: "Dharmapuri, Tamil Nadu", href: "#" },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  href={contact.href}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-2xl transition-all block"
                >
                  <contact.icon className="text-purple-600 mx-auto mb-4" size={32} />
                  <h3 className="font-bold text-gray-800 mb-2">{contact.label}</h3>
                  <p className="text-gray-600 text-sm">{contact.value}</p>
                </motion.a>
              ))}
            </div>

            <div className="flex justify-center gap-6">
              {[
                { icon: Github, href: "https://github.com/surplussuman", color: "hover:text-purple-600" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/suman-janarthanan-352171222/", color: "hover:text-blue-600" },
                { icon: FileText, href: "https://suman-janarthanan-wrvh2ow.gamma.site/", color: "hover:text-pink-600" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-purple-100 ${social.color}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PortfolioLayout>
  );
};

export default ContactPage;
