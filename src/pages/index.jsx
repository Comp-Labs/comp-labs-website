import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import heroStyles from '../../static/hero.css';
import heroJS from '../../static/herojs';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img
                alt={translate({message: 'Comp Labs Logo Animated'})}
                className={styles.heroLogo}
                src={useBaseUrl('/img/complabs.png')}
                width="256"
                height="256"
              />
              <span
                className={styles.heroTitleTextHtml}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: translate({
                    id: 'homepage.hero.title',
                    message:
                      '<p><b>Comp Labs</b><br><b>------</b>------<b>------</b>------<b>------</b><br><div class="mask"><span data-show>Guides.</span><span>Apps.</span><span>Solutions.</span><span>Tools.</span></div><br><b>Everything</b> you need for <b>Personal</b>, <b>Business</b>, or <b>Enterprise Use</b>.</p>',
                  }),
                }}
              />
            </h1>
            <div className={styles.indexCtas}>
              <Link className="button button--primary" to="/docs">
                <Translate>Get Started</Translate>
              </Link>
              {/* <Link className="button button--info" to="/blog"><Translate>Guides</Translate></Link> */}
              <span className={styles.indexCtasGitHubButtonWrapper}>
                <iframe
                  className={styles.indexCtasGitHubButton}
                  src="https://ghbtns.com/github-btn.html?user=Comp-Labs&amp;type=follow&amp;count=true&amp;size=small"
                  width={190}
                  height={30}
                  title="Follow Comp Labs on GitHub"
                />
              </span>
              <br></br>
              <span className={styles.indexCtasGitHubButtonWrapper}>
              <iframe
                className={styles.indexCtasGitHubButton}
                src="https://ghbtns.com/github-btn.html?user=Comp-Labs&amp;type=sponsor&amp;size=small" frameborder="0" scrolling="0" width="180" height="30" title="GitHub">
                width={190}
                height={30}
                title="Sponsor Comp Labs on GitHub"
              </iframe>
              </span>
            </div>
          </div>
        </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="Our website provides Technical Guides, Apps, and Google Play Developer Console Service. This is a non-profit website so please donate to us to keep our resources running. You can write your feedback and comments about anything on our Contact Us page. See details of our services below.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
