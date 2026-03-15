import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Building2, User, MailCheck, Globe } from 'lucide-react';
import { GlassCard, Button } from '../components/ui/Core';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Build the <span className="gradient-text">Future</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your digital transformation? Our technical team is 
            available 24/7 to discuss your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8">Direct Channels</h2>
              <div className="space-y-8">
                {[
                  { icon: <Globe className="text-nexyovi-primary" />, title: "US Operations (Miami)", value: "300 Biscayne Blvd, Miami, FL" },
                  { icon: <MapPin className="text-nexyovi-secondary" />, title: "Engineering Hub (Addis Ababa)", value: "Bole Road, Addis Ababa, Ethiopia" },
                  { icon: <Mail className="text-nexyovi-accent" />, title: "Corporate Inquiries", value: "vision@nexyovi.tech" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-white bg-opacity-5 rounded-xl flex items-center justify-center shrink-0 border border-white border-opacity-5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{item.title}</p>
                      <p className="text-lg text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard className="bg-gradient-to-br from-nexyovi-primary/10 to-transparent">
              <h3 className="text-xl font-bold mb-4">Book a Discovery Call</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Prefer a face-to-face discussion? Schedule a 15-minute intro call 
                with our solutions architect to map out your infrastructure.
              </p>
              <Button variant="outline" className="w-full">Open Calendar</Button>
            </GlassCard>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 md:p-12 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Full Name</label>
                        <div className="relative">
                           <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                           <input 
                             required
                             type="text" 
                             className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-nexyovi-primary transition-all text-white"
                             placeholder="Ex: John Doe"
                             value={formData.name}
                             onChange={(e) => setFormData({...formData, name: e.target.value})}
                           />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Email Address</label>
                        <div className="relative">
                           <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                           <input 
                             required
                             type="email" 
                             className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-nexyovi-primary transition-all text-white"
                             placeholder="john@company.com"
                             value={formData.email}
                             onChange={(e) => setFormData({...formData, email: e.target.value})}
                           />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Phone Number</label>
                        <div className="relative">
                           <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                           <input 
                             type="tel" 
                             className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-nexyovi-primary transition-all text-white"
                             placeholder="+1 (555) 000-0000"
                             value={formData.phone}
                             onChange={(e) => setFormData({...formData, phone: e.target.value})}
                           />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Company</label>
                        <div className="relative">
                           <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                           <input 
                             type="text" 
                             className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-nexyovi-primary transition-all text-white"
                             placeholder="Nexyovi Tech"
                             value={formData.company}
                             onChange={(e) => setFormData({...formData, company: e.target.value})}
                           />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Your Message</label>
                      <div className="relative">
                         <MessageSquare className="absolute left-4 top-6 text-gray-500" size={18} />
                         <textarea 
                           required
                           rows={5}
                           className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-nexyovi-primary transition-all text-white resize-none"
                           placeholder="Describe your project goals..."
                           value={formData.message}
                           onChange={(e) => setFormData({...formData, message: e.target.value})}
                         />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full py-5 text-lg" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing Engineering Signal..." : "Send Request Signals"}
                      <Send size={20} className={isSubmitting ? "animate-pulse" : ""} />
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                       <MailCheck className="text-emerald-500" size={40} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Transmission Successful!</h2>
                    <p className="text-gray-400 mb-10 max-w-sm mx-auto">
                      Your project inquiry has been received. Our architecture team 
                      will review your signals and respond within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Signal</Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};
