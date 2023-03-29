import React from 'react';
import Icon from "@mui/material/Icon";
import ThumbUp from '@mui/icons-material/ThumbUp';
import { CssVarsProvider } from '@mui/joy/styles';
import Tooltip from '@mui/joy/Tooltip';
import IconButton from '@mui/joy/IconButton';
import ParkRoundedIcon from '@mui/icons-material/ParkRounded';
import Box from "@mui/joy/Box";
import { createSvgIcon } from '@mui/material/utils';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import Divider from '@mui/joy/Divider';
import BentoIcon from '@mui/icons-material/Bento';

// const GitHubLogo = createSvgIcon(
//     <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />,
//     'GitHub',
// );

// const YouTubeLogo = createSvgIcon(
//     <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />,
//     'YouTube',
// );

const DiscordLogo = createSvgIcon(
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />,
    'Discord',
);

export function FooterButtons() {
    return (
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
            <Tooltip color="neutral" variant="solid" title="GitHub">
                <IconButton
                    component="a"
                    href="https://github.com/Comp-Labs"
                    color="primary"
                    size="sm"
                    variant="outlined"
                    aria-label="GitHub"
                >
                    <GitHubIcon />
                </IconButton>
            </Tooltip>
            <Tooltip color="neutral" variant="solid" title="YouTube">
                <IconButton
                    component="a"
                    href="https://youtube.com/channel/UCL6pKeSCbJkPohM2PUZbqQA"
                    color="primary"
                    size="sm"
                    variant="outlined"
                    aria-label="YouTube"
                >
                    <YouTubeIcon />
                </IconButton>
            </Tooltip>
            <Tooltip color="neutral" variant="solid" title="Discord">
                <IconButton
                    component="a"
                    href="https://discord.gg/GAbzAGKccW"
                    color="primary"
                    size="sm"
                    variant="outlined"
                    // disabled
                    aria-label="Discord"
                >
                    <DiscordLogo />
                </IconButton>
            </Tooltip>
            <Tooltip color="neutral" variant="solid" title="Bento">
                <IconButton
                    component="a"
                    href="https://bento.me/techfiddle"
                    color="primary"
                    size="sm"
                    variant="outlined"
                    aria-label="Tech Fiddle Bento"
                >
                    <BentoIcon />
                </IconButton>
            </Tooltip>
            <Tooltip color="neutral" variant="solid" title="RSS Feed">
                <IconButton
                    component="a"
                    href="https://complabs.in/blog/rss.xml"
                    color="primary"
                    size="sm"
                    variant="outlined"
                    aria-label="RSS Feed"
                >
                    <RssFeedRoundedIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
}

export function Buttons() {
    return (
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
            <Tooltip color="neutral" variant="solid" title="GitHub">
                <IconButton
                    component="a"
                    href="https://github.com/Comp-Labs"
                    color="primary"
                    size="sm"
                    variant="outlined"
                    aria-label="GitHub"
                >
                    <GitHubIcon />
                </IconButton>
            </Tooltip>
            <Tooltip color="neutral" variant="solid" title="YouTube">
                <IconButton
                    component="a"
                    href="https://youtube.com/channel/UCL6pKeSCbJkPohM2PUZbqQA"
                    color="primary"
                    size="sm"
                    variant="outlined"
                    aria-label="YouTube"
                >
                    <YouTubeIcon />
                </IconButton>
            </Tooltip>
            <Tooltip color="neutral" variant="solid" title="Discord">
                <IconButton
                    component="a"
                    href="https://discord.gg/GAbzAGKccW"
                    color="primary"
                    size="sm"
                    variant="outlined"
                    // disabled
                    aria-label="Discord"
                >
                    <DiscordLogo />
                </IconButton>
            </Tooltip>
            <Tooltip color="neutral" variant="solid" title="Bento">
                <IconButton
                    component="a"
                    href="https://bento.me/techfiddle"
                    color="primary"
                    size="sm"
                    variant="outlined"
                    aria-label="Tech Fiddle Bento"
                >
                    <BentoIcon />
                </IconButton>
            </Tooltip>
            <Tooltip color="neutral" variant="solid" title="RSS Feed">
                <IconButton
                    component="a"
                    href="https://complabs.in/blog/rss.xml"
                    color="primary"
                    size="sm"
                    variant="outlined"
                    aria-label="RSS Feed"
                >
                    <RssFeedRoundedIcon />
                </IconButton>
            </Tooltip>
            <Divider orientation="vertical" />
        </Box>
    );
}
