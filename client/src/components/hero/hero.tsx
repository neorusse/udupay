import React from 'react';

import CustomButton from '../custom-button/custom-button';
import history from '../../utils/history';

import {
  HeroContainer,
  HeroCaption,
  Heading,
  Description,
  AppUsers,
  ImageContainer,
} from './hero.styles';

const Hero: React.FC = () => {
  return (
    <HeroContainer id="container">
      <HeroCaption>
        <Heading>
          Simplified solution for <br></br> residential dues payment
        </Heading>
        <Description>
          UduPay platform helps families pay for their <br></br> development
          levy, sanitation, and security dues
        </Description>
        <CustomButton onClick={() => history.push('/register')}>
          Create Account
        </CustomButton>
        <AppUsers>
          Trusted by over 10,000 residential communities <br></br>
          Victoria Island, Ikoyi, Lekki Phase-One VGC, Chevron Drive, Shell IA,
          Maitama, Garki, Warri GRA
        </AppUsers>
      </HeroCaption>
      <ImageContainer>
        <img
          src="./payment-animation.png"
          style={{ width: '350px' }}
          alt="Decagon"
        />
        <img src="./cc-icon.jpg" alt="Decagon" />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero;
