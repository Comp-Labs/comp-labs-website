/* eslint-disable global-require */

import * as React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
// import Link from '@docusaurus/Link';
import Chip from '@mui/joy/Chip';
import Stack from '@mui/material/Stack';
import { CssVarsProvider } from '@mui/joy/styles';
import Highlight from '@site/src/components/Highlight';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

const AppCards = [
    {
        name: 'Tech Fiddle Meet',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/comp-labs-meet/icon.png',
        url: {
            categories: ['Productivity', 'Social', 'Collaboration'],
            status: 'Available',
            viewNow: '/apps/comp-labs-meet',
            color: '#00d26a',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'Google Docs',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/google-docs.png',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: 'Available',
            viewNow: '/apps/google-docs',
            color: '#00d26a',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'Jira Server',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/jira-server.png',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: 'Available',
            viewNow: '/apps/jira-server',
            color: '#00d26a',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'Apple Store',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/applestore.webp',
        url: {
            categories: ['Shopping', 'Blank', 'Blank'],
            status: 'In Development',
            viewNow: '/apps/apple-store',
            color: '#076AF7',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'CloudConsole',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/icon-removebg.jpg',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: 'In Development',
            viewNow: '/apps/cloud-console',
            color: '#076AF7',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'CodeEdit',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/icon-removebg.jpg',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: 'In Development',
            viewNow: '/apps/codeedit',
            color: '#076AF7',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'GadgetCompare',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/icon-removebg.jpg',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: 'In Development',
            viewNow: '/apps/gadget-compare',
            color: '#076AF7',
            width: '256',
            height: '256',
        },
    },
    {
        name: 'Office',
        image: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/office.png',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: 'In Development',
            viewNow: '/apps/office',
            color: '#076AF7',
            width: '256',
            height: '256',
        },
    },
];

interface Props {
    name: string;
    image: string;
    url: {
        categories?: string;
        status?: string;
        viewNow?: string;
        color?: string;
        width?: string,
        height?: string,
    };
}

export function TagOne({ name, image, url }: Props) {
    if (url.categories.length = 1) {
        <Chip label={url.categories[0]} variant="outlined" size="small" />
    }
}

{/* <Card variant="outlined" sx={{ maxWidth: 200, boxShadow: 'none', ...sx }}>
<CardOverflow>
  <AspectRatio>
    <img
      src="https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/defaultbg.jpg"
      loading="lazy"
      alt="Background"
    />
  </AspectRatio>
</CardOverflow>
<Box sx={{ mt: -3, width: 48 }}>
  <AspectRatio ratio="1">
    <img
      src={image}
      loading="lazy"
      alt={name}
      title={name}
    />
  </AspectRatio>
</Box>
<Box>
  <Typography fontWeight="lg" mt={1.5}>
    <Link href={url.viewNow} overlay color="neutral">
      {name}
    </Link>
  </Typography>
  <Typography level="body2">A very very long description.</Typography>
</Box>
</Card> */}

function AppCard({ name, image, url }: Props) {
    return (
        <Card variant="outlined" sx={{ maxWidth: 200, boxShadow: 'none' }}>
            <CardOverflow>
                <AspectRatio>
                    <img
                        src="https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/defaultbg.jpg"
                        loading="lazy"
                        alt="Background"
                    />
                </AspectRatio>
            </CardOverflow>
            <Box sx={{ width: 64 }}>
                <AspectRatio ratio="1">
                    <img
                        src={image}
                        loading="lazy"
                        alt={name}
                        title={name}
                    />
                </AspectRatio>
            </Box>
            <Box>
                <Typography fontWeight="lg">
                    <Link href={url.viewNow} overlay color="neutral">
                        {name}
                    </Link>
                </Typography>
                <Typography level="body2">A very very long description.</Typography>
            </Box>
        </Card>
    );
}

//             <div className={clsx('card')}>
//                 <div className={clsx('card__image')}>
//                     <center>
//                     <Link to={url.viewNow}>
//                         <img src={image} alt={name} title={name} width={url.width} height={url.height}></img>
//                     </Link>
//                     </center>
//                 </div>
//                 <div className="card__body">
//                     <h3>{name}</h3>
//                 </div>
//                 <div className="card__footer">
//                     <Highlight color={url.color}>{url.status}</Highlight>
//                     <br></br><br></br>
//                     <Stack direction="row" spacing={1}>
//                     <Chip size="sm" variant="soft">{url.categories[0]}</Chip>
//                     <Chip size="sm" variant="soft">{url.categories[1]}</Chip>
//                     <Chip size="sm" variant="soft">{url.categories[2]}</Chip>
//                     {/* <Chip size="sm" variant="soft">{url.categories[3]}</Chip>
//                     <Chip size="sm" variant="soft">{url.categories[4]}</Chip>
//                     <Chip size="sm" variant="soft">{url.categories[5]}</Chip> */}
//                     </Stack>
//                     <br></br>
//                     <div className="button-group button-group--block">
//                         <Link className="button button--primary" to={url.viewNow}>
//                             <i className="fa-solid fa-arrow-up-right-from-square"></i> View Now
//                         </Link>
//                     </div>
//                 </div>
//             </div>

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
