"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-light mb-8 tracking-wide">Get In Touch</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        We're here to help bring your architectural vision to life. Reach out to us through any of the channels below, or visit our studio for a consultation.
      </p>

      <div className="space-y-8">
        <div className="flex items-start">
          <Phone className="w-6 h-6 mr-4 mt-1 text-gray-400" />
          <div>
            <h4 className="font-light text-lg mb-2">Phone</h4>
            <p className="text-gray-600">+91 98765 43210</p>
            <p className="text-gray-600">+91 98765 43211</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="w-6 h-6 mr-4 mt-1 text-gray-400" />
          <div>
            <h4 className="font-light text-lg mb-2">Email</h4>
            <p className="text-gray-600">hello@fusiondot.com</p>
            <p className="text-gray-600">projects@fusiondot.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="w-6 h-6 mr-4 mt-1 text-gray-400" />
          <div>
            <h4 className="font-light text-lg mb-2">Studio Address</h4>
            <p className="text-gray-600">
              123 Design District
              <br />
              Bandra West, Mumbai 400050
              <br />
              Maharashtra, India
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-6 h-6 mr-4 mt-1 text-gray-400" />
          <div>
            <h4 className="font-light text-lg mb-2">Studio Hours</h4>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: By appointment only
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h4 className="font-light text-lg mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          {["Instagram", "LinkedIn", "Facebook"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-gray-600 hover:text-black transition-colors text-sm hover:-translate-y-0.5 transition-transform"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ContactInfo }