import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
var ReactRotatingText = require("react-rotating-text");

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="heroCard">
      <Card sx={{ minWidth: 300, flexGrow: 1 }}>
          <img
            src="https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/defaultbg.jpg"
            loading="lazy"
            alt="Default Background"
          />
      <CardContent>
          <Typography
            level="h1"
            fontWeight="lg"
          >
            Tech Fiddle
          </Typography>
          <Typography
                      level="h1"
                      fontWeight="lg">
            Description...
            </Typography>
        </CardContent>
      </Card>
    </div>
    // <div className="hero">
    //   <div className="heroInner">
    //     <h1 className="heroProjectTagline">
    //       {/* <img
    //         alt={translate({ message: "Tech Fiddle Logo Animated" })}
    //         className="heroLogo"
    //         src={useBaseUrl("https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/icon-removebg.jpg")}
    //         width="256"
    //         height="256"
    //       /> */}
    //       <span
    //         className="heroTitleTextHtml"
    //         // eslint-disable-next-line react/no-danger
    //         dangerouslySetInnerHTML={{
    //           __html: translate({
    //             id: "homepage.hero.title",
    //             message:
    //               "<p><b>Tech Fiddle</b><br><b>------</b>------<b>------</b>------<b>------</b><br>",
    //           }),
    //         }}
    //       />
    //       <ReactRotatingText
    //         items={["Guides.", "Apps.", "Solutions.", "Tools."]}
    //         color="#076af7"
    //       />
    //       <span
    //         className="heroTitleTextHtml"
    //         // eslint-disable-next-line react/no-danger
    //         dangerouslySetInnerHTML={{
    //           __html: translate({
    //             id: "homepage.hero.title",
    //             message:
    //               "<p>for <b>Personal</b>, <b>Business</b>, or <b>Enterprise Use</b>.</p>",
    //           }),
    //         }}
    //       />
    //     </h1>
    //     {/* <div className="indexCtas"> */}
    //     {/* <div className="button-group button-group--block">
    //       <Link className="button button--primary" to="/docs">
    //         <Translate>Get Started</Translate>
    //       </Link>
    //       <Link className="button button--primary" to="/blog">
    //         <Translate>Guides</Translate>
    //       </Link>
    //       <Link className="button button--primary" href="https://github.com/Comp-Labs">
    //         <Translate>Follow Tech Fiddle</Translate>
    //       </Link>
    //       <Link className="button button--primary" href="https://github.com/sponsors/RudraSen2">
    //         <Translate>Sponsor Tech Fiddle</Translate>
    //       </Link>
    //       </div> */}
    //     {/* <span className="indexCtasGitHubButtonWrapper">
    //         <iframe
    //           className="indexCtasGitHubButton"
    //           src="https://ghbtns.com/github-btn.html?user=Comp-Labs&amp;type=follow&amp;count=true&amp;size=small"
    //           width={190}
    //           height={30}
    //           title="Follow Tech Fiddle on GitHub"
    //         />
    //       </span>
    //       <br></br>
    //       <span className="indexCtasGitHubButtonWrapper">
    //         <iframe
    //           className="indexCtasGitHubButton"
    //           src="https://ghbtns.com/github-btn.html?user=Comp-Labs&amp;type=sponsor&amp;size=small"
    //           frameborder="0"
    //           scrolling="0"
    //           width="180"
    //           height="30"
    //           title="GitHub"
    //         >
    //           width={190}
    //           height={30}
    //           title="Sponsor Tech Fiddle on GitHub"
    //         </iframe>
    //       </span> */}
    //     {/* </div> */}
    //   </div>
    // </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Tech Fiddle provides a Tech Enthusiastic Blog, some useful apps, and Core Solutions to empower everyone."
    >
      <HomepageHeader />
      <hr></hr>
      <main>
        {/* <RecentBlogPosts /> */}
        <HomepageFeatures />
      </main>     
    </Layout>
  );
}
