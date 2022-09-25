import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
// Divider
import Browser from "@site/src/components/ShowcaseWindow/Browser";
import { CssVarsProvider } from "@mui/joy/styles";
import DocCardList from '@theme/DocCardList';
import Giscus from "@giscus/react";
// import Highlight from "@site/src/components/Highlight";
import Link from "@docusaurus/Link";
import Microlink from "@microlink/react";
import NativeShare from '@site/src/components/NativeShare';
import ShowcaseCarousel from "@site/src/components/ShowcaseCarousel";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Terminal from "@site/src/components/ShowcaseWindow/Terminal";
import YTSubscribe from '@site/src/components/YTSubscribe';

export default {
  ...MDXComponents,
  // Divider
  Browser: Browser,
  CssVarsProvider: CssVarsProvider,
  DocCardList: DocCardList,
  Giscus: Giscus,
  // Highlight: Highlight,
  Link: Link,
  Microlink: Microlink,
  NativeShare: NativeShare,
  ShowcaseCarousel: ShowcaseCarousel,
  Tabs: Tabs,
  TabItem: TabItem,
  Terminal: Terminal,
  YTSubscribe: YTSubscribe,
};