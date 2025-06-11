
import { CheckCircle, ArrowRight } from 'lucide-react';

const BecomeDriver = () => {
  const requirements = [
    "Valid UK driving license",
    "Clean driving record",
    "Vehicle insurance",
    "Professional attitude",
    "Local area knowledge"
  ];

  return (
    <section id="become-driver" className="py-16 bg-gradient-to-br from-green-600 to-green-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Become a Driver
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Ready to start your journey with Soton Cars? Join our team of professional drivers today.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-6">Requirements:</h3>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span className="text-lg">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Get Started Today</h3>
              <p className="text-lg mb-6 opacity-90">
                Fill out our simple application form and one of our team members will contact you within 24 hours.
              </p>
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeDriver;
