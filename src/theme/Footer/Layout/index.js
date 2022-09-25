import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
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
      <script type="text/javascript" src="https://cdn.ywxi.net/js/1.js" async></script>
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-629de96c243ef6ee"></script>
    </footer>
  );
}
