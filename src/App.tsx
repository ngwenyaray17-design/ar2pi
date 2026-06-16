import { useState } from 'react';
import { 
  Calendar, 
  Database, 
  MapPin, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch('http://localhost:3001/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setSubmitted(true);
          setEmail('');
        } else {
          console.error('Failed to join waitlist');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="VitalLink Health" className="h-10 w-auto brightness-0 invert" />
            <span className="font-inter font-bold text-xl tracking-tight hidden sm:block">VitalLink Health</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 font-inter font-medium text-sm">
            <a href="#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-secondary transition-colors">How it Works</a>
            <a href="#testimonials" className="hover:text-secondary transition-colors">Testimonials</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-accent hover:bg-opacity-90 text-white px-5 py-2 rounded-custom font-inter font-medium text-sm transition-all">
              Get Started
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-teal-800 px-4 py-6 space-y-4 font-inter">
            <a href="#services" className="block text-white hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#how-it-works" className="block text-white hover:text-secondary" onClick={() => setIsMenuOpen(false)}>How it Works</a>
            <a href="#testimonials" className="block text-white hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <button className="w-full bg-accent text-white px-5 py-3 rounded-custom font-medium transition-all">
              Get Started
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-neutral pt-20 pb-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-inter font-bold text-heading leading-tight mb-6">
              Your health navigated. <span className="text-primary">Stress-free.</span>
            </h1>
            <p className="text-lg text-text mb-8 max-w-lg leading-relaxed">
              We help you find the right specialists, book appointments faster, and manage your medical records — so you can focus on getting better.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-custom border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent flex-grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-custom font-inter font-semibold transition-all flex items-center justify-center gap-2">
                  Join Waitlist <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <div className="bg-white p-4 rounded-custom border border-primary flex items-center gap-3 text-primary font-medium">
                <CheckCircle2 /> Thanks! We'll be in touch soon.
              </div>
            )}
            <p className="mt-4 text-sm text-gray-500">
              Join 500+ families waiting for a better healthcare experience.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-secondary bg-opacity-20 absolute -top-4 -left-4 w-full h-full rounded-2xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Healthcare professional with patient" 
                className="rounded-2xl shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Concierge care for the modern patient</h2>
          <p className="text-text max-w-2xl mx-auto">
            The healthcare system is complex. We simplify it for you with expert navigation and personalized support.
          </p>
        </div>
        
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<MapPin className="text-primary" />}
            title="Specialist Matching"
            description="We find the top-rated specialists that match your insurance, location, and specific health needs."
          />
          <ServiceCard 
            icon={<Calendar className="text-primary" />}
            title="Fast Booking"
            description="Skip the wait. We handle all the calls and paperwork to get you seen as quickly as possible."
          />
          <ServiceCard 
            icon={<Database className="text-primary" />}
            title="Record Management"
            description="A secure, centralized place for all your medical history, test results, and care plans."
          />
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
                alt="App screenshot" 
                className="rounded-2xl shadow-lg border-8 border-white"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl mb-8">Clear care, every step.</h2>
              <div className="space-y-8">
                <Step 
                  number="1"
                  title="Tell us your needs"
                  description="Share your symptoms or referral details through our secure portal or a quick call."
                />
                <Step 
                  number="2"
                  title="Expert navigation"
                  description="Your dedicated navigator finds the best care options and presents them to you."
                />
                <Step 
                  number="3"
                  title="Appointment secured"
                  description="We book your choice, coordinate records, and ensure you're prepared for the visit."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">3+ hrs</div>
            <div className="text-secondary font-medium">Time saved per booking</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-secondary font-medium">Insurance verified</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-secondary font-medium">Secure record access</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Expert</div>
            <div className="text-secondary font-medium">Healthcare Navigators</div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-12">Trusted by families nationwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <Testimonial 
              quote="VitalLink saved me days of phone calls. I found an amazing cardiologist and they handled everything."
              author="Sarah J."
              role="Working Professional"
            />
            <Testimonial 
              quote="Finally, someone who explains things in plain English and actually cares about my recovery."
              author="Michael T."
              role="Family of four"
            />
            <Testimonial 
              quote="Managing my elderly parents' records was a nightmare until I joined VitalLink. Lifesaver."
              author="David L."
              role="Caregiver"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6 font-inter font-bold">Ready for better healthcare?</h2>
          <p className="text-text text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join the waitlist today and be among the first to experience concierge healthcare navigation.
          </p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-custom border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-custom font-inter font-semibold transition-all">
                Join Now
              </button>
            </form>
          ) : (
            <div className="bg-white p-6 rounded-custom border-2 border-primary max-w-md mx-auto flex items-center justify-center gap-3 text-primary font-bold text-lg">
              <CheckCircle2 size={32} /> You're on the list!
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-heading text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img src="/logo.png" alt="VitalLink Health" className="h-8 w-auto brightness-0 invert" />
                <span className="font-inter font-bold text-lg">VitalLink Health</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Concierge healthcare navigation that puts the patient first.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Service</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-secondary">Specialist Search</a></li>
                <li><a href="#" className="hover:text-secondary">Appointment Booking</a></li>
                <li><a href="#" className="hover:text-secondary">Medical Records</a></li>
                <li><a href="#" className="hover:text-secondary">Care Coordination</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-secondary">About Us</a></li>
                <li><a href="#" className="hover:text-secondary">How it Works</a></li>
                <li><a href="#" className="hover:text-secondary">Pricing</a></li>
                <li><a href="#" className="hover:text-secondary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-secondary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-secondary">HIPAA Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
            <p>© 2026 VitalLink Health. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <ShieldCheck size={16} />
              <span>HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-custom bg-secondary bg-opacity-5 hover:bg-opacity-10 transition-all border border-secondary border-opacity-10 text-center">
      <div className="mb-6 flex justify-center scale-150">{icon}</div>
      <h3 className="text-xl mb-4">{title}</h3>
      <p className="text-text text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex gap-6">
      <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl mb-2">{title}</h3>
        <p className="text-text text-sm">{description}</p>
      </div>
    </div>
  );
}

function Testimonial({ quote, author, role }: { quote: string, author: string, role: string }) {
  return (
    <div className="bg-white p-8 rounded-custom shadow-sm border border-gray-100">
      <p className="italic text-text mb-6">"{quote}"</p>
      <div className="font-bold text-heading">{author}</div>
      <div className="text-sm text-secondary">{role}</div>
    </div>
  );
}

export default App;
