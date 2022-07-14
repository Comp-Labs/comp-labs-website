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

const macOSGuideSeriesCards = [
    {
        name: 'Install macOS Mojave on Windows using VirtualBox',
        image: require('/img/blog/default.png'),
        url: {
            readNow: '/blog/posts/install-macos-mojave-on-windows-using-virtualbox',
        },
    },
    {
        name: 'Install macOS Catalina on Windows using VirtualBox',
        image: require('/img/blog/default.png'),
        url: {
            readNow: '/blog/posts/install-macos-catalina-on-windows-using-virtualbox',
        },
    },
    {
        name: 'Install macOS Big Sur on Windows using VirtualBox',
        image: require('/img/blog/default.png'),
        url: {
            readNow: '/blog/posts/install-macos-big-sur-on-windows-using-virtualbox',
        },
    },
    {
        name: 'Install macOS Monterey on Windows using VirtualBox',
        image: require('/img/blog/default.png'),
        url: {
            readNow: '/blog/posts/install-macos-monterey-on-windows-using-virtualbox',
        },
    },
    {
        name: 'Install macOS Ventura on Windows using VirtualBox',
        image: require('/img/blog/default.png'),
        url: {
            readNow: '/blog/posts/install-macos-ventura-on-windows-using-virtualbox',
        },
    },
];

interface Props {
    name: string;
    image: string;
    url: {
        readNow?: string;
    };
}

function macOSGuideSeriesCard({ name, image, url }: Props) {
    return (
        <div className="col col--6 margin-bottom--lg">
            <div className={clsx('card')}>
                <div className={clsx('card__image')}>
                    <Link to={url.readNow}>
                        <img src={image}></img>
                    </Link>
                </div>
                <div className="card__body">
                    <h3>{name}</h3>
                </div>
                <div className="card__footer">
                    <div className="button-group button-group--block">
                        <Link className="button button--primary" to={url.readNow}>
                            <i class="fa-brands fa-github"></i> Read Now
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
            {macOSGuideSeriesCards.map((macos) => (
                <macOSGuideSeriesCard key={macos.name} {...macos} />
            ))}
        </div>
    );
}
