import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: "🚧 Docs",
    Svg: "/img/undraw_typewriter.svg",
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
    title: "Guides",
    Svg: "/img/undraw_typewriter.svg",
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
    title: "Apps",
    Svg: "/img/undraw_develop_app.svg",
    description: (
      <>
        Apps with the World's Best UI/UX for Platforms Including <br></br>
        <code>Android</code>, <code>Windows</code>,
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
    title: "Contact Us",
    Svg: "/img/undraw_typewriter.svg",
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
    title: "WebDev's Crafts",
    Svg: "/img/undraw_typewriter.svg",
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
  //   title: "Donate Us",
  //   Svg: "/img/undraw_typewriter.svg",
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
    title: "🚧 App Publisher for Google Play",
    Svg: "/img/undraw_android.svg",
    description: (
      <>
        Best Solution to Publish Your <code>AndroidOS</code> and
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
    title: "🚧 Business Mail Service",
    Svg: "/img/undraw_typewriter.svg",
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
    title: "🚧 Business Meeting Service",
    Svg: "/img/undraw_typewriter.svg",
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
    title: "🚧 Anonymous VPN",
    Svg: "/img/undraw_typewriter.svg",
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
    title: "DNS Lookup",
    Svg: "/img/undraw_typewriter.svg",
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
    title: "SpeedTest",
    Svg: "/img/undraw_typewriter.svg",
    description: (
      <>
        Free, Fast, and Always Accurate Internet, Internet SpeedTest. Powered by
        OpenSpeedTest.com to give you the best experience, accurate and detailed
        SpeedTest.
        <br></br>
        <br></br>
        <Link className="button button--primary" to="/tools/speedtest">
          <Translate>SpeedTest Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Web Tools",
    Svg: "/img/undraw_typewriter.svg",
    description: (
      <>
        Best Web Tools Just for You by Tech Fiddle!
        <br></br>
        <br></br>
        <Link
          className="button button--primary"
          href="https://digwebinterface.com/"
        >
          <Translate>Explore Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Legal",
    Svg: "/img/undraw_typewriter.svg",
    description: (
      <>
        Legal Documents for Tech Fiddle.
        <br></br>
        <br></br>
        <div className="button-group button-group--block">
          <Link className="button button--primary" to="/legal/terms-of-service">
            <i class="fa-regular fa-file"></i> <Translate>Terms of Service</Translate>
          </Link>
          <Link className="button button--primary" to="/legal/privacy-policy">
            <i class="fa-regular fa-file"></i> <Translate>Privacy Policy</Translate>
          </Link>
          <Link className="button button--primary" to="/legal/cookie-policy">
            <i class="fa-regular fa-file"></i> <Translate>Cookie Policy</Translate>
          </Link>
        </div>
      </>
    ),
  },
  {
    title: "Social",
    Svg: "/img/undraw_typewriter.svg",
    description: (
      <>
        Connect with Tech Fiddle!
        <br></br>
        <br></br>
        <div className="button-group button-group--block">
          <Link
            className="button button--primary"
            href="https://github.com/Comp-Labs"
          >
            <i class="fa-brands fa-github"></i> <Translate>GitHub</Translate>
          </Link>
          <Link
            className="button button--primary"
            href="https://youtube.com/channel/UCL6pKeSCbJkPohM2PUZbqQA"
          >
            <i class="fa-brands fa-youtube"></i> <Translate>YouTube</Translate>
          </Link>
          <Link
            className="button button--primary"
            href="https://linktr.ee/complabs"
          >
            <i class="fa-solid fa-tree"></i> <Translate>LinkTree</Translate>
          </Link>
        </div>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>
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

// function Feature({ Svg, title, description }) {
//   return (
//     <div className={clsx("card")}>
//       <div className={clsx("card__image")}>
//         <div className="text--center">
//           <Svg className={styles.featureSvg} alt={title} />
//         </div>
//         <div className="card__body">
//           <div className="text--center padding-horiz--md">
//             <h3>{title}</h3>
//             <p>{description}</p>
//           </div>
//         </div>
//         <div className="card__footer">
//         </div>
//       </div>
//     </div>
//   );
// }

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
