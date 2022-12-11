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
import HorizontalScroll from "react-horizontal-scrolling";
import Avatar from "@mui/joy/Avatar";
import Link from "@mui/joy/Link";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import ParkRoundedIcon from "@mui/icons-material/ParkRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Chip from '@mui/joy/Chip';
import Highlight from '@site/src/components/Highlight';

// Data Start

const Resources = [
  {
    title: "🚧 Docs",
    href: "/docs",
    icon: <><i class="fa-solid fa-file-lines" /></>,
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
    icon: <><i class="fa-solid fa-file-lines" /></>,
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Tech Based Blog for Enthusiasts.</>,
  },
  {
    title: "Apps",
    href: "/apps",
    icon: <><i class="fa-solid fa-grip-vertical" /></>,
    Svg: require("/img/undraw_develop_app.svg").default,
    description: (
      <>
        Apps with the World's Best UI/UX for Platforms Including <br />
        Android, Windows, iOS, iPadOS, watchOS, macOS, tvOS, and Linux.
        <br />Download the Apps Today!<br />
        <br />
      </>
    ),
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: <><i class="fa-solid fa-envelope" /></>,
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Please Contact Us for any Issues, Queries,
        Feedback, etc.
      </>
    ),
  },
  {
    title: "WebDev's Crafts",
    href: "/webdev-crafts",
    icon: <><i class="fa-solid fa-hand-sparkles" /></>,
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Mesmerizing Crafts Made by WebDev's at Tech Fiddle And All The CodePen
        Users Worldwide!
      </>
    ),
  },
  {
    title: "Donate Us",
    href: "/donate",
    icon: <><i class="fa-solid fa-hand-holding-dollar" /></>,
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Please Donate Us if you like our content!
      </>
    ),
  },
  {
    title: "Legal",
    href: "/legal",
    icon: <><i class="fa-solid fa-scale-balanced" /></>,
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Tech Fiddle's Legal Documents.</>,
  },
  {
    title: "Social",
    href: "/social",
    icon: <><i class="fa-solid fa-hashtag" /></>,
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Connect with Tech Fiddle!</>,
    button: (
      <>
      </>
    ),
  },
];

const Solutions = [
  {
    title: "🚧 App Publisher for Google Play",
    href: "/solutions/google-play-developers",
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
    title: "🚧 Business Mail Service",
    href: "/solutions/enterprise-mail-solution",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Best SaaS Solution Which Empowers Your Personal, Business, and
        Enterprise Mail Anywhere, No Matter Where You Are.
      </>
    ),
  },
  {
    title: "🚧 Business Meeting Service",
    href: "/solutions/enterprise-meeting-solution",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Best SaaS Solution Which Empowers Your Personal, Business, and
        Enterprise Meetings Anywhere, No Matter Where You Are.
      </>
    ),
  },
  {
    title: "🚧 Anonymous VPN",
    href: "/solutions/vpn",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Introducing our Free, Fast, Anonymous VPN Powered by the SoftEther Open
        Source VPN Project and made by Tech Fiddle, hosted in it's own servers.
        Now you can connect to our public and anonymous VPN.
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
        Free, Fast, and Always Accurate Internet, Internet SpeedTest. Powered by
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
    <Card
      variant="outlined"
      row
      sx={{
        width: 320,
        gap: 2,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {icon} {title}
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href={href}
            sx={{ color: 'text.tertiary' }}
          >
            {description}
            <br />
            {button}
          </Link>
        </Typography>
      </div>
    </Card>
  );
}

function Solution({ Svg, title, description, href, icon, button, subtitle }) {
  return (
    <Card
      variant="outlined"
      row
      sx={{
        width: 320,
        gap: 2,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {icon} {title}
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href={href}
            sx={{ color: 'text.tertiary' }}
          >
            {description}
            <br />
            {button}
          </Link>
        </Typography>
      </div>
    </Card>
  );
}

function Tool({ Svg, title, description, href, icon, button, subtitle }) {
  return (
    <Card
      variant="outlined"
      row
      sx={{
        width: 320,
        gap: 2,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {icon} {title}
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href={href}
            sx={{ color: 'text.tertiary' }}
          >
            {description}
            <br />
            {button}
          </Link>
        </Typography>
      </div>
    </Card>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section>
        <h2 className="featuresHeading">Resources</h2>
        <div className="features">
          <div className="row">
            {Resources.map((props, idx) => (
              <><Resource key={idx} {...props} /><br /></>
            ))}
          </div>
        </div>
        <hr />
      </section>
      <section>
        <h2 className="featuresHeading">Solutions</h2>
        <div className="features">
            <div className="row">
            {Solutions.map((props, idx) => (
              <><Solution key={idx} {...props} /><br /></>
            ))}
          </div>
        </div>
        <hr />
      </section>
      <section>
        <h2 className="featuresHeading">Tools</h2>
        <div className="features">
          <div className="row">
            {Tools.map((props, idx) => (
              <><Tool key={idx} {...props} /><br /></>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
