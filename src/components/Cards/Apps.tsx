/* eslint-disable global-require */

import * as React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
// import Link from '@docusaurus/Link';
import { CssVarsProvider } from '@mui/joy/styles';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from "@mui/joy/CardContent";
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Divider from '@mui/joy/Divider';
import Chip from '@mui/joy/Chip';

const AppCards = [
    {
        name: 'Tech Fiddle Meet',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/comp-labs-meet/icon.png',
        url: {
            categories: 'Productivity',
            status: 'Available',
            viewNow: '/apps/comp-labs-meet',
            color: 'success',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'Google Docs',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/google-docs.png',
        url: {
            categories: 'Productivity',
            status: 'Available',
            viewNow: '/apps/google-docs',
            color: 'success',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'Jira Server',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/jira-server.png',
        url: {
            categories: 'Productivity',
            status: 'Available',
            viewNow: '/apps/jira-server',
            color: 'success',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'Apple Store',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/applestore.webp',
        url: {
            categories: 'Shopping',
            status: 'Planned',
            viewNow: '/apps/apple-store',
            color: 'info',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'CloudConsole',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/icon-removebg.jpg',
        url: {
            categories: 'Productivity',
            status: 'Planned',
            viewNow: '/apps/cloud-console',
            color: 'info',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'CodeEdit',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/icon-removebg.jpg',
        url: {
            categories: 'Productivity',
            status: 'In Development',
            viewNow: '/apps/codeedit',
            color: 'warning',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'GadgetCompare',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/icon-removebg.jpg',
        url: {
            categories: 'Productivity',
            status: 'Planned',
            viewNow: '/apps/gadget-compare',
            color: 'info',
            width: '256',
            height: '256',
        },
    },
    // {
    //     name: 'Office',
    //     image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/office.png',
    //     url: {
    //         categories: 'Productivity',
    //         status: 'In Development',
    //         viewNow: '/apps/office',
    //         color: 'warning',
    //         width: '256',
    //         height: '256',
    //     },
    // },
];

interface Props {
    name: string;
    image: string;
    url: {
        categories?: string;
        status?: string;
        viewNow?: string;
        color?: string;
        width?: string;
        height?: string;
    };
}

function AppCard({ name, image, url }: Props) {
    return (
        <Link href={url.viewNow}>
            <div className="card">
                <div className="card__image">
                    <img
                        src={image}
                        loading="lazy"
                        alt={{ name } + "Logo"}
                        width={url.width}
                        height={url.height}
                    />
                </div>
                <div className="card__header"><h3>{name}</h3></div>
                <div className="card__body">
                    <Chip
                        color="neutral"
                        size="sm"
                        variant="solid"
                    >{url.categories}</Chip>
                    <br />
                    <Chip
                        color={url.color}
                        size="sm"
                        variant="solid"
                    >{url.status}</Chip>
                </div>
            </div>
        </Link>
    );
}

export function AppCardsRow(): JSX.Element {
    const [sx, setSx] = React.useState({});
    return (
        <CssVarsProvider>
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
                    gridTemplateRows: '1fr auto',
                    gap: 2,
                    mt: 2,
                    '& .markdown-body pre': {
                        margin: 0,
                        borderRadius: 'xs',
                    },
                }}
            >
                <Box
                    sx={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        display: 'flex',
                        placeSelf: 'center',
                        gap: 2,
                        flexWrap: 'wrap',
                    }}
                >
                    {AppCards.map((apps) => (
                        <AppCard key={apps.name} {...apps} />
                    ))}
                </Box>
            </Box>
        </CssVarsProvider>
        // <div className="row cardRow">
        //     {AppCards.map((apps) => (
        //         <AppCard key={apps.name} {...apps} />
        //     ))}
        // </div>
    );
}
