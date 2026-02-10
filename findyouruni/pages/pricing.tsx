
import React from 'react';
import { Check, Info, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingCard = ({ title, originalPrice, discountedPrice, description, features, popular = false }: any) => (
  <div className={`relative p-8 border ${popular ? 'border-gold bg-white shadow-2xl scale-105 z-10' : 'border-navy/5 bg-parchment'} flex flex-col h-full transition-all duration-300`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase">
        Most Popular
      </div>
    )}
    <div className="mb-8">
      <h3 className="font-serif text-2xl text-navy mb-2">{title}</h3>
      <p className="text-xs text-navy/50 leading-relaxed mb-6 h-10">{description}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-navy/30 line-through text-lg font-medium">₹{originalPrice}</span>
        <span className="text-4xl font-serif text-navy">₹{discountedPrice}</span>
      </div>
      <div className="mt-2 inline-flex items-center gap-1 bg-gold/10 text-gold text-[10px] font-bold px-2 py-0.5 rounded-full">
        <Tag size={10} /> 15% OFF LIMITED TIME
      </div>
    </div>
    
    <ul className="space-y-4 mb-10 flex-grow">
      {features.map((feature: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-sm text-navy/70">
          <Check size={16} className="text-gold mt-0.5 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    
    <Link 
      to="/contact" 
      className={`w-full py-4 text-center text-xs font-bold tracking-[0.2em] uppercase transition-all ${
        popular ? 'bg-navy text-white hover:bg-gold' : 'bg-transparent border border-navy/20 text-navy hover:bg-navy hover:text-white'
      }`}
    >
      Enroll Now
    </Link>
  </div>
);

const ServiceRow = ({ name, original, discounted }: any) => (
  <div className="grid grid-cols-12 py-5 border-b border-navy/5 items-center hover:bg-white transition-colors px-4 group">
    <div className="col-span-7 md:col-span-8">
      <h4 className="text-sm font-medium text-navy group-hover:text-gold transition-colors">{name}</h4>
    </div>
    <div className="col-span-5 md:col-span-4 flex justify-end items-center gap-4">
      <span className="text-xs text-navy/30 line-through">₹{original}</span>
      <span className="text-sm font-bold text-navy">₹{discounted}</span>
      <Link to="/contact" className="ml-4 p-1 rounded-full hover:bg-gold/10 text-gold opacity-0 group-hover:opacity-100 transition-all">
        <ArrowRight size={16} />
      </Link>
    </div>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <div className="bg-parchment min-h-screen">
      {/* Header */}
      <section className="py-24 border-b border-navy/5 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block px-4 py-1 bg-gold/10 text-gold text-[10px] font-bold tracking-[0.3em] mb-6 border border-gold/20 uppercase">
            Transparent Pricing
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-navy mb-8">
            Expert Advisory for <span className="italic">Every Stage</span>
          </h1>
          <p className="text-xl text-navy/60 max-w-2xl mx-auto leading-relaxed">
            Neutral, commission-free guidance tailored for the Indian student. 
            Choose a full package for maximum impact or modular services for specific needs.
          </p>
          <p className="mt-8 text-sm font-bold text-gold tracking-widest flex items-center justify-center gap-2">
            <Info size={16} /> LIMITED-TIME 15% DISCOUNT APPLIED TO ALL SERVICES
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard 
            title="Starter"
            originalPrice="2,999"
            discountedPrice="2,399"
            description="The essentials for self-starters needing expert structural clarity."
            features={[
              "Country Selection & Career Guidance",
              "University Selection (5–7 Universities)",
              "Overall Application Strategy",
              "Free SOP, CV & LOR Samples",
              "Free Study Abroad eBook"
            ]}
          />
          <PricingCard 
            popular={true}
            title="Core"
            originalPrice="6,999"
            discountedPrice="5,499"
            description="Our most popular path. End-to-end strategic review of your narrative."
            features={[
              "All Starter Features",
              "SOP Review (Comments & Logic)",
              "CV Review (Comments & Format)",
              "Scholarship Identification Audit",
              "Priority Email Support"
            ]}
          />
          <PricingCard 
            title="Premium"
            originalPrice="12,999"
            discountedPrice="9,999"
            description="Concierge advisory for high-stakes applications and top-tier admits."
            features={[
              "All Core Features",
              "SOP Complete Professional Rewrite",
              "CV Complete Professional Rewrite",
              "LOR Complete Professional Rewrite (x1)",
              "1-on-1 Interview Preparation Session",
              "Visa Strategy Briefing"
            ]}
          />
        </div>
      </section>

      {/* Individual Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-serif text-navy mb-12 text-center">Individual Advisory Modules</h2>
          
          <div className="space-y-16">
            {/* Category: Strategy */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-6 border-b border-gold/20 pb-2 flex items-center gap-2">
                01. Strategy & Selection
              </h3>
              <div className="bg-parchment/30 border border-navy/5">
                <ServiceRow name="Country Selection & Career Guidance" original="999" discounted="799" />
                <ServiceRow name="University Shortlisting (5-7 Unis)" original="1,499" discounted="1,199" />
                <ServiceRow name="Overall Application Strategy Mapping" original="1,999" discounted="1,599" />
              </div>
            </div>

            {/* Category: Documents */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-6 border-b border-gold/20 pb-2 flex items-center gap-2">
                02. Document Crafting
              </h3>
              <div className="bg-parchment/30 border border-navy/5">
                <ServiceRow name="CV Writing (Professional Rewrite)" original="1,999" discounted="1,599" />
                <ServiceRow name="SOP Writing (Complete Professional Rewrite)" original="3,499" discounted="2,799" />
                <ServiceRow name="LOR Writing (Complete Professional Rewrite)" original="2,499" discounted="1,899" />
                <ServiceRow name="Document Critique & Comments Only" original="1,499" discounted="1,199" />
              </div>
            </div>

            {/* Category: Scholarship & Interview */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-6 border-b border-gold/20 pb-2 flex items-center gap-2">
                03. Funding & Prep
              </h3>
              <div className="bg-parchment/30 border border-navy/5">
                <ServiceRow name="Scholarship Strategic Identification" original="1,499" discounted="1,199" />
                <ServiceRow name="Scholarship Application (1 specific grant)" original="2,999" discounted="2,399" />
                <ServiceRow name="Interview Prep (Full Process - 3 Sessions)" original="2,999" discounted="2,399" />
                <ServiceRow name="Mock Interview (Single Session - 45m)" original="1,199" discounted="899" />
              </div>
            </div>
          </div>

          <div className="mt-20 p-12 bg-navy text-white text-center">
            <h4 className="text-2xl font-serif mb-4 italic">Need a custom advisory configuration?</h4>
            <p className="text-white/50 text-sm mb-8">We create bespoke plans for multiple-country applications or family office requirements.</p>
            <Link to="/contact" className="inline-block bg-gold text-navy px-10 py-4 text-xs font-bold tracking-widest hover:bg-white transition-all">
              REQUEST CUSTOM QUOTE
            </Link>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 text-center text-navy/40 text-[10px] uppercase tracking-[0.2em]">
        <div className="max-w-2xl mx-auto px-6">
          Prices are subject to change based on academic cycle demand. 
          FindYourUni is a research advisory firm; we do not guarantee admissions. 
          Our commitment is to professional narrative excellence and strategic neutrality.
        </div>
      </section>
    </div>
  );
};

export default Pricing;
