
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img 
              src="/lovable-uploads/6dda706b-4ec7-499d-9cc6-2ec1f49caad2.png" 
              alt="Soton Cars" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Southampton's premier taxi service, connecting drivers with passengers through reliable, professional transportation solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+44 23 8000 0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">info@sotoncars.co.uk</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-gray-300">
                  123 High Street<br />
                  Southampton<br />
                  SO14 2AA
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#home" className="block text-gray-300 hover:text-green-400 transition-colors">Home</a>
              <a href="#benefits" className="block text-gray-300 hover:text-green-400 transition-colors">Why Drive With Us</a>
              <a href="#become-driver" className="block text-gray-300 hover:text-green-400 transition-colors">Become a Driver</a>
              <a href="#contact" className="block text-gray-300 hover:text-green-400 transition-colors">Contact</a>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Office Hours</h4>
              <div className="text-gray-300 space-y-1">
                <p>Monday - Friday: 8AM - 8PM</p>
                <p>Saturday: 9AM - 6PM</p>
                <p>Sunday: 10AM - 4PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Soton Cars. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
