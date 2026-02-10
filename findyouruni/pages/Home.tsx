
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Scale, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Eye, 
  Heart, 
  Award 
} from 'lucide-react';
import { SERVICES } from '../constants';

const Hero: React.FC = () => (
  <section className="relative min-h-[90vh] flex items-center bg-parchment overflow-hidden pt-12">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 -skew-x-12 translate-x-1/2"></div>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="max-w-3xl">
        <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-[10px] font-bold tracking-[0.3em] mb-8 border border-gold/20 uppercase">
          Neutral & Commission-Free
        </span>
        <h1 className="text-6xl md:text-8xl font-serif text-navy leading-[1.05] mb-8">
          Strategic guidance for your <span className="italic text-gold">global academic</span> journey.
        </h1>
        <p className="text-lg md:text-xl text-navy/70 leading-relaxed mb-10 max-w-2xl">
          We do not accept commissions from universities. This independence allows us to prioritize your goals, your profile, and your future above institutional recruitment quotas.
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <Link to="/contact" className="px-10 py-5 bg-navy text-white text-[11px] font-bold tracking-[0.2em] hover:bg-gold transition-all duration-300 shadow-xl shadow-navy/10 flex items-center justify-center gap-3 group uppercase">
            Book a Discovery Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/services" className="px-10 py-5 border border-navy/20 text-navy text-[11px] font-bold tracking-[0.2em] hover:bg-navy/5 transition-all duration-300 flex items-center justify-center uppercase">
            Explore Services
          </Link>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-12 right-12 hidden lg:block opacity-10 rotate-12">
      <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop" alt="Abstract Library" className="w-[500px] grayscale rounded-sm" />
    </div>
  </section>
);

const EthosSection: React.FC = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-gold font-bold text-[10px] tracking-[0.4em] mb-6 block uppercase">Our Founding Mission</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
            Education as a Life Decision, <span className="italic text-navy/40">Not a Sales Transaction</span>
          </h2>
          <div className="space-y-6 text-navy/70 leading-relaxed text-lg">
            <p>
              FindYourUni was founded on a simple realization: the global study abroad industry is broken. In a system where most consultants are paid recruiters for universities, the student is often treated as the product.
            </p>
            <p>
              We work exclusively for you. We are researchers, strategists, and academic mentors. Our neutrality ensures that if a university is the right fit, we recommend it. If it isn't, we tell you exactly why.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 border-t border-navy/5 pt-12">
            <div>
              <h4 className="font-serif text-2xl text-navy mb-2">Neutrality</h4>
              <p className="text-sm text-navy/50">100% independent from institutional funding or commission structures.</p>
            </div>
            <div>
              <h4 className="font-serif text-2xl text-navy mb-2">Strategy</h4>
              <p className="text-sm text-navy/50">Long-term career ROI mapping vs short-term volume placement.</p>
            </div>
          </div>
        </div>
        <div className="relative">
         
          <div className="absolute -bottom-10 -left-10 bg-navy p-12 text-white hidden xl:block border border-gold/20">
            <p className="text-2xl font-serif italic leading-relaxed max-w-xs">
              "Truth in guidance leads to longevity in success."
            </p>
            <div className="w-12 h-px bg-gold mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ValuesSection: React.FC = () => (
  <section className="py-24 bg-navy text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="group">
          <Target className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-serif text-2xl mb-4">Precision</h3>
          <p className="text-sm text-white/50 leading-relaxed">Detailed analysis of curriculum, faculty research, and employment outcomes.</p>
        </div>
        <div className="group">
          <Eye className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-serif text-2xl mb-4">Transparency</h3>
          <p className="text-sm text-white/50 leading-relaxed">Clearly explained processes with no hidden university back-deals or incentives.</p>
        </div>
        <div className="group">
          <Heart className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-serif text-2xl mb-4">Empathy</h3>
          <p className="text-sm text-white/50 leading-relaxed">Understanding the profound emotional and financial stakes of global academic migration.</p>
        </div>
        <div className="group">
          <Award className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-serif text-2xl mb-4">Excellence</h3>
          <p className="text-sm text-white/50 leading-relaxed">Aiming for top-tier outcomes that match the student’s highest intellectual potential.</p>
        </div>
      </div>
    </div>
  </section>
);

