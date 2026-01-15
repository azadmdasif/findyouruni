
import React from 'react';
import { Award, ShieldAlert, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScholarshipType = ({ title, desc, icon: Icon }: any) => (
  <div className="p-10 bg-white border border-navy/5 hover:border-gold/30 transition-all group">
    <div className="w-12 h-12 bg-parchment text-gold flex items-center justify-center mb-8 group-hover:bg-navy group-hover:text-white transition-all">
      <Icon size={24} />
    </div>
    <h3 className="font-serif text-2xl mb-4">{title}</h3>
    <p className="text-sm text-navy/60 leading-relaxed mb-6">{desc}</p>
    <div className="h-px w-12 bg-gold/30 group-hover:w-full transition-all duration-500"></div>
  </div>
);

const Scholarships: React.FC = () => {
  return (
    <div className="bg-parchment min-h-screen">
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-gold font-bold text-xs tracking-[0.3em] mb-6 block uppercase">Funding Your Future</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-10">Scholarships: Myths vs. <span className="italic">Reality</span></h1>
            <p className="text-xl text-white/50 leading-relaxed">
              International education is a massive investment. We provide an honest assessment of funding opportunities, steering you away from scams and towards legitimate academic grants.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScholarshipType 
              title="Merit-Based" 
              desc="Awarded for academic excellence, standardized test scores, and research potential. These are the most competitive and prestigious."
              icon={Award}
            />
            <ScholarshipType 
              title="Need-Based" 
              desc="Common in the US private system (CSS Profile), these grants are awarded based on a family’s financial inability to pay tuition."
              icon={CheckCircle2}
            />
            <ScholarshipType 
              title="External Grants" 
              desc="Government-funded programs like Chevening (UK), Fulbright (USA), or Erasmus+ (EU) which offer full-ride funding."
              icon={Search}
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif text-navy mb-8">The Truth About Full-Rides</h2>
              <p className="text-navy/70 leading-relaxed mb-6">
                Many agents use the "guaranteed scholarship" hook to lure students into low-ranking universities. We don't.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <ShieldAlert className="text-gold flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-sm tracking-widest uppercase mb-1">Warning: Automatic Discounts</h4>
                    <p className="text-xs text-navy/50 italic">Automatic 10% or 20% "scholarships" are often just marketing discounts for universities struggling to fill seats. We prioritize quality over discounts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldAlert className="text-gold flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-sm tracking-widest uppercase mb-1">Research Impact</h4>
                    <p className="text-xs text-navy/50 italic">For PG and PhD, funding follows research. We help you draft proposals that institutions actually want to fund.</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="mt-12 inline-flex items-center gap-3 bg-navy text-white px-8 py-4 text-xs font-bold tracking-widest hover:bg-gold transition-all duration-300">
                AUDIT MY ELIGIBILITY <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/id/115/800/800" alt="Financial Planning" className="grayscale border border-navy/5" />
              <div className="absolute top-8 left-8 bg-parchment p-8 shadow-xl max-w-xs hidden lg:block border border-navy/5">
                <p className="font-serif italic text-lg text-navy mb-2">Honest Assessmet</p>
                <p className="text-xs text-navy/60 uppercase tracking-widest leading-relaxed">We provide a realistic probability score for your funding applications before you pay for advisory.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;
