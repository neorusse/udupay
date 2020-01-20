import React from 'react';

import {
  FooterMediaContainer,
  FooterCopyright,
  FooterSocial,
  FooterSocialLinks,
} from './footer-media.styles';

function FooterMedia() {
  return (
    <FooterMediaContainer>
      <FooterCopyright>
        <p>UduPay. © 2020</p>
      </FooterCopyright>

      <div>
        <FooterSocial>
          <FooterSocialLinks>
            <a
              href="https://twitter.com/udupay"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </FooterSocialLinks>{' '}
          <FooterSocialLinks>
            <a
              href="https://www.facebook.com/udupay/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </FooterSocialLinks>{' '}
          <FooterSocialLinks>
            <a
              href="https://www.instagram.com/udupay/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </FooterSocialLinks>{' '}
          <FooterSocialLinks>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </FooterSocialLinks>{' '}
          <FooterSocialLinks>
            <a
              href="https://www.linkedin.com/company/udupay/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </FooterSocialLinks>
        </FooterSocial>
      </div>
    </FooterMediaContainer>
  );
}

export default FooterMedia;
