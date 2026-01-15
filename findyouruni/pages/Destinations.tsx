
import React from 'react';
import { DESTINATIONS } from '../constants';
import { Globe, GraduationCap, Coins, Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Destinations: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-parchment border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-gold font-bold text-xs tracking-[0.3em] mb-6 block uppercase">Global Pathways</span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy mb-10">Where Strategy Meets <span className="italic">Geography</span></h1>
            <p className="text-xl text-navy/60 leading-relaxed">
              Choosing a destination is more than picking a campus—it's picking a legal framework, a job market, and a culture. We guide you through the complexities of each system with neutral precision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {DESTINATIONS.map((dest, index) => (
              <div key={dest.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-5">
                  <div className="sticky top-32">
                    <span className="text-gold font-serif text-5xl mb-6 block opacity-20">0{index + 1}</span>
                    <h2 className="text-4xl font-serif text-navy mb-8">{dest.name}</h2>
                    <p className="text-lg text-navy/70 mb-10 leading-relaxed italic border-l-2 border-gold/30 pl-6">
                      "At FindYourUni, we assess {dest.name} based on long-term residency rules and industry specific ROI, not university recruitment quotas."
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-navy hover:text-gold transition-colors">
                      CONSULT ON {dest.name.toUpperCase()} <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
                
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-parchment p-8 border border-navy/5">
                    <div className="flex items-center gap-3 mb-4 text-gold">
                      <GraduationCap size={20} />
                      <h4 className="font-serif text-xl text-navy">Education System</h4>
                    </div>
                    <p className="text-sm text-navy/60 leading-relaxed">{dest.system}</p>
                  </div>
                  
                  <div className="bg-parchment p-8 border border-navy/5">
                    <div className="flex items-center gap-3 mb-4 text-gold">
                      <Globe size={20} />
                      <h4 className="font-serif text-xl text-navy">Institution Types</h4>
                    </div>
                    <p className="text-sm text-navy/60 leading-relaxed">{dest.types}</p>
                  </div>

                  <div className="bg-parchment p-8 border border-navy/5">
                    <div className="flex items-center gap-3 mb-4 text-gold">
                      <Coins size={20} />
                      <h4 className="font-serif text-xl text-navy">Costs & Aid</h4>
                    </div>
                    <p className="text-sm text-navy/60 leading-relaxed">{dest.cost}</p>
                  </div>

                  <div className="bg-parchment p-8 border border-navy/5">
                    <div className="flex items-center gap-3 mb-4 text-gold">
                      <Briefcase size={20} />
                      <h4 className="font-serif text-xl text-navy">Visa & Post-Study</h4>
                    </div>
                    <p className="text-sm text-navy/60 leading-relaxed">{dest.visa}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-8">Not sure which country fits your profile?</h2>
          <p className="text-white/60 mb-10">We perform a Cross-Border Comparative Analysis to show you where your GPA, budget, and career goals will find the most traction.</p>
          <Link to="/contact" className="inline-block bg-gold text-navy px-12 py-5 text-sm font-bold tracking-[0.2em] hover:bg-white transition-all">
            COMPARE DESTINATIONS
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
