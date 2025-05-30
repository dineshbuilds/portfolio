
import { useState } from 'react';
import { Github, Linkedin, Instagram, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    // Format message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    const whatsappLink = `https://wa.me/919150256608?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank');
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "Your message has been sent to WhatsApp.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-white to-[#f9f9f9] dark:from-gray-800 dark:to-gray-900">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto dark:text-white">Contact Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <div className="glass-card rounded-xl p-8 dark:bg-gray-800/50 dark:border-gray-700">
              <h3 className="font-montserrat font-bold text-2xl mb-6 text-primary dark:text-white">Get In Touch</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="font-bold dark:text-white">Name</p>
                  <p className="text-gray-600 dark:text-gray-300">Dinesh Raja M</p>
                </div>
                
                <div>
                  <p className="font-bold dark:text-white">Email</p>
                  <a href="mailto:mdineshraja@gmail.com" className="text-secondary hover:underline dark:text-secondary">
                    mdineshraja@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="font-bold dark:text-white">Social Media</p>
                  <div className="flex gap-4 mt-2">
                    <a 
                      href="https://github.com/dineshraja03" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-github text-white p-2 rounded-md hover:opacity-80 transition-opacity"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/mdineshraja03/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-linkedin text-white p-2 rounded-md hover:opacity-80 transition-opacity"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://instagram.com/_dinesh_raja__" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-2 rounded-md hover:opacity-80 transition-opacity"
                      aria-label="Instagram Profile"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <div className="glass-card rounded-xl p-8 dark:bg-gray-800/50 dark:border-gray-700">
              <h3 className="font-montserrat font-bold text-2xl mb-6 text-primary dark:text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-all flex items-center justify-center space-x-2 dark:bg-primary/80"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5" />
                      <span>Send to WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
