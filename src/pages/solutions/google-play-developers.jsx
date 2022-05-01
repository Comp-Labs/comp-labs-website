import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

function PlayHeader1() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">App Submission Service for Google Play Apps</h1> */}
        <p className="hero__subtitle">Hello, Android Developers! This is the SaaS Solution You Were Looking For, Especially Tailored For You, "App Submission Service for Google Play Apps". You Can Upload your Developed Apps to Google Play Free of Cost With This Solution! Just Fill in the form by clicking on the button below saying "Register Now!" and we'll get back to you shortly!</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://forms.gle/XM3VbGQD6uXqNr43A">
            Register Now!
          </Link>
        </div>
      </div>
    </header>
  );
}

function PlayHeader2() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              {/* <img
                alt={translate({message: 'Comp Labs Logo Animated'})}
                className={styles.heroLogo}
                src={useBaseUrl('/img/complabs.png')}
                width="256"
                height="256"
              /> */}
              <span
                className={styles.heroTitleTextHtml}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: translate({
                    id: 'homepage.hero.title',
                    message:
                      '<p><b>App Publisher for Google Play</b><br><b>------</b>------<b>------</b>------<b>------</b><br>Best <b>SaaS Solution</b> to <b>Submit Your Apps</b> to <b><code>Play Store</code></b>, <b>Free of Cost!</b></p>',
                  }),
                }}
              />
            </h1>
          </div>
        </div>
  );
}

export default function Play() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`App Publisher for Google Play`}
      description="SaaS Solution to Submit Apps to Google Play Store Free of Cost!">
      <PlayHeader2 />
      <PlayHeader1 />
      <main>
      </main>
    </Layout>
  );
}