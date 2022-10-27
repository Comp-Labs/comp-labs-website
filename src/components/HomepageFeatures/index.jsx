import React from "react";
import clsx from "clsx";
// import styles from "./HomepageFeatures.module.css";
// import Link from "@docusaurus/Link";
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
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

const FeatureList = [
  {
    title: "🚧 Docs",
    href: "/docs",
    icon: (
      <MenuBookRoundedIcon />
    ),
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Use our Handy Documentation to Learn More about Tech Fiddle and it's
        subsidiaries.
      </>
    ),
    // button: (
    //   <>
    //     <Link className="button button--primary" to="/docs">
    //       <Translate>Read Now!</Translate>
    //     </Link>
    //   </>
    // ),
  },
  {
    title: "Guides",
    href: "/blog",
    icon: "<MenuBookRoundedIcon />",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Tech Based Blog for Enthusiasts.</>,
    button: (
      <>
        <Link className="button button--primary" to="/blog">
          <Translate>Learn Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Apps",
    href: "/apps",
    icon: "",
    Svg: require("/img/undraw_develop_app.svg").default,
    description: (
      <>
        Apps with the World's Best UI/UX for Platforms Including <br></br>
        Android, Windows, iOS, iPadOS, watchOS, macOS, tvOS, and Linux.
        <br></br>Download the Apps Today!<br></br>
        <br></br>
      </>
    ),
    button: (
      <>
        <Link className="button button--primary" to="/apps">
          <Translate>Explore Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Please Contact Us using the Google Form Link for any Issues, Queries,
        Feedback, etc.
      </>
    ),
    button: (
      <>
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
    href: "/webdev-crafts",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Mesmerizing Crafts Made by WebDev's at Tech Fiddle And All The CodePen
        Users Worldwide!
      </>
    ),
    button: (
      <>
        <Link className="button button--primary" to="/webdev-crafts">
          <Translate>See Now!</Translate>
        </Link>
      </>
    ),
  },
  // {
  //   title: "Donate Us",
  //   href: "/donate-us",
  //   icon: "",
  //   Svg: require("/img/undraw_typewriter.svg").default,
  //   description: (
  //     <>
  //       Please Donate Us to keep us alive!
  //     </>
  //   ),
  // button: (
  //   <>
  //       <Link className="button button--primary" to="/donate-us">
  //         <Translate>Donate Now!</Translate>
  //       </Link>
  //   </>
  // )
  // },
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
    button: (
      <>
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
    href: "/solutions/enterprise-mail-solution",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Best SaaS Solution Which Empowers Your Personal, Business, and
        Enterprise Mail Anywhere, No Matter Where You Are.
      </>
    ),
    button: (
      <>
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
    href: "/solutions/enterprise-meeting-solution",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Best SaaS Solution Which Empowers Your Personal, Business, and
        Enterprise Meetings Anywhere, No Matter Where You Are.
      </>
    ),
    button: (
      <>
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
    button: (
      <>
        <Link className="button button--primary" to="/solutions/vpn">
          <Translate>Encrypt Now!</Translate>
        </Link>
      </>
    ),
  },
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
    button: (
      <>
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
    button: (
      <>
        <Link className="button button--primary" to="/tools/speedtest">
          <Translate>SpeedTest Now!</Translate>
        </Link>
        <Button component="a" href="/tools/speedtest" size="sm" variant="soft">
          Explore Now!
        </Button>
      </>
    ),
  },
  {
    title: "Web Tools",
    href: "https://www.webtoolhub.com/",
    icon: "",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Best Web Tools Just for You by Tech Fiddle!</>,
    button: (
      <>
        <Button
          component="a"
          href="https://digwebinterface.com/"
          size="sm"
          variant="soft"
        >
          Explore Now!
        </Button>
      </>
    ),
  },
  {
    title: "Legal",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Legal Documents for Tech Fiddle.</>,
    button: (
      <>
        <div className="button-group button-group--block">
          <Button
            component="a"
            href="/legal/terms-of-service"
            size="sm"
            variant="soft"
            startDecorator={<i class="fa-regular fa-file"></i>}
          >
            Terms of Service
          </Button>
          <Button
            component="a"
            href="/legal/privacy-policy"
            size="sm"
            variant="soft"
            startDecorator={<i class="fa-regular fa-file"></i>}
          >
            Privacy Policy
          </Button>
          <Button
            component="a"
            href="/legal/cookie-policy"
            size="sm"
            variant="soft"
            startDecorator={<i class="fa-regular fa-file"></i>}
          >
            Cookie Policy
          </Button>
        </div>
      </>
    ),
  },
  {
    title: "Social",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Connect with Tech Fiddle!</>,
    button: (
      <>
        <Button
          component="a"
          href="https://github.com/Comp-Labs"
          size="sm"
          variant="soft"
          startDecorator={<i class="fa-brands fa-github"></i>}
        >
          GitHub
        </Button>
        <Button
          component="a"
          href="https://youtube.com/channel/UCL6pKeSCbJkPohM2PUZbqQA"
          size="sm"
          variant="soft"
          startDecorator={<i class="fa-brands fa-youtube"></i>}
        >
          YouTube
        </Button>
        <Button
          component="a"
          href="https://linktr.ee/complabs"
          size="sm"
          variant="soft"
          startDecorator={<i class="fa-solid fa-tree"></i>}
        >
          LinkTree
        </Button>
      </>
    ),
  },
];

// function Feature({ Svg, title, description }) {
//   return (
//     <div className={clsx("col col--6")}>
//       <div className={clsx('card')}>
//       <div className="text--center">
//         <Svg className="featureSvg" alt={title} />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//       </div>
//     </div>
//   );
// }

function Feature({ Svg, title, description, button, href, subtitle, icon }) {
  return (
    <CssVarsProvider>
      <Card
        color="primary"
        sx={{
          bgcolor: "background.level1",
          "&:hover, &:focus-within": {
            bgcolor: "background.level2",
          },
          boxShadow: "inset 0 1px 0 0 rgb(255 255 255 / 5%)",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Avatar size="lg" src={icon} />
          <div>
            <Typography component="div">
              <Link
                overlay
                href={href}
                textColor="inherit"
                underline="none"
                fontWeight="md"
              >
                {title}
              </Link>
            </Typography>
            <Typography level="body2">{subtitle}</Typography>
          </div>
        </Box>
        <Typography level="body2" display="flex" alignItems="center" gap={0.5}>
          {description}
        </Typography>
      </Card>
    </CssVarsProvider>
  );
}

// function Feature({ Svg, title, description }) {
//   return (
//     <div className={clsx("card")}>
//       <div className={clsx("card__image")}>
//         <div className="text--center">
//           <Svg className="featureSvg" alt={title} />
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
    <section>
      <div className="features">
        <div className="col--col--6">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          </div>
      </div>
      <hr></hr>
    </section>
  );
}
