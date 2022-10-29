import React from 'react';
import clsx from 'clsx';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/joy/Typography';
// import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import { CssVarsProvider } from '@mui/joy/styles';
// import EmailSubscribe from '@site/src/components/EmailSubscribe';
import Button from "@mui/joy/Button";
import Link from "@docusaurus/Link";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { Buttons } from "@site/src/components/SocialButtons";

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
      <>
      <hr></hr>
      <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        <div className="container container-fluid">
          {logo && <div className="margin-bottom--sm">{logo}</div>}
          <p className="footer__description">
            Dyte provides developer friendly live video SDKs that allows you to easily add 1:1 calls,
            group calls and webinars right within your platform. Our low code approach and user
            friendly documentation means you are ready to go live with less lines of code. We support
            use cases such as live classes, telehealth, online fitness, remote work, social meetups,
            dating and B2B sales.
          </p>
          <div className="footer__row">
            <div className="footer__data">
              <div className="footer__cta">
                <strong>Keep up to date</strong>
                <p>Join our newsletter for regular updates. No spam ever.</p>
                <br></br>
                <Button component="a" href="https://3867465e.sibforms.com/serve/MUIEAKVJ6U2B-mH1ZUc8FxYzi4j8ghc67ggrpsmqCD3mWzTdteGH7I3nEytJsQjhiVFvOrc2W1dvtOAhLNb5w5hNC6TSZrxjBEnVH9HibdbMvx3oPMfEIFg847tyrZytCfOWQmglR_BGVqv9faLN14CR1jxRMUWFENlPOQskTGfR5ODo-d-7LVrUwds7HFgDFBxHBXYFdOwwT32m" variant="soft" color="primary" endDecorator={<ArrowRightRoundedIcon />} startDecorator={<EmailRoundedIcon />}>Subscribe</Button>
                {/* <Link className="button button--primary" href="https://3867465e.sibforms.com/serve/MUIEAKVJ6U2B-mH1ZUc8FxYzi4j8ghc67ggrpsmqCD3mWzTdteGH7I3nEytJsQjhiVFvOrc2W1dvtOAhLNb5w5hNC6TSZrxjBEnVH9HibdbMvx3oPMfEIFg847tyrZytCfOWQmglR_BGVqv9faLN14CR1jxRMUWFENlPOQskTGfR5ODo-d-7LVrUwds7HFgDFBxHBXYFdOwwT32m">Subscribe</Link> */}
              </div>
            </div>
            <div className="links">{links}</div>
          </div>
          <br></br>
          <Divider />
          <br></br>
          {copyright && <div className="footer__bottom text--center">{copyright}</div>}
          <div className="footer__bottom text--center footerbtns">
            <Buttons />
          </div>
        </div>
      </div>

      {/* <div id="preloader">
    <div id="status">&nbsp;</div>
    </div> */}
      {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/js/loader.js"></script> */}
      <div class="popup-container"></div>
      <script type="text/javascript" src="https://unpkg.com/wikipedia-preview@latest/dist/wikipedia-preview.production.js"></script>
      <script type="text/javascript" src="/html/wikipedia.js"></script>
      <script type="text/javascript" src="https://cdn.ywxi.net/js/1.js" async></script>
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-629de96c243ef6ee"></script>
    </footer></>
  );
}
