

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Chip from '@mui/joy/Chip';
import Stack from '@mui/material/Stack';
import { CssVarsProvider } from '@mui/joy/styles';
import Highlight from '@site/src/components/Highlight';

const AppCards = [
    {
        name: 'Tech Fiddle Meet',
        image: 'https://cdn.complabs.in/img/apps/comp-labs-meet/icon.png',
        url: {
            categories: ['Productivity', 'Social', 'Collaboration'],
            status: '✅ Available',
            viewNow: '/apps/comp-labs-meet',
            color: '#00d26a',
        },
    },
    {
        name: 'Google Docs',
        image: 'https://cdn.complabs.in/img/apps/google-docs.png',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: '✅ Available',
            viewNow: '/apps/google-docs',
            color: '#00d26a',
        },
    },
    {
        name: 'Jira Server',
        image: 'https://cdn.complabs.in/img/apps/jira-server.png',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: '✅ Available',
            viewNow: '/apps/jira-server',
            color: '#00d26a',
        },
    },
    {
        name: 'Apple Store',
        image: 'https://cdn.complabs.in/img/apps/applestore.webp',
        url: {
            categories: ['Shopping', 'Blank', 'Blank'],
            status: '🚧 In Development',
            viewNow: '/apps/apple-store',
            color: '#076AF7',
        },
    },
    {
        name: 'CloudConsole',
        image: 'https://cdn.complabs.in/img/default.jpg',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: '🚧 In Development',
            viewNow: '/apps/cloud-console',
            color: '#076AF7',
        },
    },
    {
        name: 'CodeEdit',
        image: 'https://cdn.complabs.in/img/default.jpg',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: '🚧 In Development',
            viewNow: '/apps/codeedit',
            color: '#076AF7',
        },
    },
    {
        name: 'GadgetCompare',
        image: 'https://cdn.complabs.in/img/default.jpg',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: '🚧 In Development',
            viewNow: '/apps/gadget-compare',
            color: '#076AF7',
        },
    },
    {
        name: 'Office',
        image: 'https://cdn.complabs.in/img/default.jpg',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: '🚧 In Development',
            viewNow: '/apps/office',
            color: '#076AF7',
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
    };
}

export function TagOne({ name, image, url }: Props) {
    if (url.categories.length = 1) {
        <Chip label={url.categories[0]} variant="outlined" size="small" />
    }
}

function AppCard({ name, image, url }: Props) {
    return (
        <div className="col col--6 margin-bottom--lg">
            <div className={clsx('card')}>
                <div className={clsx('card__image')}>
                    <Link to={url.viewNow}>
                        <img src={image} alt={name} title={name}></img>
                    </Link>
                </div>
                <div className="card__body">
                    <h3>{name}</h3>
                </div>
                <div className="card__footer">
                    <Highlight color={url.color}>{url.status}</Highlight>
                    <br></br><br></br>
                    <Stack direction="row" spacing={1}>
                    <CssVarsProvider>
                    <Chip size="sm" variant="soft">{url.categories[0]}</Chip>
                    <Chip size="sm" variant="soft">{url.categories[1]}</Chip>
                    <Chip size="sm" variant="soft">{url.categories[2]}</Chip>
                    {/* <Chip size="sm" variant="soft">{url.categories[3]}</Chip>
                    <Chip size="sm" variant="soft">{url.categories[4]}</Chip>
                    <Chip size="sm" variant="soft">{url.categories[5]}</Chip> */}
                    </CssVarsProvider>
                    </Stack>
                    <br></br>
                    <div className="button-group button-group--block">
                        <Link className="button button--primary" to={url.viewNow}>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> View Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function AppCardsRow(): JSX.Element {
    return (
        <div className="row">
            {AppCards.map((apps) => (
                <AppCard key={apps.name} {...apps} />
            ))}
        </div>
    );
}
