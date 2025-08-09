"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-3xl font-light mb-8 tracking-wide">Start Your Project</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Ready to bring your vision to life? Fill out the form below and we'll get back to you within 24 hours to discuss your project.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-light mb-2">Full Name *</label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-light mb-2">Email Address *</label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-light mb-2">Phone Number</label>
            <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="projectType" className="block text-sm font-light mb-2">Project Type *</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select a service</option>
              <option value="architecture">Architecture</option>
              <option value="interior">Interior Design</option>
              <option value="furniture">Furniture Design</option>
              <option value="construction">Construction</option>
              <option value="consultation">Consultation</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-light mb-2">Project Details *</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
          />
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button type="submit" size="lg" className="w-full md:w-auto">
            <Send size={16} className="mr-2" />
            Send Message
          </Button>
        </motion.div>
      </form>
    </div>
  );
}

export { ContactForm }