"use client";
import { useState } from "react";
import { Send, Mail, MessageCircle, CheckCircle, AlertCircle, Copy, ExternalLink } from "lucide-react";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface GeneratedLinks {
  email: string;
  whatsapp: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [generatedLinks, setGeneratedLinks] = useState<GeneratedLinks | null>(null);

  const sendEmail = async (emailData: FormData) => {
    console.log("📤 Attempting to send email:", emailData);
    
    // EmailJS configuration - you'll need to replace these with your actual EmailJS credentials
    const serviceId = 'service_rc12r84'; // Your EmailJS service ID
    const templateId = 'template_bjgmhvi'; // You need to replace this with your actual template ID
    const publicKey = 'BDxrvXML2lhiWhA-b'; // Your EmailJS public key
    
    try {
      const templateParams = {
        to_email: 'netagency10@gmail.com', // Using the email from your EmailJS service
        from_name: emailData.name,
        from_email: emailData.email,
        phone: emailData.phone,
        project_type: emailData.projectType,
        message: emailData.message,
        reply_to: emailData.email,
      };

      console.log('📧 Sending email with params:', { serviceId, templateId, templateParams, publicKey });
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('✅ Email sent successfully:', result);
      return result;
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      console.error('Error details:', {
        serviceId,
        templateId,
        publicKey,
        error: error
      });
      throw error;
    }
  };

  const createWhatsAppMessage = (data: FormData) => {
    return `🏗️ *New Project Inquiry*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}
🏢 *Project Type:* ${data.projectType}

📋 *Project Details:*
${data.message}

---
💼 Sent from Fusion Dot Architects website`;
  };

  const createEmailContent = (data: FormData) => {
    const subject = `New Project Inquiry - ${data.projectType}`;
    const body = `Hello,

I'm interested in your architectural services and would like to discuss a project.

CONTACT INFORMATION:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Project Type: ${data.projectType}

PROJECT DETAILS:
${data.message}

Please get back to me at your earliest convenience.

Best regards,
${data.name}

---
Sent from Fusion Dot Architects website`;

    return { subject, body };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault();
    console.log("🚀 Form submission started");
    console.log("📋 Form data:", formData);
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
      console.log("❌ Validation failed - missing required fields");
      setSubmitStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return;
    }
    
    console.log("✅ Form validation passed");
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setGeneratedLinks(null);

    try {
      // Try to send email via EmailJS first
      let emailSent = false;
      
      console.log("📧 Attempting to send email via EmailJS...");
      try {
        await sendEmail(formData);
        emailSent = true;
        console.log("✅ Email sent via EmailJS successfully");
      } catch (emailError) {
        console.log("⚠️ EmailJS failed:", emailError);
        console.log("📧 Will use fallback method");
      }

      // Create WhatsApp message
      console.log("📱 Creating WhatsApp message...");
      const whatsappMessage = createWhatsAppMessage(formData);
      const whatsappLink = `https://wa.me/919986639995?text=${encodeURIComponent(whatsappMessage)}`;
      console.log("📱 WhatsApp link created:", whatsappLink);

      // Create email content for fallback
      console.log("📧 Creating fallback email content...");
      const emailContent = createEmailContent(formData);
      const emailLink = `mailto:sanjayvihaan111@gmail.com?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.body)}`;
      console.log("📧 Email link created:", emailLink);

      if (emailSent) {
        console.log("✅ Email was sent successfully, showing success message");
        setSubmitStatus("success");
        setStatusMessage("Message sent successfully! We've received your inquiry and will respond within 24 hours. Opening WhatsApp for immediate contact...");
        
        // Auto-open WhatsApp
        console.log("📱 Auto-opening WhatsApp in 1 second...");
        setTimeout(() => {
          try {
            window.open(whatsappLink, '_blank');
            console.log("📱 WhatsApp opened successfully");
          } catch (error) {
            console.log("❌ WhatsApp auto-open failed:", error);
          }
        }, 1000);
      } else {
        console.log("⚠️ Email failed, using fallback mode");
        // Fallback mode - provide links for manual use
        setSubmitStatus("success");
        setStatusMessage("Form processed! Please use the links below to complete sending your message:");
        
        setGeneratedLinks({
          email: emailLink,
          whatsapp: whatsappLink
        });

        // Try to auto-open both
        console.log("📧 Auto-opening email in 0.5 seconds...");
        setTimeout(() => {
          try {
            window.open(emailLink, '_blank');
            console.log("📧 Email opened successfully");
          } catch (error) {
            console.log("❌ Email auto-open failed:", error);
          }
        }, 500);

        console.log("📱 Auto-opening WhatsApp in 1.5 seconds...");
        setTimeout(() => {
          try {
            window.open(whatsappLink, '_blank');
            console.log("📱 WhatsApp opened successfully");
          } catch (error) {
            console.log("❌ WhatsApp auto-open failed:", error);
          }
        }, 1500);
      }
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });

    } catch (error) {
      console.error("💥 Form submission error:", error);
      setSubmitStatus("error");
      setStatusMessage("There was an error processing your request. Please try the direct contact buttons below or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Simple notification
      const notification = document.createElement('div');
      notification.innerHTML = `✅ ${type} link copied!`;
      notification.style.cssText = 'position:fixed;top:20px;right:20px;background:#22c55e;color:white;padding:12px 20px;border-radius:6px;z-index:9999;font-size:14px;box-shadow:0 4px 6px rgba(0,0,0,0.1)';
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 3000);
    } catch (err) {
      alert(`${type} link: ${text}`);
    }
  };

  const directWhatsApp = () => {
    const message = `Hello! I'm interested in your architectural services. I found you through your website and would like to discuss a project.`;
    const whatsappLink = `https://wa.me/919986639995?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const directEmail = () => {
    const mailtoLink = `mailto:sanjayvihaan111@gmail.com?subject=Project Inquiry&body=Hello! I'm interested in your architectural services. I found you through your website and would like to discuss a project.`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-light mb-8 tracking-wide text-gray-800">Start Your Project</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Ready to bring your vision to life? Fill out the form below and we'll get back to you within 24 hours to discuss your project.
      </p>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2 text-green-800 mb-3">
            <CheckCircle size={20} />
            <span className="font-medium">Success!</span>
          </div>
          <p className="text-green-700 text-sm mb-4">{statusMessage}</p>
          
          {generatedLinks && (
            <div className="space-y-3">
              <div className="text-sm text-green-800 font-medium">Your message is ready to send:</div>
              
              {/* Email Link */}
              <div className="bg-white p-3 rounded border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-green-600" />
                    <span className="text-sm font-medium text-green-800">Email Message</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => copyToClipboard(generatedLinks.email, "Email")}
                      className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors flex items-center space-x-1"
                    >
                      <Copy size={12} />
                      <span>Copy</span>
                    </button>
                    <button
                      onClick={() => window.open(generatedLinks.email, '_blank')}
                      className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center space-x-1"
                    >
                      <ExternalLink size={12} />
                      <span>Send</span>
                    </button>
                  </div>
                </div>
                <p className="text-xs text-green-600">Click "Send" to open your email client</p>
              </div>

              {/* WhatsApp Link */}
              <div className="bg-white p-3 rounded border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <MessageCircle size={16} className="text-green-600" />
                    <span className="text-sm font-medium text-green-800">WhatsApp Message</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => copyToClipboard(generatedLinks.whatsapp, "WhatsApp")}
                      className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors flex items-center space-x-1"
                    >
                      <Copy size={12} />
                      <span>Copy</span>
                    </button>
                    <button
                      onClick={() => window.open(generatedLinks.whatsapp, '_blank')}
                      className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center space-x-1"
                    >
                      <ExternalLink size={12} />
                      <span>Send</span>
                    </button>
                  </div>
                </div>
                <p className="text-xs text-green-600">Click "Send" to open WhatsApp</p>
              </div>
            </div>
          )}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-800">
          <AlertCircle size={20} />
          <span className="text-sm">{statusMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium mb-2 text-gray-700">Project Type *</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a service</option>
              <option value="Architecture">Architecture</option>
              <option value="Interior Design">Interior Design</option>
              <option value="Furniture Design">Furniture Design</option>
              <option value="Construction">Construction</option>
              <option value="Consultation">Consultation</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Project Details *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Send Message</span>
              </>
            )}
          </button>

          {/* WhatsApp Button */}
          {/* <button
            type="button"
            onClick={directWhatsApp}
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors flex items-center justify-center space-x-2 sm:w-auto"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </button> */}

          {/* Email Button */}
          {/* <button
            type="button"
            onClick={directEmail}
            className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors flex items-center justify-center space-x-2 sm:w-auto"
          >
            <Mail size={16} />
            <span>Email</span>
          </button> */}
        </div>

        <p className="text-xs text-gray-500 text-center leading-relaxed">
          By submitting this form, you agree to our privacy policy and consent to being contacted about your project.
        </p>
      </form>
    </div>
  );
}

export default ContactForm;