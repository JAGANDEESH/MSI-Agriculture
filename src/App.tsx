import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingPage from './components/LoadingPage'; // 🔥 import the custom loading page
import ResearchAndDevelopment from './components/ResearchAndDevelopment';
import Event from './components/News/Event';
import Media from './components/News/Media';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Support from './components/Support';
import Contact from './components/Contact';

// Lazy-loaded pages
const HomePage = lazy(() => import('./components/HomePage'));
const StoryOfMSI = lazy(() => import('./components/StoryOfMSI'));
const Farming = lazy(() => import('./components/Services/Farmer'));
const Entrepreneur = lazy(() => import('./components/Services/Entrepreneur'));
const ConsumerZone = lazy(() => import('./components/Services/ConsumerZone'));
const ExportsInnovations = lazy(() => import('./components/Services/ExportsInnovations'));
const BusinessFunding = lazy(() => import('./components/Services/BuisnessFunding'));
const Product = lazy(() => import('./components/Product'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story_of_msi" element={<StoryOfMSI />} />
          <Route path="/farming" element={<Farming />} />
          <Route path="/entrepreneurship" element={<Entrepreneur />} />
          <Route path="/consumerzone" element={<ConsumerZone />} />
          <Route path="/exportsinnovations" element={<ExportsInnovations />} />
          <Route path="/businessfunding" element={<BusinessFunding />} />
          <Route path="/product" element={<Product />} />
          <Route path='/ResearchAndDevelopment' element={<ResearchAndDevelopment/>}/>
          <Route path='/event' element={<Event/>}/>
          <Route path='/media' element={<Media/>}/>
          <Route path='/testimonial'element={<Testimonial/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
