import React from 'react';
import Link from "@docusaurus/Link";

const SolutionsList = [
    {
        name: 'App Publisher for Google Play',
        description: 'Best Solution to Publish Your AndroidOS and ChromeOS Apps to the Google Play Console for Free.',
        url: '/solutions/google-play-developers',
    },
    {
        name: 'Enterprise Mail Solution',
        description: 'Best SaaS Solution Which Empowers Your Personal, Enterprise, and Enterprise Mail Anywhere, No Matter Where You Are.',
        url: '/solutions/enterprise-mail-solution',
    },
    {
        name: 'Enterprise Meeting Solution',
        description: 'Best SaaS Solution Which Empowers Your Personal, Enterprise, and Enterprise Meetings Anywhere, No Matter Where You Are.',
        url: '/solutions/enterprise-meeting-solution',
    },
    {
        name: 'Anonymous VPN',
        description: "Introducing our Free, Fast, Anonymous VPN Powered by the SoftEther Open Source VPN Project and made by Tech Fiddle, hosted in it's own servers.",
        url: '/solutions/vpn',
    },
];

interface Props {
    name: string;
    description: string;
    url: string;
}

function Solution({ name, description, url }: Props) {
    return (
        <div className="col">
            <Link href={url} className="docusaurusLink">
                <div className="card shadow--md">
                    <div className="card__header"><h3>{name}</h3></div>
                    <div className="card__body"><p>{description}</p></div>
                </div>
            </Link>
        </div>
    );
}

export function Solutions(): JSX.Element {
    return (
        <div className="row">
            {SolutionsList.map((props, idx) => (
                <Solution key={idx} {...props} />
            ))}
        </div>
    );
}