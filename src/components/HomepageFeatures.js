import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Guides',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We provide technical guides to help users do stuff related to tech by just watching our videos.
      </>
    ),
  },
  {
    title: 'Apps',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We make user-friendly apps for platforms including Android, Windows, Apple Platforms (iOS, iPadOS, watchOS, macOS, and tvOS), and Linux.
        [Go To Apps](/services/apps)
      </>
    ),
    
  },
  {
    title: 'App Submission Service for Google Play Developer Console',
    Svg: require('../../static/img/google_play.svg').default,
    description: (
      <>
        This Service helps you to submit apps to Google Play Console for Free, Go to its page to Learn More.
        [Learn More](/google-play-developers)
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
