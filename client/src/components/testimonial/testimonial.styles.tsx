import styled from 'styled-components';

export const TestimonialContainer = styled.div`
  font-size: 18px;
  align-items: center;
  display: grid;
  justify-content: center;
  font-family: system-ui;
`;

export const CarouselList = styled.ul`
  align-items: center;
  display: grid;
  grid-row-gap: 1.25rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  max-width: 70rem;
  overflow: hidden;
  list-style-type: none;
`;

export const CarouselItem = styled.li`
  grid-column: 1;
  grid-row: 1;
  line-height: 1.2;
  text-align: center;
  transition: transform 0.2s;

  &.active {
    transform: translateX(0);
  }

  &.left {
    transform: translateX(-110%);
  }

  &.right {
    transform: translateX(110%);
  }
`;

export const CarouselQuote = styled.blockquote`
  font-style: italic;
  line-height: 1.5;
`;

export const CarouselName = styled.span`
  display: block;
  font-style: normal;
  color: #0f1c70;
  font-weight: 600;
`;

export const CarouselCitation = styled.span`
  display: block;
  font-size: 1.2rem;
  font-style: normal;
`;

export const CarouselIndicator = styled.li`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row: 2;
  justify-self: center;
`;

export const CarouselDot = styled.span`
  background-color: white;
  border-radius: 50%;
  border: 0.0625rem solid #696a6b;
  display: block;
  height: 0.7rem;
  width: 0.7rem;

  &.active {
    background-color: #696a6b;
  }
`;
