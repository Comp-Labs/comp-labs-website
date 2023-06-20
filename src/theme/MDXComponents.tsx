import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
// Divider
import Browser from "@site/src/components/ShowcaseWindow/Browser";
import Button from "@mui/joy/Button";
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
import TOCInline from '@theme/TOCInline';
import YTSubscribe from '@site/src/components/YTSubscribe';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

export default {
    ...MDXComponents,
    // Divider
    Browser: Browser,
    Button: Button,
    CssVarsProvider: CssVarsProvider,
    DocCardList: DocCardList,
    FontAwesomeIcon: FontAwesomeIcon,
    Giscus: Giscus,
    // Highlight: Highlight,
    Link: Link,
    Microlink: Microlink,
    NativeShare: NativeShare,
    ShowcaseCarousel: ShowcaseCarousel,
    Tabs: Tabs,
    TabItem: TabItem,
    Terminal: Terminal,
    TOCInline: TOCInline,
    YTSubscribe: YTSubscribe,
    // Icons
    TerminalRoundedIcon: TerminalRoundedIcon,
    ContentCopyRoundedIcon: ContentCopyRoundedIcon,
};