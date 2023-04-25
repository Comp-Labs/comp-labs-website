import * as React from "react";
import clsx from "clsx";
// import styles from "./HomepageFeatures.module.css";
// import {Link} as DocusaurusLink from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import Avatar from "@mui/joy/Avatar";
import Link from "@docusaurus/Link";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import ParkRoundedIcon from "@mui/icons-material/ParkRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Chip from "@mui/joy/Chip";
import Highlight from "@site/src/components/Highlight";
import Divider from "@mui/joy/Divider";

// Data Start

const Resources = [
  {
    title: "🚧 Docs",
    href: "/docs",
    icon: (
      <>
        <i className="fa-solid fa-file-lines fa-2x" />
      </>
    ),
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Use our Handy Documentation to Learn More about Tech Fiddle and it's
        subsidiaries.
      </>
    ),
  },
  {
    title: "Guides",
    href: "/blog",
    icon: (
      <>
        <i className="fa-solid fa-file-lines fa-2x" />
      </>
    ),
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Tech Based Blog for Enthusiasts.</>,
  },
  {
    title: "Apps",
    href: "/apps",
    icon: (
      <>
        <i className="fa-solid fa-grip-vertical fa-2x" />
      </>
    ),
    Svg: require("/img/undraw_develop_app.svg").default,
    description: (
      <>
        Apps with the Best UI/UX. A vast range of platforms are supported.
        <br />
        Download the Apps Today!
      </>
    ),
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: (
      <>
        <i className="fa-solid fa-envelope fa-2x" />
      </>
    ),
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Please Contact Us for any Issues, Queries, Feedback, etc.</>,
  },
  // {
  //   title: "WebDev's Crafts",
  //   href: "/webdev-crafts",
  //   icon: (
  //     <>
  //       <i className="fa-solid fa-hand-sparkles fa-2x" />
  //     </>
  //   ),
  //   Svg: require("/img/undraw_typewriter.svg").default,
  //   description: (
  //     <>
  //       Mesmerizing Crafts Made by WebDev's at Tech Fiddle And All The CodePen
  //       Users Worldwide!
  //     </>
  //   ),
  // },
  {
    title: "Donate Us",
    href: "/donate",
    icon: (
      <>
        <i className="fa-solid fa-hand-holding-dollar fa-2x" />
      </>
    ),
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Please Donate Us if you like our content!</>,
  },
  {
    title: "Terms of Service",
    href: "/legal/terms-of-service",
    icon: (
      <>
        <i className="fa-solid fa-scale-balanced fa-2x" />
      </>
    ),
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Tech Fiddle's Terms of Service.</>,
  },
  {
    title: "Privacy Policy",
    href: "/legal/privacy-policy",
    icon: (
      <>
        <i className="fa-solid fa-scale-balanced fa-2x" />
      </>
    ),
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Tech Fiddle's Privacy Policy.</>,
  },
  {
    title: "Cookie Policy",
    href: "/legal/cookie-policy",
    icon: (
      <>
        <i className="fa-solid fa-scale-balanced fa-2x" />
      </>
    ),
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Tech Fiddle's Cookie Policy.</>,
  },
  {
    title: "Social",
    href: "https://bento.me/techfiddle",
    icon: (
      <>
        <i className="fa-solid fa-hashtag fa-2x" />
      </>
    ),
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Connect with Tech Fiddle!</>,
    button: <></>,
  },
];

const Products = [
  {
    title: "🚧 App Publisher for Google Play",
    href: "/products/google-play-developers",
    icon: "",
    Svg: require("/img/undraw_android.svg").default,
    description: (
      <>
        Best Solution to Publish Your AndroidOS and ChromeOS Apps to the Google
        Play Console for Free.
      </>
    ),
  },
  {
    title: "🚧 Enterprise Mail Solution",
    href: "/products/enterprise-mail-solution",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Best SaaS Solution Which Empowers Your Personal, Enterprise, and
        Enterprise Mail Anywhere, No Matter Where You Are.
      </>
    ),
  },
  {
    title: "🚧 Enterprise Meeting Solution",
    href: "/products/enterprise-meeting-solution",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Best SaaS Solution Which Empowers Your Personal, Enterprise, and
        Enterprise Meetings Anywhere, No Matter Where You Are.
      </>
    ),
  },
  {
    title: "🚧 Anonymous VPN",
    href: "/products/vpn",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Introducing our Free, Fast, Anonymous VPN Powered by the SoftEther Open
        Source VPN Project and made by Tech Fiddle, hosted in it's own servers.
      </>
    ),
  },
];

const Tools = [
  {
    title: "DNS Lookup",
    href: "https://digwebinterface.com",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Best DNS Lookup Tool with Advanced Configuration, Cherry-Picked by Tech
        Fiddle.
      </>
    ),
  },
  {
    title: "SpeedTest",
    href: "/tools/speedtest",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Free, Fast, and Always Accurate Internet SpeedTest. Powered by
        OpenSpeedTest.com to give you the best experience, accurate and detailed
        SpeedTest.
      </>
    ),
  },
  {
    title: "Web Tools",
    href: "https://www.webtoolhub.com/",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Best Web Tools Just for You by Tech Fiddle!</>,
  },
];

// Data End & Functions Start

function Resource({ Svg, title, description, href, icon, button, subtitle }) {
  return (
    <Link href={href} className="docusaurusLink">
      <div className="card shadow--md">
        <div className="card__header">
          {icon}
          <div className="space" />
          <h3>{title}</h3>
        </div>
        <div className="card__body">{description}</div>
      </div>
    </Link>
  );
}

// function Product({ Svg, title, description, href, icon, button, subtitle }) {
//   return (
//     <Link href={href} className="docusaurusLink">
//       <div className="card shadow--md">
//         <div className="card__header">
//           {icon}
//           <div className="space" />
//           <h3>{title}</h3>
//         </div>
//         <div className="card__body">{description}</div>
//       </div>
//     </Link>
//   );
// }

// function Tool({ Svg, title, description, href, icon, button, subtitle }) {
//   return (
//     <Link href={href} className="docusaurusLink">
//       <div className="card shadow--md">
//         <div className="card__header">
//           {icon}
//           <div className="space" />
//           <h3>{title}</h3>
//         </div>
//         <div className="card__body">{description}</div>
//       </div>
//     </Link>
//   );
// }

export default function HomepageFeatures() {
  return (
    <>
      <section>
        <h2 className="featuresHeading">Resources</h2>
        <div className="features">
          <div className="container">
            <div className="row">
              {Resources.map((props, idx) => (
                <>
                  <div className="col col--2">
                    <Resource key={idx} {...props} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <h2 className="featuresHeading">Products</h2>
        <div className="features">
          <div className="container">
            <div className="row">
              {Products.map((props, idx) => (
                <>
                  <div className="col">
                    <Product key={idx} {...props} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <br />
        <Divider />
      </section>
      <section>
        <h2 className="featuresHeading">Tools</h2>
        <div className="features">
          <div className="container">
            <div className="row">
              {Tools.map((props, idx) => (
                <>
                  <div className="col">
                    <Tool key={idx} {...props} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