const ServicesOverview: React.FC = () => (
  <section className="py-32 bg-parchment">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <span className="text-gold font-bold text-[10px] tracking-[0.4em] mb-6 block uppercase">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Expertise Built on <span className="italic">Research</span></h2>
          <p className="text-lg text-navy/60">Comprehensive advisory services tailored for undergraduate, postgraduate, and PhD applicants.</p>
        </div>
        <Link to="/services" className="text-[11px] text-gold font-bold tracking-[0.2em] border-b-2 border-gold/20 pb-2 hover:border-gold transition-all uppercase">
          View All Services
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service, idx) => (
          <div key={service.id} className="bg-white p-12 border border-navy/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <span className="text-gold font-serif text-4xl mb-8 block opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
            <h3 className="font-serif text-2xl text-navy mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
            <p className="text-navy/60 text-sm leading-relaxed mb-10 h-12 overflow-hidden">{service.shortDesc}</p>
            <ul className="space-y-4 mb-12 border-t border-navy/5 pt-8">
              {service.process.slice(0, 3).map((p, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[11px] text-navy/80 font-bold uppercase tracking-wider">
                  <CheckCircle2 size={14} className="text-gold" /> {p}
                </li>
              ))}
            </ul>
            <Link to={`/services`} className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase group-hover:gap-4 transition-all text-navy group-hover:text-gold">
              Service Details <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TargetAudience: React.FC = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <span className="text-gold font-bold text-[10px] tracking-[0.4em] mb-6 block uppercase">Who We Help</span>
      <h2 className="text-4xl md:text-5xl font-serif text-navy mb-16">Designed for <span className="italic text-navy/40">Ambitious Scholars</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="p-10 bg-parchment/50 border border-navy/5 group hover:bg-navy transition-colors duration-500">
          <h4 className="font-serif text-2xl mb-4 text-navy group-hover:text-white">Undergraduates</h4>
          <p className="text-sm text-navy/60 group-hover:text-white/60 leading-relaxed">Guiding high school students through the complex foundational choices of their academic life.</p>
        </div>
        <div className="p-10 bg-parchment/50 border border-navy/5 group hover:bg-navy transition-colors duration-500">
          <h4 className="font-serif text-2xl mb-4 text-navy group-hover:text-white">Postgraduates</h4>
          <p className="text-sm text-navy/60 group-hover:text-white/60 leading-relaxed">Strategic specialization and career pivot management for professionals seeking global mastery.</p>
        </div>
        <div className="p-10 bg-parchment/50 border border-navy/5 group hover:bg-navy transition-colors duration-500">
          <h4 className="font-serif text-2xl mb-4 text-navy group-hover:text-white">PhD Candidates</h4>
          <p className="text-sm text-navy/60 group-hover:text-white/60 leading-relaxed">Expert assistance with research proposals, supervisor matching, and funding strategy.</p>
        </div>
      </div>
    </div>
  </section>
);

const CTASection: React.FC = () => (
  <section className="py-32 bg-navy relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
      <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
    </div>
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight">Plan your future — <span className="italic text-gold">ethically & strategically</span>.</h2>
      <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
        Your education is a legacy-defining investment. Secure independent advice that looks beyond the brochure and prioritizes your long-term success.
      </p>
      <Link to="/contact" className="inline-block bg-gold text-navy px-12 py-5 text-[11px] font-bold tracking-[0.3em] hover:bg-white transition-all duration-300 uppercase">
        Start the Journey
      </Link>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <EthosSection />
      <ValuesSection />
      <ServicesOverview />
      <TargetAudience />
      <CTASection />
    </div>
  );
};

export default Home;
