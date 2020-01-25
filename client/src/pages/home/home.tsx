import React from 'react';

import Hero from '../../components/hero/hero';
import Testimonial from '../../components/testimonial/testimonial';

function HomePage() {
  return (
    <div className="homepage">
      <Hero />
      <Testimonial />
    </div>
  );
}

export default HomePage;
