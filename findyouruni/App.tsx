
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Process = lazy(() => import('./pages/Process'));
const Contact = lazy(() => import('./pages/Contact'));
const Destinations = lazy(() => import('./pages/Destinations'));
const Scholarships = lazy(() => import('./pages/Scholarships'));
const Blog = lazy(() => import('./pages/Blog'));
const Pricing = lazy(() => import('./pages/Pricing'));

// Simplified loading state
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-parchment">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-navy border-t-gold rounded-full animate-spin"></div>
      <span className="font-serif text-navy/40 italic tracking-widest text-xs uppercase">FindYourUni</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
