
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-parchment border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold font-bold text-xs tracking-[0.3em] mb-6 block uppercase">Academic Intelligence</span>
          <h1 className="text-5xl md:text-7xl font-serif text-navy mb-10">Foundational <span className="italic">Insights</span></h1>
          <p className="text-xl text-navy/60 max-w-3xl mx-auto leading-relaxed">
            Thought leadership on global admissions, SOP strategies, and industry transparency. Written by academic advisors, not marketing copywriters.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group border-b border-navy/5 pb-16">
                <div className="mb-8 overflow-hidden bg-navy">
                  <img 
                    src={`https://picsum.photos/id/${20 + parseInt(post.id)}/1200/800`} 
                    alt={post.title} 
                    className="w-full h-80 object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <div className="flex items-center gap-6 mb-6 text-xs font-bold tracking-widest text-gold uppercase">
                  <span className="flex items-center gap-2"><Tag size={12} /> {post.category}</span>
                  <span className="flex items-center gap-2 text-navy/40"><Calendar size={12} /> {post.date}</span>
                </div>
                <h2 className="text-3xl font-serif text-navy mb-6 group-hover:text-gold transition-colors duration-300">
                  <Link to="/blog">{post.title}</Link>
                </h2>
                <p className="text-navy/60 leading-relaxed mb-8">
                  {post.summary}
                </p>
                <Link to="/blog" className="inline-flex items-center gap-3 text-xs font-bold tracking-widest text-navy border-b border-navy/20 pb-1 hover:border-gold hover:text-gold transition-all">
                  READ FULL ARTICLE <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-navy p-16 text-white text-center rounded-sm">
            <h3 className="text-3xl font-serif mb-6 italic">Weekly Briefings</h3>
            <p className="text-white/50 mb-10 max-w-xl mx-auto">Get neutral updates on visa policies, scholarship deadlines, and academic trends delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Your academic email" className="flex-grow bg-white/10 border border-white/20 p-4 text-sm outline-none focus:border-gold transition-colors" />
              <button className="bg-gold text-navy px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
