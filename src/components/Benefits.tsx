
import { DollarSign, Clock, Calendar, HeartHandshake, Wallet, Smartphone, Percent, Gift, Shield, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      number: "01.",
      title: "Competitive Earnings",
      description: "Enjoy excellent income potential with fair commission rates and plenty of ride opportunities daily.",
      icon: DollarSign
    },
    {
      number: "02.",
      title: "Flexible Working Hours",
      description: "Be your own boss — choose when and how long you want to work. Perfect for full-time or part-time drivers.",
      icon: Clock
    },
    {
      number: "03.",
      title: "Steady Stream of Bookings",
      description: "Our strong local presence and online visibility ensure you'll always have rides to keep you busy.",
      icon: Calendar
    },
    {
      number: "04.",
      title: "Driver Support Team",
      description: "We've got your back! Our dedicated support team is here to help you with any questions or issues on the road.",
      icon: HeartHandshake
    },
    {
      number: "05.",
      title: "Weekly Payments",
      description: "Get paid quickly and reliably. We offer weekly payouts so you never have to wait for your hard-earned money.",
      icon: Wallet
    },
    {
      number: "06.",
      title: "Modern Booking System",
      description: "Our app and booking system make it easy for you to accept jobs and manage your schedule with ease.",
      icon: Smartphone
    },
    {
      number: "07.",
      title: "Low Commission Rates",
      description: "Keep more of what you earn. We offer lower commission rates than many competitors.",
      icon: Percent
    },
    {
      number: "08.",
      title: "Driver Rewards & Bonuses",
      description: "Get rewarded for your hard work through regular incentives, bonuses, and loyalty perks.",
      icon: Gift
    },
    {
      number: "09.",
      title: "Join a Trusted Brand",
      description: "Drive for a company that's known for reliability, professionalism, and excellent customer service.",
      icon: Shield
    },
    {
      number: "10.",
      title: "Opportunities for Growth",
      description: "Looking to do more? We offer opportunities to become a lead driver or even manage a fleet.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Drive With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the benefits that make Soton Cars the preferred choice for professional drivers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div key={benefit.number} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-lg p-3 font-bold text-lg min-w-[60px] text-center">
                    {benefit.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <IconComponent className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
