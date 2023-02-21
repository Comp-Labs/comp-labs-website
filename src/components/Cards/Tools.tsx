import React from 'react';
import Link from "@docusaurus/Link";

const ToolsList = [
    {
        name: 'DNS Lookup',
        description: 'Best DNS Lookup Tool with Advanced Configuration, Cherry-Picked by Tech Fiddle.',
        url: 'https://digwebinterface.com/',
    },
    {
        name: 'MicroURL',
        description: 'Best DNS Lookup Tool with Advanced Configuration, Cherry-Picked by Tech Fiddle.',
        url: 'https://microurl.complabs.in/',
    },
    {
        name: 'SpeedTest',
        description: 'Free, Fast, and Always Accurate Internet SpeedTest. Powered by OpenSpeedTest.com to give you the best experience, accurate and detailed SpeedTest.',
        url: '/tools/speedtest',
    },
    {
        name: 'Web Tools',
        description: 'Best Web Tools Just for You by WebToolHub! Cherry-Picked by Tech Fiddle.',
        url: 'https://www.webtoolhub.com/',
    },
];

interface Props {
    name: string;
    description: string;
    url: string;
}

function Tool({ name, description, url }: Props) {
    return (
        <div className="col">
            <Link href={url} className="docusaurusLink">
                <div className="card shadow--md">
                    <div className="card__header"><h3>{name}</h3></div>
                    <div className="card__body"><p>{description}</p></div>
                    <div className="card__footer" />
                </div>
            </Link>
        </div>
    );
}

export function Tools(): JSX.Element {
    return (
        <div className="row">
            {ToolsList.map((props, idx) => (
                <Tool key={idx} {...props} />
            ))}
        </div>
    );
}