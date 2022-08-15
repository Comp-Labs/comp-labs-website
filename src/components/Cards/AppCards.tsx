/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Chip from '@mui/joy/Chip';
import Stack from '@mui/material/Stack';
import { CssVarsProvider } from '@mui/joy/styles';

const AppCards = [
    {
        name: 'Comp Labs Meet',
        image: '/img/apps/comp-labs-meet/icon.png',
        url: {
            categories: ['Productivity', 'Social', 'Collaboration'],
            status: '✅ Available',
            viewNow: '/apps/comp-labs-meet',
        },
    },
    {
        name: 'Google Docs',
        image: '/img/apps/google-docs.png',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: '✅ Available',
            viewNow: '/apps/google-docs',
        },
    },
    {
        name: 'Jira Server',
        image: '/img/apps/jira-server.png',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: '✅ Available',
            viewNow: '/apps/jira-server',
        },
    },
    {
        name: 'Apple Store',
        image: '/img/apps/applestore.webp',
        url: {
            categories: ['Shopping', 'Blank', 'Blank'],
            status: 'Planned',
            viewNow: '/apps/apple-store',
        },
    },
    {
        name: 'CloudConsole',
        image: '/img/blog/default.jpg',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: '🚧 In Development',
            viewNow: '/apps/cloud-console',
        },
    },
    {
        name: 'CodeEdit',
        image: '/img/blog/default.jpg',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: '🚧 In Development',
            viewNow: '/apps/codeedit',
        },
    },
    {
        name: 'GadgetCompare',
        image: '/img/blog/default.jpg',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: '🚧 In Development',
            viewNow: '/apps/gadget-compare',
        },
    },
    {
        name: 'Office',
        image: '/img/blog/default.jpg',
        url: {
            categories: ['Productivity', 'Blank', 'Blank'],
            status: '🚧 In Development',
            viewNow: '/apps/office',
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
                    <Link to={url.page}>
                        <img src={image}></img>
                    </Link>
                </div>
                <div className="card__body">
                    <h3>{name}</h3>
                </div>
                <div className="card__footer">
                    <p>{url.status}</p>
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
