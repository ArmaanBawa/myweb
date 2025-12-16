import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import ThreeDHeading from '@/components/ThreeDHeading';
// Removed EmailJS; using Web3Forms for simpler email submissions

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Use Web3Forms for simple, serverless form submission
    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (ACCESS_KEY) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });

        const data = await res.json();
        if (data.success) {
          toast({ title: 'Message sent ✉️', description: 'Thanks! I will get back to you shortly.' });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          toast({ title: 'Sending failed', description: 'Please try again or use the email button.' });
        }
      } catch (err) {
        toast({ title: 'Sending failed', description: 'Please try again or use the email button.' });
      }
    } else {
      // Fallback: open Gmail compose with prefilled details
      const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=bawarman2005@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.open(composeUrl, '_blank');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'bawarman2005@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=bawarman2005@gmail.com',
      bg: 'bg-[#A259FF]',
      text: 'text-[#A259FF]'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-7719677602',
      href: 'tel:+917719677602',
      bg: 'bg-[#1ABCFE]',
      text: 'text-[#1ABCFE]'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New Delhi, India',
      bg: 'bg-[#0ACF83]',
      text: 'text-[#0ACF83]'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/ArmaanBawa',
      href: 'https://github.com/ArmaanBawa',
      bg: 'bg-[#F24E1E]',
      text: 'text-[#F24E1E]'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/armaan-bawa-0b2a09244',
      href: 'https://www.linkedin.com/in/armaan-bawa-0b2a09244',
      bg: 'bg-[#FFC700]',
      text: 'text-[#FFC700]'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#ffffff] relative overflow-hidden transition-colors duration-300">
      {/* Footer Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ThreeDHeading className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Let's <span className="text-[#F24E1E]">Connect</span>
          </ThreeDHeading>
          <div className="w-24 h-2 bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Got a crazy idea? Let's turn it into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-3xl p-8 hover:border-gray-400 transition-all duration-300 text-center group shadow-sm"
            >
              <div className={`w-16 h-16 rounded-2xl ${info.bg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <info.icon size={30} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
              {info.href ? (
                <a href={info.href} target="_blank" rel="noopener noreferrer" className={`font-medium ${info.text} underline-offset-4 hover:underline`}>
                  {info.value}
                </a>
              ) : (
                <p className={`font-medium ${info.text}`}>{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Corner Gradients */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#A259FF] blur-[80px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F24E1E] blur-[80px] opacity-20"></div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-input rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-[#A259FF] focus:ring-1 focus:ring-[#A259FF] transition-all placeholder:text-muted-foreground font-medium"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-input rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-[#1ABCFE] focus:ring-1 focus:ring-[#1ABCFE] transition-all placeholder:text-muted-foreground font-medium"
                  placeholder="hello@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground ml-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-input rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-[#0ACF83] focus:ring-1 focus:ring-[#0ACF83] transition-all placeholder:text-muted-foreground font-medium"
                placeholder="Collaboration Proposal"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground ml-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-gray-50 border border-input rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-[#F24E1E] focus:ring-1 focus:ring-[#F24E1E] transition-all placeholder:text-muted-foreground font-medium resize-none"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] hover:opacity-90 text-white py-7 text-lg rounded-xl font-bold shadow-lg transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 border-0"
            >
              <Send size={20} />
              Send Message
            </Button>
          </form>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center pb-8"
        >
          <p className="text-muted-foreground font-medium">
            Designed with <span className="text-[#F24E1E]">❤</span> and a splash of <span className="bg-gradient-to-r from-[#F24E1E] to-[#A259FF] bg-clip-text text-transparent font-bold">Color</span>.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;