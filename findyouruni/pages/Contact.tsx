
import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-parchment min-h-screen">
      <section className="py-24 border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-gold font-bold text-xs tracking-[0.3em] mb-6 block uppercase">Connect With Us</span>
              <h1 className="text-5xl md:text-7xl font-serif text-navy mb-10">Start Your <span className="italic">Ethical</span> Advisory</h1>
              <p className="text-xl text-navy/60 leading-relaxed mb-12">
                We offer a complimentary 20-minute discovery call to understand your profile and explain how our neutral advisory model can help you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center rounded-sm flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-widest text-navy uppercase mb-1">Direct Line</h4>
                    <a
  href={`tel:${CONTACT_INFO.phone}`}
  className="text-navy/60 font-medium hover:text-gold transition-colors"
>
  {CONTACT_INFO.phone}
</a>

                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center rounded-sm flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-widest text-navy uppercase mb-1">Email Inquiry</h4>
                    <p className="text-navy/60 font-medium">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center rounded-sm flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-widest text-navy uppercase mb-1">Office Location</h4>
                    <p className="text-navy/60 font-medium">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 shadow-2xl shadow-navy/5 border border-navy/5">
              <h3 className="text-3xl font-serif mb-8 text-navy">Request a Consultation</h3>
              
              {/* Web3Forms Integration */}
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="d7c6f430-42fd-46ff-8f2d-9c0b258f2c4e" />
                <input type="hidden" name="from_name" value="FindYourUni Website" />
                <input type="hidden" name="subject" value="New Consultation Request from FindYourUni" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-navy/60 mb-2 block">First Name</label>
                    <input 
                      type="text" 
                      name="first_name" 
                      required
                      className="w-full bg-parchment border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none" 
                      placeholder="John" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-navy/60 mb-2 block">Last Name</label>
                    <input 
                      type="text" 
                      name="last_name" 
                      required
                      className="w-full bg-parchment border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-navy/60 mb-2 block">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    className="w-full bg-parchment border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none" 
                    placeholder="john.doe@example.com" 
                  />
                </div>
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-navy/60 mb-2 block">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-parchment border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none" 
                    placeholder="+91 98748 97845"
                  />
                </div>

                
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-navy/60 mb-2 block">Interested Service</label>
                  <select 
                    name="interested_service"
                    className="w-full bg-parchment border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none appearance-none"
                  >
                    <option>University Finding</option>
                    <option>SOP / Resume Support</option>
                    <option>Scholarship Strategy</option>
                    <option>Full Application Advisory</option>
                    <option>PhD / Research Support</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-navy/60 mb-2 block">Message / Questions</label>
                  <textarea 
                    name="message" 
                    required
                    rows={4} 
                    className="w-full bg-parchment border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none" 
                    placeholder="Tell us about your academic goals..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-navy text-white py-5 text-sm font-bold tracking-[0.2em] hover:bg-gold transition-all flex items-center justify-center gap-3"
                >
                  SUBMIT REQUEST <Send size={18} />
                </button>
                
                <p className="text-[10px] text-navy/40 text-center uppercase tracking-widest mt-4">
                  No automated responses. A senior advisor will review and contact you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 border border-navy/5">
              <h4 className="font-serif text-xl mb-3">Professional Conduct</h4>
              <p className="text-xs text-navy/60 leading-relaxed">Our advisors adhere to strict confidentiality and ethical codes of conduct.</p>
            </div>
            <div className="p-8 border border-navy/5">
              <h4 className="font-serif text-xl mb-3">No Hard Sales</h4>
              <p className="text-xs text-navy/60 leading-relaxed">Discovery calls are educational. We do not use high-pressure tactics.</p>
            </div>
            <div className="p-8 border border-navy/5">
              <h4 className="font-serif text-xl mb-3">Global Reach</h4>
              <p className="text-xs text-navy/60 leading-relaxed">Available for digital consultations across all timezones.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
