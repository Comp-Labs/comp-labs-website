

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const macOSGuideSeriesCards = [
    {
        name: 'Install macOS Mojave on Windows using VirtualBox',
        image: 'https://cdn.complabs.in/img/default.jpg',
        url: {
            read: '/blog/posts/install-macos-mojave-on-windows-using-virtualbox',
        },
    },
    {
        name: 'Install macOS Catalina on Windows using VirtualBox',
        image: 'https://cdn.complabs.in/img/default.jpg',
        url: {
            read: '/blog/posts/install-macos-catalina-on-windows-using-virtualbox',
        },
    },
    {
        name: 'Install macOS Big Sur on Windows using VirtualBox',
        image: 'https://cdn.complabs.in/img/default.jpg',
        url: {
            read: '/blog/posts/install-macos-big-sur-on-windows-using-virtualbox',
        },
    },
    {
        name: 'Install macOS Monterey on Windows using VirtualBox',
        image: 'https://cdn.complabs.in/img/default.jpg',
        url: {
            read: '/blog/posts/install-macos-monterey-on-windows-using-virtualbox',
        },
    },
    {
        name: 'Install macOS Ventura on Windows using VirtualBox',
        image: 'https://cdn.complabs.in/img/default.jpg',
        url: {
            read: '/blog/posts/install-macos-ventura-on-windows-using-virtualbox',
        },
    },
];

interface Props {
    name: string;
    image: string;
    url: {
        read?: string;
    };
}

function macOSGuideSeriesCard({ name, image, url }: Props) {
    return (
        <div className="col col--6 margin-bottom--lg">
            <div className={clsx('card')}>
                <div className={clsx('card__image')}>
                    <Link to={url.read}>
                        <img src={image}></img>
                    </Link>
                </div>
                <div className="card__body">
                    <h3>{name}</h3>
                </div>
                <div className="card__footer">
                    <div className="button-group button-group--block">
                        <Link className="button button--primary" to={url.read}>
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
