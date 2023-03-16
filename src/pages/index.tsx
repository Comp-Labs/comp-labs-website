import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import HomepageFeatures from "../components/Homepage/HomepageFeatures";
import { useColorMode } from "@docusaurus/theme-common";
import Head from "@docusaurus/Head";
var ReactRotatingText = require("react-rotating-text");

function HeroSection() {
  const { colorMode } = useColorMode();

  return (
    <section className="noise-bg py-16 px-4 lg:py-12">
      <Head>
        <link rel="prefetch" href="https://docs.dyte.io/static/landing-page/hero-light.png" />
        <link rel="prefetch" href="https://docs.dyte.io/static/landing-page/hero-dark.png" />
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">Tech Fiddle</h1>
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
            Tech Fiddle has a Tech Enthusiastic Blog, Some Useful Apps, and
            Products for Everyone.
          </p>
          {/* <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Link
              href="/"
              className="button button--primary button--lg"
            >
              Start building
            </Link>
            <Link
              href="/"
              className="button button--outline button--primary button--lg"
            >
              Getting started
            </Link>
          </div> */}
        </div>
        <div className="">
          <img
            src={`https://docs.dyte.io/static/landing-page/hero-${colorMode}.png`}
            alt="Preview of using Dyte SDKs"
          />
        </div>
      </div>
    </section>
  );
}

export default function Homepage() {
  return (
    <Layout
      title={`Home | Guides, Apps, Solutions, Tools`}
      description="Tech Fiddle provides a Tech Enthusiastic Blog, Apps, and Solutions for Everyone"
      wrapperClassName="homepage flex flex-col"
    >
      <HeroSection />
      <HomepageFeatures />
      <br />
    </Layout>
  );
}
