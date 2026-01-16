
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Scale, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const Hero: React.FC = () => (
  <section className="relative min-h-[90vh] flex items-center bg-parchment overflow-hidden pt-12">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 -skew-x-12 translate-x-1/2"></div>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="max-w-3xl">
        <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-bold tracking-[0.2em] mb-8 border border-gold/20">
          Free Admission Assistance
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-navy leading-[1.1] mb-8">
          Book a free consultation for your <span className="italic text-gold">study abroad</span> journey.
        </h1>
        <p className="text-lg md:text-xl text-navy/70 leading-relaxed mb-10 max-w-2xl">
          We do not accept commissions from universities. This independence allows us to prioritize your goals, your profile, and your future above all else.
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <Link to="/contact" className="px-10 py-5 bg-navy text-white text-sm font-bold tracking-widest hover:bg-gold transition-all duration-300 shadow-xl shadow-navy/10 flex items-center justify-center gap-3 group">
            BOOK FREE CALL <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/about" className="px-10 py-5 border border-navy/20 text-navy text-sm font-bold tracking-widest hover:bg-navy/5 transition-all duration-300 flex items-center justify-center">
            OUR PHILOSOPHY
          </Link>
        </div>
         <p className="text-sm text-navy/50 mt-4">
          Free · No pressure · No obligation
        </p>
      </div>
    </div>
    
    <div className="absolute bottom-12 right-12 hidden lg:block opacity-10 rotate-12">
      <img src="https://picsum.photos/id/1073/800/800" alt="Abstract Library" className="w-[500px] grayscale" />
    </div>
  </section>
);

const TrustSection: React.FC = () => (
  <section className="py-24 bg-white border-y border-navy/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-parchment rounded-full flex items-center justify-center text-gold mb-8">
            <ShieldCheck size={32} />
          </div>
          <h3 className="font-serif text-2xl mb-4">Unbiased Integrity</h3>
          <p className="text-navy/60 text-sm leading-relaxed">
            Unlike traditional agencies, we take zero incentives from institutions. Our loyalty belongs to the student.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-parchment rounded-full flex items-center justify-center text-gold mb-8">
            <Scale size={32} />
          </div>
          <h3 className="font-serif text-2xl mb-4">Profile-First Analysis</h3>
          <p className="text-navy/60 text-sm leading-relaxed">
            We analyze your specific academic and career goals before looking at university lists.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-parchment rounded-full flex items-center justify-center text-gold mb-8">
            <Compass size={32} />
          </div>
          <h3 className="font-serif text-2xl mb-4">Strategic Mapping</h3>
          <p className="text-navy/60 text-sm leading-relaxed">
            Mapping out the next five years of your career, not just the next one year of your degree.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ServicesOverview: React.FC = () => (
  <section className="py-24 bg-parchment">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Expertise built on research.</h2>
          <p className="text-lg text-navy/60">Comprehensive advisory services tailored for undergraduate, postgraduate, and research-focused applicants.</p>
        </div>
        <Link to="/services" className="text-gold font-bold tracking-widest text-xs border-b-2 border-gold/20 pb-1 hover:border-gold transition-all">
          VIEW ALL SERVICES
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-white p-12 border border-navy/5 hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500 group">
            <span className="text-gold font-serif text-4xl mb-8 block opacity-20">0{SERVICES.indexOf(service) + 1}</span>
            <h3 className="font-serif text-2xl text-navy mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
            <p className="text-navy/60 text-sm leading-relaxed mb-10">{service.shortDesc}</p>
            <ul className="space-y-3 mb-12">
              {service.process.slice(0, 3).map((p, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs text-navy/80 font-medium">
                  <CheckCircle2 size={14} className="text-gold" /> {p}
                </li>
              ))}
            </ul>
            <Link to={`/services`} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest group-hover:gap-4 transition-all">
              LEARN MORE <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection: React.FC = () => (
  <section className="py-32 bg-navy relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://picsum.photos/id/119/1600/900')] bg-cover"></div>
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-serif text-white mb-10">Let’s plan your future — ethically & strategically.</h2>
      <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
        Your education is an investment in your legacy. Secure independent advice that looks beyond the brochure.
      </p>
      <Link to="/contact" className="inline-block bg-gold text-navy px-12 py-5 text-sm font-bold tracking-[0.2em] hover:bg-white transition-all duration-300">
        START THE JOURNEY
      </Link>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <CTASection />
    </div>
  );
};

export default Home;
