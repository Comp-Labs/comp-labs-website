import React from 'react';
import clsx from 'clsx';
import { FooterButtons } from "@site/src/components/SocialButtons";
import { CssVarsProvider } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import Divider from '@mui/joy/Divider';
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <CssVarsProvider>
      <footer
        className={clsx('footer', {
          'footer--dark': style === 'dark',
        })}>
        <div className="container container-fluid">
          <div className="container container-fluid">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            <p className="footer__description">
              Tech Fiddle provides a Tech Enthusiastic Blog, Innovative and Useful Apps, and Core Solutions for everyone.
            </p>
            <div className="footer__row">
              <div className="footer__data">
                <div className="footer__cta">
                  <strong>Keep up to date</strong>
                  <p>Join our newsletter for regular updates. No spam ever.</p>
                  <br />
                  <Button variant="soft" color="primary" endDecorator={<ArrowRightRoundedIcon />} startDecorator={<EmailRoundedIcon />} component="a" href="https://3867465e.sibforms.com/serve/MUIEAKVJ6U2B-mH1ZUc8FxYzi4j8ghc67ggrpsmqCD3mWzTdteGH7I3nEytJsQjhiVFvOrc2W1dvtOAhLNb5w5hNC6TSZrxjBEnVH9HibdbMvx3oPMfEIFg847tyrZytCfOWQmglR_BGVqv9faLN14CR1jxRMUWFENlPOQskTGfR5ODo-d-7LVrUwds7HFgDFBxHBXYFdOwwT32m" target="_blank">Subscribe</Button>
                  <br />
                  <br />
                  <FooterButtons />
                </div>
              </div>
              <div className="links">{links}</div>
            </div>
            <br />
            <Divider />
            <div className="muiSpace" /> {copyright && <div className="footer__bottom text--center">{copyright}</div>}
          </div>
        </div>
      </footer>
    </CssVarsProvider>
  );
}
