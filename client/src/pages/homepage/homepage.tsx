import React from 'react';

import Hero from '../../components/hero/hero';
import Testimonial from '../../components/testimonial/testimonial';
import Footer from '../../components/footer/footer';

function HomePage() {
  return (
    <div className="homepage">
      <Hero />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HomePage;
