import * as React from 'react';
import clsx from 'clsx';
import Divider from '@mui/material/Divider';
import Typography from '@mui/joy/Typography';
import { CssVarsProvider } from '@mui/joy/styles';
import Button from "@mui/joy/Button";
import Link from "@docusaurus/Link";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { FooterButtons } from "@site/src/components/SocialButtons";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';

export default function FooterLayout({ style, links, logo, copyright }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <React.Fragment>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 5000,
              maxHeight: 10000,
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
            }}
          >
            <ModalClose
              variant="outlined"
              sx={{
                top: 'calc(-1/4 * var(--IconButton-size))',
                right: 'calc(-1/4 * var(--IconButton-size))',
                boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                borderRadius: '50%',
                bgcolor: 'background.body',
              }}
            />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              Tech Fiddle Newsletter Subscription
            </Typography>
            <iframe src="https://3867465e.sibforms.com/serve/MUIEAKVJ6U2B-mH1ZUc8FxYzi4j8ghc67ggrpsmqCD3mWzTdteGH7I3nEytJsQjhiVFvOrc2W1dvtOAhLNb5w5hNC6TSZrxjBEnVH9HibdbMvx3oPMfEIFg847tyrZytCfOWQmglR_BGVqv9faLN14CR1jxRMUWFENlPOQskTGfR5ODo-d-7LVrUwds7HFgDFBxHBXYFdOwwT32m" title="Tech Fiddle Newsletter Subscription" width="100%" height="100%" />
          </Sheet>
        </Modal>
      </React.Fragment>
      {/* Modal End */}
      <CssVarsProvider>
        <footer
          className={clsx('footer', {
            'footer--dark': style === 'dark',
          })}>
          <div className="container container-fluid">
            <div className="container container-fluid">
              {logo && <div className="margin-bottom--sm">{logo}</div>}
              <p className="footer__description">
                Tech Fiddle provides a Tech Enthusiastic Blog, some useful apps, and Core Solutions to empower everyone.
              </p>
              <div className="footer__row">
                <div className="footer__data">
                  <div className="footer__cta">
                    <strong>Keep up to date</strong>
                    <p>Join our newsletter for regular updates. No spam ever.</p>
                    <br />
                    <Button variant="soft" color="primary" endDecorator={<ArrowRightRoundedIcon />} startDecorator={<EmailRoundedIcon />} onClick={() => setOpen(true)}>Subscribe</Button>
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
          <script defer src="https://chirpy.dev/bootstrap/comment.js" data-chirpy-domain="complabs.in" data-chirpy-theme="system" />
          <div class="popup-container" />
          <script type="text/javascript" src="https://unpkg.com/wikipedia-preview@latest/dist/wikipedia-preview.production.js" />
          <script type="text/javascript" src="/html/wikipedia.js" />
          <script type="text/javascript" src="https://cdn.ywxi.net/js/1.js" async />
          <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-629de96c243ef6ee" />
        </footer>
      </CssVarsProvider>
    </>
  );
}
