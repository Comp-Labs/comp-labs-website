import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
// Divider
import BrowserWindow from "@site/src/components/BrowserWindow";
import Giscus from "@giscus/react";
import Highlight from "@site/src/components/Highlight";
import Link from "@docusaurus/Link";
import Microlink from "@microlink/react";
import NativeShare from '@site/src/components/NativeShare';
import ShowcaseCarousel from "@site/src/components/ShowcaseCarousel";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import YTSubscribe from '@site/src/components/YTSubscribe';

export default {
  ...MDXComponents,
  // Divider
  BrowserWindow: BrowserWindow,
  Giscus: Giscus,
  Highlight: Highlight,
  Link: Link,
  Microlink: Microlink,
  NativeShare: NativeShare,
  ShowcaseCarousel: ShowcaseCarousel,
  Tabs: Tabs,
  TabItem: TabItem,
  YTSubscribe: YTSubscribe,
};