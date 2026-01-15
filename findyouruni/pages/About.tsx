
import React from 'react';
import { Layout } from '../components/Layout';
import { Target, Heart, Award, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-parchment border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold font-bold text-xs tracking-[0.3em] mb-6 block uppercase">Our Story & Ethos</span>
          <h1 className="text-5xl md:text-7xl font-serif text-navy mb-10">Redefining Education <span className="italic">Advisory</span></h1>
          <p className="text-xl text-navy/60 max-w-3xl mx-auto leading-relaxed">
            FindYourUni was founded on a simple realization: the global study abroad industry is broken. In a world where consultants are paid by universities, the student is often the product, not the client. We changed that.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8">Education as a Life Decision, Not a Sales Transaction</h2>
              <p className="text-navy/70 leading-relaxed mb-6">
                Most educational consultants act as recruiters. They receive commissions from universities—sometimes thousands of dollars per student—to drive enrollment. This creates a natural conflict of interest.
              </p>
              <p className="text-navy/70 leading-relaxed mb-10">
                At FindYourUni, we work exclusively for you. We are researchers, strategists, and academic mentors. Our neutrality ensures that if a university is the right fit, we recommend it. If it isn't, we tell you exactly why.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl mb-2">Neutrality</h4>
                  <p className="text-xs text-navy/50">100% independent from institutional funding.</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Strategy</h4>
                  <p className="text-xs text-navy/50">Long-term career mapping vs short-term placement.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/id/111/800/1000" alt="Academic Setting" className="w-full h-[600px] object-cover grayscale" />
              <div className="absolute -bottom-10 -left-10 bg-navy p-12 text-white hidden lg:block">
                <p className="text-2xl font-serif italic">"Truth in guidance leads to longevity in success."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <Target className="text-gold mb-6" size={32} />
              <h3 className="font-serif text-2xl mb-4">Precision</h3>
              <p className="text-sm text-white/50 leading-relaxed">Detailed analysis of curriculum, faculty, and employment outcomes.</p>
            </div>
            <div>
              <Eye className="text-gold mb-6" size={32} />
              <h3 className="font-serif text-2xl mb-4">Transparency</h3>
              <p className="text-sm text-white/50 leading-relaxed">Clearly explained processes with no hidden university back-deals.</p>
            </div>
            <div>
              <Heart className="text-gold mb-6" size={32} />
              <h3 className="font-serif text-2xl mb-4">Empathy</h3>
              <p className="text-sm text-white/50 leading-relaxed">Understanding the emotional and financial stakes of global migration.</p>
            </div>
            <div>
              <Award className="text-gold mb-6" size={32} />
              <h3 className="font-serif text-2xl mb-4">Excellence</h3>
              <p className="text-sm text-white/50 leading-relaxed">Aiming for top-tier outcomes that match the student’s highest potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-32 bg-parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-serif mb-16">Who We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 border border-navy/5">
              <h4 className="font-serif text-2xl mb-4">Undergraduates</h4>
              <p className="text-sm text-navy/60">Guiding young minds through the foundational choices of their academic life.</p>
            </div>
            <div className="bg-white p-12 border border-navy/5">
              <h4 className="font-serif text-2xl mb-4">Postgraduates</h4>
              <p className="text-sm text-navy/60">Strategic specialization and career pivot management for professionals.</p>
            </div>
            <div className="bg-white p-12 border border-navy/5">
              <h4 className="font-serif text-2xl mb-4">PhD Candidates</h4>
              <p className="text-sm text-navy/60">Expert assistance with research proposals and faculty matching.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
