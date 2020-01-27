import React, { useEffect, useState } from 'react';

import {
  TestimonialContainer,
  CarouselList,
  CarouselItem,
  CarouselQuote,
  CarouselName,
  CarouselCitation,
  CarouselIndicator,
  CarouselDot,
} from './testimonial.styles';

const reviews = [
  {
    name: 'Engr Russell Nyorere.',
    citation: 'CEO, Victoria Garden City',
    quote:
      'UduPay has been great. I feel like I got to work with a specialist at each point in the process. Everyone was very professional and very helpful. Great working with you guys, the whole process of capturing is seamless.',
  },
  {
    name: 'Chief Moses Taiga.',
    citation: 'Realtor, Lekki Phase One',
    quote:
      'I have bought and sold ten homes. This has been the most rewarding experience of them all. True professionalism and insight as well as great customer service makes me a believer in the UduPay business model.',
  },
  {
    name: 'Otunba Gbenga Kayode',
    citation: 'Chairman, Prime Properties',
    quote:
      'The entire experience from onboarding to the sale of our home has been professional, expedited quickly, and I saved close to #14,000 in commissions. I will absolutely be using UduPay for the sale of my next property.',
  },
  {
    name: 'Architect Nnamadi Eyo',
    citation: 'ED, Warri GRA',
    quote:
      'Everyone we worked with was very responsive, professional and easy to work with. A great experience all around. I work in this industry too so my expectations are high. Great work by all.',
  },
];

function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    // This variable prevents race condition
    let current = 1;
    const cycleReviews = () => {
      if (current === 4) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };
    // intervalId identified so it can be canceled on unmount
    const intervalId = setInterval(() => {
      cycleReviews();
    }, 10000);
    // Removes interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="testimonial-bg">
      <TestimonialContainer id="container">
        <CarouselList>
          {reviews.map((review, index) => {
            const { citation, name, quote } = review;
            const count = index + 1;
            return (
              <CarouselItem
                className={`${count === activeSlide ? ' active' : ''} ${
                  count < activeSlide ? ' left' : ''
                } ${count > activeSlide ? ' right' : ''}
              `}
                key={count}
              >
                <CarouselQuote>
                  <cite>
                    <CarouselName>{name}</CarouselName>
                    <CarouselCitation>{citation}</CarouselCitation>
                  </cite>
                  <p>"{quote}"</p>
                </CarouselQuote>
              </CarouselItem>
            );
          })}
          <CarouselIndicator>
            <CarouselDot className={`${activeSlide === 1 ? ' active' : ''}`} />
            <CarouselDot className={`${activeSlide === 2 ? ' active' : ''}`} />
            <CarouselDot className={`${activeSlide === 3 ? ' active' : ''}`} />
            <CarouselDot className={`${activeSlide === 4 ? ' active' : ''}`} />
          </CarouselIndicator>
        </CarouselList>
      </TestimonialContainer>
    </div>
  );
}

export default Testimonial;
