
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-parchment min-h-screen">
      <section className="py-24 border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-gold font-bold text-xs tracking-[0.3em] mb-6 block uppercase">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy mb-10">Bespoke Advisory <span className="italic">Services</span></h1>
            <p className="text-xl text-navy/60 leading-relaxed">
              From initial self-discovery to successful enrollment, we provide a holistic support system that empowers you to take control of your academic destiny.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-20">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className="bg-navy p-1">
                    <img src={`https://picsum.photos/id/${10 + index}/1000/600`} alt={service.title} className="w-full h-[400px] object-cover grayscale opacity-80" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl font-serif mb-6 text-navy">{service.title}</h2>
                  <p className="text-lg text-navy/70 mb-8 leading-relaxed">
                    {service.fullDesc}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-medium border-b border-navy/5 pb-2">
                        <CheckCircle2 size={16} className="text-gold" /> {step}
                      </div>
                    ))}
                  </div>
                  <div className="bg-white border border-navy/5 p-8 mb-10">
                    <h4 className="text-xs font-bold tracking-widest text-gold mb-4 uppercase">Common Pitfalls We Solve</h4>
                    <ul className="space-y-3">
                      {service.mistakes.map((m, idx) => (
                        <li key={idx} className="text-sm text-navy/60 flex gap-2 italic">
                          <span>—</span> {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 text-xs font-bold tracking-widest hover:bg-gold transition-all duration-300">
                    TALK TO AN ADVISOR <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-8">Looking for a specific combination?</h2>
          <p className="text-navy/60 mb-10">We offer modular support depending on your stage of application. Whether you need a simple SOP review or end-to-end strategic placement, we adapt to you.</p>
          <Link to="/contact" className="text-gold font-bold border-b-2 border-gold/20 pb-1 hover:border-gold transition-all tracking-widest text-sm">
            CUSTOMIZE YOUR ADVISORY PLAN
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
