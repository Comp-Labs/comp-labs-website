import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: "Tech Fiddle / 🚧 Docs",
    Svg: require("../../../static/img/undraw_typewriter.svg").default,
    description: (
      <>
        Use our Handy Documentation to Learn More about Tech Fiddle and it's
        subsidiaries.
        <br></br>
        <br></br>
        <Link className="button button--primary" to="/docs">
          <Translate>Read Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Tech Fiddle / Guides",
    Svg: require("../../../static/img/undraw_typewriter.svg").default,
    description: (
      <>
        Tech Based Blog for Enthusiasts.
        <br></br>
        <br></br>
        <Link className="button button--primary" to="/blog">
          <Translate>Learn Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Tech Fiddle / Apps",
    Svg: require("../../../static/img/undraw_develop_app.svg").default,
    description: (
      <>
        Apps with the World's Best UI/UX for Platforms Including <br></br>
        <code>Android</code>, <code>Windows</code>,{" "}
        <code>iOS, iPadOS, watchOS, macOS, tvOS</code>, and <code>Linux</code>.
        <br></br>Download the Apps Today!<br></br>
        <br></br>
        <Link className="button button--primary" to="/apps">
          <Translate>Explore Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Tech Fiddle / Contact Us",
    Svg: require("../../../static/img/undraw_typewriter.svg").default,
    description: (
      <>
        Please Contact Us using the Google Form Link for any Issues, Queries,
        Feedback, etc.
        <br></br>
        <br></br>
        <Link
          className="button button--primary"
          href="https://forms.gle/dQmrNAZZ1KK81rAP7"
        >
          <Translate>Contact Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Tech Fiddle / WebDev's Crafts",
    Svg: require("../../../static/img/undraw_typewriter.svg").default,
    description: (
      <>
        Mesmerizing Crafts Made by WebDev's at Tech Fiddle And All The CodePen
        Users Worldwide!
        <br></br>
        <br></br>
        <Link className="button button--primary" to="/webdev-crafts">
          <Translate>See Now!</Translate>
        </Link>
      </>
    ),
  },
  // {
  //   title: "Tech Fiddle / Donate Us",
  //   Svg: require("../../../static/img/undraw_typewriter.svg").default,
  //   description: (
  //     <>
  //       Please Donate Us to keep us alive!
  //       <br></br>
  //       <br></br>
  //       <Link className="button button--primary" to="/donate-us">
  //         <Translate>Donate Now!</Translate>
  //       </Link>
  //     </>
  //   ),
  // },
  {
    title: "Tech Fiddle / Solutions / 🚧 App Publisher for Google Play",
    Svg: require("../../../static/img/undraw_android.svg").default,
    description: (
      <>
        Best Solution to Publish Your <code>AndroidOS</code> and{" "}
        <code>ChromeOS</code> Apps to the Google Play Console for Free.<br></br>
        <br></br>
        <Link
          className="button button--primary"
          to="/solutions/google-play-developers"
        >
          <Translate>Publish Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Tech Fiddle / Solutions / 🚧 Business Mail Service",
    Svg: require("../../../static/img/undraw_typewriter.svg").default,
    description: (
      <>
        Best SaaS Solution Which Empowers Your Personal, Business, and
        Enterprise Mail Anywhere, No Matter Where You Are.
        <br></br>
        <br></br>
        <Link
          className="button button--primary"
          to="/solutions/enterprise-mail-solution"
        >
          <Translate>Mail Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Tech Fiddle / Solutions / 🚧 Business Meeting Service",
    Svg: require("../../../static/img/undraw_typewriter.svg").default,
    description: (
      <>
        Best SaaS Solution Which Empowers Your Personal, Business, and
        Enterprise Meetings Anywhere, No Matter Where You Are.
        <br></br>
        <br></br>
        <Link
          className="button button--primary"
          to="/solutions/enterprise-meeting-solution"
        >
          <Translate>Meet Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Tech Fiddle / Solutions / 🚧 Anonymous VPN",
    Svg: require("../../../static/img/undraw_typewriter.svg").default,
    description: (
      <>
        Introducing our Free, Fast, Anonymous VPN Powered by the SoftEther Open
        Source VPN Project and made by Tech Fiddle, hosted in it's own servers.
        Now you can connect to our public and anonymous VPN.
        <br></br>
        <br></br>
        <Link className="button button--primary" to="/solutions/vpn">
          <Translate>Encrypt Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Tech Fiddle / Tools / DNS Lookup",
    Svg: require("../../../static/img/undraw_typewriter.svg").default,
    description: (
      <>
        Best DNS Lookup Tool with Advanced Configuration, Cherry-Picked by Tech
        Fiddle.
        <br></br>
        <br></br>
        <Link
          className="button button--primary"
          href="https://digwebinterface.com/"
        >
          <Translate>Lookup Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Tech Fiddle / Tools / SpeedTest",
    Svg: require("../../../static/img/undraw_typewriter.svg").default,
    description: (
      <>
        Free, Fast, and Always Accurate Internet, Internet SpeedTest. Powered by OpenSpeedTest.com to give you the best experience, accurate and detailed SpeedTest.
        <br></br>
        <br></br>
        <Link
          className="button button--primary"
          to="/tools/speedtest"
        >
          <Translate>SpeedTest Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Tech Fiddle / Tools / Web Tools",
    Svg: require("../../../static/img/undraw_typewriter.svg").default,
    description: (
      <>
        Best Web Tools Just for You by Tech Fiddle!
        <br></br>
        <br></br>
        <Link
          className="button button--primary"
          href="https://digwebinterface.com/"
        >
          <Translate>Lookup Now!</Translate>
        </Link>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
