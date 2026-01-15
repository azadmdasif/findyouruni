
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Profile Evaluation',
    desc: 'An intensive audit of your academic history, extracurriculars, and professional aspirations.'
  },
  {
    num: '02',
    title: 'Academic Mapping',
    desc: 'Aligning your interests with specific global job markets and university specializations.'
  },
  {
    num: '03',
    title: 'University Shortlisting',
    desc: 'A data-driven selection of "Dream, Target, and Safety" institutions based on true fit.'
  },
  {
    num: '04',
    title: 'Document Development',
    desc: 'Crafting unique SOPs, Resumes, and Letters of Recommendation with a unique narrative arc.'
  },
  {
    num: '05',
    title: 'Applications & Scholarships',
    desc: 'Meticulous submission and aggressive pursuit of all applicable funding opportunities.'
  },
  {
    num: '06',
    title: 'Decision Support',
    desc: 'Final counseling on offer selection, visa processes, and pre-departure strategies.'
  }
];

const Process: React.FC = () => {
  return (
    <div className="bg-parchment">
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-gold font-bold text-xs tracking-[0.3em] mb-6 block uppercase">Our Methodology</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-10">A Strategic <span className="italic">Journey</span></h1>
            <p className="text-xl text-white/50 leading-relaxed">
              We follow a rigorous six-step process designed to eliminate uncertainty and maximize the value of your application.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
            {steps.map((step) => (
              <div key={step.num} className="relative group">
                <span className="text-[12rem] font-serif absolute -top-24 -left-4 text-navy/5 select-none transition-colors group-hover:text-gold/10">
                  {step.num}
                </span>
                <div className="relative z-10 pt-12">
                  <h3 className="text-3xl font-serif text-navy mb-6">{step.title}</h3>
                  <p className="text-navy/60 leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="mt-8 h-px w-20 bg-gold/30 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-parchment p-16 border border-navy/5 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-serif mb-6">Transparency First</h2>
              <p className="text-navy/60 mb-8">
                Unlike agencies that work behind closed doors, we provide you with a dedicated dashboard to track every milestone. You see the research we do, the emails we send, and the drafts we iterate.
              </p>
              <ul className="space-y-4 font-medium text-sm">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Live Application Trackers</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Shared Collaborative Workspace</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Regular Strategic Check-ins</li>
              </ul>
            </div>
            <div className="flex-1 w-full">
              <img src="https://picsum.photos/id/112/800/600" alt="Process Work" className="grayscale border border-navy/10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
