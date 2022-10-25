import React from "react";
import clsx from "clsx";
// import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { CssVarsProvider } from "@mui/joy/styles";
import ButtonGroup from '@mui/material/ButtonGroup';

const FeatureList = [
  {
    title: "🚧 Docs",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: (
      <>
        Use our Handy Documentation to Learn More about Tech Fiddle and it's
        subsidiaries.
      </>
    ),
    button: (
      <>
        <Link className="button button--primary" to="/docs">
          <Translate>Read Now!</Translate>
        </Link>
      </>
    ),
  },
  {
    title: "Guides",
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
      </>
    ),
  },
  {
    title: "Web Tools",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Best Web Tools Just for You by Tech Fiddle!</>,
    button: (
      <>
        <Button component="a" href="https://digwebinterface.com/" size="sm" variant="soft">Explore Now!</Button>
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
        {/* <div className="button-group button-group--block">
          <Link className="button button--primary" to="/legal/terms-of-service">
            <i class="fa-regular fa-file"></i>
            <Translate>Terms of Service</Translate>
          </Link>
          <Link className="button button--primary" to="/legal/privacy-policy">
            <i class="fa-regular fa-file"></i>
            <Translate>Privacy Policy</Translate>
          </Link>
          <Link className="button button--primary" to="/legal/cookie-policy">
            <i class="fa-regular fa-file"></i>
            <Translate>Cookie Policy</Translate>
          </Link>
        </div> */}
      </>
    ),
  },
  {
    title: "Social",
    Svg: require("/img/undraw_typewriter.svg").default,
    description: <>Connect with Tech Fiddle!</>,
    button: (
      <>
      <div className="button-group button-group--block">
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
            startDecorator={<i class="fa-soft fa-tree"></i>}
          >
            LinkTree
          </Button>
          </div>
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

function Feature({ Svg, title, description, button }) {
  return (
    <CssVarsProvider>
      <div className={clsx("col col--6")}>
        <div className="flex">
          <Card color="primary" variant="outlined" sx={{ width: 320 }}>
            <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
              <Svg className="featureSvg" alt={title} loading="lazy" />
            </AspectRatio>
            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              {title}
            </Typography>
            <Typography level="body2">{description}</Typography>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
            >
              <BookmarkAdd />
            </IconButton>
            <Box>
              {/* <div>
            <Typography level="body3">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              $2,900
            </Typography>
          </div> */}
              {/* <Button
          variant="soft"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Explore
        </Button> */}
              {button}
            </Box>
          </Card>
        </div>
      </div>
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
    <section className="features">
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
