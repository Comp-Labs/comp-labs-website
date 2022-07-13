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
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const macOSGuideSeriesCards = [
    {
        name: 'Comp Labs Meet',
        image: require('@site/static/img/apps/comp-labs-meet/icon.png'),
        url: {
            categories: ['Productivity', 'Social', 'Collaboration'],
            status: '✅ Available',
            viewNow: '/apps/comp-labs-meet',
        },
    },
    {
        name: 'Google Docs',
        image: require('@site/static/img/apps/google-docs.png'),
        url: {
            categories: ['Productivity'],
            status: '✅ Available',
            viewNow: '/apps/google-docs',
        },
    },
    {
        name: 'Jira Server',
        image: require('@site/static/img/apps/jira-server.png'),
        url: {
            categories: ['Productivity'],
            status: '✅ Available',
            viewNow: '/apps/jira-server',
        },
    },
    {
        name: 'Apple Store',
        image: require('@site/static/img/apps/applestore.webp'),
        url: {
            categories: ['Shopping'],
            status: 'Planned',
            viewNow: '/apps/apple-store',
        },
    },
    {
        name: 'CloudConsole',
        image: require('@site/static/img/apps/complabs.png'),
        url: {
            categories: ['Productivity'],
            status: '🚧 In Development',
            viewNow: '/apps/cloud-console',
        },
    },
    {
        name: 'GadgetCompare',
        image: require('@site/static/img/apps/complabs.png'),
        url: {
            categories: ['Productivity'],
            status: '🚧 In Development',
            viewNow: '/apps/gadget-compare',
        },
    },
    {
        name: 'CodeEdit',
        image: require('@site/static/img/apps/complabs.png'),
        url: {
            categories: ['Productivity'],
            status: '🚧 In Development',
            viewNow: '/apps/codeedit',
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

function macOSGuideSeriesCard({ name, image, url }: Props) {
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
                        <Chip label={url.categories[0]} variant="outlined" size="small" />
                        <Chip label={url.categories[1]} variant="outlined" size="small" />
                        <Chip label={url.categories[2]} variant="outlined" size="small" />
                        <Chip label={url.categories[3]} variant="outlined" size="small" />
                    </Stack>
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

export function macOSGuideSeriesCardsRow(): JSX.Element {
    return (
        <div className="row">
            {macOSGuideSeries.map((crafts) => (
                <macOSGuideSeriesCard key={crafts.name} {...crafts} />
            ))}
        </div>
    );
}
