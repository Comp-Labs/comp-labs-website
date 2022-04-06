import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'Guides',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We provide technical guides to help users do stuff related to tech by just watching our videos.<br></br><br></br><Link className="button button--primary" to="/blog"><Translate>Read Now!</Translate></Link>
      </>
    ),
  },
  {
    title: 'Apps',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We innovate and create user-friendly and useful apps for platforms including <br></br><code>Android</code>, <code>Windows</code>, Apple Platforms  <code>iOS, iPadOS, watchOS, macOS, and tvOS</code>, and <code>Linux</code>.<br></br>Explore and Download the Apps Today!<br></br><br></br><Link className="button button--primary" to="/apps"><Translate>Explore!</Translate></Link>
      </>
    ),
  },
  {
    title: 'App Submission Service for Google Play Developer Console',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This is the best solution that helps you publish your <code>AndroidOS</code> and <code>ChromeOS</code> Apps to the Google Play Console for Free.<br></br><br></br><Link className="button button--primary" to="/solutions/google-play-developers"><Translate>Get Now!</Translate></Link>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
