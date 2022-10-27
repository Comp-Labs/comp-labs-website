import React from 'react';
import clsx from 'clsx';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/joy/Typography';
// import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import { CssVarsProvider } from '@mui/joy/styles';
// import EmailSubscribe from '@site/src/components/EmailSubscribe';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <CssVarsProvider>
      <hr></hr>
      <footer
        className={clsx('footer', {
          'footer--dark': style === 'dark',
        })}>
        <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
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
      </footer>
    </CssVarsProvider>
  );
}
